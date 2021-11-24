import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { mapStyles } from '../../utils/constants';
import { getUserCoordinates } from '../../utils/helpers';

import { getLocations } from '../../services/data.service';

// colors
import { red } from 'tailwindcss/colors';

// map marker baed on type
const MapMarker = ({ placeType }) => (
  <img
    src={`https://joaan.me/assets/images/icons/${
      placeType ? placeType + '-' : ''
    }marker.svg`}
    alt='map marker'
  />
);

class HomeMap extends Component {
  // default cooreinates if location error
  defaultCoords = {
    lat: 24.689304020375307,
    lng: 46.68443194223434,
  };

  defaultZoom = 16;

  // satate
  state = {
    coords: {
      lat: 24.689304020375307,
      lng: 46.68443194223434,
    },

    // all restaurants & cafes
    locations: [],
    map: null,
    zoom: 16,
  };

  async componentDidMount() {
    // get user coords
    const { lat, lng } = await getUserCoordinates();
    this.setState({ coords: { lat, lng } });

    // get data from getData funcion
    this.getData({ lat, lng });
  }

  // map clicked event to change map marker location
  mapClicked(ev) {
    const { lat, lng } = ev;
    this.setState({ coords: { lat, lng } });

    // get data based on marker location
    this.getData({ lat, lng });
  }

  // to get data based on coords
  getData = async ({ lat, lng }) => {
    const locations = await getLocations({
      lat: lat?.toString(),
      lng: lng?.toString(),
      userId: 1,
      limit: 20,
      offset: 0,
    });

    // send locations to parent to pass to other components
    this.props.onRestaurants(locations?.data?.result);

    this.setState({ locations: locations?.data?.result });

    const { data: moreLocations } = await getLocations({
      lat: lat?.toString(),
      lng: lng?.toString(),
      userId: 1,
      limit: 20,
      offset: 20,
    });

    this.setState((prevSate) => ({
      locations: prevSate?.locations.concat(moreLocations?.result),
    }));
  };

  async recenterToUserLocation() {
    const { lat, lng } = await getUserCoordinates();
    this.setState({ zoom: this.defaultZoom });
    this.recenterMap({ lat, lng });
  }

  // recenter map to location
  recenterMap({ lat, lng, zoom = this.defaultZoom }) {
    this.state?.map?.setZoom(zoom);
    this.state?.map?.panTo({ lat, lng });
  }
  render() {
    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
      this.setState({ map });
    };
    return (
      <div className='w-full relative' style={{ height: '80vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GGL_MAPS_KEY,
            language: 'ar-SA',
          }}
          defaultCenter={this.defaultCoords}
          defaultZoom={this.defaultZoom}
          zoom={this.state?.zoom}
          center={this.state.coords}
          options={{
            streetViewControl: false,
            styles: mapStyles,
            zoomControl: false,
          }}
          onClick={(ev) => this.mapClicked(ev)}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          onChildClick={(w) => {
            if (!w) return;
            const [lat, lng] = w?.split('+');
            this.recenterMap({
              lat: +lat,
              lng: +lng,
            });
          }}
        >
          <MapMarker
            lat={this.state.coords?.lat}
            lng={this.state.coords?.lng}
          />

          {this.state?.locations?.map(({ location }) => (
            <MapMarker
              key={`${location?.lat}+${location?.lng}+${location?.id}`}
              lat={location?.lat}
              lng={location?.lng}
              placeType={location?.type === 'cafe' ? 'cafee' : 'location'}
            />
          ))}
        </GoogleMapReact>

        <div
          className='current__location absolute cursor-pointer left-5 bottom-28 rounded-badge'
          onClick={() => this.recenterToUserLocation()}
        >
          <span className='current__location__icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='rounded-badge'
              height='24px'
              width='24px'
              viewBox='0 0 24 24'
              fill='#fff'
            >
              <path d='M0 0h24v24H0z' fill={red[600]} />
              <path d='M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z' />
            </svg>
          </span>
        </div>
      </div>
    );
  }
}

export default HomeMap;
