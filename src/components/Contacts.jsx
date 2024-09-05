import React from "react";
import { useState } from "react";
import styles from "./Contacts.module.css";
import { v4 } from "uuid";

import ContactsList from "./ContactsList.jsx";
import inputs from "../constants/inputs.js";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchContacts, setSearchContacts] = useState("");

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter valid data!");
      return;
    }
    setAlert("");
    if (isEdit) {
      //edit contact
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
      setIsEdit(false);
    } else {
      // add contact
      const newContact = { ...contact, id: v4() };
      setContacts((contacts) => [...contacts, newContact]);
    }

    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setIsEdit(false);
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const editHandler = (id) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setContact(contactToEdit);
    setIsEdit(true);
  };
  const toggleSelection = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(
        selectedContacts.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const deleteSelectedHandler = () => {
    const newContacts = contacts.filter(
      (contact) => !selectedContacts.includes(contact.id)
    );
    setContacts(newContacts);
    setSelectedContacts([]);
  };
  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.name} ${contact.lastName}`.toLowerCase();
    const email = contact.email.toLowerCase();
    const searchQuery = searchContacts.toLowerCase();
    return fullName.includes(searchQuery) || email.includes(searchQuery);
  });

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            onChange={changeHandler}
            value={contact[input.name]}
          />
        ))}

        <button onClick={addHandler}>{isEdit ? "save" : "Add"}</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList
        contacts={filteredContacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        selectedContacts={selectedContacts}
        toggleSelection={toggleSelection}
        deleteSelectedHandler={deleteSelectedHandler}
        searchContacts={searchContacts}
        setSearchContacts={setSearchContacts}
      />
    </div>
  );
}

export default Contacts;
