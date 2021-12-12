import React from "react";
import { Row, Col, Image, Typography, Spin } from 'antd';
import { ProfileInformation } from '../../components';
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

const View = () => {

   const { personalInformation, isLoading } = useSelector(state => state.auth);
   const isAuthorized = localStorage.getItem('auth');

   if (!isAuthorized) {
      return <Navigate to={'/not-found'} />
   }

   return (
      <div className='page page--profile'>
         <Row justify='center'>
            <Col span={24} className='_text-center'>
               <Typography.Title level={2}>Profile</Typography.Title>
            </Col>
            <Col>
               <Row gutter={[0, { sm: 28, xs: 28 }]} className='profile-row' justify='center'>
                  {isLoading ?
                     <Col><Spin size='large' /></Col> :
                     <>
                        <Col lg={11} className='profile-column'>
                           <Image
                              width={250}
                              src={personalInformation.avatar.url}
                           />
                        </Col>
                        <Col lg={13} className='profile-column'>
                           <Typography.Title level={3} >
                              {personalInformation.fullName.fullName}
                              <Typography.Text type='secondary' className='age'>
                                 {` (${personalInformation.birthday.age})`}
                              </Typography.Text>
                           </Typography.Title>
                           <ProfileInformation profileData={personalInformation} />
                        </Col>
                     </>
                  }
               </Row>
            </Col>
         </Row>
      </div>
   );
}

export { View };