import React from 'react';

// Imagina que estos son componentes que ya has creado para las diferentes secciones de tu landing page
import Navbar from './components/Navbar';
import InventorySection from './InventorySection';
import SalesRecordSection from './SalesRecordSection';
import TechnicianWorkOrderSection from './TechnicianWorkOrderSection';
import CustomerTicketTrackingSection from './CustomerTicketTrackingSection';
import ContactForm from './ContactForm';
import SubscriptionSection from './SubscriptionSection';
import styles from './landingpage.module.css';

import SubscriptionPlans from './components/SubscriptionPlans';




const LandingPage = () => {

  return (
    <div className={styles.landingPage}>
      <Navbar />
      <main>
        <InventorySection />
        <SalesRecordSection />
        <TechnicianWorkOrderSection />
        <CustomerTicketTrackingSection />
        <ContactForm />
        <SubscriptionSection />
      </main>
      
    </div>
  );
};

export default LandingPage;

