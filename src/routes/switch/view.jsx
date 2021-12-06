import React from "react";
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '../routes';
import { privateRoutes } from "../routes";
import { LayoutBase } from '../../layout';
import { PageNotFound } from '../../pages'

const View = ({ isAuth }) => {

   return (
      <Routes >
         {isAuth ?
            Object.keys(privateRoutes).map((key) => {
               const { page: Page, ...route } = privateRoutes[key];

               return <Route
                  key={route.path}
                  {...route}
                  element={<LayoutBase>
                     <Page />
                  </LayoutBase>}
               />
            })
            :
            Object.keys(publicRoutes).map((key) => {
               const { page: Page, ...route } = publicRoutes[key];

               return <Route
                  key={route.path}
                  {...route}
                  element={<LayoutBase>
                     <Page />
                  </LayoutBase>}
               />
            })
         }
         <Route path="/*" element={<LayoutBase>
            <PageNotFound />
         </LayoutBase>} />
      </Routes>
   )
}

export { View };