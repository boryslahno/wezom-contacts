import React from "react";
import { Dropdown, Spin, Row, Col, Typography, Avatar } from 'antd';
import { LoadingOutlined, DownOutlined } from '@ant-design/icons';
import { Menu } from '../dropdownMenu';
import './style.scss';
import { useSelector } from "react-redux";

const View = () => {

   const isLoading = useSelector(state => state.auth.isLoading);
   const { fullName, avatar } = useSelector(state => state.auth.personalInformation)

   return (
      <Dropdown overlay={<Menu />} className='dropdown'>
         {isLoading
            ?
            <Spin indicator={<LoadingOutlined spin className='dropdown__spin' />} />
            :
            <Row align='middle' gutter={8} className='_cursor_pointer'>
               <Col>
                  <Typography.Text type='secondary' className='dropdown__title'>
                     Hello! {fullName.fullName} <DownOutlined />
                  </Typography.Text>
               </Col>
               <Col>
                  <Avatar src={avatar.url} size={48} />
               </Col>
            </Row>
         }
      </Dropdown>
   );
}

export { View };