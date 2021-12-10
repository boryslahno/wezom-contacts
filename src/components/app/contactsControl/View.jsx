import React, { useState } from "react";
import { Tooltip, Button } from 'antd';
import { ReloadOutlined, UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

const View = ({ reloadData, setViewMode, viewMode }) => {

   const tableViewButtonType = viewMode === 'tabular' ? 'primary' : 'default';
   const tiledViewButtonType = viewMode === 'tiled' ? 'primary' : 'default';

   const changeViewMode = (event) => {
      const viewMode = event.currentTarget.value;

      event.currentTarget.type = 'primary';
      localStorage.setItem('view-mode', viewMode);
      setViewMode(viewMode);
   }

   return (
      <>
         <Tooltip title={'Update data'}>
            <Button
               type="dashed"
               shape={'circle'}
               icon={<ReloadOutlined />}
               style={{ 'marginRight': '10px' }}
               onClick={reloadData}
            />
         </Tooltip>
         <Tooltip title={'Tiled view'}>
            <Button
               type={tiledViewButtonType}
               icon={<AppstoreOutlined />}
               value={'tiled'}
               onClick={changeViewMode}
            />
         </Tooltip>
         <Tooltip title={'Tabular view'}>
            <Button
               type={tableViewButtonType}
               icon={<UnorderedListOutlined />}
               value={'tabular'}
               onClick={changeViewMode}
            />
         </Tooltip>
      </>
   );
}

export { View };