import React from "react";
import { modifyDataForTable } from '../../../utils/modifyDataForTable';
import { Table, Avatar, Typography, Tag } from 'antd';
import { NavLink } from "react-router-dom";
import { InformationString } from "../infoLine";

const View = ({ contacts }) => {

   const dataSource = modifyDataForTable(contacts);

   const columns = [
      {
         title: 'Avatar',
         dataIndex: 'avatar',
         key: 'avatar',
         render: url => <NavLink to={'/profile'}>
            <Avatar src={url} size={42} />
         </NavLink>,
         fixed: 'left',
         align: 'center',
         width: 80,
      },
      {
         title: 'Full Name',
         dataIndex: 'fullName',
         key: 'fullName',
         render: fullName => <NavLink to={'/profile'}>{fullName}</NavLink>,
         sorter: (firstContact, secondContact) =>
            firstContact.fullName.localeCompare(secondContact.FullName),
         align: 'left',
      },
      {
         title: 'Birthday',
         dataIndex: 'birthday',
         key: 'birthday',
         render: birthday => <Typography.Text > {birthday[0]}<br />{birthday[1]}</Typography.Text>,
         width: 250,
      },
      {
         title: 'Email',
         dataIndex: 'email',
         key: 'email',
         render: email => <InformationString information={email}>
            <a href={`mailto:${email}`}>{email}</a>
         </InformationString>,
         ellipsis: true,
         width: 140,
      },
      {
         title: 'Phone',
         dataIndex: 'phone',
         key: 'phone',
         render: phone => <InformationString information={phone}>
            <a href={`tel:${phone}`}>{phone}</a>
         </InformationString>,
         width: 150,
      },
      {
         title: 'Location',
         dataIndex: 'location',
         key: 'location',
         render: location => <InformationString information={location.join('')}>
            <Typography.Text>
               <strong>{location[0]}</strong>
               <br />
               {location[1]}
            </Typography.Text>
         </InformationString>,
         width: 250,
      },
      {
         title: 'Nationality',
         dataIndex: 'nationality',
         key: 'nationality',
         render: nationality => <Tag color={nationality[1]}>{nationality[0]}</Tag>,
         align: 'right',
         width: 200,
      },
   ];

   return (
      <Table
         dataSource={dataSource}
         columns={columns}
         scroll={{ x: 1250 }}
         size="small"
      />
   );
}

export { View };