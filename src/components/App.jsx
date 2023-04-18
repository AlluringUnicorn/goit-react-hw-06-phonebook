// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';

const App = () => {
  // const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};

export default App;




