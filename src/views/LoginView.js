import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../Redux/auth';
import AuthLogInForm from '../Components/AuthLoginForm';
import image1 from '../Images/login1.jpg';
import image2 from '../Images/login2.jpg';

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <img
        src={image1}
        alt="loginImage"
        style={{ marginTop: '10px', width: '350px' }}
      />
      <AuthLogInForm
        title="Log in"
        email={email}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        password={password}
      />
      <img
        src={image2}
        alt="loginImage"
        style={{ marginTop: '10px', width: '350px' }}
      />
    </div>
  );
}
