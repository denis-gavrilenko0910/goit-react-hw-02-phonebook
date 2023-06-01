import { Component } from 'react';
import { Container } from '../Container/Container';

export class Filter extends Component {
  handleChange = e => {
    this.props.addFilter(e.target.value);
  };

  render() {
    return (
      <Container>
        <input
          type="text"
          name="filter"
          value={this.props.filter}
          placeholder="search"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}
