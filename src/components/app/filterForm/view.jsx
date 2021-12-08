import React from "react";
import { Form, Row, Col, Input, Select, Checkbox, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { NATIONALITIES } from '../../../constants/nationalities';

const View = () => {

   const nationalities = Object.values(NATIONALITIES);

   return (
      <Form>
         <div className={'box'}>
            <Row gutter={[12, 12]} align={'middle'} justify={'center'}>
               <Col className={'_flex-grow'}>
                  <Row gutter={[12, 12]} align={'middle'} justify={'center'}>
                     <Col xs={24} lg={11}>
                        <Input.Search placeholder={'Search by full name'} size="large" />
                     </Col>
                     <Col xs={24} sm={10} lg={4}>
                        <Select placeholder={'Gender'} size={'large'} style={{ 'width': '100%' }}>
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
                     </Col>
                     <Col xs={24} sm={14} lg={5}>
                        <Select
                           placeholder={'Nationality'}
                           size={'large'}
                           mode={'multiple'}
                           maxTagCount={2}
                           style={{ 'width': '100%' }}
                        >
                           {nationalities.map(({ name }) =>
                              <Select.Option value={name}>
                                 {name}
                              </Select.Option>
                           )}
                        </Select>
                     </Col>
                     <Col xs={24} sm={6} lg={4}>
                        <Checkbox>
                           I am creator
                        </Checkbox>
                     </Col>
                  </Row>
               </Col>
               <Col className={'_flex-noshrink'}>
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