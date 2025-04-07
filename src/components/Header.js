"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Logo from "../../public/marque_cps.png";

const Header = () => {
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const [showPagesMenu, setShowPagesMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="bg-yellow-400">
      {/* Top bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-2 text-sm text-gray-800">
        <div className="flex items-center space-x-4">
          <span>📍 Bienvenu(e) chez Congo Parking Service</span>
          <span className="hidden lg:block">
            ⏰ Horaires d’ouverture : Du lundi au vendredi : de 08h00 à 16h30.
            Samedi : de 08h00 à 12h30.
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-2 lg:mt-0">
          <span>Suivez-nous :</span>
          <Link href="https://www.facebook.com/CongoParking/" className="hover:text-blue-600">
            <FaFacebookF size={18} />
          </Link>
          <Link href="#" className="hover:text-blue-400">
            <FaTwitter size={18} />
          </Link>
          <Link href="#" className="hover:text-pink-500">
            <FaInstagram size={18} />
          </Link>
          <Link href="#" className="hover:text-blue-700">
            <FaLinkedinIn size={18} />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain" />
            <span className="font-bold text-xl">Congo Parking Service</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-6 ml-auto">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/apropos">À propos de nous</Link></li>
            <li className="relative">
              <button onClick={() => setShowSolutionsMenu(!showSolutionsMenu)}
                className="flex items-center hover:text-yellow-400 focus:outline-none">
                Nos Produits <HiChevronDown className="ml-1" />
              </button>
              {showSolutionsMenu && (
                <ul className="absolute top-full mt-2 left-0 bg-white text-black rounded shadow-lg py-2 z-50 min-w-max px-4">
                  <li className="mb-2"><Link href="https://play.google.com/store/apps/details?id=com.cpspark.lipopo&hl=fr" className="block px-4 py-2 hover:bg-gray-100 rounded">FINDPARK</Link></li>
                  <li className="mb-2"><Link href="" className="block px-4 py-2 hover:bg-gray-100 rounded">DEPAN&apos;EXPRESS</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/contact">Nos Contacts</Link></li>
          </ul>

          {/* Menu Hamburger (Mobile) */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden z-50 relative">
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>

          {/* Call to Action and Language Selector */}
          <div className="hidden lg:flex items-center space-x-6 ml-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">CALL CENTER</button>
            <div className="hidden sm:flex items-center space-x-1">
              <Link href="#">EN</Link>
              <span>|</span>
              <Link href="#">FR</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul ref={menuRef} className="lg:hidden absolute top-22 left-0 w-full bg-gray-800 shadow-md flex flex-col gap-3 p-4 text-center z-50">
            <li>
              <Link href="/" className="block p-2 hover:bg-gray-700 text-white transition duration-300" onClick={() => setMenuOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/apropos" className="block p-2 hover:bg-gray-700 text-white transition duration-300" onClick={() => setMenuOpen(false)}>
                À propos de nous
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="block p-2 hover:bg-gray-700 text-white transition duration-300" onClick={() => setMenuOpen(false)}>
                Nos Produits
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block p-2 hover:bg-gray-700 text-white transition duration-300" onClick={() => setMenuOpen(false)}>
                Nos Contacts
              </Link>
            </li>
            <li>
              <button className="block w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300" onClick={() => setMenuOpen(false)}>
                CALL CENTER
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
