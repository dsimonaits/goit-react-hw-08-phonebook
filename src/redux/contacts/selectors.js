import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(({ name, number }) => {
      return Number(filter)
        ? number.toLowerCase().includes(filter.toLowerCase())
        : name.toLowerCase().includes(filter.toLowerCase());
    })
);
