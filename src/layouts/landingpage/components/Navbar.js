import React from 'react';
import styles from './Navbar.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.navMenu}>
        <li><a href="#features">¿Qué hacemos?</a></li>
        <li><a href="#plans">Planes</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className={styles.authButtons}>
        <button>Iniciar sesión</button>
        <a href="/app/register">Planes</a>
      </div>
    </nav>
  );
};

export default Navbar;