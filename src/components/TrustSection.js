import Image from "next/image";
import fomieLogo from "../../public/logos/fomie.png";
import fluencaLogo from "../../public/logos/fluenca.png";
import creavoLogo from "../../public/logos/creavo.png";
import fixcomLogo from "../../public/logos/fixcom.png";
import dailymartLogo from "../../public/logos/dailymart.png";
import bakebunLogo from "../../public/logos/bakebun.png";
import clicknbuyLogo from "../../public/logos/clicknbuy.png";
import egaoLogo from "../../public/logos/egao.png";
import busimaLogo from "../../public/logos/busima.png";
import fleuLogo from "../../public/logos/fleu.png";
import worldMapDots from "../../public/world-map-dots.png";
import Link from "next/link"; // Import de Link

export default function TrustSection() {
  const logos = [
    { src: fomieLogo, alt: "Fomie Logo", href: "https://www.fomie.com" },
    { src: fluencaLogo, alt: "Fluenca Logo", href: "https://www.fluenca.com" },
    { src: creavoLogo, alt: "Creavo Logo", href: "https://www.creavo.com" },
    { src: fixcomLogo, alt: "Fixcom Logo", href: "https://www.fixcom.com" },
    {
      src: dailymartLogo,
      alt: "Dailymart Logo",
      href: "https://www.dailymart.com",
    },
    { src: bakebunLogo, alt: "Bakebun Logo", href: "https://www.bakebun.com" },
    {
      src: clicknbuyLogo,
      alt: "Clicknbuy Logo",
      href: "https://www.clicknbuy.com",
    },
    { src: egaoLogo, alt: "Egao Logo", href: "https://www.egao.com" },
    { src: busimaLogo, alt: "Busima Logo", href: "https://www.busima.com" },
    { src: fleuLogo, alt: "Fleu Logo", href: "https://www.fleu.com" },
  ];

  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Plus de <span className="text-blue-600">25,000</span> personnes et
            organisations
          </h2>
          <p className="text-gray-600 mt-4">
            De toutes tailles de renommée nous font confiance
          </p>
        </div>
        <div className="relative">
          {/* Image de fond (avec priorité) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={worldMapDots}
              alt="Carte du monde"
              className="w-full h-auto max-w-3xl opacity-100"
              priority
            />
          </div>
          {/* Logos */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 z-10 relative">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Link
                  href={logo.href}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={64} // Augmentation de la largeur
                    height={64} // Augmentation de la hauteur
                    className="h-16 object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
