import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import FACEBOOK from '../assets/footer/facebook.svg?react'
import INSTA from '../assets/footer/insta.svg?react'
import TWITTER from '../assets/footer/twitter.svg?react'
import YOUTUBE from '../assets/footer/youtube.svg?react'

const Footer = () => {
  const footerLinks = [
    ["audio description", "investor relations", "legal notices"],
    ["help center", "jobs", "cookie preferences"],
    ["gift cards", "terms of use", "corporate information"],
    ["media center", "privacy", "contact us"],
  ];

  return (
    <footer className="text-[#808080] text-xs font-sans px-10 mt-10 pb-7.5">
      <div className="mx-auto space-y-6">
        <div className="flex items-center gap-6 text-white text-xl">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FACEBOOK />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <INSTA />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <TWITTER />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <YOUTUBE />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 capitalize">
            {footerLinks.map((column, colIdx) => (
                <ul key={colIdx} className="space-y-3">
                    {column.map((link, linkIdx) => (
                        <li key={linkIdx}>
                            <a href="#" className="hover:text-gray-300">{link}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>

        <div>
            <button className="border border-[#808080] text-[#808080] hover:text-white px-2.5 py-1 text-[11px] font-mono tracking-wider hover:border-white transition-colors cursor-pointer">Service code</button>
        </div>

        <p className="text-[11px] text-[#808080]">&copy; 2024 MovieFlix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
