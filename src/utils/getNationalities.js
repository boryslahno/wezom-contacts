import { NATIONALITIES } from '../constants/nationalities';

export const getNationality = abbreviation =>
   [NATIONALITIES[abbreviation].name, NATIONALITIES[abbreviation].color]