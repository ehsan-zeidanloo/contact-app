import React from "react";

import ContactItem from "./ContactItem.jsx";
import styles from "./ContactsList.module.css";

function ContactsList({
  contacts,
  deleteHandler,
  editHandler,
  selectedContacts,
  toggleSelection,
}) {
  console.log(contacts);
  return contacts.length > 0 ? (
    <div className={styles.container}>
      <h3>contactsList</h3>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            toggleSelection={toggleSelection}
            selected={selectedContacts.includes(contact.id)}
          />
        ))}
      </ul>
    </div>
  ) : null;
}

export default ContactsList;
