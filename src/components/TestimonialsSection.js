import React from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: "🧑‍💼", // Remplacez par vos chemins d'images
      name: "Mason Saunders",
      position: "Business Manager",
      text: "Depuis que j’utilise FindPark, mes trajets sont beaucoup plus fluides. L’application est intuitive, les paiements sont simples, et je gagne un temps fou pour mes rendez-vous professionnels.",
    },
    {
      logo: "👩‍💼",
      name: "Amelia Thomson",
      position: "CEO",
      text: "Une solution brillante pour les automobilistes pressés. L’accès aux parkings est rapide, l’état de compte clair, et les recharges ultra pratiques. Je recommande à 100 %.",
    },
    {
      logo: "👩‍🔧",
      name: "Responsable de magasin",
      position: "Headstore",
      text: "FindPark m’a simplifié la vie. J’ai toujours une place, je peux suivre mes consommations en détail, et le service client est top. C’est devenu indispensable.",
    },
    {
      logo: "👨‍💼",
      name: "Toby Johnson",
      position: "Operational Manager",
      text: "Le système de transfert d’unités est juste génial. Je peux facilement partager des unités avec mes collègues sans stress. L’app est rapide et fiable.",
    },
    {
      logo: "👨‍🍳",
      name: "Quinn Morgan",
      position: "Owner & Chef",
      text: "Grâce à FindPark, je n’ai plus à tourner en rond pour me garer. Tout est clair, fluide, et l’historique me permet de mieux gérer mes dépenses.",
    },
    {
      logo: "👨‍💼",
      name: "Jamir O’donnell",
      position: "Business Manager",
      text: "Une application complète, simple à utiliser et parfaitement pensée pour les professionnels comme moi. Je recommande vivement.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-blue-500 uppercase">
            💬 Témoignages
          </h2>
          <h3 className="text-4xl font-extrabold text-white mt-2">
            Ce qu’ils disent de nous
          </h3>
          <p className="text-gray-400 text-lg mt-4">
            Découvrez les retours authentiques de nos utilisateurs satisfaits.
            Leur expérience est le reflet de notre engagement à simplifier la
            mobilité urbaine.
            <span className="font-bold ">
              Parce que votre satisfaction est notre plus grande réussite. 🌟
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 flex justify-center">
                {testimonial.logo ? (
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-xl text-white">
                    {testimonial.logo}
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-xl text-white">
                    {testimonial.name[0]}
                  </div>
                )}
              </div>
              <h4 className="text-xl font-semibold text-blue-900 text-center">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 text-center">
                {testimonial.position}
              </p>
              <p className="text-gray-800 mt-4 italic text-center">
                “ {testimonial.text} ”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;