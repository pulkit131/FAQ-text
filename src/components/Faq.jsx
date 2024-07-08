// src/components/Faq.jsx
import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <h2 className="faq-question">How long does it take for my products to be made and delivered?</h2>
      <p className="faq-answer">
      Production and delivery time varies depending on the item(s) ordered, your customisation options and your location. We always aim to deliver within 4 weeks from the date of your order.
      </p>

      <h2 className="faq-question">How will I know how my order is progressing?</h2>
      <p className="faq-answer">
        Once your payment is received, your purchase is sent directly to the workshop. 
        So that you can monitor the progress of your purchase you will receive three 
        emails regarding the status of your order. You will be alerted by email at 
        the following stages:
        <br />
        <br />
        Once your payment has been accepted
        <br />
        Once your order is dispatched from our manufacturer into your chosen address
        <br />
        Once your order has been delivered.
      </p>

      <h2 className="faq-question">What happens if I don’t like the product once it arrives?</h2>
      <p className="faq-answer">
      We’re confident you will like your product But just in case, we have a Return for Any Reason policy. If you are unhappy, simply contact us to arrange for your return.
      </p>

      <h2 className="faq-question">What does “Return for Any Reason” mean?</h2>
      <p className="faq-answer">
      If you decide after receiving delivery of your product(s) you wish to return the product(s) for any reason, you can.
      </p>
    </div>
  );
};

export default Faq;
