import { getDayOfWeek } from './getDayOfWeek';
import { convertTime } from './convertTime';

export const getBirthDay = date => {

   const birthDate = date.match(/\d+-\d+-\d+/g)[0];
   const time = date.match(/\d+:\d+:\d+/g)[0];

   const [year, months, day] = birthDate.split('-');
   const dayOfWeek = getDayOfWeek(new Date(birthDate).getDay())

   const convertedTime = convertTime(time.split(':'));

   return `${dayOfWeek}, ${+months}/${+day}/${year}, ${convertedTime}`;
}