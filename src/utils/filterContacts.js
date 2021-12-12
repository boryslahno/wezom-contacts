
export const filterContacts = (contacts, searchTerm, gender, filterNationalities, isCreator) => {

   if (isCreator) {
      return [];
   }

   const filterGender = !gender ? ['male', 'female', 'indeterminate'] : [gender];

   return contacts.filter(({ fullName, gender, nationality }) => {
      const isFullName = fullName.fullName.toLowerCase().includes(searchTerm.toLowerCase());
      const isGender = filterGender.includes(gender);
      const isNationality = filterNationalities.length ? filterNationalities.includes(nationality.name) : true;

      return isFullName && isGender && isNationality;
   });
}