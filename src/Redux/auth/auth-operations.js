import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success(`${credentials.name}, your are successfully registered!'`);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error('User registration error, such user may be already exist!');
    } else if (error.response.status === 400) {
      toast.error('Failed to register user, server error!');
    } else {
      toast.error('Failed to register user, unknown error!');
    }
    throw new Error(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('Welcome!');
    return data;
  } catch (error) {
    toast.error('Failed to login user, please try again!');
    throw new Error(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success('You are logged out, see you soon!');
  } catch (error) {
    toast.error('Failed to logout user, contact technical support!');
    throw new Error(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error('Failed to auto-login user, fill the login form please!');
      throw new Error(error);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
