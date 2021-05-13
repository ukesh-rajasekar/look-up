import React from 'react';
import { useState, useEffect } from 'react';

export default function ContactList() {
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
         {contacts.map((items) => {
            return <div>{items.name}</div>;
         })}
      </div>
   );
}
