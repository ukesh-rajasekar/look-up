import './App.css';
import ContactList from './components.jsx/contactList';
import SearchBar from './components.jsx/searchBar';

function App() {
   return (
      <div className='App'>
         <SearchBar />
         <ContactList />
      </div>
   );
}

export default App;
