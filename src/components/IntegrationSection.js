import React from "react";
import Image from "next/image";

const IntegrationSection = () => {
  const features = [
    {
      icon: "📊",
      title: "État de compte",
      description:
        "Consultez à tout moment le solde de vos unités de stationnement, vos derniers paiements, et les détails de vos consommations. Une transparence totale à portée de main.",
    },
    {
      icon: "⚡",
      title: "Recharge Unité",
      description:
        "Ajoutez facilement des unités de stationnement via carte, mobile money ou carte bancaire. Le tout, en quelques secondes, où que vous soyez.Plus besoin de chercher un point de vente.",
    },
    {
      icon: "📱",
      title: "Historique transactions",
      description:
        "Visualisez en temps réel toutes vos fonctionnalités sur notre application intuitive. Naviguez aisément entre l’historique, la recharge, et les options de transfert.Un design épuré pour une meilleure prise en main.",
    },
    {
      icon: "📑",
      title: "Transfert unités",
      description:
        "Gardez un œil sur toutes vos activités : paiements, recharges, transferts. Chaque mouvement est enregistré pour un suivi précis.Vous contrôlez tout, en toute simplicité.",
    },
    {
      icon: "🔁",
      title: "Transfert unités",
      description:
        "Partagez vos unités de stationnement avec vos proches ou collègues en un clic. Un outil pratique pour les familles et les professionnels.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Accès facile et intégrations
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Profitez d’une expérience fluide grâce à nos applications mobiles et
          web, pensées pour une accessibilité optimale. Gagnez du temps, suivez
          vos opérations et gérez votre stationnement en toute simplicité.
          <span className="font-bold ">
            Une seule app, une infinité de possibilités. 🚀
          </span>
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
                  <div className="h-6 w-6 rounded-full">{feature.icon}</div>
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
                  <div className="h-6 w-6 rounded-full">{feature.icon}</div>
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
