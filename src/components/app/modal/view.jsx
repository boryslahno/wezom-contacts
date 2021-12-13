import React from "react";
import { Modal, Button, Form, Input, Row, Col } from 'antd';
import { CloseOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../../../store/auth/auth';
import { passwordValidate } from '../../../utils/passwordValidate';

const View = () => {

   const history = useHistory();
   const dispatch = useDispatch();
   const isModalOpen = useSelector(state => state.auth.isModalOpen);

   const hideModal = () => dispatch(authActions.closeModal());

   const handleSubmit = formData => {
      localStorage.setItem('auth', JSON.stringify({ profileSeedKey: formData.email }));
      dispatch(authActions.setAuthorized(true));
      dispatch(authActions.closeModal());
      dispatch(authActions.fetchPersonalData(formData.email));
      history.push('/profile');
   }

   return (
      <Modal
         title='Sign In'
         visible={isModalOpen}
         centered={true}
         closable={false}
         onCancel={hideModal}
         footer={null}
      >
         <Form onFinish={handleSubmit}>
            <Form.Item name='email'
               rules={[
                  { type: 'email', message: 'The email format is invalid.' },
                  { required: true, message: 'The email field is required.' }
               ]}
               hasFeedback
            >
               <Input placeholder='Email' size='large' prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name='password'
               rules={[
                  { required: true, message: 'The password field is required.' },
                  { validator: (_, password) => passwordValidate(password), }
               ]}
               hasFeedback
            >
               <Input.Password
                  placeholder='Password'
                  size='large'
                  prefix={<LockOutlined />}

               />
            </Form.Item>
            <Form.Item className='_m-none'>
               <Row>
                  <Col flex="1 1 auto">
                     <Button
                        type="primary"
                        htmlType='submit'
                        size='large'
                        className='_full_width'
                     > Sign in</Button>
                  </Col>
                  <Col>
                     <Button
                        type='link'
                        htmlType='button'
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