import { getFullName } from './getFullName';
import { getResidence } from './getResidence';
import { getNationality } from './getNationalities';

const modifyDataForTable = contacts =>
   contacts.map((contact, index) => {
      return {
         key: contact.location.postcode.toString() + index,
         avatar: contact.picture.medium,
         fullName: getFullName(contact.name),
         birthday: ['Friday, 9/9/1977, 7:45:17 AM', '44 years'],
         email: contact.email,
         phone: contact.phone,
         location: getResidence(contact.location),
         nationality: getNationality(contact.nat),
      }
   })

export { modifyDataForTable };