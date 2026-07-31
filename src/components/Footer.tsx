import React from 'react';
import { ActiveTab } from '../types';
import { Shield, MapPin, Phone, Mail, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#1A1A1A] text-[#F8F7F4] font-sans relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#F8F7F4] flex items-center justify-center text-[#1A1A1A] font-bold rounded-sm">
                <Shield className="w-4 h-4 text-[#1A1A1A]" />
              </div>
              <span className="font-display text-2xl font-bold text-[#F8F7F4] tracking-tight">
                STUDIO<span className="text-stone-400 italic">.</span>FORM
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Bespoke automotive protection, hyper-pigmented PPF, and carbon aerodynamics engineered for discerning collectors and motorsport enthusiasts.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 text-[10px] font-mono-tech px-2.5 py-1 bg-stone-900 border border-stone-800 text-stone-200 rounded-sm">
                <CheckCircle2 className="w-3 h-3 text-[#F8F7F4]" />
                <span>ISO 9001 & ISO-7 CLEANROOM CERTIFIED</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#F8F7F4] font-bold mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#F8F7F4]"></span>
              <span>NAVIGATION ///</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-tech text-stone-300">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>/// 01 LABORATORY</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>/// 02 MATERIALS & PPF</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('gallery')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>/// 03 BUILD SHOWCASE</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('facility')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>/// 04 Z LAB INDIRAPURAM</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('inquiry')} className="hover:text-white transition-colors flex items-center space-x-1">
                  <span>/// 05 BESPOKE COMMISSION</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Facility Location */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#F8F7F4] font-bold mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#F8F7F4]"></span>
              <span>Z LAB FACILITY ///</span>
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>Plot 42, Sector 14, Indirapuram, Delhi NCR / Ghaziabad 201014</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <span>+91 98765 43210 / +91 11 4099 8800</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>commissions@studioform.lab</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Mon-Sat 09:00 - 20:00 IST</span>
              </div>
            </div>
          </div>

          {/* Col 4: Private Consultation Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs uppercase tracking-widest text-[#F8F7F4] font-bold mb-2 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#F8F7F4]"></span>
              <span>COMMISSION ALERTS ///</span>
            </h4>
            <p className="text-xs text-stone-300">
              Subscribe to private allocation updates and priority slots for quarterly bespoke builds.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you. You have been added to the private commission list.'); }} className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter email address..." 
                  required
                  className="bg-stone-900 border border-stone-700 text-xs text-white px-3 py-2 rounded-l w-full focus:outline-none focus:border-white"
                />
                <button type="submit" className="bg-[#F8F7F4] text-[#1A1A1A] px-3 py-2 text-xs font-bold rounded-r hover:bg-white transition">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 font-mono-tech space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} STUDIO.FORM AUTOMOTIVE LAB. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 text-[11px]">
            <span className="hover:text-white cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="hover:text-white cursor-pointer">TERMS OF COMMISSION</span>
            <span className="hover:text-white cursor-pointer">WARRANTY VERIFICATION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
