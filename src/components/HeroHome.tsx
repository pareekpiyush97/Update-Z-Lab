import React from 'react';
import { ActiveTab, BuildProject, ServiceItem } from '../types';
import { Shield, Sparkles, ChevronRight, Zap, CheckCircle2, ArrowRight, Gauge, Layers, Award, Play } from 'lucide-react';

interface HeroHomeProps {
  setActiveTab: (tab: ActiveTab) => void;
  services: ServiceItem[];
  projects: BuildProject[];
  openBuildDetail: (project: BuildProject) => void;
  openAiAdvisor: () => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({
  setActiveTab,
  services,
  projects,
  openBuildDetail,
  openAiAdvisor
}) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#1A1A1A]/15">
        {/* Hero Background Image with Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1920&q=80" 
            alt="Range Rover L460 Stealth Package" 
            className="w-full h-full object-cover object-center filter contrast-[1.05] opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F4] via-[#F8F7F4]/80 to-[#F8F7F4]/40"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>

        {/* Hero Floating Tech Badges */}
        <div className="absolute top-12 left-6 sm:left-12 hidden md:flex flex-col space-y-2 text-[10px] font-mono-tech text-stone-600 z-10">
          <span className="px-3 py-1 bg-[#1A1A1A] text-[#F8F7F4] border border-[#1A1A1A] rounded-xs shadow-xs">
            SPEC /// 01.44 RANGE ROVER
          </span>
          <span className="px-3 py-1 bg-white/80 backdrop-blur-md border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-xs">
            AERO ARCHITECTURE
          </span>
          <span className="px-3 py-1 bg-white/80 backdrop-blur-md border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-xs">
            MIL-SPEC 210U PPF
          </span>
        </div>

