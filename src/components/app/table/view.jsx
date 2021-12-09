import React from "react";
import { Table, Avatar, Typography, Tag } from 'antd';
import { NavLink } from "react-router-dom";
import { InformationString } from "../infoLine";
import { FilterForm } from '../filterForm';
import { Statistic } from '../statistic';
import './style.scss';
import { useSelector } from "react-redux";

const View = ({ contacts }) => {

   const isLoading = useSelector(state => state.contacts.isLoading);

   const columns = [
      {
         title: 'Avatar',
         dataIndex: 'avatar',
         key: 'avatar',
         render: ({ url, userId }) => <NavLink to={'/profile'}>
            <Avatar src={url} size={42} />
         </NavLink>,
         fixed: 'left',
         align: 'center',
         width: 80
      },
      {
         title: 'Full Name',
         dataIndex: 'fullName',
         key: 'fullName',
         render: ({ fullName, userId }) => <NavLink to={'/profile'}>{fullName}</NavLink>,
         sorter: (firstContact, secondContact) =>
            firstContact.fullName.fullName.localeCompare(secondContact.fullName.fullName),
         align: 'left',
      },
      {
         title: 'Birthday',
         dataIndex: 'birthday',
         key: 'birthday',
         render: birthday => <Typography.Text>
            {birthday.fullFormat}<br />{birthday.age}
         </Typography.Text>,
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
      },
      {
         title: 'Phone',
         dataIndex: 'phone',
         key: 'phone',
         render: phone => <InformationString information={phone}>
            <a href={`tel:${phone}`}>{phone}</a>
         </InformationString>,
      },
      {
         title: 'Location',
         dataIndex: 'location',
         key: 'location',
         render: location => <InformationString
            information={Object.values(location).join('')}>
            <Typography.Text>
               <strong>{location.country}</strong>
               <br />
               {location.address}
            </Typography.Text>
         </InformationString>,
         width: 250,
      },
      {
         title: 'Nationality',
         dataIndex: 'nationality',
         key: 'nationality',
         render: nationality => <Tag color={nationality.tagColor}>{nationality.name}</Tag>,
         align: 'right',

      },
   ];
   return (
      <Table
         dataSource={contacts}
         columns={columns}
         scroll={{ x: 1200 }}
         size="small"
         className={'table'}
         title={() => <FilterForm />}
         footer={() => <Statistic contacts={contacts} />}
         loading={isLoading}
      />
   );
}

export { View };