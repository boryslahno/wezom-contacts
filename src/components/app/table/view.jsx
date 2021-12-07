import React from "react";
import { modifyDataForTable } from '../../../utils/modifyDataForTable';
import { Table, Avatar, Typography, Tag } from 'antd';
import { NavLink } from "react-router-dom";
import { InformationString } from "../infoLine";
import { FilterForm } from '../filterForm';
import { Statistic } from '../statistic';
import './style.scss';

const View = ({ contacts }) => {

   const dataSource = modifyDataForTable(contacts);

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
            firstContact.fullName.localeCompare(secondContact.fullName),
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

      },
   ];
   return (
      <Table
         dataSource={dataSource}
         columns={columns}
         scroll={{ x: 1200 }}
         size="small"
         className={'table'}
         title={() => <FilterForm />}
         footer={() => <Statistic contacts={contacts} />}
      />
   );
}

export { View };