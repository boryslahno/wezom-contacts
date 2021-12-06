import React, { useEffect } from "react";
import { Logo } from '../logo';
import { Row, Col, Button, Dropdown, Menu, Typography, Avatar } from 'antd';
import { LoginOutlined, DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { NavBar } from '../navbar';
import { Modal } from '../modal';
import './style.scss';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getFullName } from "../../../utils/getFullName";

const View = ({ openModal, setAuthorized, fetchPersonalData, isAuth, name, avatar }) => {

   const history = useNavigate();

   const showModal = () => openModal()
   //const name = getFullName(name);

   useEffect(() => {
      if (localStorage.getItem('auth')) {
         setAuthorized(true);
         fetchPersonalData();
      }
   }, [setAuthorized, fetchPersonalData])

   const handleLogOut = () => {
      localStorage.removeItem('auth');
      setAuthorized(false);
      history('/');
   }

   const menu = (
      <Menu>
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

   const button = isAuth ?
      (<Dropdown overlay={menu} >
         <Row align={'middle'} gutter={8} className={'_cursor_pointer'}>
            <Col>
               <Typography.Text className={'dropdown'}>Hello! Ms. Lola Smith <DownOutlined /></Typography.Text>
            </Col>
            <Col>
               <Avatar src={avatar} size={48} />
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
               <Row type={'flex'} align={'middle'}>
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