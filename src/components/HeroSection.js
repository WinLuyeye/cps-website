import React from "react";
import Image from "next/image";
import AppImage from "../../public/AppImage.png"; // Remplacez par votre image
import { FaBuilding, FaUser } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texte principal */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide">
            Congo Parking Service
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="block">Stationnez où vous voulez,</span>
            <span className="block">Quand vous voulez.</span>
          </h1>
          <p className="text-lg text-gray-200">
            Oubliez les contraintes du stationnement ! Congo Parking Service vous
            permet de réserver votre place de parking en quelques clics grâce à
            son application. Accédez à des milliers de parkings sécurisés à Kinshasa.
            Téléchargez dès maintenant et bénéficiez de nos offres sur mesure.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.cpspark.lipopo&hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded font-bold inline-block transition-transform transform hover:scale-105"
          >
            TÉLÉCHARGER FINDPARK
          </Link>
        </div>

        {/* Image mobile */}
        <div className="relative">
          <Image
            src={AppImage}
            alt="Aperçu de l'application"
            className="relative z-10"
            width={450}
            height={500}
            priority
          />
        </div>
      </div>

      {/* Statistiques */}
      <div className="bg-blue-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center text-center">
          <div className="flex items-center space-x-4">
            <FaBuilding className="text-yellow-400" size={40} />
            <div>
              <p className="text-3xl font-bold">2000+</p>
              <p className="text-sm">Sociétés enregistrées</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaUser className="text-yellow-400" size={40} />
            <div>
              <p className="text-3xl font-bold">850K+</p>
              <p className="text-sm">Clients actifs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
