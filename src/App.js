import React, { Component } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";
import Form from "./Components/Form";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filtet";
// import WindowModal from "./Components/Modal";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  dataSubmit = (data) => {
    const searchName = this.state.contacts
      .map((contactName) => contactName.name)
      .includes(data.name);
    if (searchName) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      const contact = {
        ...data,
        id: nanoid(),
      };
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
    // console.log(this.state.contacts)
  };

  filterValue = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId.id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterName = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <section className={s.section}>
        <h1> Phonebook</h1>
        <Form dataSubmit={this.dataSubmit} />
        <h2>Contacts</h2>
        <p>Поиск контакта по имени</p>
        <Filter value={filter} onChange={this.filterValue} />
        <ContactList
          contacts={filterName}
          onRemoveContact={this.removeContact}
        />
        {/* <WindowModal modalRemove={this.removeContact} /> */}
      </section>
    );
  }
}
export default App;
