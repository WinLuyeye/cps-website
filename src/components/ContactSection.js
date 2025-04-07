import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative py-6">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ContactImage.png"  // Remplacez par le chemin de votre image
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
          Parquez plus rapidement et <br /> 
          de manière plus sécurisée avec <br />
          notre solution intelligente de parking.
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <Link href="/contact" className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Contactez-nous
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
