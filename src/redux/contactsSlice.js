import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      const updContacts = state.filter(
        contact => contact.id !== action.payload
      );
      return updContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
