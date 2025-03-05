import Image from 'next/image';
import { FaVideo, FaLock, FaTools } from 'react-icons/fa';
import smartphoneImg from '../../public/smartphone.png'; // Remplacez par le chemin correct de votre image
import parkingImg from '../../public/parking (2).png'; // Remplacez par le chemin correct de votre image

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
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
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
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
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
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white text-xl mr-4">
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
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image src={parkingImg} alt="Parking sécurisé" className="w-full" />
          </div>
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <Image src={smartphoneImg} alt="Application mobile" className="w-38 md:w-54" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityComponent;
