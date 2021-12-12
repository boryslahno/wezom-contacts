import React from "react";
import { List, Card } from 'antd';
import './style.scss';
import { NavLink } from "react-router-dom";
import { FilterForm } from '../filterForm';
import { Statistic } from '../statistic';
import { ProfileInformation } from '../profileInfo';
import { useDispatch, useSelector } from "react-redux";
import { contactsActions } from '../../../store/contacts/contacts';

const View = () => {

   const { isLoading, tiledCurrentPage, tiledPageSize } = useSelector(state => state.contacts);
   const filteredContacts = useSelector(state => state.filter.filteredContacts);
   const dispatch = useDispatch();

   const handleChangePagination = (page, pageSize) => {
      dispatch(contactsActions.setTiledPageSize(pageSize));
      dispatch(contactsActions.setTiledCurrentPage(page));
   }

   return (
      <List
         className='list'
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
         footer={<Statistic contacts={filteredContacts} />}
         dataSource={filteredContacts}
         loading={isLoading}
         renderItem={contact =>
            <List.Item>
               <Card hoverable
                  className='card-contact'
                  cover={<NavLink to={`/contacts/${contact.fullName.userId}`}>
                     <img alt={contact.fullName.fullName} src={contact.avatar.url} />
                  </NavLink>}
               >
                  <Card.Meta title={
                     <>
                        <NavLink to={`/contacts/${contact.fullName.userId}`}>
                           {contact.fullName.fullName} {contact.birthday[1]}
                        </NavLink>
                     </>
                  }
                     description={<ProfileInformation profileData={contact} />}
                  />
               </Card>
            </List.Item>
         }
         pagination={{
            size: 'small',
            defaultPageSize: tiledPageSize,
            defaultCurrent: tiledCurrentPage,
            pageSizeOptions: [6, 12, 36, 48],
            onChange: handleChangePagination,
         }}
      />
   );
}

export { View };