import { Component } from 'react';
import { Filter } from './Components/Filter';
import { ContactForm } from './Components/ContactForm';
import { Section } from './Components/Section';
import { ContactsList } from './Components/ContactsList';

// const PHONEBOOK_STATE = {};

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: `${Date()}`,
      name,
      number,
    };

    this.setState(prev => {
      return {
        ...prev,
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  addFilter = value => {
    this.setState(prev => {
      return {
        ...prev,
        filter: value,
      };
    });
  };

  setFilteredContacts = () => {
    const filteredContacts = this.state.contacts.filter(contact => {
      if (
        contact.name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLocaleLowerCase())
      ) {
        return contact;
      }
      return null;
    });
    return filteredContacts;
  };

  render() {
    return (
      <Section>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <Filter filter={this.state.filter} addFilter={this.addFilter} />
        <ContactsList
          contacts={this.setFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
