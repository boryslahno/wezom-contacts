import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from '../../../store/auth/auth';
import { Menu, notification } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './style.scss';

const View = () => {

   const history = useNavigate();
   const dispatch = useDispatch();

   const handleLogOut = () => {
      localStorage.removeItem('auth');
      dispatch(authActions.setAuthorized(false));
      history('/');
      notification.success({
         message: 'Successfully logged out'
      })
   }

   const handleGoToProfile = () => {
      history('/profile');
   }

   return (
      <Menu className='menu'>
         <Menu.Item key='profile' onClick={handleGoToProfile}>
            <UserOutlined className='menu__icon' />
            Profile
         </Menu.Item>
         <Menu.Divider className='_m-none' />
         <Menu.Item key='logout' onClick={handleLogOut}>
            <LogoutOutlined className='menu__icon' />
            Logout
         </Menu.Item>
      </Menu>
   );
}

export { View };