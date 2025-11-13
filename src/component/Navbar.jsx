import React, { useState } from 'react'
import { RiCloseFill, RiMenuFill } from '@remixicon/react'
import logo from '../assets/logo.png' // ✅ make sure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
        {/* Left: Logo */}
        <img src={logo} alt="Logo" width={120} height={24} />

        {/* Center: Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-neutral-200">How it works</a>
          <a href="#pricing" className="hover:text-neutral-200">Pricing</a>
          <a href="#testimonials" className="hover:text-neutral-200">Testimonials</a>
        </div>

        {/* Right: Buttons (hidden on mobile) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-700 transition">Login</a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
        </div>

        {/* Hamburger icon (visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <RiCloseFill /> : <RiMenuFill  />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a href="#works" className="hover:text-neutral-200 transition">
              How it works
            </a>
            <a href="#pricing" className="hover:text-neutral-200 transition">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-neutral-200 transition">
              Testimonials
            </a>
            <div className="border-t border-neutral-700 pt-4 mt-4">
              <a href="#" className="hover:text-neutral-200 transition block mb-3">
                Login
              </a>
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition text-center">
                  Get a Demo
                </a>
                <a 
                  href="#" 
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition text-center">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
