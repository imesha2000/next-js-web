"use client";

import { useTranslations } from 'next-intl';
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLinks"; 
import Image from "next/image";
import { Link } from "../../../navigation";
import LocalSwitcher from "./Local-Switcher";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('Navigation');

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white">
      <div className="flex items-center space-x-2">
        <Image src="/home/logo.svg" alt="logo" width={120} height={40} priority />
      </div>

      {/* Navigation Links */}
      <NavLinks />

      {/* Buttons */}
      <div className="items-center hidden space-x-6 md:flex">
        <LocalSwitcher />
        <Link href="/demo" className="px-4 py-2 transition-all text-gray hover:text-primary">{t('demo')}</Link>
        <Link href="/contact" className="px-4 py-2 text-white transition-all rounded-md shadow bg-primary hover:bg-primaryDark">
          {t('contact')}
        </Link>
      </div>

      {/* Menu Button */}
      <button className="text-gray md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu */}
      {menuOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full py-4 space-y-4 bg-white shadow-md text-gray top-16 md:hidden">
          <Link href="/" className="transition-all hover:text-primary ">{t('home')}</Link>
          <Link href="/stratum" className="flex items-center transition-all hover:text-primary">{t('stratum')} 
          <span className="px-1 ml-1 text-xs bg-blue-100 rounded text-primary">NEW</span>
          </Link>
          <Link href="/services" className="transition-all hover:text-primary">{t('services')}</Link>
          <Link href="/projects" className="transition-all hover:text-primary">{t('projects')}</Link>
          <Link href="/why-us" className="transition-all hover:text-primary">{t('why Us')}</Link>
          <LocalSwitcher />
          <Link href="/demo" className="transition-all text-gray hover:text-primary">{t('demo')}</Link>
          <Link href="/contact" className="px-4 py-2 text-white transition-all rounded-md shadow bg-primary hover:bg-primaryDark">
            {t('contact')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
