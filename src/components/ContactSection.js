import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative py-6">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ContactImage.png" // Remplacez par le chemin de votre image
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 z-5"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-3xl mx-auto px-8 text-white">
        <h2 className="text-4xl font-extrabold leading-tight">
          🚗 Parquez plus rapidement et de manière plus sécurisée avec notre
          solution intelligente de parking
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Grâce à FindPark, la recherche de stationnement devient une expérience
          rapide et sans stress. Notre technologie innovante vous aide à trouver
          une place disponible en temps réel, vous permettant ainsi de gagner du
          temps et de vous garer de manière sécurisée. Simplifiez vos
          déplacements et profitez d&apos;une solution de stationnement conçue
          pour vous offrir une tranquillité d&apos;esprit, à chaque étape de
          votre trajet.
        </p>
        <Link
          href="/contact"
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Contactez-nous
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
