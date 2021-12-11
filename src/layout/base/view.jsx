import React, { useCallback, useEffect } from "react";
import { style } from "./style";
import { Layout } from 'antd'
import { Header } from "../../components/app/header";
import './style.scss';
import { authActions } from '../../store/auth/auth';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const View = React.memo(({ children }) => {

   const currentYear = React.useMemo(() => new Date().getFullYear(), []);
   const dispatch = useDispatch();
   const history = useNavigate();

   useEffect(() => {
      const user = localStorage.getItem('auth');
      if (user) {
         const seedKey = JSON.parse(user).profileSeedKey;
         dispatch(authActions.fetchPersonalData(seedKey));
         dispatch(authActions.setAuthorized(true));
      }
   }, [dispatch])

   const checkAuthorization = useCallback(() => {
      const user = localStorage.getItem('auth');

      if (!user) {

         history('/');
         dispatch(authActions.setAuthorized(false));
         return;
      }
      const seedKey = JSON.parse(user).profileSeedKey;

      dispatch(authActions.fetchPersonalData(seedKey));
      dispatch(authActions.setAuthorized(true));
      history('/profile');

   }, [dispatch, history])

   useEffect(() => {
      window.addEventListener('storage', checkAuthorization);

      return () => {
         window.removeEventListener('storage', checkAuthorization);
      }
   }, [checkAuthorization])

   return (
      <Layout className={'layout layout--base'}>
         <Layout.Header className={'layout__header'}><Header /></Layout.Header>
         <Layout.Content className={'layout__content'} style={style.content}>{children}</Layout.Content>
         <Layout.Footer className={'layout__footer'}>{currentYear} &copy; Wezom React-Redux Test</Layout.Footer>
      </Layout>
   );
});

export { View };