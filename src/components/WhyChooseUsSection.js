import React from "react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Texte */}
        <div>
          <h3 className="text-blue-500 text-lg font-bold uppercase mb-4">
            Pourquoi nous choisir
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Une solution intelligente pour se garer sans stress.
          </h2>
          <p className="text-gray-600 mb-8">
            Grâce à FindPark, trouvez facilement une place de parking, payez
            uniquement ce que vous consommez, et gérez tout depuis votre
            smartphone. Plus besoin de tourner en rond ou de stresser pour des
            paiements imprévus.
          </p>
          <div className="space-y-6">
            {/* Élément 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  Facile à installer
                </h4>
                <p className="text-gray-600">
                  Téléchargez l’application en quelques clics et commencez à
                  profiter d’une expérience de stationnement simplifiée. Une
                  interface intuitive, accessible à tous les conducteurs.
                </p>
              </div>
            </div>
            {/* Élément 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  Transactions sécurisées
                </h4>
                <p className="text-gray-600">
                  Payez votre stationnement directement via l’application avec
                  des méthodes de paiement fiables et cryptées. Vos données sont
                  protégées à chaque instant.
                </p>
              </div>
            </div>
            {/* Élément 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">✓</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  Assistance 24/7J
                </h4>
                <p className="text-gray-600">
                  Notre support client est toujours à votre écoute, que ce soit
                  pour un problème technique, une question ou une réclamation.
                  Nous sommes là pour vous accompagner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* <div className="absolute bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full w-96 h-96 -top-16 -right-16"></div> */}
          {/* <div className="absolute bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full w-96 h-96 -top-16 -right-16"></div> */}
          <Image
            src="/mockup-phone.png" // Placez l'image dans le dossier /public
            alt="Mockup App FindPark"
            width={400} // Ajustez selon la taille souhaitée
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
