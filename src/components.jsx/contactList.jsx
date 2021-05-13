import React from 'react';
import { useState, useEffect } from 'react';

export default function ContactList(props) {
   const { input } = props;
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

   return (
      <div>
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
               return <li key={items.id}>{items.name}</li>;
            })}
      </div>
   );
}
