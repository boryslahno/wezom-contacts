
export const convertTime = timeArray => {
   const convertedTime = timeArray;

   if (convertedTime[0] >= 0 && convertedTime[0] < 12) {

      convertedTime[0] = +convertedTime[0];

      return `${convertedTime.join(':')} AM`;
   }

   convertedTime[0] = +convertedTime[0] - 12;

   return `${convertedTime.join(':')} PM`;
}