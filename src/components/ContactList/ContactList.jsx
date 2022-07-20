import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
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
