import React, { useState } from 'react';
import { ServiceItem, ActiveTab } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Shield, Sparkles, CheckCircle2, ChevronRight, Calculator, Clock, Award, Sliders, Layers } from 'lucide-react';

interface ServicesCatalogProps {
  services: ServiceItem[];
  setActiveTab: (tab: ActiveTab) => void;
  onApplyEstimatorToInquiry: (config: any) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  services,
  setActiveTab,
  onApplyEstimatorToInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Interactive PPF Estimator State
  const [vehicleClass, setVehicleClass] = useState<'sedan' | 'suv' | 'supercar' | 'truck'>('suv');
  const [selectedFinish, setSelectedFinish] = useState<string>('matte-ppf');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['wheel-ceramic', 'windshield-armor']);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  // Estimator Calculation Logic
  const getBaseCost = () => {
    let base = 4000;
    if (selectedFinish === 'coloured-ppf') base = 4800;
    if (selectedFinish === 'clear-ppf') base = 3900;
    if (selectedFinish === 'matte-ppf') base = 4500;
    if (selectedFinish === 'ceramic-coating') base = 1800;
    if (selectedFinish === 'paint-correction') base = 1200;
    if (selectedFinish === 'aero-bodykits') base = 6500;

    // Vehicle Multiplier
    let multiplier = 1.0;
    if (vehicleClass === 'suv') multiplier = 1.25;
    if (vehicleClass === 'supercar') multiplier = 1.40;
    if (vehicleClass === 'truck') multiplier = 1.35;

    // Addons Cost
    let addonsCost = 0;
    if (selectedAddons.includes('wheel-ceramic')) addonsCost += 600;
    if (selectedAddons.includes('interior-shield')) addonsCost += 500;
    if (selectedAddons.includes('caliper-paint')) addonsCost += 800;
    if (selectedAddons.includes('windshield-armor')) addonsCost += 450;

    return Math.round(base * multiplier + addonsCost);
  };

  const getEstimatedDays = () => {
    let days = 4;
    if (selectedFinish === 'aero-bodykits') days = 7;
    if (selectedFinish === 'ceramic-coating') days = 2;
    if (vehicleClass === 'suv' || vehicleClass === 'truck') days += 1;
    return days;
  };

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleApplyToInquiry = () => {
    const finishObj = services.find(s => s.id === selectedFinish);
    onApplyEstimatorToInquiry({
      vehicleClass,
      finish: finishObj ? finishObj.title : selectedFinish,
      addons: selectedAddons,
      totalEstimate: getBaseCost(),
      days: getEstimatedDays()
    });
    setActiveTab('inquiry');
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#1A1A1A]/15 pb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-stone-100 border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs">
          <Shield className="w-3.5 h-3.5" />
          <span>MATERIALS & PRESERVATION /// Z LAB</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#1A1A1A] uppercase tracking-tight">
          EXPERIMENTAL MATERIALS & PROTECTION<span className="text-stone-400 italic">.</span>
        </h1>
        <p className="max-w-3xl text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
          Explore our range of 210-micron self-healing thermoplastic polyurethane films, hyper-pigmented color shifts, Si02 quartz ceramic matrices, and carbon aerodynamic components.
        </p>
      </div>

      {/* BEFORE / AFTER INTERACTIVE COMPARISON DEMO */}
      <div className="space-y-4 bg-white p-6 rounded-sm border border-[#1A1A1A]/15 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div>
            <span className="text-[10px] font-mono-tech text-stone-500 uppercase tracking-widest block">
              /// INTERACTIVE FINISH DEMONSTRATOR
            </span>
            <h2 className="font-display font-bold text-xl text-[#1A1A1A] uppercase">
              GLOSS OEM VS. SATIN STEALTH PROTECTION
            </h2>
          </div>
          <span className="text-xs font-mono-tech text-stone-500">
            DRAG SLIDER HORIZONTALLY TO INSPECT MATRIX
          </span>
        </div>

        <BeforeAfterSlider 
          beforeImage="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
          afterImage="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
          beforeLabel="OEM GLOSS UNPROTECTED"
          afterLabel="Z LAB 210U SATIN PPF"
          aspectRatio="aspect-[21/9]"
        />
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1A1A1A]/15 pb-4">
        {[
          { id: 'all', label: 'ALL SERVICES' },
          { id: 'ppf', label: 'PPF PROTECTION FILMS' },
          { id: 'coating', label: 'CERAMIC COATINGS' },
          { id: 'correction', label: 'PAINT CORRECTION' },
          { id: 'aero', label: 'CARBON AERODYNAMICS' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 font-mono-tech text-xs uppercase tracking-wider rounded-xs transition ${
              selectedCategory === cat.id
                ? 'bg-[#1A1A1A] text-[#F8F7F4] font-bold'
                : 'bg-white text-stone-600 hover:text-[#1A1A1A] border border-[#1A1A1A]/15'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SERVICES CATALOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div 
            key={service.id}
            className="bg-white border border-[#1A1A1A]/15 rounded-sm overflow-hidden hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between group shadow-xs"
          >
            <div>
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-[10px] uppercase rounded-xs">
                  {service.badge}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#1A1A1A] group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-mono-tech text-stone-500 uppercase tracking-wider">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-[#EEEDE8] p-4 rounded-xs border border-[#1A1A1A]/10 space-y-2">
                  <span className="text-[10px] font-mono-tech text-[#1A1A1A] uppercase block font-bold">
                    TECHNICAL SPECIFICATIONS
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {service.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center space-x-2 font-mono-tech text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#1A1A1A]/10 flex items-center justify-between mt-4">
              <div>
                <span className="text-[10px] font-mono-tech text-stone-500 uppercase block">STARTING COST</span>
                <span className="font-display text-xl font-bold text-[#1A1A1A]">{service.startingPrice}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedFinish(service.id);
                  const estimatorEl = document.getElementById('estimator-tool');
                  if (estimatorEl) estimatorEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2.5 bg-[#1A1A1A] text-[#F8F7F4] font-sans font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-black transition flex items-center space-x-1 border border-[#1A1A1A]"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>CONFIGURE</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE BUILD & PRICE ESTIMATOR TOOL */}
      <div id="estimator-tool" className="bg-white border-2 border-[#1A1A1A] rounded-sm p-6 sm:p-10 space-y-8 shadow-md relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-xs uppercase rounded-xs">
            <Calculator className="w-3.5 h-3.5 text-[#F8F7F4]" />
            <span>INSTANT BUILD ESTIMATOR & TIMELINE</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1A1A1A] uppercase tracking-tight">
            CUSTOMIZE YOUR PROTECTION PACKAGE<span className="text-stone-400 italic">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Select your vehicle class and protection finish to view transparent pricing and cleanroom bay allocation timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* Options Column 1 & 2 */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. Vehicle Class */}
            <div className="space-y-2">
              <label className="text-xs font-mono-tech uppercase text-stone-600 block font-bold">
                1. SELECT VEHICLE CLASS
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'sedan', label: 'SEDAN / COUPE', sub: 'Porsche 911, M3, C63' },
                  { id: 'suv', label: 'LUXURY SUV', sub: 'Range Rover, Urus, DBX' },
                  { id: 'supercar', label: 'SUPERCAR', sub: 'Ferrari, Lambo, GT3' },
                  { id: 'truck', label: 'HEAVY SUV', sub: 'G63 AMG, Defender 110' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVehicleClass(v.id as any)}
                    className={`p-3 rounded-xs border text-left transition font-mono-tech ${
                      vehicleClass === v.id
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F8F7F4]'
                        : 'border-[#1A1A1A]/15 bg-stone-50 text-stone-700 hover:border-[#1A1A1A]/40'
                    }`}
                  >
                    <div className={`text-xs font-bold ${vehicleClass === v.id ? 'text-[#F8F7F4]' : 'text-[#1A1A1A]'}`}>{v.label}</div>
                    <div className={`text-[10px] ${vehicleClass === v.id ? 'text-stone-300' : 'text-stone-500'} mt-0.5`}>{v.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Primary Service Finish */}
            <div className="space-y-2">
              <label className="text-xs font-mono-tech uppercase text-stone-600 block font-bold">
                2. PRIMARY FINISH PACKAGE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedFinish(s.id)}
                    className={`p-3.5 rounded-xs border text-left transition flex items-center justify-between ${
                      selectedFinish === s.id
                        ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F8F7F4]'
                        : 'border-[#1A1A1A]/15 bg-stone-50 text-stone-700 hover:border-[#1A1A1A]/40'
                    }`}
                  >
                    <div>
                      <div className={`text-xs font-bold font-sans ${selectedFinish === s.id ? 'text-[#F8F7F4]' : 'text-[#1A1A1A]'}`}>{s.title}</div>
                      <div className={`text-[10px] font-mono-tech ${selectedFinish === s.id ? 'text-stone-300' : 'text-stone-500'}`}>{s.subtitle}</div>
                    </div>
                    <span className={`font-mono-tech text-xs font-bold ${selectedFinish === s.id ? 'text-[#F8F7F4]' : 'text-[#1A1A1A]'}`}>{s.startingPrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Protection Options */}
            <div className="space-y-2">
              <label className="text-xs font-mono-tech uppercase text-stone-600 block font-bold">
                3. OPTIONAL Z LAB ADD-ONS
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'wheel-ceramic', label: 'FORGED WHEEL 9H CERAMIC', cost: '+$600' },
                  { id: 'interior-shield', label: 'INTERIOR LEATHER & ALCANTARA SHIELD', cost: '+$500' },
                  { id: 'caliper-paint', label: 'HIGH-TEMP BRAKE CALIPER CUSTOM PAINT', cost: '+$800' },
                  { id: 'windshield-armor', label: 'HIGH-IMPACT WINDSHIELD PROTECTION FILM', cost: '+$450' },
                ].map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xs border text-left transition flex items-center justify-between ${
                        isChecked
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F8F7F4]'
                          : 'border-[#1A1A1A]/15 bg-stone-50 text-stone-700 hover:border-[#1A1A1A]/40'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-xs border flex items-center justify-center ${isChecked ? 'bg-[#F8F7F4] border-white' : 'border-stone-400'}`}>
                          {isChecked && <CheckCircle2 className="w-3 h-3 text-[#1A1A1A]" />}
                        </div>
                        <span className={`text-xs font-mono-tech ${isChecked ? 'text-[#F8F7F4]' : 'text-stone-800'}`}>{addon.label}</span>
                      </div>
                      <span className={`text-xs font-mono-tech font-bold ${isChecked ? 'text-[#F8F7F4]' : 'text-[#1A1A1A]'}`}>{addon.cost}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Summary Column */}
          <div className="bg-[#1A1A1A] text-[#F8F7F4] border border-[#1A1A1A] rounded-xs p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                <span className="text-xs font-mono-tech text-stone-300 uppercase font-bold">ESTIMATED SPEC SHEET</span>
                <span className="text-[10px] font-mono-tech bg-stone-800 px-2 py-0.5 text-stone-300 rounded-xs">ISO-7 ALLOCATION</span>
              </div>

              <div className="space-y-3 font-mono-tech text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400">VEHICLE CLASS:</span>
                  <span className="text-white uppercase font-bold">{vehicleClass}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">PACKAGE:</span>
                  <span className="text-white font-bold">{services.find(s => s.id === selectedFinish)?.title || 'Custom'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">ADD-ONS:</span>
                  <span className="text-stone-200 font-bold">{selectedAddons.length} SELECTED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">CLEANROOM TIME:</span>
                  <span className="text-white flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-stone-300" />
                    <span>{getEstimatedDays()} BUSINESS DAYS</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">WARRANTY GRADE:</span>
                  <span className="text-white flex items-center space-x-1">
                    <Award className="w-3 h-3 text-stone-300" />
                    <span>10 YEARS STUDIO</span>
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800">
                <span className="text-[10px] font-mono-tech text-stone-400 uppercase block">ESTIMATED INVESTMENT</span>
                <div className="font-display text-4xl font-bold text-white tracking-tight">
                  ${getBaseCost().toLocaleString()} <span className="text-xs font-mono-tech text-stone-400">EST.</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyToInquiry}
              className="w-full py-4 bg-[#F8F7F4] hover:bg-white text-[#1A1A1A] font-sans font-extrabold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition shadow-md border border-white"
            >
              <span>LOCK IN ESTIMATE & INQUIRE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
