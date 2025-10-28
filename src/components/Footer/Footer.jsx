import React from 'react'
import styles from './FooterStyles.module.css'

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Sharath. <br></br>All rights reserved.</p>
    </section>
  )
}

export default Footer