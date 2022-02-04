import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'Redux/auth';
import AuthRegisterForm from 'Components/AuthRegisterForm';
import image from 'Images/register.jpg';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
      <AuthRegisterForm
        title="Registration"
        name={name}
        email={email}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        password={password}
      />
      <img
        src={image}
        alt="homeImage"
        style={{ marginTop: '10px', width: '350px' }}
      />
    </div>
  );
}
