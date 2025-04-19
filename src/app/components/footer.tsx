'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[90%] mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light">
            © Jeremy Savan
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="text-white hover:opacity-80 border-b border-white pb-0.5"
            >
              EMAIL
            </Link>
            <span>|</span>
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 border-b border-white pb-0.5"
            >
              INSTAGRAM
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
