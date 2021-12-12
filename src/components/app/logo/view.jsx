import React from "react";
import WezomLogo from '../../../assets/images/wezom-logo.svg';
import './style.scss';
import { NavLink } from 'react-router-dom'

const View = React.memo(() => {

   return (
      <NavLink to='/' exact='true' className={'logo'} activeClassName={'is-active'}>
         <img src={WezomLogo} alt='Wezom' className='logo__img'></img>
      </NavLink>
   );
});

export { View };