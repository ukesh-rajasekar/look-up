import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Card, Row, Container, Col, ListGroup, Image } from 'react-bootstrap';

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
         data.sort(function (a, b) {
            if (a.name < b.name) {
               return -1;
            }
            if (a.name > b.name) {
               return 1;
            }
            return 0;
         });
         setContacts(data);
      });
   }, []);

   const handleRouting = (contactData) => {
      ifClicked(contactData);
      history.push(`/${contactData.name}`);
   };

   return (
      <Container fluid='md'>
         <Row className='justify-content-md-center'>
            <Col>
               <Card className=' text-center' bg={'light'}>
                  <Card.Body className='container'>
                     <Card.Header>Contacts</Card.Header>
                     <ListGroup variant='flush'>
                        {contacts
                           .filter((contact) => {
                              return (
                                 contact.name
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(input.toString().toLowerCase()) >
                                 -1
                              );
                           })
                           .map((items) => {
                              return (
                                 <ListGroup.Item
                                    id='bootstrap-overrides'
                                    key={items.id}
                                    onClick={() => handleRouting(items)}
                                 >
                                    <Image
                                       className='letter-icon'
                                       src={'/images/' + items.name[0] + '.png'}
                                       rounded
                                    />
                                    <h3 className='name'>{items.name}</h3>
                                 </ListGroup.Item>
                              );
                           })}
                     </ListGroup>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}
