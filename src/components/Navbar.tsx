import React from 'react';
import { ActiveTab } from '../types';
import { Shield, Sparkles, Navigation, Cpu, Volume2, VolumeX, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
  openAiAdvisor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  audioPlaying,
  toggleAudio,
  openAiAdvisor
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#1A1A1A]/15 transition-all">
      {/* Top Tech Status Strip */}
      <div className="bg-[#EEEDE8] border-b border-[#1A1A1A]/10 text-[11px] font-mono-tech py-1.5 px-4 sm:px-8 text-stone-600 flex justify-between items-center overflow-x-auto whitespace-nowrap">
        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center text-[#1A1A1A] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#1A1A1A] animate-pulse mr-2"></span>
            Z LAB INDIRAPURAM /// ONLINE
          </span>
          <span className="text-stone-400">|</span>
          <span className="text-stone-600">COMMISSIONS OPEN Q3/Q4</span>
          <span className="text-stone-400 hidden md:inline">|</span>
          <span className="text-stone-600 hidden md:inline">LAT: 28.6416° N, LON: 77.3712° E</span>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <button 
            onClick={openAiAdvisor}
            className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] border border-[#1A1A1A] transition shadow-xs"
          >
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} />
            <span>AI BUILD ADVISOR</span>
          </button>
          <button 
            onClick={toggleAudio}
            className="inline-flex items-center space-x-1 text-stone-600 hover:text-[#1A1A1A] transition"
            title="Toggle Engine Ambient Sound"
          >
            {audioPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#1A1A1A]" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline font-mono-tech text-[10px]">{audioPlaying ? 'SOUND ON' : 'MUTED'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => setActiveTab('home')}
          className="flex items-center space-x-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 bg-[#1A1A1A] border border-[#1A1A1A] group-hover:bg-black flex items-center justify-center transition-colors relative overflow-hidden rounded-sm">
            <Shield className="w-5 h-5 text-[#F8F7F4] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#1A1A1A] flex items-center">
              AERO<span className="text-stone-500 italic">.</span>STUDIO
            </div>
            <div className="text-[10px] font-mono-tech tracking-widest text-stone-500 uppercase">
              STUDIO<span className="text-[#1A1A1A]">.</span>FORM /// Z LAB
            </div>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#EEEDE8] p-1 rounded-md border border-[#1A1A1A]/10">
          {[
            { id: 'home', label: 'LABORATORY', icon: Cpu },
            { id: 'services', label: 'MATERIALS & SERVICES', icon: Shield },
            { id: 'gallery', label: 'BUILD GALLERY', icon: Sparkles },
            { id: 'facility', label: 'Z LAB FACILITY', icon: Navigation },
            { id: 'inquiry', label: 'BESPOKE INQUIRY', icon: ChevronRight },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1A1A1A] text-[#F8F7F4] shadow-xs'
                    : 'text-stone-600 hover:text-[#1A1A1A] hover:bg-stone-200/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F8F7F4]' : 'text-stone-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setActiveTab('inquiry')}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-sans text-xs font-bold uppercase tracking-wider text-[#F8F7F4] bg-[#1A1A1A] hover:bg-black transition-all duration-300 shadow-sm rounded-sm border border-[#1A1A1A]"
          >
            <span className="relative flex items-center space-x-2">
              <span>BEGIN BUILD</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Tab Navigation Strip */}
      <div className="lg:hidden border-t border-[#1A1A1A]/10 bg-[#F8F7F4] px-2 py-2 flex items-center justify-around overflow-x-auto text-xs">
        {[
          { id: 'home', label: 'LAB' },
          { id: 'services', label: 'SERVICES' },
          { id: 'gallery', label: 'GALLERY' },
          { id: 'facility', label: 'Z LAB' },
          { id: 'inquiry', label: 'INQUIRE' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ActiveTab)}
            className={`px-3 py-1.5 rounded font-mono-tech text-[11px] font-semibold whitespace-nowrap ${
              activeTab === tab.id ? 'bg-[#1A1A1A] text-[#F8F7F4]' : 'text-stone-600 hover:text-[#1A1A1A]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};
