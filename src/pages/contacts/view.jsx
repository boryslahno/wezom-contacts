import React, { useEffect } from "react";
import { Row, Col, Typography, Tooltip, Button } from 'antd';
import { ReloadOutlined, UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { TableView } from '../../components';

const View = ({ contacts, fetchContacts }) => {

   useEffect(() => {
      fetchContacts();
   }, [fetchContacts])

   return (
      <div>
         <Row justify={'space-between'}>
            <Col>
               <Typography.Title level={2}>Contacts</Typography.Title>
            </Col>
            <Col>
               <Tooltip title={'Update data'}>
                  <Button
                     type="dashed"
                     shape={'circle'}
                     icon={<ReloadOutlined />}
                     style={{ 'marginRight': '10px' }}
                  />
               </Tooltip>
               <Tooltip title={'Tiled view'}>
                  <Button icon={<AppstoreOutlined />} />
               </Tooltip>
               <Tooltip title={'Tabular view'}>
                  <Button type={'primary'} icon={<UnorderedListOutlined />} />
               </Tooltip>
            </Col>
         </Row>
         <Row>
            <TableView contacts={contacts} />
         </Row>
      </div>
   );
}

export { View };
