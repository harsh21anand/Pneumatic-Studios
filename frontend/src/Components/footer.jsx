import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-gray-300 py-16 font-sans text-sm w-full">
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-20 lg:px-28 xl:px-36">
        {/* evenly spaced columns */}
        <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-12 md:gap-8">
          
          {/* Studios */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-lg font-bold mb-4">Studios</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Brand Systems</li>
              <li className="hover:text-blue-400 transition">Product & Experience</li>
              <li className="hover:text-blue-400 transition">AI Automation</li>
              <li className="hover:text-blue-400 transition">Venture Design</li>
            </ul>
          </div>

          {/* Inside Prismatic */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-lg font-bold mb-4">Inside Prismatic</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Our Process</li>
              <li className="hover:text-blue-400 transition">Partner Ventures</li>
              <li className="hover:text-blue-400 transition">Careers</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition">Playbooks</li>
              <li className="hover:text-blue-400 transition">Insights</li>
              <li className="hover:text-blue-400 transition">Newsletter</li>
            </ul>
          </div>

          {/* Prismatic Info */}
          <div className="flex-1 min-w-[220px]">
            <h3 className="text-white text-lg font-bold mb-4">Prismatic</h3>
            <p className="text-gray-400 italic mb-3 leading-relaxed">
              Operated globally — London / Bangalore / Amsterdam / Hong Kong / Tokyo
            </p>
            <p className="font-semibold text-white mb-3">
              © 2025 Prismatic Studios. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
              <a href="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/join" className="hover:text-blue-400 transition">
                Join Us
              </a>
              <span>•</span>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px bg-slate-800 my-12"></div>

        {/* Footer note */}
        <div className="text-center text-gray-500 text-xs">
          Built with caffeine, chaos & conviction.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
