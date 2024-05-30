"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for menu toggle

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">APTICON 2024</h1>
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
        {/* Large Devices Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-ochre">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-ochre">
                About
              </a>
            </li>
            <li>
              <a href="/#schedule" className="hover:text-ochre">
                Schedule
              </a>
            </li>
            <li>
              <a href="/#speakers" className="hover:text-ochre">
                Speakers
              </a>
            </li>
            <li>
              <a href="/#sponsors" className="hover:text-ochre">
                Sponsors
              </a>
            </li>
            <li>
              <a href="/registration" className="hover:text-ochre">
                Registration
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-ochre">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="/" className="hover:text-ochre">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-ochre">
                About
              </a>
            </li>
            <li>
              <a href="/#schedule" className="hover:text-ochre">
                Schedule
              </a>
            </li>
            <li>
              <a href="/#speakers" className="hover:text-ochre">
                Speakers
              </a>
            </li>
            <li>
              <a href="/#sponsors" className="hover:text-ochre">
                Sponsors
              </a>
            </li>
            <li>
              <a href="/registration" className="hover:text-ochre">
                Registration
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-ochre">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;