import React, { useRef, useState } from 'react';
import HomeMap from '../components/home/HomeMap';
import JoaanCollections from '../components/home/JoaanCollections';
import LocationsSwiper from '../components/home/LocationsSwiper';

export default function Home() {
  const mapRef = useRef();

  const [restaurants, setRestaurants] = useState([]);

  const handleOnSlideChange = ({ lat, lng }) =>
    mapRef.current.recenterMap({ lat: +lat, lng: +lng, zoom: 18 });

  return (
    <>
      <HomeMap onRestaurants={(data) => setRestaurants(data)} ref={mapRef} />
      <LocationsSwiper data={restaurants} onSlideChange={handleOnSlideChange} />
      <div className='container'>
        <JoaanCollections />
      </div>
    </>
  );
}
