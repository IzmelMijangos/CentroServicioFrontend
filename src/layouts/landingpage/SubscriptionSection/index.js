import React from 'react';
import styles from '../landingpage.module.css';
const SubscriptionSection = () => {
  return (
    <section className={styles.subscriptionSection}>
      <h2>Suscríbete para obtener actualizaciones</h2>
      <form>
        <input type="email" placeholder="Tu correo electrónico" required />
        <button type="submit">Suscribirse</button>
      </form>
    </section>
  );
};

export default SubscriptionSection;