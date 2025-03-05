// "use client";
// import React from "react";
// import Image from "next/image";


// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Dan Kabwe",
//       role: "Responsable Charroi",
//       image: "/public/team/img__0004_Layer-4.jpg.png", // Remplacez par le chemin de l'image
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Rabbi Linduku",
//       role: "Contrôle",
//       image: "/public/team/img__0003_Layer-5.jpg.png", // Remplacez par le chemin de l'image
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Tutu Ntumba",
//       role: "Chief Commercial Officer",
//       image: "/public/team/img__0006_Layer-2.jpg.png", // Remplacez par le chemin de l'image
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Libby Gallagher",
//       role: "Chief People Officer",
//       image: "/public/team/img__0007_Layer-1.jpg.png", // Remplacez par le chemin de l'image
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//   ];

//   return (
//     <section className="bg-gray-50 relative py-16 overflow-hidden">
//       {/* Design circulaire en arrière-plan */}
//       <div className="absolute inset-0 -z-10 flex justify-center items-center">
//         <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10"></div>
//       </div>

//       <div className="container mx-auto text-center px-4">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Le travail d'équipe rend le rêve possible.
//         </h1>
//         <p className="text-gray-600 mb-12">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//           tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
//                 <p className="text-gray-500 mb-4">{member.role}</p>
//                 {/* Réseaux sociaux */}
//                 <div className="flex justify-center gap-4">
//                   <a
//                     href={member.socials.facebook}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                   >
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a
//                     href={member.socials.linkedin}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                   >
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                   <a
//                     href={member.socials.email}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                   >
//                     <i className="fas fa-envelope"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

// "use client";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Dan Kabwe",
//       role: "Responsable Charroi",
//       image: "/team/img__0004_Layer-4.jpg.png",
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Rabbi Linduku",
//       role: "Contrôle",
//       image: "/team/img__0003_Layer-5.jpg.png",
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Tutu Ntumba",
//       role: "Chief Commercial Officer",
//       image: "/team/img__0003_Layer-5.jpg.png",
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//     {
//       name: "Libby Gallagher",
//       role: "Chief People Officer",
//       image: "/team/img__0006_Layer-2.jpg.png",
//       socials: {
//         facebook: "#",
//         linkedin: "#",
//         email: "#",
//       },
//     },
//   ];

//   return (
//     <section className="bg-gray-50 relative py-16 overflow-hidden">
//       <div className="absolute inset-0 -z-10 flex justify-center items-center">
//         <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-10"></div>
//       </div>

//       <div className="container mx-auto text-center px-4">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Le travail d'équipe rend le rêve possible.
//         </h1>
//         <p className="text-gray-600 mb-12">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//           tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
//                 <p className="text-gray-500 mb-4">{member.role}</p>
//                 <div className="flex justify-center gap-4">
//                   <a
//                     href={member.socials.facebook}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                   >
//                     <FontAwesomeIcon icon={faFacebookF} />
//                   </a>
//                   <a
//                     href={member.socials.linkedin}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                   >
//                     <FontAwesomeIcon icon={faLinkedinIn} />
//                   </a>
//                   <a
//                     href={member.socials.email}
//                     className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
//                   >
//                     <FontAwesomeIcon icon={faEnvelope} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dan Kabwe",
      role: "Responsable Charroi",
      image: "/team/img__0004_Layer-4.jpg.png",
      socials: {
        facebook: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      name: "Rabbi Linduku",
      role: "Contrôle",
      image: "/team/img__0003_Layer-5.jpg.png",
      socials: {
        facebook: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      name: "Tutu Ntumba",
      role: "Chief Commercial Officer",
      image: "/team/img__0003_Layer-5.jpg.png",
      socials: {
        facebook: "#",
        linkedin: "#",
        email: "#",
      },
    },
    {
      name: "Libby Gallagher",
      role: "Chief People Officer",
      image: "/team/img__0006_Layer-2.jpg.png",
      socials: {
        facebook: "#",
        linkedin: "#",
        email: "#",
      },
    },
  ];

  return (
    <section
      className="bg-gray-50 relative py-16 overflow-hidden"
      style={{
        backgroundImage: `url('/images/pattern.png')`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto", // Ajustez si nécessaire (e.g., "contain" ou "cover")
      }}
    >
      {/* Design circulaire en arrière-plan */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-80"></div>
      </div>

      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Le travail d'équipe rend le rêve possible.
        </h1>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.socials.facebook}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href={member.socials.email}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
