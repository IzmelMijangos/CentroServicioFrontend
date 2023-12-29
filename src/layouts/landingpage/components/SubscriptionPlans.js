import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeBuyButton from './StripeBuyButton';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const planDetails = [
    { name: 'Plan Básico', price: '5.99' },
    { name: 'Plan Avanzado', price: '9.99' },
    { name: 'Plan Premium', price: '14.99' }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    navigate('/authentication/sign-up', { state: {  plan } }); 
  };

  return (
    <div className="plans-container">
      {planDetails.map((plan) => (
        <div key={plan.name} className="plan-card">
          <h3>{plan.name}</h3>
          <p>Precio: {plan.price} al mes</p>
          <StripeBuyButton plan={plan} onSelectPlan={() => handleSelectPlan(plan)} />
        </div>
      ))}
    </div>
  );
};

export default Plans;