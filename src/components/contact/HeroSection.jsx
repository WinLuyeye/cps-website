

"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid"; // Correct

//Components
import SocialMediaSection from "../../components/contact/SocialMediaSection"

// Schéma de validation Yup
const schema = yup.object().shape({
  name: yup.string().required("Le nom est obligatoire"),
  company: yup.string().required("Le nom de l'entreprise est obligatoire"),
  phone: yup
    .string()
    .required("Le téléphone est obligatoire")
    .matches(/^\+?[0-9\s\-]+$/, "Numéro de téléphone invalide"),
  email: yup
    .string()
    .email("Veuillez entrer une adresse e-mail valide")
    .required("L'e-mail est obligatoire"),
  subject: yup.string().required("Le sujet est obligatoire"),
  message: yup.string().required("Le message est obligatoire"),
});

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = async (data) => {
    console.log("Formulaire soumis : ", data);
    alert("Message envoyé avec succès !");
  };

  return (
    <section className="relative bg-blue-700 text-white">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ContactImage.png" // Remplacez par le chemin de votre image
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">Contactez-nous</h2>
          <p className="mt-4 text-lg lg:text-xl">
            Congo Parking Service prêt à vous offrir un service de qualité en fonction de vos besoins.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white text-gray-800 rounded-lg shadow-lg p-8 lg:p-12">
          {/* Bloc de contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Entrer en contact</h3>
            <p className="text-gray-600 mb-6">
            Connectez-vous avec nous pour toute question ou besoin d'assistance. Que ce soit pour des informations supplémentaires sur nos services, une demande de support ou simplement pour partager vos retours, notre équipe est disponible pour vous répondre rapidement et efficacement.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Siège social</h4>
                  <p className="text-gray-600">01, OUA, Concession Procoki, GB, Commune de Ngaliema</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Envoyez-nous un e-mail</h4>
                  <p className="text-gray-600">info@congoparkingservice.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Appelez-nous</h4>
                  <p className="text-gray-600">Call center: 49 33 33</p>
                </div>
              </li>
            </ul>

            {/* Section réseaux sociaux */}
            <SocialMediaSection/>
          </div>

          {/* Formulaire */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    {...register("name")}
                    className={`w-full p-4 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Entreprise"
                    {...register("company")}
                    className={`w-full p-4 border ${
                      errors.company ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-2">{errors.company.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Téléphone"
                    {...register("phone")}
                    className={`w-full p-4 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                    className={`w-full p-4 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Sujet"
                  {...register("subject")}
                  className={`w-full p-4 border ${
                    errors.subject ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  {...register("message")}
                  className={`w-full p-4 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  rows="5"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
