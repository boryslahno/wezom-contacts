import { HomePage, ProfilePage, ContactsPage } from "../pages";

export const routes = Object.freeze({
   'home': {
      path: '/',
      page: HomePage,
      name: 'Home',
      exact: true,
   },
   'profile': {
      path: '/profile',
      page: ProfilePage,
      name: 'Profile',
   },
   'contacts': {
      path: '/contacts',
      page: ContactsPage,
      name: 'Contacts',
   },
});
