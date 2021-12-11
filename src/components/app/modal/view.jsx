import React from "react";
import { Modal, Button, Form, Input, Row, Col } from 'antd';
import { CloseOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../../store/auth/auth';

const View = () => {

   const history = useNavigate();
   const dispatch = useDispatch();
   const isModalOpen = useSelector(state => state.auth.isModalOpen);

   const hideModal = () => dispatch(authActions.closeModal());

   const passwordValidate = password => {
      if (/[^\w.-]/gi.test(password)) {
         return Promise.reject(new Error('The password format is invalid.'));
      }
      if (password && password.length < 8) {
         return Promise.reject(new Error('The password must be at least 8 characters.'));
      }
      return Promise.resolve();
   }

   const handleSubmit = formData => {
      localStorage.setItem('auth', JSON.stringify({ profileSeedKey: formData.email }));
      dispatch(authActions.setAuthorized(true));
      dispatch(authActions.closeModal());
      dispatch(authActions.fetchPersonalData(formData.email));
      history('/profile');
   }

   return (
      <Modal
         title={'Sign In'}
         visible={isModalOpen}
         centered={true}
         closable={false}
         onCancel={hideModal}
         footer={null}
      >
         <Form onFinish={handleSubmit}>
            <Form.Item name={'email'} extra={'Type any valid email'}
               rules={[
                  { type: 'email', message: 'The email format is invalid.' },
                  { required: true, message: 'The email field is required.' }
               ]}
               hasFeedback
            >
               <Input placeholder={'Email'} size={'large'} prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name={'password'} extra={'Type any valid password'}
               rules={[
                  { required: true, message: 'The password field is required.' },
                  { validator: (_, password) => passwordValidate(password), }
               ]}
               hasFeedback
            >
               <Input.Password
                  placeholder={'Password'}
                  size={'large'}
                  prefix={<LockOutlined />}

               />
            </Form.Item>
            <Form.Item className={'_m-none'}>
               <Row>
                  <Col flex="1 1 auto">
                     <Button
                        type="primary"
                        htmlType={'submit'}
                        size={'large'}
                        className={'_full_width'}
                     > Sign in</Button>
                  </Col>
                  <Col>
                     <Button
                        type={'link'}
                        htmlType={'button'}
                        icon={<CloseOutlined />}
                        danger
                        onClick={hideModal}
                     >Cancel</Button>
                  </Col>
               </Row>
            </Form.Item>
         </Form>
      </Modal>
   );
}

export { View };