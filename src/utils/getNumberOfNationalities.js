
export const getNumberOfNationalities = (contacts) =>
   contacts.reduce((numberNationalities, contact) => {
      const countryName = contact.location.country.replaceAll('/', '');
      return { ...numberNationalities, [countryName]: numberNationalities[countryName] + 1 || 1 }
   },
      {})