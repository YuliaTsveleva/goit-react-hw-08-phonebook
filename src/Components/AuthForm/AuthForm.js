import React from 'react';
import s from './AuthForm.module.css';
// import Title from '../Title';
import { TextField, Typography, Button } from '@mui/material';

const AuthFormLogIn = ({
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
          color: 'rgb(9, 108, 255)',
        }}
      >
        {title}
      </Typography>
      {/* <Title text={title} /> */}
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
            // sx={{
            //   width: 320,
            //   backgroundColor: 'rgb(243, 245, 247)',
            // }}
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
            // sx={{
            //   width: 320,
            //   backgroundColor: 'rgb(243, 245, 247)',
            // }}
            className={s.Input}
          />

          {/* <label className={s.Label}>
            Password * <span className={s.Note}>(at least 7 characters)</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={s.Input}
            />
          </label> */}
          <div className={s.ButtonWrapper}>
            <Button
              variant="contained"
              type="submit"
              className={s.Button}
              sx={{
                backgroundColor: 'rgb(9, 108, 255)',
                marginTop: 2,
              }}
            >
              Log in
            </Button>
            {/* <button type="submit" className={s.Button}>
              Log in
            </button> */}
            {/* background-color: rgb(9, 108, 255); */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthFormLogIn;
