import { getFullName } from './getFullName';
import { getResidence } from './getResidence';
import { getNationality } from './getNationalities';

const modifyDataForView = contacts =>
   contacts.map((contact, index) => {
      return {
         key: contact.location.postcode.toString() + index,
         avatar: { url: contact.picture.large, userId: index + 1 },
         fullName: { fullName: getFullName(contact.name), userId: index + 1 },
         birthday: ['Friday, 9/9/1977, 7:45:17 AM', '44 years'],
         email: contact.email,
         phone: contact.phone,
         location: getResidence(contact.location),
         nationality: getNationality(contact.nat),
      }
   })

export { modifyDataForView };