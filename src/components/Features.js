import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Services</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Service 1</h3>
          <p>Manage my members of my company 1.</p>
        </div>
        <div className="card">
          <h3>Service 2</h3>
          <p>Maintain and ensurely my unit of the trucks are good</p>
        </div>
        <div className="card">
          <h3>Service 3</h3>
          <p>Maintainance of my units of trucks</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
