import React from 'react';
import s from './AuthLoginForm.module.css';
import PropTypes from 'prop-types';
import { TextField, Typography, Button } from '@mui/material';

const AuthLogInForm = ({
  title,
  email,
  handleSubmit,
  handleChange,
  password,
}) => {
  return (
    <div className={s.Wrapper}>
      <Typography
        variant="h3"
        component="h2"
        mt={3}
        sx={{
          color: 'primary.main',
        }}
      >
        {title}
      </Typography>
      <div>
        <form onSubmit={handleSubmit} className={s.Form} autoComplete="off">
          <TextField
            required
            id="outlined-email"
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            margin="normal"
            className={s.Input}
          />
          <TextField
            id="outlined-password-input"
            label="Password (at least 7 characters)"
            type="password"
            autoComplete="current-password"
            name="password"
            value={password}
            onChange={handleChange}
            margin="normal"
            className={s.Input}
          />

          <div className={s.ButtonWrapper}>
            <Button
              variant="contained"
              type="submit"
              className={s.Button}
              sx={{
                backgroundColor: 'primary.main',
                marginTop: 2,
              }}
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthLogInForm;

AuthLogInForm.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  password: PropTypes.string,
};
