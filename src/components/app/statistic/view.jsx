import React from "react";
import { Typography, Row, Col, Statistic, Descriptions } from 'antd';
import { getGendersCount } from '../../../utils/getGendersCount';
import { determineTheMajority } from '../../../utils/determineTheMajority';
import { getNumberOfNationalities } from '../../../utils/getNumberOfNationalities';
import { useSelector } from "react-redux";

const View = () => {

   const contacts = useSelector(state => state.filter.filteredContacts);

   const gendersCount = getGendersCount(contacts);
   const genderMajority = determineTheMajority(gendersCount);
   const numberOfNationalities = getNumberOfNationalities(contacts);
   const isLoading = useSelector(state => state.contacts.isLoading);

   return (
      <div className={'box'}>
         <Typography.Title level={3}>
            Statistic
         </Typography.Title>
         <Row gutter={[36, 24]}>
            <Col className={'_flex-noshrink'}>
               <Statistic title="Collection size" value={contacts.length} loading={isLoading} />
            </Col>
            <Col className={'_flex-noshrink'}>
               <Row>
                  <Col>
                     <Row gutter={16}>
                        <Col>
                           <Statistic title={'Males'} value={gendersCount.male} loading={isLoading} />
                        </Col>
                        <Col>
                           <Statistic title={'Females'} value={gendersCount.female} loading={isLoading} />
                        </Col>
                        <Col>
                           <Statistic title={'Indeterminate'} value={gendersCount.indeterminate} loading={isLoading} />
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
                  value={numberOfNationalities}
                  loading={isLoading}
                  formatter={nationalities =>
                     <Descriptions column={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
                        {Object.keys(nationalities).map(key =>
                           <Descriptions.Item key={key} label={key} labelStyle={{ 'fontWeight': '700' }}>
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