import React, { useState, useEffect } from 'react';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'Redux/phonebook';

export default function ContactList() {
  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  const loading = useSelector(selectors.getLoading);
  const sortedContacts = useSelector(selectors.getSortedContacts);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const ToggleSort = () => {
    setSorted(!sorted);
  };

  let contactsToShow = sorted ? sortedContacts : contacts;

  return (
    <>
      {loading === 'loadingContacts' && <p>Loading...</p>}
      <input
        type="checkbox"
        checked={sorted}
        onChange={ToggleSort}
        value="sort"
      />
      <label for="sort">Sort by name</label>
      <ul className={s.contactsList}>
        {contacts &&
          contactsToShow.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onClick={() => onDeleteContact(contact.id)}
            />
          ))}
      </ul>
    </>
  );
}
