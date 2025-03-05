

import Image from 'next/image';
import { FaVideo, FaLock, FaTools } from 'react-icons/fa';
import smartphoneImg from '../../public/smartphone.png'; // Remplacez par le chemin correct de votre image
import parkingImg from '../../public/parking_2.png'

const SecurityComponent = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texte */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-4">
            La sécurité de votre véhicule est notre priorité
          </h2>
          <p className="text-gray-600 mb-8">
            La sécurité de votre véhicule est au cœur de nos préoccupations. Nous avons mis en place des mesures rigoureuses pour garantir une sécurité optimale.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mr-6 shadow-md border-4 border-white">
                <FaVideo />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Surveillance 24/7 avec CCTV</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mr-6 shadow-md border-4 border-white">
                <FaLock />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Accès sécurisé via contrôle d’accès</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mr-6 shadow-md border-4 border-white">
                <FaTools />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Entretien régulier des installations</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image src={parkingImg} alt="Parking sécurisé" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="absolute w-2/5 max-w-xs top-4 right-4 md:top-8 md:right-8" style={{ maxHeight: '100%', objectFit: 'contain' }}>
            <Image src={smartphoneImg} alt="Application mobile" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityComponent;
