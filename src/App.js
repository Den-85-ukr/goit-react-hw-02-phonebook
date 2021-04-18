import { Component } from 'react';
import ContactsList from './components/ContactsList';
//import AddNewContactForm from './components/AddNewContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ contacts: [...this.state.contacts, this.state.name] });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ContactsList contacts={this.state.contacts} name={this.state.name}/>
      </div>
    );
  }
}

export default App;
