import React from 'react';

export default function ContactDetails(props) {
   const { selectedContact } = props;
   const { name, username, email, phone, website } = selectedContact;
   return (
      <div>
         <h1>{name}</h1>
         <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{phone}</li>
            <li>{website}</li>
         </ul>
      </div>
   );
}
