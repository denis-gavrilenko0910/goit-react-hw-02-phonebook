import { Component } from 'react';
import { Container } from '../Container/Container';

const PHONEBOOK_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...PHONEBOOK_STATE };

  handleChange = e => {
    const { name } = e.target;

    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name && this.state.number) {
      const existingContact = this.state.сontacts?.find(
        contact => contact.name === this.state.name,
      );

      console.log(existingContact);
      if (existingContact) {
        console.log(this.state.name);
        alert('Контакт уже существует!');
        return;
      }
    }

    if (this.state.name && this.state.number) {
      this.props.addContact(this.state.name, this.state.number);
      this.setState(PHONEBOOK_STATE);
    } //add some notification that input should containe smth
  };

  render() {
    return (
      <Container>
        <form>
          <input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <input
            id="number"
            name="number"
            type="tel"
            value={this.state.number}
            placeholder="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Add Contact</button>
        </form>
      </Container>
    );
  }
}
