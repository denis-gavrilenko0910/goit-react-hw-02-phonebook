import React from 'react';
// import styled from 'styled-components';
import { Container } from '../Container/Container';
import { ContactsList } from './ContactsList';
// import { ContactsItems } from './ContactsItems';

export class Filter extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange(e) {
    const { contacts, filter } = e.target;
    console.log(contacts, filter);
  }

  render() {
    console.log(this.state.contacts);
    // const { id, name, number } = this.state.contacts;
    return (
      <Container>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <ContactsList contacts={this.state.contacts} />
      </Container>
    );
  }
}
