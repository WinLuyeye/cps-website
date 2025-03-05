import Image from 'next/image';

export default function DepannExpress() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col lg:flex-row items-center lg:justify-center gap-12">
        {/* Texte */}
        <div className="lg:w-1/2">
          <h4 className="text-blue-600 text-sm uppercase mb-2">Application de Dépannage Auto</h4>
          <h2 className="text-3xl font-bold mb-4">DEPANN'EXPRESS</h2>
          <p className="text-gray-600 mb-6">
            Dépannage auto à portée de main. Notre application vous met en relation avec un réseau de dépanneurs
            professionnels pour résoudre tous vos problèmes de panne rapidement et en toute sécurité.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/team.png"
                  alt="Easy to Setup Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">Easy to Setup</h5>
                <p className="text-gray-600">
                  Configurez rapidement votre profil et accédez facilement à nos services de dépannage.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/security.png"
                  alt="Secure Transactions Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">Secure Transactions</h5>
                <p className="text-gray-600">
                  Effectuez des paiements sécurisés pour vos dépannages sans souci.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src="/solutions/payement.png"
                  alt="24/7 Support Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div className="ml-4">
                <h5 className="text-blue-600 font-bold text-lg">24/7 Support</h5>
                <p className="text-gray-600">
                  Notre assistance est disponible 24/7 pour répondre à tous vos besoins.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-100 rounded-full"></div>
            <Image
              src="/solutions/depanExpress.png"
              alt="Depann'Express App"
              width={500}
              height={500}
              className="w-full h-auto"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
