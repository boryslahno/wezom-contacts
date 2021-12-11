import React from "react";
import { Typography, Row, Col } from 'antd';

const View = ({ children, information, className }) => {

   return (
      <Row gutter={10} wrap={false} className={className}>
         <Col>
            <Typography.Text copyable={{ text: information }} style={{ 'marginLeft': '-10px' }} />
         </Col>
         <Col>
            {children}
         </Col>
      </Row>
   );
}

export { View };