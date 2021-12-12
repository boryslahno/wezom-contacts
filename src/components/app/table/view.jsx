import React from "react";
import { Table } from 'antd';
import { FilterForm } from '../filterForm';
import { Statistic } from '../statistic';
import './style.scss';
import { useDispatch, useSelector } from "react-redux";
import { contactsActions } from '../../../store/contacts/contacts';
import { columnsConfiguration } from './columnsConfiguration';

const View = () => {

   const filteredContacts = useSelector(state => state.filter.filteredContacts);
   const { isLoading, tablePageSize, tableCurrentPage, sortOrder } = useSelector(state => state.contacts);
   const dispatch = useDispatch();

   const handleChangePagination = (page, pageSize) => {
      dispatch(contactsActions.setTableCurrentPage(page));
      dispatch(contactsActions.setTablePageSize(pageSize));
   }

   const handleChangeSort = (pagination, filter, sort) => {
      dispatch(contactsActions.setSortOrder(sort.order));
   }

   return (
      <Table
         dataSource={filteredContacts}
         columns={columnsConfiguration(sortOrder)}
         scroll={{ x: 1200 }}
         size="small"
         className='table'
         title={() => <FilterForm />}
         footer={() => <Statistic />}
         loading={isLoading}
         pagination={{
            defaultPageSize: tablePageSize,
            defaultCurrent: tableCurrentPage,
            onChange: handleChangePagination
         }}
         onChange={handleChangeSort}
      />
   );
}

export { View };