import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes

const SubscriptionPlans = ({ plans }) => {
  // No necesitas useState aquí porque ya recibes `plans` como prop
  return (
    <div>
      {plans.length > 0 ? (
        plans.map(plan => (
          <div key={plan.id}>
            <h3>{plan.name}</h3>
            <p>Precio: {plan.price}</p>
            <p>{plan.description}</p>
            {/* Otros detalles del plan */}
          </div>
        ))
      ) : (
        <p>No hay planes disponibles en este momento.</p>
      )}
    </div>
  );
};

// Aquí definimos las PropTypes para SubscriptionPlans
SubscriptionPlans.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default SubscriptionPlans;