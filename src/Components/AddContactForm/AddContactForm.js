import { useState } from 'react';
import s from './AddContactForm.module.css';
import CONFIG from '../../Data/inputConfig.json';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiLoader } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { operations, actions, selectors } from 'Redux/phonebook';
import { nanoid } from 'nanoid';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const loading = useSelector(selectors.getLoading);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const alreadyExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (alreadyExist) {
      alert(`${name} is already exists in contacts`);
    } else {
      const contact = { id: nanoid(), name, number, email };
      dispatch(operations.addContact(contact));
    }
    dispatch(actions.changeFilter(''));
    e.currentTarget.reset();
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
    setEmail('');
  };

  return (
    <form className={s.Form} autoComplete="on" onSubmit={handleSubmit}>
      {CONFIG.map(field => {
        const state = { name, number, email };
        return (
          <div key={field.name}>
            <label className={s.Label}>
              {field.label}
              <input
                id={field.id}
                value={state[field.name]}
                onChange={handleChange}
                className={s.Input}
                type={field.type}
                name={field.name}
                pattern={field.pattern}
                title={field.title}
                required={field.required}
                autoComplete="true"
              />
            </label>
          </div>
        );
      })}
      <p className={s.Reminder}>Fields marked with * are required</p>
      <button
        className={s.Button}
        type="submit"
        disabled={loading === 'adding'}
      >
        {loading === 'adding' && (
          <BiLoader size={14} className={s.IconSpinner} />
        )}
        {loading !== 'adding' && (
          <AiOutlineUserAdd className={s.Icon} size={16} />
        )}
        Add contact
      </button>
    </form>
  );
}
