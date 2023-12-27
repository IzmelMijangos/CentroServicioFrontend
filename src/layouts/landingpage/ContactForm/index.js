import React, { useState } from 'react';
import styles from '../landingpage.module.css';
const ContactForm = () => {
  // Estados para cada campo del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar la información del contacto, por ejemplo, a una API
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Tu nombre" 
        required 
        className={styles.inputField}
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Tu correo electrónico" 
        required 
        className={styles.inputField}
      />
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Tu mensaje" 
        required 
        className={styles.textareaField}
      />
      <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
    </form>
  );
};

export default ContactForm;