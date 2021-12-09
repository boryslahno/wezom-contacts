import React from "react";
import { List, Card } from 'antd';
import './style.scss';
import { NavLink } from "react-router-dom";
import { FilterForm } from '../filterForm';
import { Statistic } from '../statistic';
import { ProfileInformation } from '../profileInfo';
import { useSelector } from "react-redux";

const View = ({ contacts }) => {

   const isLoading = useSelector(state => state.contacts.isLoading);

   return (
      <List
         className={'list'}
         pagination={{ size: 'small', defaultPageSize: 6, pageSizeOptions: [6, 12, 36, 48] }}
         grid={{
            gutter: 12,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
         }}
         header={<FilterForm />}
         footer={<Statistic contacts={contacts} />}
         dataSource={contacts}
         loading={isLoading}
         renderItem={contact =>
            <List.Item>
               <Card hoverable
                  className={'card-contact'}
                  cover={<NavLink to={'/profile'}>
                     <img alt={contact.fullName.fullName} src={contact.avatar.url} />
                  </NavLink>}
               >
                  <Card.Meta title={
                     <>
                        <NavLink to={'/profile'}>
                           {contact.fullName.fullName} {contact.birthday[1]}
                        </NavLink>
                     </>
                  }
                     description={<ProfileInformation profileData={contact} />}
                  />
               </Card>
            </List.Item>
         }
      />
   );
}

export { View };