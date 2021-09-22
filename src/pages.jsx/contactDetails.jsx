import React from 'react';
import Avatar from 'react-avatar';
import { Card, Row, Container, Col, ListGroup } from 'react-bootstrap';

export default function ContactDetails(props) {
   const { selectedContact } = props;
   const { name, email, phone, website } = selectedContact;
   return (
      <Container fluid='md'>
         <Row className='justify-content-md-center'>
            <Col className='contact-col'>
               <Card.Header className='contact-header'>
                  <Avatar
                     className='avatar'
                     name={name}
                     round={true}
                     size='70'
                  />
                  <h3 className='contact-name'>{name}</h3>
               </Card.Header>
               <ListGroup variant='flush'>
                  <ListGroup.Item>
                     <h5 className='contact-list'>Email</h5>
                     <a href={'mailto:' + email}>{email}</a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <h5 className='contact-list'>Call Mobile</h5>
                     <a href={'tel:' + phone}>{phone}</a>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <h5 className='contact-list'>Go to site</h5>

                     <a href={'https://' + website} target='_blank'>
                        <h5 className='contact-list'>{website}</h5>
                     </a>
                  </ListGroup.Item>
               </ListGroup>
            </Col>
         </Row>
      </Container>
   );
}
