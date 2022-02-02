import React from 'react';
import s from './AuthForm.module.css';
import Title from '../Title';

const AuthFormLogIn = ({
  title,
  email,
  handleSubmit,
  handleChange,
  password,
}) => {
  return (
    <div className={s.Wrapper}>
      <Title text={title} />
      <div>
        <form onSubmit={handleSubmit} className={s.Form} autoComplete="off">
          <label className={s.Label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={s.Input}
            />
          </label>

          <label className={s.Label}>
            Password * <span className={s.Note}>(at least 7 characters)</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={s.Input}
            />
          </label>
          <div className={s.ButtonWrapper}>
            <button type="submit" className={s.Button}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthFormLogIn;
