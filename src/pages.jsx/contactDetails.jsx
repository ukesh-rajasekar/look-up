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
                           <a href={'mailto:' + email}>{email}</a>
                        </ListGroup.Item>

                        <ListGroup.Item>
                           <h5>Call Mobile</h5>
                           <a href={'tel:' + phone}>{phone}</a>
                        </ListGroup.Item>

                        <ListGroup.Item>
                           <h5>Go to site</h5>

                           <a href={'https://' + website} target='_blank'>
                              <h5>{website}</h5>
                           </a>
                        </ListGroup.Item>
                     </ListGroup>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Container>
   );
}
