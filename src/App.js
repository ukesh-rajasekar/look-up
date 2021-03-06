import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './components/contactList';
import SearchBar from './components/searchBar';
import ContactDetails from './pages/contactDetails';
import { Card } from 'react-bootstrap';

function App() {
   const [input, setInput] = useState('');
   const [selectedContact, setSelectedContact] = useState('');

   return (
      <div className='App'>
         <div className='wrapper'>
            <Card className='main-card' bg={'dark'}>
               <Router>
                  <Switch>
                     <Route exact path={process.env.PUBLIC_URL + '/'}>
                        <Card.Header>
                           <SearchBar keyword={input} setKeyword={setInput} />{' '}
                        </Card.Header>
                        <ContactList
                           input={input}
                           ifClicked={setSelectedContact}
                        />
                     </Route>
                     <Route exact path='/contactlists'>
                        <ContactDetails selectedContact={selectedContact} />
                     </Route>
                  </Switch>
               </Router>
            </Card>
         </div>
      </div>
   );
}

export default App;
