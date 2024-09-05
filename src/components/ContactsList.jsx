import React from "react";

import ContactItem from "./ContactItem.jsx";
import styles from "./ContactsList.module.css";

function ContactsList({
  contacts,
  deleteHandler,
  editHandler,
  selectedContacts,
  toggleSelection,
  deleteSelectedHandler,
  searchContacts,
  setSearchContacts,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.contactheader}>
        <h3>contactsList</h3>
        <input
          type="text"
          placeholder="search by name,email ..."
          value={searchContacts}
          onChange={(e) =>
            setSearchContacts(e.target.value.toLowerCase().trim())
          }
        />
        <button
          onClick={deleteSelectedHandler}
          disabled={selectedContacts.length === 0}
        >
          deleteselected
        </button>
      </div>
      {contacts.length > 0 ? (
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
      ) : (
        <p className={styles.noResults}>
          No contacts found matching your search.
        </p>
      )}
    </div>
  );
}

export default ContactsList;
