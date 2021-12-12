import React from "react";
import { Row, Col, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/page.scss';

const View = () => {

   const history = useNavigate();

   const handleGoToHome = () => history('/');

   return (
      <div className='page page--notFound'>
         <Row className='_text-center' gutter={[0, 20]}>
            <Col span={24}>
               <Typography.Title level={1} className='notFoundTitle'>
                  404
               </Typography.Title>
            </Col>
            <Col span={24}>
               <Typography.Title level={3}>
                  Requested page not found!
               </Typography.Title>
            </Col>
            <Col span={24}>
               <Button
                  type='primary'
                  size='large'
                  onClick={handleGoToHome}
               >Back to home</Button>
            </Col>
         </Row>
      </div>
   );
}

export { View };