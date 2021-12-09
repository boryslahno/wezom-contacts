import { NATIONALITIES } from '../constants/nationalities';

export const getNationality = abbreviation =>
({
   name: NATIONALITIES[abbreviation].name,
   tagColor: NATIONALITIES[abbreviation].color,
})