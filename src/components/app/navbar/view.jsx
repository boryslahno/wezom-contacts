import React, { useMemo } from "react";
import './style.scss';
import { routes } from '../../../routes/routes';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () => {

   const isAuth = useSelector(state => state.auth.isAuthorized);

   const publicRoutes = useMemo(() => [
      { name: 'Home', key: 'home' },
   ], [])

   const privateRoutes = useMemo(() => [
      { name: 'Home', key: 'home' },
      { name: 'Contacts', key: 'contacts' }
   ], [])

   return (
      <div className='navbar'>
         <ul className='navbar__list'>
            {isAuth ?
               privateRoutes.map(route =>
                  <li key={route.key} className='navbar__item'>
                     <NavLink
                        to={routes[route.key].path}
                        className='navbar__link'
                        activeclassname='active'
                        exact>
                        {route.name}
                     </NavLink>
                  </li>
               )
               :
               publicRoutes.map(route =>
                  <li key={route.key} className='navbar__item'>
                     <NavLink
                        to={routes[route.key].path}
                        className='navbar__link'
                        activeclassname='active'
                        exact>
                        {route.name}
                     </NavLink>
                  </li>
               )
            }
         </ul>
      </div>
   );
}

export { View };