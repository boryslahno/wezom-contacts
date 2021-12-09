
export const getDayOfWeek = numberOfTheDay => {
   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

   return days[numberOfTheDay - 1];
}