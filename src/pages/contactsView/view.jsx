import React from "react";
import { useParams } from "react-router";

const View = ({ contacts }) => {

   const { id } = useParams();
   const contact = contacts[id];

   return (
      <di>{contact.name.first}</di>
   );
}

export { View };