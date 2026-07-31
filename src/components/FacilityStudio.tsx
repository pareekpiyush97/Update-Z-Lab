import React, { useState } from 'react';
import { FACILITY_INFO } from '../data/studioData';
import { ActiveTab } from '../types';
import { Navigation, MapPin, Phone, Mail, Clock, Shield, CheckCircle2, Calendar, Sparkles, X, ChevronRight } from 'lucide-react';

interface FacilityStudioProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const FacilityStudio: React.FC<FacilityStudioProps> = ({ setActiveTab }) => {
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [tourDate, setTourDate] = useState('');
  const [tourName, setTourName] = useState('');
  const [tourSubmitted, setTourSubmitted] = useState(false);

  const handleBookTour = (e: React.FormEvent) => {
    e.preventDefault();
    setTourSubmitted(true);
    setTimeout(() => {
      setTourSubmitted(false);
      setTourModalOpen(false);
      alert('Your private Z LAB facility visit request has been logged. Our concierge will contact you shortly.');
    }, 1500);
  };

  return (
    <div className="space-y-20 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Facility Header */}
      <div className="space-y-4 border-b border-[#1A1A1A]/15 pb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-stone-100 border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs">
          <Navigation className="w-3.5 h-3.5" />
          <span>FACILITY SPECIFICATIONS /// {FACILITY_INFO.coordinates}</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-6xl text-[#1A1A1A] uppercase tracking-tight">
          Z LAB INDIRAPURAM<span className="text-stone-400 italic">.</span>
        </h1>
        <p className="max-w-3xl text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
          Our flagship technical detailing laboratory and aerodynamic installation center in Indirapuram features positive air pressure ISO-7 cleanroom application bays and high-accuracy Graphtec FC9000 plotter systems.
        </p>
      </div>

      {/* SECTION 01: STERILE ENVIRONMENT & SECTION 02: HAND BUILT WORKFLOW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {FACILITY_INFO.sections.map((sec) => (
          <div 
            key={sec.num}
            className="bg-white border border-[#1A1A1A]/15 rounded-sm p-8 space-y-6 hover:border-[#1A1A1A] transition-all duration-300 relative overflow-hidden shadow-xs"
          >
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
              <span className="font-display text-4xl font-bold text-[#1A1A1A]">
                {sec.num}
              </span>
              <span className="px-3 py-1 bg-stone-100 text-[#1A1A1A] font-mono-tech text-[10px] tracking-widest uppercase rounded-xs border border-[#1A1A1A]/15 font-semibold">
                Z LAB SPEC
              </span>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-[#1A1A1A] uppercase tracking-tight">
                {sec.title}
              </h2>
              <p className="text-xs font-mono-tech text-stone-600 mt-1 font-semibold">
                {sec.subtitle}
              </p>
            </div>

            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              {sec.desc}
            </p>

            <div className="bg-[#EEEDE8] p-5 rounded-xs border border-[#1A1A1A]/10 space-y-3">
              <span className="text-[10px] font-mono-tech text-[#1A1A1A] uppercase font-bold block">
                LAB EQUIPMENT & PROTOCOLS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech text-stone-700">
                {sec.specs.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                    <span className="text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIVE INFINITE SCROLLING MARQUEE BANNER */}
      <div className="overflow-hidden bg-[#1A1A1A] text-[#F8F7F4] border-y border-[#1A1A1A] py-4 -mx-4 sm:-mx-8">
        <div className="animate-marquee whitespace-nowrap flex items-center font-display font-bold text-xl sm:text-2xl text-stone-300 tracking-tighter uppercase">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="inline-flex items-center space-x-6 mx-4">
              <span className="text-white">PRECISION ARCHITECTURE</span>
              <span className="text-stone-400 italic">///</span>
              <span>INDIRAPURAM STUDIO</span>
              <span className="text-stone-400 italic">///</span>
              <span className="text-white">TECHNICAL DETAILING</span>
              <span className="text-stone-400 italic">///</span>
              <span>BESPOKE COMMISSIONS</span>
              <span className="text-stone-400 italic">///</span>
            </span>
          ))}
        </div>
      </div>

      {/* FACILITY SHOWCASE & MAP MODULE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Lab Info Card */}
        <div className="bg-white border border-[#1A1A1A]/15 rounded-sm p-6 space-y-6 shadow-xs">
          <div>
            <span className="text-xs font-mono-tech text-stone-500 uppercase font-bold block">
              LOCATION & HOURS
            </span>
            <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">
              VISIT Z LAB
            </h3>
          </div>

          <div className="space-y-4 text-xs font-mono-tech text-stone-700">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
              <span>{FACILITY_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#1A1A1A] shrink-0" />
              <span>{FACILITY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#1A1A1A] shrink-0" />
              <span>{FACILITY_INFO.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#1A1A1A] shrink-0" />
              <span>{FACILITY_INFO.hours}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-3">
            <button
              onClick={() => setTourModalOpen(true)}
              className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-extrabold text-xs uppercase tracking-widest rounded-xs transition flex items-center justify-center space-x-2 shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>SCHEDULE PRIVATE LAB VISIT</span>
            </button>
            <button
              onClick={() => setActiveTab('inquiry')}
              className="w-full py-3 bg-white hover:bg-stone-100 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs border border-[#1A1A1A]/20 transition"
            >
              BEGIN COMMISSION INQUIRY
            </button>
          </div>
        </div>

        {/* Interactive Map Visualizer */}
        <div className="lg:col-span-2 bg-white border border-[#1A1A1A]/15 rounded-sm overflow-hidden relative h-[420px] flex flex-col justify-between p-6 shadow-xs">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
          
          {/* Map Header Overlay */}
          <div className="relative z-10 flex items-center justify-between bg-[#1A1A1A] text-[#F8F7F4] p-4 rounded-xs border border-[#1A1A1A]">
            <div>
              <span className="text-[10px] font-mono-tech text-stone-300 uppercase font-bold block">
                INDIRAPURAM Z LAB COORDINATES
              </span>
              <span className="font-sans font-bold text-white text-sm">
                28.6416° N, 77.3712° E
              </span>
            </div>
            <span className="px-3 py-1 bg-stone-800 text-stone-200 font-mono-tech text-xs uppercase rounded-xs border border-stone-700">
              SECTOR 14 / INDIRAPURAM
            </span>
          </div>

          {/* Map Visual Representation Graphic */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3 text-center my-auto">
            <div className="w-16 h-16 bg-[#1A1A1A] text-[#F8F7F4] rounded-full flex items-center justify-center shadow-md animate-bounce">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#1A1A1A]">Z LAB INDIRAPURAM FACILITY</h4>
              <p className="text-xs text-stone-600 font-mono-tech">Plot 42, Sector 14, Indirapuram, Delhi NCR / Ghaziabad</p>
            </div>
          </div>

          {/* Map Footer Link */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech text-stone-700 bg-stone-100 p-3 rounded-xs border border-[#1A1A1A]/15">
            <span>DIRECT ACCESS VIA NH24 / SWARNA JAYANTI PARK</span>
            <a 
              href="https://maps.google.com/?q=Indirapuram+Ghaziabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1A1A1A] font-bold hover:underline flex items-center space-x-1"
            >
              <span>OPEN GOOGLE MAPS</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* PRIVATE LAB TOUR MODAL */}
      {tourModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#F8F7F4] border-2 border-[#1A1A1A] rounded-sm w-full max-w-lg overflow-hidden shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/15 pb-3">
              <div>
                <span className="text-[10px] font-mono-tech text-stone-500 uppercase block font-bold">
                  PRIVATE APPOINTMENT /// Z LAB
                </span>
                <h3 className="font-display font-bold text-[#1A1A1A] text-lg">
                  SCHEDULE PRIVATE FACILITY TOUR
                </h3>
              </div>
              <button onClick={() => setTourModalOpen(false)} className="text-stone-500 hover:text-[#1A1A1A]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleBookTour} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={tourName}
                  onChange={(e) => setTourName(e.target.value)}
                  placeholder="e.g. Vikramaditya Singh"
                  className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                  PREFERRED DATE & TIME
                </label>
                <input
                  type="datetime-local"
                  required
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                  className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>

              <button
                type="submit"
                disabled={tourSubmitted}
                className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-extrabold text-xs uppercase tracking-wider rounded-xs transition shadow-xs"
              >
                {tourSubmitted ? 'CONFIRMING APPOINTMENT...' : 'CONFIRM FACILITY VISIT'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
