import './App.css';
import Section from './Components/Section';
import AddContactForm from './Components/AddContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import EmptyText from './Components/EmptyText';
import { useSelector } from 'react-redux';
// import { getContacts } from './Redux/phonebook/contacts-selectors';
// import { getLoadingContactList } from './Redux/phonebook/contacts-selectors';
import { selectors } from './Redux/phonebook';

export default function App() {
  const contactsLength = useSelector(selectors.getContacts).length;
  const loading = useSelector(selectors.getLoading);

  return (
    <div className="App">
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        {contactsLength > 1 && <Filter />}
        <ContactList />
        {contactsLength === 0 && loading === 'notLoading' && <EmptyText />}
      </Section>
    </div>
  );
}
