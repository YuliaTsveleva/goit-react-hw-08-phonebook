import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { AiFillDelete } from 'react-icons/ai';
import { BiLoader } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { selectors } from 'Redux/phonebook';
import LetterAvatar from '../Avatar/Avatar';
function ContactItem({ id, name, number, onClick }) {
  const loading = useSelector(selectors.getLoading);
  return (
    <li className={s.Item}>
      <div className={s.Wrapper}>
        <LetterAvatar name={name} width={30} height={30} />
        <p className={s.Name}>{name}</p>
        <p className={s.Number}>
          <a className={s.TelLink} href={`tel:${number}`}>
            {number}
          </a>
        </p>
      </div>
      <button type="button" onClick={() => onClick()} className={s.Button}>
        {loading !== id && <AiFillDelete size={18} />}
        {loading === id && <BiLoader size={18} className={s.IconSpinner} />}
      </button>
    </li>
  );
}

export default ContactItem;
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
