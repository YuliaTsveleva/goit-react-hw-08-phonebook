import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer('notLoading', {
  [fetchContacts.pending]: () => 'loadingContacts',
  [fetchContacts.fulfilled]: () => 'notLoading',
  [fetchContacts.rejected]: () => 'notLoading',

  [addContact.pending]: () => 'adding',
  [addContact.fulfilled]: () => 'notLoading',
  [addContact.rejected]: () => 'notLoading',

  [deleteContact.pending]: (_, { meta }) => meta.arg,
  [deleteContact.fulfilled]: () => 'notLoading',
  [deleteContact.rejected]: () => 'notLoading',
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
