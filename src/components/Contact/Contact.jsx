import React, { Component } from 'react'
import styles from './ContactStyles.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='text-center'>Contact Me</h1>
        <p className="text-sm text-black font-extralight line-clamp-1 mt-4 text-center mb-8 dark:text-white">Let's make something great!</p>
            <form action="https://formspree.io/f/mgvevvzz" method='post'>
            <div className="formGroup">
                <label htmlFor="name"hidden>Name</label>
                <input type="text" name='name' placeholder='Name' id='name' required />
            </div>
            <div className="formGroup">
                <label htmlFor="Email" hidden>Email</label>
                <input type="email" name='email' placeholder='Email' id='email' required />
            </div>
            <div className="formGroup">
                <label htmlFor="Message" hidden>Message</label>
                <textarea name='message' placeholder='Message' id='message' required />
            </div>
            <input type="submit" className='hoverbtn shadow-xl font-medium' value="Submit" />
        </form>
    </section>
  )
}

export default Contact