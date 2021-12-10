import React, { useEffect } from "react";
import { style } from "./style";
import { Layout } from 'antd'
import { Header } from "../../components/app/header";
import './style.scss';
import { authActions } from '../../store/auth/auth';
import { useDispatch } from "react-redux";

const View = React.memo(({ children }) => {

   const currentYear = React.useMemo(() => new Date().getFullYear(), []);
   const dispatch = useDispatch();

   useEffect(() => {
      const user = localStorage.getItem('auth');
      console.log(user)
      if (user) {
         const seedKey = JSON.parse(user).profileSeedKey;
         dispatch(authActions.setAuthorized(true));
         dispatch(authActions.fetchPersonalData(seedKey));
      }
   }, [dispatch])

   return (
      <Layout className={'layout layout--base'}>
         <Layout.Header className={'layout__header'}><Header /></Layout.Header>
         <Layout.Content className={'layout__content'} style={style.content}>{children}</Layout.Content>
         <Layout.Footer className={'layout__footer'}>{currentYear} &copy; Wezom React-Redux Test</Layout.Footer>
      </Layout>
   );
});

export { View };