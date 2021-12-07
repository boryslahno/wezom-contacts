
export const getGendersCount = contacts =>
   contacts.reduce((genderCounts, contact) =>
      ({ ...genderCounts, [contact.gender]: genderCounts[contact.gender] + 1 }),
      { male: 0, female: 0, indeterminate: 0 })