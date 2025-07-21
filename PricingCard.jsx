import React from 'react';
import './PricingCard.css';

// Reusable PricingCard Component
const PricingCard = ({ 
  title, 
  price, 
  features = [], 
  buttonText = "Start Trial", 
  buttonClass = "", 
  isFeatured = false,
  onButtonClick 
}) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(title);
    }
  };

  return (
    <div className={`pricing${isFeatured ? ' featured' : ''}`}>
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button 
        className={`btn ${buttonClass}`.trim()} 
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

// Container component to render multiple pricing cards
const PricingContainer = ({ plans = [] }) => {
  const handlePlanSelection = (planName) => {
    alert(`You selected the ${planName} plan!`);
    // Here you could redirect to a signup page, call an API, etc.
  };

  return (
    <div className="pricing-container">
      {plans.map((plan, index) => (
        <PricingCard
          key={index}
          title={plan.title}
          price={plan.price}
          features={plan.features}
          buttonText={plan.buttonText}
          buttonClass={plan.buttonClass}
          isFeatured={plan.isFeatured}
          onButtonClick={handlePlanSelection}
        />
      ))}
    </div>
  );
};

// Example usage component
const PricingPage = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "$9.99 /month",
      features: ["1 GB Storage", "Basic Support", "All Core Features"],
      buttonText: "Start Trial",
      buttonClass: "",
      isFeatured: false
    },
    {
      title: "Premium Plan",
      price: "$19.99 /month",
      features: [
        "10 GB Storage", 
        "Priority Support", 
        "All Core Features", 
        "Advanced Analytics", 
        "Custom Integrations"
      ],
      buttonText: "Choose Premium",
      buttonClass: "premium",
      isFeatured: true
    },
    {
      title: "Enterprise Plan",
      price: "$49.99 /month",
      features: [
        "Unlimited Storage",
        "24/7 Dedicated Support",
        "All Features",
        "Advanced Analytics",
        "Custom Integrations",
        "API Access",
        "White Label Options"
      ],
      buttonText: "Contact Sales",
      buttonClass: "enterprise",
      isFeatured: false
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Plan</h1>
      <PricingContainer plans={pricingPlans} />
    </div>
  );
};

export { PricingCard, PricingContainer, PricingPage };
export default PricingCard;