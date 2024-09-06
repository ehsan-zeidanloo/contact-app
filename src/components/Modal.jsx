import React from "react";
import styles from "./Modal.module.css";

function Modal({ isModal, confirmDelete, cancelDelete, contactName }) {
  if (!isModal) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>تایید</h3>
        <p>آیا مطمئن هستید که قصد حذف کاربر {contactName} را دارید؟</p>
        <div className={styles.modalButtons}>  
        <button className={styles.confirmBtn} onClick={() =>  confirmDelete() }>بله</button>
        <button className={styles.cancelBtn} onClick={()=> cancelDelete()}>خیر</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
