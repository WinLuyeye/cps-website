import React from "react";
import {
  FaCreditCard,
  FaCogs,
  FaClipboardList,
  FaUserShield,
  FaTruck,
  FaQrcode,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaCreditCard size={40} className="text-blue-500" />,
      title: "Vente des cartes",
      description:
        "Obtenez rapidement vos cartes de stationnement rechargeables pour accéder à nos services en toute simplicité.",
    },
    {
      icon: <FaCogs size={40} className="text-blue-500" />,
      title: "Vente des unités",
      description:
        "Rechargez votre solde d’unités de stationnement directement via l’application ou chez nos points de vente partenaires.",
    },
    {
      icon: <FaClipboardList size={40} className="text-blue-500" />,
      title: "Cadre logique",
      description:
        "Une gestion transparente et structurée de votre consommation, avec un historique détaillé accessible à tout moment.",
    },
    {
      icon: <FaUserShield size={40} className="text-blue-500" />,
      title: "Assistance Agent",
      description:
        "Nos agents sur le terrain sont disponibles pour vous orienter, vous aider à stationner ou répondre à vos besoins.",
    },
    {
      icon: <FaTruck size={40} className="text-blue-500" />,
      title: "Dépannage Express",
      description:
        "Un souci en route ? Nos équipes interviennent rapidement pour vous aider à repartir sans stress.",
    },
    {
      icon: <FaQrcode size={40} className="text-blue-500" />,
      title: "Parking Enclos",
      description:
        "Accédez à des parkings sécurisés et bien entretenus pour une tranquillité d’esprit maximale.",
    },
  ];

  return (
    <section className="bg-blue-500 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Une gamme de service intelligent pour vous accompagner à chaque pas.
        </h2>
        <p className="text-lg mb-12">
          Des solutions modernes et accessibles pour faciliter la vie des
          automobilistes, de la recherche de stationnement à l&apos;assistance
          sur le terrain.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        En savoir plus
      </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;