import React from "react";
import { Logo } from '../logo';
import { Row, Col, Button, Dropdown, Menu, Typography, Avatar, Spin, notification } from 'antd';
import { LoginOutlined, DownOutlined, UserOutlined, LogoutOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavBar } from '../navbar';
import { Modal } from '../modal';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../../store/auth/auth';

const View = () => {

   const history = useNavigate();
   const dispatch = useDispatch();
   const { isAuthorized, isLoading } = useSelector(state => state.auth);
   const { fullName, avatar } = useSelector(state => state.auth.personalInformation)

   const showModal = () => dispatch(authActions.openModal());

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

   const menu = (
      <Menu className={'dropdown__menu'}>
         <Menu.Item key={'profile'} onClick={handleGoToProfile}>
            <UserOutlined className={'dropdown__icon'} />
            Profile
         </Menu.Item>
         <Menu.Divider className={'_m-none'} />
         <Menu.Item key={'logout'} onClick={handleLogOut}>
            <LogoutOutlined className={'dropdown__icon'} />
            Logout
         </Menu.Item>
      </Menu>)


   const button = isAuthorized ?
      (<Dropdown overlay={menu} className={'dropdown'}>
         {isLoading ?
            <Spin indicator={<LoadingOutlined spin className={'dropdown__spin'} />} /> :
            <Row align={'middle'} gutter={8} className={'_cursor_pointer'}>
               <Col>
                  <Typography.Text type={'secondary'} className={'dropdown__title'}>
                     Hello! {fullName.fullName} <DownOutlined />
                  </Typography.Text>
               </Col>
               <Col>
                  <Avatar src={avatar.url} size={48} />
               </Col>
            </Row>
         }
      </Dropdown>)
      : (<Button
         type={'link'}
         htmlType={'button'}
         icon={<LoginOutlined />}
         onClick={showModal}
      >
         Sign In
      </Button>)

   return (
      <div className="header">
         <Modal />
         <Row align={'middle'}>
            <Col className={'header__logo'}>
               <Logo />
            </Col>
            <Col className={'_flex-grow'}>
               <Row align={'middle'}>
                  <Col className={'_flex-grow'}>
                     <NavBar />
                  </Col>
                  <Col>
                     {button}
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   );
}

export { View };