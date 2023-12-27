import React from 'react';
import styles from '../landingpage.module.css';
const InventorySection = () => {
    return (
      <section className={styles.inventorySection}>
        <h2>Inventario y Niveles de Stock</h2>
        <p>Visualiza y gestiona tu inventario de piezas y componentes en tiempo real.</p>
        {/* Aquí iría la lógica para mostrar los datos del inventario */}
      </section>
    );
  };
  
  export default InventorySection;