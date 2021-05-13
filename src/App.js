import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './components.jsx/contactList';
import SearchBar from './components.jsx/searchBar';
import ContactDetails from './pages.jsx/contactDetails';

function App() {
   const [input, setInput] = useState('');
   const [selectedContact, setSelectedContact] = useState('');

   return (
      <div className='App'>
         <Router>
            <Switch>
               <Route exact path='/'>
                  <SearchBar keyword={input} setKeyword={setInput} />

                  <ContactList input={input} ifClicked={setSelectedContact} />
               </Route>
               <Route exact path='/:profile'>
                  <ContactDetails selectedContact={selectedContact} />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
