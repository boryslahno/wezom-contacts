import { HomePage, ProfilePage, ContactsPage, ContactView, PageNotFound } from "../pages";

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
      exact: true,
   },
   'viewContact': {
      path: '/contacts/:id',
      page: ContactView,
      name: 'ContactView',
   },
   pageNotFound: {
      path: '/*',
      page: PageNotFound,
      name: 'PageNotFound',
   }
});
