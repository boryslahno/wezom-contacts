import React from "react";
import { style } from "./style";
import { Layout } from 'antd'
import { Header } from "../../components/app/header";
import './style.scss';
import { useLayout } from './hooks/useLayout';

const View = ({ children }) => {

   const currentYear = useLayout();

   return (
      <Layout className={'layout layout--base'}>
         <Layout.Header className={'layout__header'}><Header /></Layout.Header>
         <Layout.Content className={'layout__content'} style={style.content}>{children}</Layout.Content>
         <Layout.Footer className={'layout__footer'}>{currentYear} &copy; Wezom React-Redux Test</Layout.Footer>
      </Layout>
   );
}

export { View };