        <div className="absolute top-12 right-6 sm:right-12 hidden md:flex flex-col items-end space-y-2 text-[10px] font-mono-tech text-stone-600 z-10">
          <span className="px-3 py-1 bg-white/80 backdrop-blur-md border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-xs">
            FACILITY: Z LAB INDIRAPURAM
          </span>
          <span className="px-3 py-1 bg-white/80 backdrop-blur-md border border-[#1A1A1A]/15 text-[#1A1A1A] rounded-xs">
            ISO-7 CLEANROOM CERTIFIED
          </span>
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pt-20 pb-16 text-center space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-xs tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
            <span>AUTOMOTIVE DESIGN LAB & MOTORSPORTS</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#1A1A1A] uppercase leading-[0.98]">
            PRECISION <br />
            <span className="italic font-normal text-[#1A1A1A]">
              ARCHITECTURE<span className="text-stone-400">.</span>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Bespoke paint protection films, hyper-pigmented TPU color transformations, and carbon fiber aerodynamics crafted in our sterile ISO-7 cleanroom facility in Indirapuram.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('inquiry')}
              className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-bold text-xs uppercase tracking-widest rounded-xs shadow-md transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-3 border border-[#1A1A1A]"
            >
              <span>BEGIN YOUR BUILD</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className="w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-stone-100 text-[#1A1A1A] border border-[#1A1A1A]/30 font-sans font-bold text-xs uppercase tracking-widest rounded-xs transition flex items-center justify-center space-x-2 shadow-xs"
            >
              <Shield className="w-4 h-4 text-[#1A1A1A]" />
              <span>EXPLORE SERVICES</span>
            </button>

            <button
              onClick={openAiAdvisor}
              className="w-full sm:w-auto px-6 py-4 bg-[#EEEDE8] hover:bg-[#E2E0D8] text-[#1A1A1A] border border-[#1A1A1A]/20 font-mono-tech text-xs uppercase tracking-widest rounded-xs transition flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
              <span>AI BUILD CONSULT</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. TECHNICAL METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-white border border-[#1A1A1A]/15 rounded-md shadow-xs">
          {[
            { metric: '99.8%', label: 'OPTICAL CLARITY', sub: 'Zero orange peel texture' },
            { metric: '10 YRS', label: 'WARRANTY GUARANTEE', sub: 'Non-yellowing & anti-crack' },
            { metric: '0.01mm', label: 'CUT PRECISION', sub: 'Computer plotter templates' },
            { metric: 'ISO-7', label: 'CLEANROOM BAY', sub: 'Filtered dust-free environment' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 border-r border-[#1A1A1A]/10 last:border-r-0 space-y-1">
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                {item.metric}
              </div>
              <div className="font-sans text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-[11px] font-mono-tech text-stone-500">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ENGINEERING PHILOSOPHY: PRECISION OVER PASSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A]/15 pb-6">
          <div>
            <div className="text-xs font-mono-tech text-stone-500 uppercase tracking-widest mb-1">
              /// ENGINEERING PHILOSOPHY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] uppercase tracking-tight">
              PRECISION OVER PASSION<span className="text-stone-400 italic">.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs text-stone-600 font-sans mt-3 md:mt-0">
            Every vehicle undergoing transformation at Z LAB is executed with clinical scientific standards, eliminating human error and raw blade risk on OEM clear coats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              title: 'DIGITAL LASER TEMPLATES',
              subtitle: 'ZERO-BLADE CONTACT GUARANTEE',
              desc: 'We utilize pre-cut computerized CAD templates specific to your vehicle year, model, and trim. No blades ever touch your OEM paint.',
              icon: Gauge,
              badge: '0.01MM ACCURACY'
            },
            {
              num: '02',
              title: 'CLEANROOM ISO-7 BAY',
              subtitle: 'DUST-FREE HYBRID APPLICATION',
              desc: 'HEPA filtered air circulation maintains positive air pressure, preventing microscopic lint and dust particles from trapping beneath the TPU film.',
              icon: Layers,
              badge: 'FILTERED AIR'
            },
            {
              num: '03',
              title: 'SELF-HEALING POLYMER MATRIX',
              subtitle: 'HYDROPHOBIC TOPCOAT DEFENSE',
              desc: 'Heat-activated elastomeric polymers self-repair fine swirl marks under sunlight or warm water, repelling road debris and chemical contaminants.',
              icon: Award,
              badge: '10-YEAR FILM'
            }
          ].map((card) => {
            return (
              <div 
                key={card.num} 
                className="bg-white border border-[#1A1A1A]/15 p-8 rounded-sm hover:border-[#1A1A1A] transition-all duration-300 group relative overflow-hidden shadow-xs"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-[#1A1A1A]">
                    {card.num}
                  </span>
                  <span className="px-2.5 py-1 bg-[#EEEDE8] text-[#1A1A1A] font-mono-tech text-[10px] tracking-wider uppercase rounded-xs border border-[#1A1A1A]/10">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#1A1A1A] mb-1 group-hover:text-black transition-colors">
                  {card.title}
                </h3>
                <p className="font-mono-tech text-[11px] text-stone-500 mb-4">
                  {card.subtitle}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TECHNICAL SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A]/15 pb-6">
          <div>
            <div className="text-xs font-mono-tech text-stone-500 uppercase tracking-widest mb-1">
              /// MATERIALS & PROTECTION
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] uppercase tracking-tight">
              EXPERIMENTAL MATERIALS<span className="text-stone-400 italic">.</span>
            </h2>
          </div>
          <button 
            onClick={() => setActiveTab('services')}
            className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#1A1A1A] hover:underline font-semibold mt-4 md:mt-0"
          >
            <span>VIEW ALL SERVICES & ESTIMATOR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-[#1A1A1A]/15 rounded-sm overflow-hidden group hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-[10px] uppercase rounded-xs">
                    {item.badge}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display text-xl font-bold text-[#1A1A1A] group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-stone-500">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                  <ul className="pt-2 space-y-1.5 text-xs text-stone-700">
                    {item.specs.slice(0, 2).map((spec, i) => (
                      <li key={i} className="flex items-center space-x-2 font-mono-tech text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-tech text-stone-500 uppercase block">STARTING AT</span>
                  <span className="font-display text-lg font-bold text-[#1A1A1A]">{item.startingPrice}</span>
                </div>
                <button
                  onClick={() => setActiveTab('services')}
                  className="px-4 py-2 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-mono-tech text-xs rounded-xs transition flex items-center space-x-1"
                >
                  <span>SPECIFY</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED BUILD SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1A1A1A]/15 pb-6">
          <div>
            <div className="text-xs font-mono-tech text-stone-500 uppercase tracking-widest mb-1">
              /// PORTFOLIO ARCHIVE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A] uppercase tracking-tight">
              FEATURED BUILDS<span className="text-stone-400 italic">.</span>
            </h2>
          </div>
          <button 
            onClick={() => setActiveTab('gallery')}
            className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#1A1A1A] hover:underline font-semibold mt-4 md:mt-0"
          >
            <span>EXPLORE FULL GALLERY ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <div
              key={p.id}
              onClick={() => openBuildDetail(p)}
              className="bg-white border border-[#1A1A1A]/15 rounded-sm overflow-hidden group cursor-pointer hover:border-[#1A1A1A] transition-all duration-300 relative shadow-xs"
            >
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-[10px] uppercase rounded-xs">
                  {p.tag}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <span className="text-[10px] font-mono-tech text-stone-500 uppercase tracking-widest block">
                  {p.categoryLabel}
                </span>
                <h3 className="font-display text-lg font-bold text-[#1A1A1A] group-hover:text-black transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans line-clamp-2">
                  {p.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-mono-tech text-[#1A1A1A] font-semibold">
                  <span>VIEW SPEC SHEET</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DIRECT FAST-TRACK INQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1A1A1A] text-[#F8F7F4] border border-[#1A1A1A] rounded-sm p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-4 max-w-2xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-stone-800 border border-stone-700 text-[#F8F7F4] font-mono-tech text-xs uppercase rounded-xs">
              <Zap className="w-3.5 h-3.5 text-[#F8F7F4]" />
              <span>COMMISSION ALLOCATION AVAILABLE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#F8F7F4] uppercase tracking-tight">
              COMMISSION YOUR VEHICLE BUILD TODAY<span className="text-stone-400 italic">.</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans">
              Reserve your private slot in the Z LAB cleanroom bay. Each commission receives a serialized digital build certificate and lifetime warranty logging.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => setActiveTab('inquiry')}
              className="px-8 py-4 bg-[#F8F7F4] hover:bg-white text-[#1A1A1A] font-sans font-extrabold text-xs uppercase tracking-widest rounded-xs shadow-md transition transform hover:scale-105 flex items-center space-x-2 border border-white"
            >
              <span>BEGIN INQUIRY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
