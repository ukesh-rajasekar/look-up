import './App.css';
import { useState } from 'react';
import ContactList from './components.jsx/contactList';
import SearchBar from './components.jsx/searchBar';

function App() {
   const [input, setInput] = useState('');
   console.log(input);
   return (
      <div className='App'>
         <SearchBar keyword={input} setKeyword={setInput} />
         <ContactList input={input} />
      </div>
   );
}

export default App;
