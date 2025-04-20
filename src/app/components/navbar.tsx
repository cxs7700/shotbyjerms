'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Control body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Booking', href: '/booking' },
    { name: 'Projects', href: '/projects' },
    { name: 'Printing', href: '/printing' },
    { name: 'Editing Services', href: '/editing' },
    { name: 'Rates', href: '/rates' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="bg-black text-white w-full z-[60] py-12">
        <div className="max-w-[90%] mx-auto">
          <div className="flex justify-between h-16 items-center relative">
            {/* Brand text */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-light relative z-[70]">「 𝕵𝕰𝕽𝕸𝕾 」</Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center text-base font-light relative group py-1 text-white"
                >
                  <span className="px-1">{link.name}</span>
                  {pathname === link.href ? (
                    <span className="absolute bottom-0 left-1 right-1 h-px bg-white" />
                  ) : (
                    <span className="absolute bottom-0 left-1 right-1 h-px bg-white transform scale-x-0 transition-transform duration-200 ease-in-out origin-right group-hover:scale-x-100 group-hover:origin-left" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 relative z-[70]"
                aria-label="Toggle menu"
              >
                {!isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black z-[50] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col h-full justify-center items-end px-8" onClick={(e) => e.stopPropagation()}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-light text-white my-2 hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
