import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter),
    );
  },
);

export const getSortedContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normFilter = filter.toLowerCase();
    function SortArray(x, y) {
      return x.name.localeCompare(y.name);
    }
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normFilter))
      .sort(SortArray);
  },
);
