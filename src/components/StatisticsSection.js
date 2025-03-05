"use client";
import React, { useState, useEffect } from "react";

const StatisticsSection = () => {
  // Données dynamiques des statistiques
  const [statistics, setStatistics] = useState([
    { value: "2M+", label: "Clients Actifs" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "4.7", label: "Évaluation des utilisateurs" },
    { value: "15+", label: "Années d'expérience" },
  ]);

  // Exemple : Simuler une mise à jour dynamique via une API
  useEffect(() => {
    // Vous pouvez remplacer ceci par un appel d'API réel pour charger les données
    const fetchStatistics = async () => {
      const dynamicData = [
        { value: "2.5M+", label: "Clients Actifs" },
        { value: "99%", label: "Clients satisfaits" },
        { value: "4.8", label: "Évaluation des utilisateurs" },
        { value: "16+", label: "Années d'expérience" },
      ];
      setTimeout(() => setStatistics(dynamicData), 3000); // Simulation d'un délai
    };

    fetchStatistics();
  }, []);

  return (
    <section className="bg-white text-black py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statistics.map((stat, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-4xl font-bold text-blue-500">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
