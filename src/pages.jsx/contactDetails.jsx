import React from 'react';
import { Card, Row, Container, Col, ListGroup } from 'react-bootstrap';

export default function ContactDetails(props) {
   const { selectedContact } = props;
   const { name, username, email, phone, website } = selectedContact;
   return (
      <Container fluid='md'>
         <Row className='justify-content-md-center'>
            <Col>
               <Card className=' text-center' bg={'light'}>
                  <Card.Body className='container'>
                     <Card.Header>
                        <h3>{name}</h3>
                     </Card.Header>
                     <ListGroup variant='flush'>
                        <ListGroup.Item>
                           <h5>Email</h5>
                           {email}
                        </ListGroup.Item>

                        <ListGroup.Item>
                           <h5>Call Mobile</h5>
                           {phone}
                        </ListGroup.Item>

                        <ListGroup.Item>
                           <h5>Website</h5>
                           {website}
                        </ListGroup.Item>
                     </ListGroup>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}
