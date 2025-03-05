import Image from "next/image";
import SectionImage from "../../../public/apropos/quiSommesNous-card1.png"; // Remplacez par le chemin correct de votre image

const ParkingSection = () => {
  return (
    <section className="relative bg-blue-900">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src={SectionImage}
          alt="Parking"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 lg:px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          LE <span className="text-yellow-400">PARKING</span> C’EST NOUS
        </h1>
        <p className="mt-6 text-sm md:text-base lg:text-lg text-white max-w-3xl leading-relaxed">
          Nous sommes l'acteur principal et le fournisseur de solutions pour la
          gestion du stationnement à Kinshasa – Capitale de la RDC. Congo
          Parking Service est chargé d’harmoniser la politique régionale et les
          politiques communales du stationnement à travers une collaboration
          avec le pouvoir urbain de Kinshasa.
        </p>
      </div>
    </section>
  );
};

export default ParkingSection;
