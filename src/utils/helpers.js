/**
 * @description get user location coordinates
 * @returns promise of user current location
 */
export const getUserCoordinates = async () => {
  return new Promise((resolve, reject) => {
    navigator?.geolocation?.getCurrentPosition(
      ({ coords }) =>
        resolve({
          lng: coords.longitude,
          lat: coords.latitude,
        }),
      (error) => reject(error),
      { maximumAge: 60000, timeout: 10000, enableHighAccuracy: true }
    );
  });
};

/**
 * @description create valide base64 string image
 * @param imageText string
 * @returns valid base64 image
 */
export const createValideImage = (imageText) => {
  return !imageText?.includes('data:image/') && imageText?.length > 50
    ? 'data:image/png;base64,' + imageText
    : imageText;
};
