import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../Redux/auth';
import AuthFormLogIn from '../Components/AuthLoginForm';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <AuthFormLogIn
      title="Log in"
      email={email}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      password={password}
    />
  );
}
