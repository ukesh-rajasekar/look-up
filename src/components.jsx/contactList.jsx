import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

export default function ContactList(props) {
   const { input, ifClicked } = props;
   const history = useHistory();
   const [contacts, setContacts] = useState([]);

   const fetchData = () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
         .then((res) => {
            return res.json();
         })
         .catch((err) => {
            console.log(err);
         });
   };

   useEffect(() => {
      fetchData().then((data) => {
         setContacts(data);
      });
   }, []);

   const handleRouting = (contactData) => {
      ifClicked(contactData);
      history.push(`/${contactData.name}`);
   };

   return (
      <div>
         <ul>
            {contacts
               .filter((contact) => {
                  return (
                     contact.name
                        .toString()
                        .toLowerCase()
                        .indexOf(input.toString().toLowerCase()) > -1
                  );
               })
               .map((items) => {
                  return (
                     <li key={items.id} onClick={() => handleRouting(items)}>
                        {items.name}
                     </li>
                  );
               })}
         </ul>
      </div>
   );
}
