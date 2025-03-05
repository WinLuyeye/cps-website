import React from "react";
import Image from "next/image";

const IntegrationSection = () => {
  const features = [
    {
      title: "État de compte",
      description:
        "Lorem imperdiet ut aptent felis molestie pellentesque euismod ex turpis odio nascetur sem massa.",
    },
    {
      title: "Recharge Unité",
      description:
        "Lorem imperdiet ut aptent felis molestie pellentesque euismod ex turpis odio nascetur sem massa.",
    },
    {
      title: "Historique transactions",
      description:
        "Lorem imperdiet ut aptent felis molestie pellentesque euismod ex turpis odio nascetur sem massa.",
    },
    {
      title: "Transfert unités",
      description:
        "Lorem imperdiet ut aptent felis molestie pellentesque euismod ex turpis odio nascetur sem massa.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Accès facile et intégrations
        </h2>
        <p className="text-gray-600 text-lg mb-12">
        Profitez d'une expérience fluide grâce à nos applications, conçues pour une accessibilité optimale et une 
        intégration parfaite dans votre quotidien. Simplifiez vos démarches en un seul clic ! 🚀
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Cartes à gauche */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:w-1/3">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 h-6 w-6 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
          {/* Image centrale */}
          <div className="lg:w-1/3">
            <Image
              src="/iphone_img.png.png" // Remplacez par le chemin correct de votre image
              alt="Mockup téléphone"
              width={350} // Spécifiez une largeur d'image
              height={600} // Spécifiez une hauteur d'image
              className="mx-auto"
            />
          </div>
          {/* Cartes à droite */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:w-1/3">
            {features.slice(2).map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500 h-6 w-6 rounded-full"></div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
