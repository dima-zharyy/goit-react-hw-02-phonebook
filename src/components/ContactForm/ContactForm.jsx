import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid(5);
  inputNumberId = nanoid(5);

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={this.inputNameId}>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.inputNameId}
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor={this.inputNumberId}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.inputNumberId}
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }
}
