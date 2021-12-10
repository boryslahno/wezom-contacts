import React from "react";
import { Logo } from '../logo';
import { Row, Col, Button, Dropdown, Menu, Typography, Avatar, Spin, notification } from 'antd';
import { LoginOutlined, DownOutlined, UserOutlined, LogoutOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavBar } from '../navbar';
import { Modal } from '../modal';
import './style.scss';
import { NavLink } from "react-router-dom";
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

   const menu = (
      <Menu style={{ 'width': '225px' }}>
         <Menu.Item key={'profile'}>
            <Typography.Text>
               <NavLink to={'/profile'}>
                  <UserOutlined />
                  Profile
               </NavLink>
            </Typography.Text>
         </Menu.Item>
         <Menu.Divider className={'_m-none'} />
         <Menu.Item key={'logout'} onClick={handleLogOut}>
            <LogoutOutlined />
            Logout
         </Menu.Item>
      </Menu>)

   //Fix
   const button = isAuthorized ?
      (<Dropdown overlay={menu} className={'dropdown'}>
         <Row align={'middle'} gutter={8} className={'_cursor_pointer'}>
            <Col>
               <Typography.Text type={'secondary'} className={'dropdown__title'}>
                  Hello! {fullName?.fullName} <DownOutlined />
               </Typography.Text>
            </Col>
            <Col>
               <Avatar src={avatar?.url} size={48} />
            </Col>
         </Row>
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
         <Row type={'flex'} gutter={36} align={'middle'}>
            <Col>
               <Logo />
            </Col>
            <Col className={'_flex-grow'}>
               <Row type={'flex'} gutter={16} align={'middle'}>
                  <Col className={'_flex-grow'}>
                     <NavBar />
                  </Col>
                  <Col>
                     {isLoading ?
                        <Spin indicator={<LoadingOutlined spin style={{ 'color': 'gray' }} />} /> :
                        button}
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   );
}

export { View };