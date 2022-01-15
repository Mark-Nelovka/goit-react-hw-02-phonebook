import React, { Component } from "react";
// import { nanoid } from 'nanoid';
import "./App.css";
import Form from "./Components/Form";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filtet";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  dataSubmit = (data) => {
    this.setState((prevState) => {
      return prevState.contacts.push(data);
    });
    // console.log(this.state.contacts)
  };

  filterValue = (e) => {
    const { name, value } = e.currentTarget;
    // console.log(this.state)
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterName = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <section>
        <h1> Phonebook</h1>
        <Form dataSubmit={this.dataSubmit} />
        <h2>Contacts</h2>
        <p>Поиск контакта по имени</p>
        <Filter value={filter} onChange={this.filterValue} />
        <ContactList contacts={filterName} filter={this.state.filter} />
      </section>
    );
  }
}
export default App;
