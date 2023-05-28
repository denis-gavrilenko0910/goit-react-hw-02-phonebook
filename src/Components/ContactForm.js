import React from 'react';
import { Container } from '../Container/Container';

const PHONEBOOK_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends React.Component {
  state = { ...PHONEBOOK_STATE };

  handleChange = e => {
    const { name, number } = e.target;
    this.setState({ [name]: e.target.value, [number]: e.target.value });
    console.log(this.state);
  };
  addContact = e => {
    console.log('click');
  };
  render() {
    return (
      <Container>
        <input
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onBlur={this.handleChange}
        />
        <input
          type="text"
          name="number"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onBlur={this.handleChange}
        />
        <button type="button" onClick={this.addContact}>
          Add Contact
        </button>
      </Container>
    );
  }
}
