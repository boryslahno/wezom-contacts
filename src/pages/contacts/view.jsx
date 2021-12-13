import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from 'antd';
import { TableView, ListView, ContactsControl } from '../../components';
import { useDispatch } from "react-redux";
import { contactsActions } from '../../store/contacts/contacts';
import { Redirect } from "react-router-dom";

const View = () => {

   if (!localStorage.getItem('view-mode')) {
      localStorage.setItem('view-mode', 'tabular')
   }

   const [viewMode, setViewMode] = useState(localStorage.getItem('view-mode'));
   const isAuthorized = localStorage.getItem('auth');
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(contactsActions.fetchContacts());
   }, [dispatch])

   if (!isAuthorized) {
      return <Redirect to={'/not-found'} />
   }

   const handleReloadData = () => dispatch(contactsActions.fetchContacts());

   const getViewMode = () => {
      switch (viewMode) {
         case 'tabular':
            return (<TableView />);
         case 'tiled':
            return (<ListView />);
         default:
            return null;
      }
   }

   return (
      <div className='page page--contacts'>
         <Row justify='space-between'>
            <Col>
               <Typography.Title level={2}>Contacts</Typography.Title>
            </Col>
            <Col>
               <ContactsControl
                  reloadData={handleReloadData}
                  setViewMode={setViewMode}
                  viewMode={viewMode} />
            </Col>
         </Row>
         <Row>
            {getViewMode()}
         </Row>
      </div>
   );
}

export { View };
