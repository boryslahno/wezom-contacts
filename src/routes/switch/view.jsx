import React from "react";
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import { LayoutBase } from '../../layout';

const View = () => {

   return (
      <LayoutBase>
         <Switch >
            {
               Object.keys(routes).map((key) => {
                  const { page: Page, ...route } = routes[key];

                  return <Route
                     key={route.path}
                     {...route}
                  ><Page /></Route>
               })
            }
         </Switch>
      </LayoutBase>
   )
}

export { View };