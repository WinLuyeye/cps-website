import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/solutions/ImgHeroSection.png"
        alt="Background"
        fill // Remplace layout="fill"
        className="object-cover" // Remplace objectFit="cover"
        quality={100}
        priority // Charge l'image en priorité (utile pour les images critiques)
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-blue-900 bg-opacity-50">
        <h1 className="text-4xl font-bold text-center">
          Des solutions sur-mesure pour une gestion de parking fluide
        </h1>
        <p className="mt-4 text-lg text-center max-w-2xl">
          Découvrez nos solutions digitales innovantes pour révolutionner votre gestion de parking. 
          Simplifiez la réservation, le paiement, le contrôle d'accès et le dépannage grâce à nos plateformes intuitives.
          Gagnez en efficacité, réduisez vos coûts et améliorez l'expérience client.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
