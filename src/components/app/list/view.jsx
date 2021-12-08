import React from "react";
import { List, Card, Divider, Typography, Tag } from 'antd';
import { modifyDataForView } from '../../../utils/modifyDataForView';
import './style.scss';
import { NavLink } from "react-router-dom";
import { InformationString } from "../infoLine";
import { FilterForm } from '../filterForm';
import { Statistic } from '../statistic';

const View = ({ contacts }) => {

   const dataSource = modifyDataForView(contacts);

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
         dataSource={dataSource}
         renderItem={contact =>
            <List.Item>
               <Card hoverable
                  className={'card-contact'}
                  cover={<NavLink to={'/profile'}>
                     <img alt={contact.fullName.fullName} src={contact.avatar.url} />
                  </NavLink>}
               >
                  <Card.Meta title={<>
                     <NavLink to={'/profile'}>
                        {contact.fullName.fullName} {contact.birthday[1]}
                     </NavLink>
                     <Divider dashed />
                  </>}
                     description={<>
                        <InformationString information={contact.email} className={'_m-bottom_10'}>
                           <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </InformationString>
                        <InformationString information={contact.phone} className={'_m-bottom_10'}>
                           <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                        </InformationString>
                        <InformationString information={contact.location.join('')} className={'_m-bottom_15'}>
                           <Typography.Text>
                              <strong>{contact.location[0]}</strong>
                              <br />
                              {contact.location[1]}
                           </Typography.Text>
                        </InformationString>
                        <Divider dashed className={'_m-bottom_15'} />
                        <Tag color={contact.nationality[1]}>{contact.nationality[0]}</Tag>
                     </>}
                  />
               </Card>
            </List.Item>
         }
      />
   );
}

export { View };