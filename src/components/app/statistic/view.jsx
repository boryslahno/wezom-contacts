import React from "react";
import { Typography, Row, Col, Statistic, Descriptions } from 'antd';
import { getGendersCount } from '../../../utils/getGendersCount';
import { determineTheMajority } from '../../../utils/determineTheMajority';
import { getNumberOfNationalities } from '../../../utils/getNumberOfNationalities';

const View = ({ contacts }) => {

   const gendersCount = getGendersCount(contacts); /// many renders
   const genderMajority = determineTheMajority(gendersCount);
   const numberOfNationalities = getNumberOfNationalities(contacts);

   return (
      <div className={'box'}>
         <Typography.Title level={3}>
            Statistic
         </Typography.Title>
         <Row gutter={[36, 24]}>
            <Col className={'_flex-noshrink'}>
               <Statistic title="Collection size" value={contacts.length} />
            </Col>
            <Col className={'_flex-noshrink'}>
               <Row>
                  <Col>
                     <Row gutter={16}>
                        <Col>
                           <Statistic title={'Males'} value={gendersCount.male} />
                        </Col>
                        <Col>
                           <Statistic title={'Females'} value={gendersCount.female} />
                        </Col>
                        <Col>
                           <Statistic title={'Indeterminate'} value={gendersCount.indeterminate} />
                        </Col>
                     </Row>
                  </Col>
                  <Col span={24}>
                     <Typography.Text mark>{genderMajority}</Typography.Text>
                  </Col>
               </Row>
            </Col>
            <Col span={24}>
               <Statistic
                  title={'Nationalities'}
                  value={10}
                  formatter={(value) =>
                     <Descriptions column={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
                        {Object.keys(numberOfNationalities).map(key =>
                           <Descriptions.Item label={key} labelStyle={{ 'fontWeight': '700' }}>
                              {numberOfNationalities[key]} contacts
                           </Descriptions.Item>
                        )}
                     </Descriptions>
                  }
               />
            </Col>
         </Row>
      </div>
   );
}

export { View };