
export const getResidence = location =>
({
   country: `/${location.country}/`,
   address: `${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`
})