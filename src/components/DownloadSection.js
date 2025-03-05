import React from "react";
import Image from "next/image";
import Link from "next/link";
// import googlePlayBadge from "../public/google-play-badge.png"; // Assurez-vous que ce chemin est correct
// import appStoreBadge from "../public/app-store-badge.png"; // Assurez-vous que ce chemin est correct

const DownloadSection = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Vidéo explicative */}
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/example_video_id" // Remplacez par l'ID réel de votre vidéo
              title="Vidéo explicative"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Texte et boutons */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Téléchargez FindPark</h2>
          <p className="text-lg mb-6">
            Vous pourrez :
            <ul className="list-disc list-inside mt-2">
              <li>Vérifier l'état de votre compte</li>
              <li>Recharger des unités de stationnement</li>
              <li>Accéder à l'historique de vos transactions</li>
              <li>
                Transférer des unités et payer le stationnement pour vos proches
              </li>
            </ul>
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {/* Bouton Google Play */}
            <Link
              href="#"
              className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
              aria-label="Télécharger sur Google Play"
            >
              <Image
                src="/google-play-badge.png" // Chemin relatif dans le dossier `public`
                alt="Google Play"
                width={150}
                height={50}
              />
            </Link>

            {/* Bouton App Store */}
            <Link
              href="#"
              className="inline-flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
              aria-label="Télécharger sur l'App Store"
            >
              <Image
                src="/app-store-badge.png" // Chemin relatif dans le dossier `public`
                alt="App Store"
                width={150}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
