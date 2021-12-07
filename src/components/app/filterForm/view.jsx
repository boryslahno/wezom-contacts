import React from "react";
import { Form, Row, Col, Input, Select, Checkbox, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { NATIONALITIES } from '../../../constants/nationalities';

const View = () => {

   const nationalities = Object.values(NATIONALITIES);

   return (
      <Form>
         <div className={'box'}>
            <Row >
               <Col>
                  <Input.Search placeholder={'Search by full name'} size="large" style={{ 'width': '530px' }} />
                  <Select placeholder={'Gender'} size={'large'} style={{ 'width': '170px' }}>
                     <Select.Option value={'male'}>
                        Male
                     </Select.Option>
                     <Select.Option value={'female'}>
                        Female
                     </Select.Option>
                     <Select.Option value={'ideterminate'}>
                        Ideterminate
                     </Select.Option>
                  </Select>
                  <Select
                     placeholder={'Nationality'}
                     size={'large'}
                     mode={'multiple'}
                     style={{ 'width': '250px' }}
                     maxTagCount={2}
                  >
                     {nationalities.map(({ name }) =>
                        <Select.Option value={name}>
                           {name}
                        </Select.Option>
                     )}
                  </Select>
                  <Checkbox>
                     I am creator
                  </Checkbox>
               </Col>
               <Col>
                  <Button type={'link'} icon={<CloseOutlined />}>
                     Clear
                  </Button>
               </Col>
            </Row>
         </div>
      </Form>
   );
}

export { View };