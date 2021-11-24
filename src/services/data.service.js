import axios from 'axios';

const apiUrl = 'https://api.joaan.me';

/**
 *
 * @param {lat, lng} coords
 * @returns restaurants && cafes
 */
export const getLocations = (coords) =>
  axios.post(`${apiUrl}/location/locations`, coords);
