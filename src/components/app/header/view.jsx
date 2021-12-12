import React from "react";
import { Logo } from '../logo';
import { Row, Col, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { NavBar } from '../navbar';
import { Modal } from '../modal';
import './style.scss';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../../store/auth/auth';
import { DropDown } from '../dropdown';

const View = () => {

   const dispatch = useDispatch();
   const { isAuthorized } = useSelector(state => state.auth);

   const showModal = () => dispatch(authActions.openModal());

   return (
      <div className='header'>
         <Modal />
         <Row align='middle'>
            <Col className='header__logo'>
               <Logo />
            </Col>
            <Col className='_flex-grow'>
               <Row align='middle'>
                  <Col className='_flex-grow'>
                     <NavBar />
                  </Col>
                  <Col>
                     {isAuthorized ?
                        <DropDown />
                        :
                        <Button
                           type='link'
                           htmlType='button'
                           icon={<LoginOutlined />}
                           onClick={showModal}
                        >
                           Sign In
                        </Button>}
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   );
}

export { View };