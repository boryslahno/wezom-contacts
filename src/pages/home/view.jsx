import React from "react";
import ReactLogo from "../../assets/images/react-logo.svg";
import '../../assets/styles/page.scss';

const View = () => {

   return (
      <div className={'page page--home'}>
         <img src={ReactLogo} alt="React Logo" className={'react-logo'}></img>
      </div>
   );
};

export { View };
