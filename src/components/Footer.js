

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../public/logoCPS.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 ">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image src={Logo} alt="Logo CPS" width={80} height={40} />
        </div>

        {/* Headquarters Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Siège social</h3>
          <p className="text-sm">
            01, OUA, Concession Procoki, GB
            <br />
            Commune de Ngaliema
            <br />
            Kinshasa, RC Congo
          </p>
          <p className="text-sm mt-2">📍 Localisation réelle</p>
        </div>

        {/* Blog Section */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Blog</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Startups et premières entreprise
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Paiement d&apos;entreprise
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Entreprise en croissance
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Enterprise
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Assistance Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">A propos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/solutions/findPark" className="hover:underline">
                FINDPARK
              </Link>
            </li>
            <li>
              <Link href="/solutions/findPark" className="hover:underline">
                DEPAN&apos;EXPRESS
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bulletin</h3>
          <p className="text-sm mb-4">
            Bénéficiez d’offres exclusives en vous inscrivant à notre newsletter.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <Link href="https://www.facebook.com/CongoParking/" className="text-white hover:text-blue-500">
          <FaFacebookF size={24} />
        </Link>
        <Link href="https://x.com/congoparking" className="text-white hover:text-blue-400">
          <FaTwitter size={24} />
        </Link>
        <Link href="#" className="text-white hover:text-pink-500">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://www.linkedin.com/company/congo-parking/" className="text-white hover:text-blue-700">
          <FaLinkedinIn size={24} />
        </Link>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-8 text-center text-sm border-t border-gray-800 pt-4">
        <p>
          Copyright © 2024 Congo Parking Service, Tous droits réservés.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:underline">
            Term of use
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Cookie Policy
          </Link>
          <Link href="#" className="hover:underline">
            Do Not Sell My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
