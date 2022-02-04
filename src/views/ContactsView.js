import Section from 'Components/Section';
import AddContactForm from 'Components/AddContactForm';
import ContactList from 'Components/ContactList';
import EmptyText from 'Components/EmptyText';
import { useSelector } from 'react-redux';
import { selectors } from 'Redux/phonebook';
import image1 from '../Images/contacts1.png';
import image2 from '../Images/contacts2.png';

export default function ContactsView() {
  const contactsLength = useSelector(selectors.getContacts).length;
  const loading = useSelector(selectors.getLoading);

  return (
    <div
      className="ContactsView"
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
      <img src={image1} alt="homeImage" style={{ width: '250px' }} />
      <Section title="Contacts">
        <ContactList />
        {contactsLength === 0 && loading === 'notLoading' && <EmptyText />}
      </Section>
      <img src={image2} alt="homeImage" style={{ width: '50px' }} />
    </div>
  );
}
