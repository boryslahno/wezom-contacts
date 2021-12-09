import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from 'antd';
import { TableView, ListView, ContactsControl } from '../../components';
import { useDispatch, useSelector } from "react-redux";
import { contactsActions } from '../../store/contacts/contacts';

const View = () => {

   if (!localStorage.getItem('view-mode')) {
      localStorage.setItem('view-mode', 'tabular')
   }

   const [viewMode, setViewMode] = useState(localStorage.getItem('view-mode'));
   const contacts = useSelector(state => state.contacts.contacts);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(contactsActions.fetchContacts());
   }, [dispatch])

   const handleReloadData = () => dispatch(contactsActions.fetchContacts());

   const getViewMode = () => {
      switch (viewMode) {
         case 'tabular':
            return (<TableView contacts={contacts} />);
         case 'tiled':
            return (<ListView contacts={contacts} />);
         default:
            return null;
      }
   }

   return (
      <div className={'page page--contacts'}>
         <Row justify={'space-between'}>
            <Col>
               <Typography.Title level={2}>Contacts</Typography.Title>
            </Col>
            <Col>
               <ContactsControl reloadData={handleReloadData} setViewMode={setViewMode} />
            </Col>
         </Row>
         <Row>
            {getViewMode()}
         </Row>
      </div>
   );
}

export { View };
