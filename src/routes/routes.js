import { HomePage, ProfilePage, ContactsPage } from "../pages";

export const publicRoutes = {
   'home': {
      path: '/',
      page: HomePage,
      name: 'Home',
      link() {
         return this.path;
      },
      exact: true,
   }
};
export const privateRoutes = {
   'home': {
      path: '/',
      page: HomePage,
      name: 'Home',
      link() {
         return this.path;
      },
      exact: true,
   },
   'profile': {
      path: '/profile',
      page: ProfilePage,
      name: 'Profile',
      link() {
         return this.path;
      }
   },
   'contacts': {
      path: '/contacts',
      page: ContactsPage,
      name: 'Contacts',
      link() {
         return this.path;
      }
   },
};
