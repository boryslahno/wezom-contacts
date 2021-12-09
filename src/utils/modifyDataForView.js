import { getFullName } from './getFullName';
import { getResidence } from './getResidence';
import { getNationality } from './getNationalities';
import { getBirthDay } from './getBirthday';

const modifyDataForView = contacts =>
   contacts.map((contact, index) => {
      return {
         key: contact.location.postcode.toString() + index,
         avatar: { url: contact.picture.large, userId: index + 1 },
         fullName: { fullName: getFullName(contact.name), userId: index + 1 },
         birthday: { fullFormat: getBirthDay(contact.dob.date), age: `${contact.dob.age} years` },
         email: contact.email,
         phone: contact.phone,
         location: getResidence(contact.location),
         nationality: getNationality(contact.nat),
         gender: contact.gender,
      }
   })

export { modifyDataForView };