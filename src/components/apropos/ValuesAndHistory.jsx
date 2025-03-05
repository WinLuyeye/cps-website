// "use client";
// import React from "react";
// import Image from "next/image";
// import illustration from "../../../public/apropos/Illustration.png"; // Remplacez par le chemin de votre illustration

// const ValuesAndHistory = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-0">
//         {/* Colonne gauche : Valeurs */}
//         <div>
//           <h3 className="text-blue-500 uppercase font-semibold text-sm mb-4">
//             Nos valeurs
//           </h3>
//           <h1 className="text-4xl font-bold leading-tight mb-6">
//             Intégrité dans la collaboration
//             <br />
//             Disponibilité
//             <br />
//             Service de qualité optimale
//           </h1>
//           <p className="text-gray-600 mb-4">
//             Nous prônons <span className="font-bold">l'intégrité de nos collaborateurs</span>.
//           </p>
//           <p className="text-gray-600 mb-4">
//             Nous agissons avec <span className="font-bold">une grande disponibilité</span> dans la
//             prise en charge des besoins de nos clients et partenaires.
//           </p>
//           <p className="text-gray-600 mb-6">
//             Nous veillons à un <span className="font-bold">service de qualité optimale</span> et
//             orienté vers les standards professionnels les plus élevés de notre
//             industrie.
//           </p>
//           {/* Illustration */}
//           <Image
//             src={illustration}
//             alt="Illustration collaboration"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Colonne droite : Histoire */}
//         <div>
//           <h3 className="text-blue-500 uppercase font-semibold text-sm mb-4">
//             Notre histoire
//           </h3>
//           <h1 className="text-4xl font-bold leading-tight mb-6">
//             Nous nous engageons à vous offrir une excellente expérience
//           </h1>
//           {/* Timeline */}
//           <div className="space-y-8">
//             <div className="flex items-start">
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
//                 2013
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">
//                   Launch the Kassopay Gateway
//                 </h4>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
//                 2014
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Open new branch at Bandung</h4>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
//                 2017
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Launch Mobile App Kassopay</h4>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
//                 2020
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Winning Digital Award 2020</h4>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full mr-4">
//                 2023
//               </div>
//               <div>
//                 <h4 className="font-bold text-lg">Touch 2M+ Member Active</h4>
//                 <p className="text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValuesAndHistory;

"use client";
import React from "react";
import Image from "next/image";
import illustration from "../../../public/apropos/Illustration.png"; // Remplacez par le chemin de votre illustration

const ValuesAndHistory = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-0">
        {/* Colonne gauche : Valeurs */}
        <div>
          <h3 className="text-blue-500 uppercase font-semibold text-sm mb-4">
            Nos valeurs
          </h3>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Intégrité dans la collaboration
            <br />
            Disponibilité
            <br />
            Service de qualité optimale
          </h1>
          <p className="text-gray-600 mb-4">
            Nous prônons <span className="font-bold">l'intégrité de nos collaborateurs</span>.
          </p>
          <p className="text-gray-600 mb-4">
            Nous agissons avec <span className="font-bold">une grande disponibilité</span> dans la
            prise en charge des besoins de nos clients et partenaires.
          </p>
          <p className="text-gray-600 mb-6">
            Nous veillons à un <span className="font-bold">service de qualité optimale</span> et
            orienté vers les standards professionnels les plus élevés de notre
            industrie.
          </p>
          {/* Illustration */}
          <Image
            src={illustration}
            alt="Illustration collaboration"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Colonne droite : Histoire */}
        <div>
          <h3 className="text-blue-500 uppercase font-semibold text-sm mb-4">
            Notre histoire
          </h3>
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Nous nous engageons à vous offrir une excellente expérience
          </h1>
          {/* Timeline */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg mr-4">
                2013
              </div>
              <div>
                <h4 className="font-bold text-lg">
                  Launch the Kassopay Gateway
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg mr-4">
                2014
              </div>
              <div>
                <h4 className="font-bold text-lg">Open new branch at Bandung</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg mr-4">
                2017
              </div>
              <div>
                <h4 className="font-bold text-lg">Launch Mobile App Kassopay</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg mr-4">
                2020
              </div>
              <div>
                <h4 className="font-bold text-lg">Winning Digital Award 2020</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded-lg mr-4">
                2023
              </div>
              <div>
                <h4 className="font-bold text-lg">Touch 2M+ Member Active</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesAndHistory;
