"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex fixed justify-center h-[5rem] w-full items-center bg-transparent backdrop-blur-md z-10 px-10">

      <Link href="/">
        <div className='mr-10'>
        <Image
          src="/navbar/LogoWPolos.png" 
          alt="Logo"
          width={60}
          height={60}
          className="ml-4 bg-black rounded-full"
        />
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 mr-10">
        <Link href="/" className="btn glass text-white bg-slate-800">Home</Link>
        <Link href="/about" className="btn glass text-white bg-slate-800">About Us</Link>
        <Link href="/serviceproduct" className="btn glass text-white bg-slate-800">Our Service and Products</Link>
        <Link href="/team" className="btn glass text-white bg-slate-800">Our Team</Link>
        <Link href="/contact" className="btn glass text-white bg-slate-800">Contact Us</Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center mr-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="absolute top-[5rem] left-0 w-full bg-slate-600 text-white flex flex-col items-center py-5 space-y-4 md:hidden">
          <Link href="/" className="btn glass w-full text-center" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="btn glass w-full text-center" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/serviceproduct" className="btn glass w-full text-center" onClick={() => setIsOpen(false)}>Our Service and Products</Link>
          <Link href="/team" className="btn glass w-full text-center" onClick={() => setIsOpen(false)}>Our Team</Link>
          <Link href="/contact" className="btn glass w-full text-center" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </div>
  );
}
