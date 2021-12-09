import React, { useMemo } from "react";
import './style.scss';
import { publicRoutes, privateRoutes } from '../../../routes/routes';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () => {

   const isAuth = useSelector(state => state.auth.isAuthorized);

   const publicRout = useMemo(() => [
      { name: 'Home', key: 'home' },
   ], [])
   const privateRout = useMemo(() => [
      { name: 'Home', key: 'home' },
      { name: 'Contacts', key: 'contacts' }
   ], [])

   return (
      <div className={'navbar'}>
         <ul className={'navbar__list'}>
            {isAuth ?
               privateRout.map(route =>
                  <li key={route.key} className={'navbar__item'}>
                     <NavLink to={privateRoutes[route.key].link()} className={'navbar__link'}>
                        {route.name}
                     </NavLink>
                  </li>
               )
               :
               publicRout.map(route =>
                  <li key={route.key} className={'navbar__item'}>
                     <NavLink to={publicRoutes[route.key].link()} className={'navbar__link'}>
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