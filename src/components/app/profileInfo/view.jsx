import React from "react";
import { Typography, Divider, Tag } from 'antd';
import { InformationString } from '../infoLine';

const View = ({ profileData }) => {

   return (
      <>
         <Divider dashed className='_m-bottom_15' />

         <InformationString information={profileData.email} className='_m-bottom_10'>
            <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
         </InformationString>

         <InformationString information={profileData.phone} className='_m-bottom_10'>
            <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
         </InformationString>

         <InformationString
            information={profileData.location.country + profileData.location.address}
            className='_m-bottom_15'>
            <Typography.Text>
               <strong>{profileData.location.country}</strong>
               <br />
               {profileData.location.address}
            </Typography.Text>
         </InformationString>

         <Divider dashed className='_m-bottom_15' />
         <Tag color={profileData.nationality.tagColor}>{profileData.nationality.name}</Tag>
      </>
   );
}

export { View };