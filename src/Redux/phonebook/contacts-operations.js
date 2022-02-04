import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Failed to get your contacts, contact technical support!');
      } else if (error.response.status === 404) {
        toast.error('The collection of such user does not exist!');
      } else if (error.response.status === 500) {
        toast.error('Failed to get your contacts, server error!');
      } else {
        toast.error('Failed to get your contacts, unknown error!');
      }
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, email }, { rejectWithValue }) => {
    try {
      const contact = { name, number, email };
      const response = await axios.post('/contacts', contact);
      toast.success(`${response.data.name} added to your contacts!`);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Failed to add contact, contact technical support!');
      } else {
        toast.error('Failed to add contact, try again please!');
      }
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('Contact deleted!');
      return id;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Failed to delete contact, contact technical support!');
      } else if (error.response.status === 404) {
        toast.error(
          'Failed to delete contact, the collection of such user does not exist!',
        );
      } else if (error.response.status === 500) {
        toast.error('Failed to delete contact, server error!');
      } else {
        toast.error('Failed to delete contact, unknown error!');
      }
      return rejectWithValue(error.message);
    }
  },
);
