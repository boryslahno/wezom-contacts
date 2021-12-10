
export const determineTheMajority = genderCounts => {

   const maxGenderCount = Math.max(...Object.values(genderCounts));

   if (maxGenderCount === 0) return 'No data';

   switch (maxGenderCount) {
      case genderCounts.male:
         return 'Men predominate';
      case genderCounts.female:
         return 'Women predominate';
      default:
         return 'Indeterminate predominate';
   }
}