"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLinks"; 
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white">
      <div className="flex items-center space-x-2">
      <Image src="/home/logo.svg" alt="logo" width={120} height={40} priority />
      </div>

      {/* Navigation Links */}
      <NavLinks />

      {/* Buttons */}
      <div className="hidden space-x-6 md:flex">
        <Link href="/demo" className="text-[var(--gray)] hover:text-[var(--primary)] transition-all px-4 py-2">Request a Demo</Link>
        <Link href="/contact" className="bg-[var(--primary)] text-white px-4 py-2 rounded-md shadow hover:bg-primaryDark transition-all">
          Lets Talk
        </Link>
      </div>

      {/* Menu Button */}
      <button className="md:hidden text-[var(--gray)]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden text-[var(--gray)]">
          <Link href="/" className="hover:text-[var(--primary)] transition-all">Home</Link>
          <Link href="/stratum" className="hover:text-[var(--primary)] transition-all flex items-center">Stratum 
          <span className="text-xs bg-blue-100 text-[var(--primary)] px-1 ml-1 rounded">NEW</span>
          </Link>
          <Link href="/services" className="hover:text-[var(--primary)] transition-all">Services</Link>
          <Link href="/projects" className="hover:text-[var(--primary)] transition-all">Projects</Link>
          <Link href="/why-us" className="hover:text-[var(--primary)] transition-all">Why Us</Link>
          <Link href="/demo" className="text-[var(--gray)] hover:text-[var(--primary)] transition-all">Request a Demo</Link>
          <Link href="/contact" className="bg-[var(--primary)] text-white px-4 py-2 rounded-md shadow hover:bg-primaryDark transition-all">
            Lets Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
