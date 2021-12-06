import React from "react";
import { Row, Col, Image, Typography, Divider, Tag } from 'antd';
import { getFullName } from "../../utils/getFullName";
import { getResidence } from "../../utils/getResidence";
import { getNationality } from '../../utils/getNationalities';
import { InformationString } from '../../components/app/infoLine'

const View = ({ profileData }) => {

   const fullName = getFullName(profileData.name);
   const residence = getResidence(profileData.location);
   const [countryName, tagColor] = getNationality(profileData.nat);

   return (
      <div className={'page page--profile'}>
         <Row justify={'center'}>
            <Col span={24} className={'_text-center'}>
               <Typography.Title level={2}>Profile</Typography.Title>
            </Col>
            <Col>
               <Row gutter={[28, { md: 28 }]} justify={'center'}>
                  <Col lg={11}>
                     <Image
                        width={250}
                        src={profileData.picture.large}
                     />
                  </Col>
                  <Col lg={13}>

                     <Typography.Title level={3}>
                        {fullName}
                        <Typography.Text type={'secondary'} className={'age'}>
                           {` (${profileData.dob.age} years)`}
                        </Typography.Text>
                     </Typography.Title>

                     <Divider dashed className={'_m-bottom_15'} />

                     <InformationString information={profileData.email} className={'_m-bottom_10'}>
                        <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                     </InformationString>

                     <InformationString information={profileData.phone} className={'_m-bottom_10'}>
                        <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
                     </InformationString>

                     <InformationString information={residence.join('')} className={'_m-bottom_15'}>
                        <Typography.Text>
                           <strong>{residence[0]}</strong>
                           <br />
                           {residence[1]}
                        </Typography.Text>
                     </InformationString>

                     <Divider dashed className={'_m-bottom_15'} />
                     <Tag color={tagColor}>{countryName}</Tag>
                  </Col>
               </Row>
            </Col>
         </Row>
      </div>
   );
}

export { View };