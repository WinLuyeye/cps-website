import React from "react";
import { FaCreditCard, FaCogs, FaClipboardList, FaUserShield, FaTruck, FaQrcode } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCreditCard size={40} className="text-blue-500" />,
      title: "Vente des cartes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaCogs size={40} className="text-blue-500" />,
      title: "Vente des unités",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaClipboardList size={40} className="text-blue-500" />,
      title: "Cadre logique",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaUserShield size={40} className="text-blue-500" />,
      title: "Assistance Agent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaTruck size={40} className="text-blue-500" />,
      title: "Dépannage Express",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaQrcode size={40} className="text-blue-500" />,
      title: "Parking Enclos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <section className="bg-blue-500 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Une gamme de service intelligent pour vous accompagner à chaque pas.
        </h2>
        <p className="text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                En savoir plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
