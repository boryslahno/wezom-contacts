import { types } from "./types"


export const filterActions = Object.freeze({
   setFilteredContacts(contacts) {
      return {
         type: types.FILTER_SET_CONTACTS,
         payload: contacts
      }
   },
   setSearchTerm(searchTerm) {
      return {
         type: types.FILTER_SET_SEARCH_TERM,
         payload: searchTerm
      }
   },
   setGender(gender) {
      return {
         type: types.FILTER_SET_GENDER,
         payload: gender
      }
   },
   setNationality(nationality) {
      return {
         type: types.FILTER_SET_NATIONALITY,
         payload: nationality
      }
   },
   setIsCreator(isCreator) {
      return {
         type: types.FILTER_SET_ISCREATOR,
         payload: isCreator
      }
   },
   setClear(isClear) {
      return {
         type: types.FILTER_CLEAR,
         payload: isClear
      }
   }
});