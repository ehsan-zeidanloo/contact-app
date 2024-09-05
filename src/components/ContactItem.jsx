import React from "react";

import styles from "./ContactItem.module.css";

function ContactItem({
  contact,
  deleteHandler,
  editHandler,
  selected,
  toggleSelection,
}) {
  return (
    <div>
      <li className={styles.item}>
        <p>
          {contact.name} {contact.lastName}
        </p>
        <p>
          <span>📧</span> {contact.email}
        </p>
        <p>
          <span>📞</span> {contact.phone}
        </p>
        <button onClick={() => deleteHandler(contact.id)}>🗑️</button>
        <button onClick={() => editHandler(contact.id)}>✏️</button>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toggleSelection(contact.id)}
        />
      </li>
    </div>
  );
}

export default ContactItem;
