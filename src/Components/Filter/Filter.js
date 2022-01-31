import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'Redux/phonebook/contacts-actions';
import { selectors } from '../../Redux/phonebook';

export default function Filter() {
  const value = useSelector(selectors.getFilter);
  const total = useSelector(selectors.getContacts).length;
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.target.value));
  return (
    <label className={s.Label}>
      Find contact by name in {total} contacts
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
}
