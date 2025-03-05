import React from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      logo: "/logos/dailymart.png", // Remplacez par vos chemins d'images
      name: "Mason Saunders",
      position: "Business Manager",
      text: "Habitant nascetur cras dolor tempor nisi urna. Tincidunt parturient eleifend per sagittis arcu consectetur euismod massa lorem proin sem. Mus maximus finibus praesent lacus cubilia.",
    },
    {
      logo: "/logos/clicknbuy.png",
      name: "Amelia Thomson",
      position: "CEO",
      text: "Habitant nascetur cras dolor tempor nisi urna. Tincidunt parturient eleifend per sagittis arcu consectetur euismod massa lorem proin sem. Mus maximus finibus praesent lacus cubilia.",
    },
    {
      logo: "/logos/bakebun.png",
      name: "Madison Palmer",
      position: "Headstore",
      text: "Habitant nascetur cras dolor tempor nisi urna. Tincidunt parturient eleifend per sagittis arcu consectetur euismod massa lorem proin sem. Mus maximus finibus praesent lacus cubilia.",
    },
    {
      logo: "/logos/fixcom.png",
      name: "Toby Johnson",
      position: "Operational Manager",
      text: "Habitant nascetur cras dolor tempor nisi urna. Tincidunt parturient eleifend per sagittis arcu consectetur euismod massa lorem proin sem. Mus maximus finibus praesent lacus cubilia.",
    },
    {
      logo: "/logos/egao.png",
      name: "Quinn Morgan",
      position: "Owner & Chef",
      text: "Habitant nascetur cras dolor tempor nisi urna. Tincidunt parturient eleifend per sagittis arcu consectetur euismod massa lorem proin sem. Mus maximus finibus praesent lacus cubilia.",
    },
    {
      logo: "/logos/fluenca.png",
      name: "Jamir O’donnell",
      position: "Business Manager",
      text: "Habitant nascetur cras dolor tempor nisi urna. Tincidunt parturient eleifend per sagittis arcu consectetur euismod massa lorem proin sem. Mus maximus finibus praesent lacus cubilia.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl font-bold text-blue-500 uppercase">Témoignage</h2>
          <h3 className="text-4xl font-extrabold text-white mt-2">
            Ce que d’ils disent de nous
          </h3>
          <p className="text-gray-400 text-lg mt-4">
          Découvrez les retours et témoignages de nos utilisateurs satisfaits. Leur expérience et leur confiance 
          témoignent de notre engagement à offrir des services de qualité. Votre avis compte pour nous ! 🌟
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.name} logo`}
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-blue-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
              <p className="text-gray-800 mt-4">“ {testimonial.text} ”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
