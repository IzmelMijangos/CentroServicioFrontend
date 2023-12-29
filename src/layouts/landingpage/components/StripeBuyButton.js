import React from 'react';
import PropTypes from 'prop-types';
const StripeBuyButton = ({ plan, onSelectPlan }) => {
  const handleStripePayment = () => {
      console.log(`Procesando pago para: ${plan.name}`);
      onSelectPlan();
  };

  return (
    <button onClick={handleStripePayment}>
      Comprar {plan.name}
    </button>
  );
};

StripeBuyButton.propTypes = {
    plan: PropTypes.shape({
      name: PropTypes.string.isRequired,
      // define otras propiedades de 'plan' que utilices
    }).isRequired,
    onSelectPlan: PropTypes.func.isRequired,
  };

export default StripeBuyButton;