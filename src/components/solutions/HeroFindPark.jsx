import React from "react";
import Image from "next/image";
import SectionImage from "../../../public/apropos/HeroSectionPark.png"; // Remplacez par le chemin correct de votre image

function HeroFindPark() {
  return (
    <section className="relative bg-blue-900 mb-8">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src={SectionImage}
          alt="Parking"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 lg:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Des solutions sur-mesure pour une  <span className="text-yellow-400">gestion</span> de parking fluide
        </h2>
        <p className="mt-6 text-sm md:text-base lg:text-lg text-white max-w-3xl leading-relaxed">
          Découvrez nos solutions digitales innovantes pour révolutionner votre
          gestion de parking. Simplifiez la réservation, le paiement, le
          contrôle d'accès et le dépannage grâce à nos plateformes intuitives.
          Gagnez en efficacité, réduisez vos coûts et améliorez l'expérience
          client.
        </p>
      </div>
    </section>
  );
}

export default HeroFindPark;
