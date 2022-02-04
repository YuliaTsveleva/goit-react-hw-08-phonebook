import React, { useState, useEffect } from 'react';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { operations, selectors } from 'Redux/phonebook';
import { Checkbox, FormControlLabel } from '@mui/material';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import {
//   CheckBoxOutlineBlankIcon,
//   CheckBoxIcon,
// } from '@mui/icons-material';
// import CheckBoxIcon from '@mui/icons-material/Bookmark';z
import Filter from '../Filter';

export default function ContactList() {
  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(operations.deleteContact(id));
  const loading = useSelector(selectors.getLoading);
  const sortedContacts = useSelector(selectors.getSortedContacts);
  const [sorted, setSorted] = useState(false);
  const contactsLength = useSelector(selectors.getContacts).length;

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
      {contacts && contactsLength > 1 && (
        <div className={s.FeaturesWrapper}>
          <Filter />
          <FormControlLabel
            control={
              <Checkbox
                checked={sorted}
                onChange={ToggleSort}
                value="sort"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 20 },
                }}
              />
            }
            label="Sort by name"
            labelPlacement="start"
            sx={{
              color: 'rgba(86, 97, 121, 0.904)',
            }}
          ></FormControlLabel>
        </div>
      )}
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
