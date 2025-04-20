'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[90%] mx-auto py-6 pb-24">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light">
            © Jeremy Savan
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href= "mailto:shotbyjerms@gmail.com"
              className="text-white relative group py-1 inline-block"
            >
              <span className="relative">
                EMAIL
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-white group-hover:h-[2px]" />
              </span>
            </Link>
            <span>|</span>
            <Link 
              href="https://www.instagram.com/shotbyjerms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white relative group py-1 inline-block"
            >
              <span className="relative">
                INSTAGRAM
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-white group-hover:h-[2px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
