// "use client";
// import React from "react";
// import Image from "next/image";
// import agentImage from "../../../public/apropos/WomenCps.png"; // Remplacez par le chemin réel de l'image de droite

// const HeroSection = () => {
//   return (
//     <section className="bg-black text-white py-16 relative">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
//         {/* Section gauche : Texte */}
//         <div className="lg:w-1/2 space-y-6 px-4 lg:px-0">
//           <h3 className="text-blue-500 uppercase font-semibold text-sm">
//             Qui sommes-nous
//           </h3>
//           <h1 className="text-4xl font-bold leading-tight">
//             Nous sommes Congo Parking Service
//           </h1>
//           <p className="text-gray-300">
//             Nous gérons les espaces de stationnement sur chaussée ou en ouvrage
//             dans le but de faciliter l'accès aux lieux de grande affluence à
//             tous les usagers grâce à notre gamme des produits.
//           </p>
//           {/* Liste des services */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <h4 className="text-blue-500 font-semibold">
//                 Unité stationnement
//               </h4>
//               <p className="text-gray-300 text-sm">
//                 Les unités de stationnement sont des crédits de temps de parking
//                 dont la valeur est déterminée en fonction des tarifs en vigueur.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-blue-500 font-semibold">
//                 Application Mobile
//               </h4>
//               <p className="text-gray-300 text-sm">
//                 FindPark offre confort et flexibilité à l’automobiliste qui ne
//                 paie que la durée de stationnement effectivement consommée.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-blue-500 font-semibold">Call center</h4>
//               <p className="text-gray-300 text-sm">
//                 À n'importe quelle étape du parcours de stationnement, nos
//                 opérateurs sont à l'écoute.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-blue-500 font-semibold">Revendeur</h4>
//               <p className="text-gray-300 text-sm">
//                 La carte et les unités de stationnement peuvent être achetées
//                 auprès du revendeur le plus proche de la zone de stationnement
//                 payant.
//               </p>
//             </div>
//           </div>
//           {/* Bouton */}
//           <button className="bg-blue-600 text-white px-6 py-3 rounded mt-4 hover:bg-blue-700">
//             TELECHARGEZ FINDPARK
//           </button>
//         </div>

//         {/* Section droite : Image */}
//         <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
//           <div className="relative z-10">
//             <Image
//               src={agentImage}
//               alt="Agent Congo Parking Service"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-6 py-3 z-20 transform translate-x-12 -translate-y-12">
//             <h3 className="text-2xl font-bold">15+</h3>
//             <p className="text-sm">Years of Experience</p>
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent rounded-lg -z-10"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import agentImage from "../../../public/apropos/Container (1).png"; // Remplacez par le chemin réel de votre image

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Section gauche : Texte */}
        <div className="lg:w-1/2 space-y-6 px-4 lg:px-0">
          <h3 className="text-blue-500 uppercase font-semibold text-sm">
            Qui sommes-nous
          </h3>
          <h1 className="text-4xl font-bold leading-tight">
            Nous sommes Congo Parking Service
          </h1>
          <p className="text-gray-300">
            Nous gérons les espaces de stationnement sur chaussée ou en ouvrage
            dans le but de faciliter l'accès aux lieux de grande affluence à
            tous les usagers grâce à notre gamme des produits.
          </p>
          {/* Liste des services */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-blue-500 font-semibold">
                Unité stationnement
              </h4>
              <p className="text-gray-300 text-sm">
                Les unités de stationnement sont des crédits de temps de parking
                dont la valeur est déterminée en fonction des tarifs en vigueur.
              </p>
            </div>
            <div>
              <h4 className="text-blue-500 font-semibold">
                Application Mobile
              </h4>
              <p className="text-gray-300 text-sm">
                FindPark offre confort et flexibilité à l’automobiliste qui ne
                paie que la durée de stationnement effectivement consommée.
              </p>
            </div>
            <div>
              <h4 className="text-blue-500 font-semibold">Call center</h4>
              <p className="text-gray-300 text-sm">
                À n'importe quelle étape du parcours de stationnement, nos
                opérateurs sont à l'écoute.
              </p>
            </div>
            <div>
              <h4 className="text-blue-500 font-semibold">Revendeur</h4>
              <p className="text-gray-300 text-sm">
                La carte et les unités de stationnement peuvent être achetées
                auprès du revendeur le plus proche de la zone de stationnement
                payant.
              </p>
            </div>
          </div>
          {/* Bouton */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded mt-4 hover:bg-blue-700">
            TELECHARGEZ FINDPARK
          </button>
        </div>

        {/* Section droite : Image avec Badge */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center">
          {/* Conteneur image et badge */}
          <div className="relative">
            {/* Image principale */}
            <Image
              src={agentImage}
              alt="Agent Congo Parking Service"
              className="rounded-lg"
            />
            {/* Badge */}
            {/* <div className="absolute top-1/4 right-[-2.5rem] bg-white text-blue-600 rounded-full px-6 py-4 shadow-lg text-center transform">
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-sm">Years of Experience</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

