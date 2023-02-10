import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const App = () => {
  const dispatch = useDispatch();

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const onSetFilter = payload => {
    dispatch(setFilter(payload));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={onSetFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
