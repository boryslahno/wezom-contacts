import React from "react";
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import { LayoutBase } from '../../layout';

const View = () => {

   return (
      <LayoutBase>
         <Routes >
            {
               Object.keys(routes).map((key) => {
                  const { page: Page, ...route } = routes[key];

                  return <Route
                     key={route.path}
                     {...route}
                     element={<Page />}
                  />
               })
            }
         </Routes>
      </LayoutBase>
   )
}

export { View };