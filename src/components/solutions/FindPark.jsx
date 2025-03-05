import Image from "next/image";
import TrustSection from "../TrustSection";
import ContactSection from "../ContactSection";
import HeroSection from "../HeroSection";

export default function FindPark() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center lg:justify-center gap-12">
        {/* Texte */}
        <div className="lg:w-1/2">
          <h4 className="text-blue-600 text-sm uppercase mb-2">
            Application de Parking
          </h4>
          <h2 className="text-3xl font-bold mb-4">FINDPARK</h2>
          <p className="text-gray-600 mb-6">
            Simplifiez votre stationnement au quotidien. Notre application vous
            permet de trouver facilement une place de parking, de réserver et de
            payer en ligne. Gagnez du temps et évitez le stress du
            stationnement !
          </p>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/paymentSolution.png"
                  alt="Payment Solution Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">
                  Payment Solution
                </h5>
                <p className="text-gray-600">
                  Une solution de paiement facile et sécurisée pour simplifier
                  votre expérience de stationnement.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/security.png"
                  alt="Growth Business Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">
                  Growth Business
                </h5>
                <p className="text-gray-600">
                  Optimisez vos déplacements tout en contribuant à la croissance
                  des entreprises locales.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/support (1).png"
                  alt="Connected People Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">
                  Connected People
                </h5>
                <p className="text-gray-600">
                  Connectez-vous avec une communauté de conducteurs et
                  simplifiez votre quotidien.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/solutions/findPark.png"
              alt="FindPark App"
              width={500}
              height={500}
              className="w-full h-auto"
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="mb-8 container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center lg:justify-center gap-12">
        {/* Texte */}
        <div className="lg:w-1/2">
          <h4 className="text-blue-600 text-sm uppercase mb-2">
            APPLICATION DE DEPANNAGE AUTO
          </h4>
          <h2 className="text-3xl font-bold mb-4">DEPANN’EXPRESS</h2>
          <p className="text-gray-600 mb-6">
            Dépannage auto à portée de main. Notre application vous met en
            relation avec un réseau de dépanneurs professionnels pour résoudre
            tous vos problèmes de panne rapidement et en toute sécurité.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/settingPNG.png"
                  alt="Payment Solution Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">
                  Easy to Setup
                </h5>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/securePNG.png"
                  alt="Growth Business Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">
                  Secure Transactions
                </h5>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/chatPNG.png"
                  alt="Connected People Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">
                  24/7 Support
                </h5>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/solutions/Container.png"
              alt="FindPark App"
              width={500}
              height={500}
              className="w-full h-auto"
              priority={true}
            />
          </div>
        </div>
      </div>

      <TrustSection/>
      <ContactSection />
    </section>
  );
}
