import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            <div className={css.contactWrap}>
              <span className={css.contactName}>{name}: </span>{' '}
              <span>{number}</span>
            </div>
            <button
              type="button"
              className={css.btn}
              onClick={() => onClick(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
