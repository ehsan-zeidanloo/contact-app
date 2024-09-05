import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
      <h3>contact App</h3>
      <p><a href="https://botostart.ir">Botostart</a> | React.js Full Course</p>
    </div>
  )
}

export default Header;
