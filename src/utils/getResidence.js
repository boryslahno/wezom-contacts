
export const getResidence = location =>
   [`/${location.country}/`,
   `${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`]
