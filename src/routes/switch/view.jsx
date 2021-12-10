import React from "react";
import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import { LayoutBase } from '../../layout';
import { PageNotFound } from "../../pages";

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
            <Route path={'/*'} element={<PageNotFound />} />
         </Routes>
      </LayoutBase>
   )
}

export { View };