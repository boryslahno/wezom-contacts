
export const determineTheMajority = genderCounts => {

   const maxGenderCount = Math.max(...Object.values(genderCounts));

   switch (maxGenderCount) {
      case genderCounts.male:
         return 'Women predominate';
      case genderCounts.female:
         return 'Men predominate';
      default:
         return 'Indeterminate predominate';
   }
}