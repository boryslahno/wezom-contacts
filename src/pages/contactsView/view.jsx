import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Row, Col, Typography, Spin, Button, Image } from 'antd';
import { ProfileInformation } from '../../components';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { useNavigate, Navigate } from 'react-router-dom';
import { contactsActions } from '../../store/contacts/contacts';

const View = () => {

   const { contacts, isLoading } = useSelector(state => state.contacts);
   const isAuthorized = localStorage.getItem('auth');
   const { id } = useParams();
   const history = useNavigate();
   const contact = contacts[id - 1];
   const dispatch = useDispatch();

   const handleClickBack = () => {
      history('/contacts');
   }

   useEffect(() => {
      dispatch(contactsActions.fetchContacts());
   }, [dispatch])

   if (!isAuthorized) {
      return <Navigate to={'/not-found'} />
   }


   return (
      <div className={'page page--contactView'}>
         <Row justify={'center'} gutter={[0, 20]}>
            <Col span={24} className={'_text-center'}>
               <Typography.Title level={2} className={'_m-none'}>Contact View</Typography.Title>
            </Col>
            <Col>
               <Row gutter={[0, { sm: 28, xs: 28 }]} className={'contact-row'} justify={'center'}>
                  {isLoading ?
                     <Col><Spin size={'large'} /></Col> :
                     <>
                        <Col lg={11} className={'contact-column'}>
                           <Image
                              width={250}
                              src={contact.avatar.url}
                           />
                        </Col>
                        <Col lg={13} className={'contact-column'}>
                           <Typography.Title level={3}>
                              {contact.fullName.fullName}
                              <Typography.Text type={'secondary'} className={'age'}>
                                 {` (${contact.birthday.age})`}
                              </Typography.Text>
                           </Typography.Title>
                           <ProfileInformation profileData={contact} />
                        </Col>
                     </>
                  }
               </Row>
            </Col>
            <Col span={24} className={'_text-center'}>
               <Button
                  type={'primary'}
                  icon={<DoubleLeftOutlined />}
                  onClick={handleClickBack}
               >
                  Back
               </Button>
            </Col>
         </Row>
      </div>
   );
}

export { View };