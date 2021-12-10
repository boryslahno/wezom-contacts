
export const filterContacts = (contacts, searchTerm, gender, filterNationalities, isCreator) => {

   let resultFilterContacts = [];
   const filterGender = !gender ? ['male', 'female', 'indeterminate'] : [gender];

   if (isCreator) {
      return [];
   }

   resultFilterContacts = contacts.filter(({ fullName, gender, nationality }) =>
      fullName.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      filterGender.includes(gender) &&
      (filterNationalities.length ? filterNationalities.includes(nationality.name) : true)

   );

   return resultFilterContacts;
}