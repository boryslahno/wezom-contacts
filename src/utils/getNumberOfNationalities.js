import { NATIONALITIES } from '../constants/nationalities';

export const getNumberOfNationalities = (contacts) =>
   contacts.reduce((numberNationalities, contact) => {
      const countryName = NATIONALITIES[contact.nat].name;
      return { ...numberNationalities, [countryName]: numberNationalities[countryName] + 1 || 1 }
   },
      {})