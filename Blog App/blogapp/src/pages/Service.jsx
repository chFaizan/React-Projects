
import React from 'react';
import { FaPaintBrush, FaCube, FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const services = [
  {
    icon: <FaPaintBrush className="text-blue-600 text-5xl" />,
    title: "Refreshing Design",
    description: "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
  },
  {
    icon: <SiTailwindcss className="text-blue-600 text-5xl" />,
    title: "Based on Tailwind CSS",
    description: "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
  },
  {
    icon: <FaCube className="text-blue-600 text-5xl" />,
    title: "300+ Components",
    description: "We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics.",
  },
  {
    icon: <FaCode className="text-blue-600 text-5xl" />,
    title: "Clean Code",
    description: "We write optimized and well-structured code that enhances performance and maintainability.",
  },
  {
    icon: <FaMobileAlt className="text-blue-600 text-5xl" />,
    title: "Responsive Design",
    description: "Our designs adapt seamlessly to all devices, providing a smooth user experience everywhere.",
  },
  {
    icon: <FaRocket className="text-blue-600 text-5xl" />,
    title: "Fast Performance",
    description: "Optimized solutions that ensure quick load times and smooth interactions for users.",
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <h2 className="service-heading">Our Service</h2>
      </div>

      <section className="services-section">
        <h4 className="section-header">Our Services</h4>
        <h2 className="section-title">What We Offer</h2>
        <p className="section-description">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">
                {React.cloneElement(service.icon, { className: 'service-icon' })}
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;