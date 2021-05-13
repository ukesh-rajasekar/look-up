import React from 'react';
import { Navbar, FormControl } from 'react-bootstrap';

export default function SearchBar(props) {
   const { keyword, setKeyword } = props;
   return (
      <Navbar bg='light' expand='lg'>
         <FormControl
            type='text'
            placeholder='Search contacts'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className='mr-sm-2'
         />
      </Navbar>
   );
}
