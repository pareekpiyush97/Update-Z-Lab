import React, { useState, useEffect } from 'react';
import { ActiveTab, InquiryFormData } from '../types';
import { Shield, Sparkles, CheckCircle2, ChevronRight, FileCheck, ArrowRight, Printer, Share2, Award, Download } from 'lucide-react';

interface BespokeInquiryProps {
  initialConfig?: any;
  setActiveTab: (tab: ActiveTab) => void;
  openAiAdvisor: () => void;
}

export const BespokeInquiry: React.FC<BespokeInquiryProps> = ({
  initialConfig,
  setActiveTab,
  openAiAdvisor
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    vehicleMakeModel: initialConfig?.finish ? `Custom ${initialConfig.vehicleClass || ''}` : '',
    vehicleYear: '2025',
    services: initialConfig?.finish ? [initialConfig.finish] : ['Satin Stealth PPF'],
    projectVision: initialConfig?.totalEstimate ? `Applied preset estimate: $${initialConfig.totalEstimate}` : '',
    preferredDate: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [certificateSerial, setCertificateSerial] = useState('');

  useEffect(() => {
    if (initialConfig?.finish) {
      setFormData(prev => ({
        ...prev,
        services: [initialConfig.finish],
        projectVision: `Estimator Package: ${initialConfig.finish} on ${initialConfig.vehicleClass || 'vehicle'}. Estimated cost: $${initialConfig.totalEstimate}. Estimated time: ${initialConfig.days} days.`
      }));
    }
  }, [initialConfig]);

  const toggleService = (srv: string) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== srv)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serial = `SF-ZLAB-${Math.floor(100000 + Math.random() * 900000)}`;
    setCertificateSerial(serial);
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-16 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#1A1A1A]/15 pb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-stone-100 border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs">
          <FileCheck className="w-3.5 h-3.5" />
          <span>BESPOKE PROJECT INQUIRY /// ALLOCATION RESERVE</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#1A1A1A] uppercase tracking-tight">
          BEGIN YOUR BUILD<span className="text-stone-400 italic">.</span>
        </h1>
        <p className="max-w-3xl text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
          Submit your vehicle details below to reserve an ISO-7 cleanroom application slot. Each commission receives a serialized digital build certificate.
        </p>
      </div>

      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Inquiry Form Column */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8 bg-white p-6 sm:p-10 rounded-sm border border-[#1A1A1A]/15 shadow-xs">
            
            {/* Step 1: Client Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-[#1A1A1A]/10 pb-2">
                <span className="w-6 h-6 rounded-xs bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-xs font-bold flex items-center justify-center">
                  01
                </span>
                <h3 className="font-display font-bold text-[#1A1A1A] text-base uppercase">
                  CLIENT IDENTIFICATION & VEHICLE
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                    CLIENT NAME <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                    PHONE / WHATSAPP <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                    EMAIL ADDRESS <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    placeholder="rahul@domain.com"
                    className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                    VEHICLE MAKE & MODEL <span className="text-stone-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleMakeModel}
                    onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                    placeholder="e.g. Range Rover L460 / Porsche 911 GT3"
                    className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Service Selection Pills */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-[#1A1A1A]/10 pb-2">
                <span className="w-6 h-6 rounded-xs bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-xs font-bold flex items-center justify-center">
                  02
                </span>
                <h3 className="font-display font-bold text-[#1A1A1A] text-base uppercase">
                  PRIMARY SERVICE SCOPE
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Coloured PPF (Self-Healing)',
                  'Satin Stealth PPF',
                  'Clear Optically High Gloss PPF',
                  '9H Quartz Ceramic Coating',
                  'Precision Paint Correction',
                  'Carbon Fiber Aero Bodykits',
                  'Forged Wheel Ceramic Coating',
                  'Interior Leather Protection'
                ].map((serviceName) => {
                  const isChecked = formData.services.includes(serviceName);
                  return (
                    <button
                      key={serviceName}
                      type="button"
                      onClick={() => toggleService(serviceName)}
                      className={`p-3 rounded-xs border text-left font-mono-tech text-xs transition flex items-center justify-between ${
                        isChecked
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F8F7F4] font-bold'
                          : 'border-[#1A1A1A]/15 bg-stone-50 text-stone-700 hover:border-[#1A1A1A]/40'
                      }`}
                    >
                      <span>{serviceName}</span>
                      {isChecked && <CheckCircle2 className="w-4 h-4 text-[#F8F7F4] shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Vision & Additional Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-[#1A1A1A]/10 pb-2">
                <span className="w-6 h-6 rounded-xs bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-xs font-bold flex items-center justify-center">
                  03
                </span>
                <h3 className="font-display font-bold text-[#1A1A1A] text-base uppercase">
                  PROJECT VISION & REQUIREMENTS
                </h3>
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-stone-600 mb-1 font-bold">
                  PROJECT SCOPE DETAILS
                </label>
                <textarea
                  rows={4}
                  value={formData.projectVision}
                  onChange={(e) => setFormData({ ...formData, projectVision: e.target.value })}
                  placeholder="Describe your desired finish, timeline requirements, or specific vehicle conditions..."
                  className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={openAiAdvisor}
                  className="inline-flex items-center space-x-2 text-xs font-mono-tech text-[#1A1A1A] font-bold hover:underline"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>NEED HELP? CONSULT AI BUILD ADVISOR</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-extrabold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition shadow-md border border-[#1A1A1A]"
            >
              <span>GENERATE BESPOKE COMMISSION TICKET & SUBMIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Sidebar / Consultation Process Column */}
          <div className="space-y-6">
            
            {/* Process Card */}
            <div className="bg-white border border-[#1A1A1A]/15 rounded-sm p-6 space-y-6 shadow-xs">
              <div>
                <span className="text-[10px] font-mono-tech text-stone-500 uppercase font-bold block">
                  CONSULTATION PROCESS
                </span>
                <h3 className="font-display font-bold text-xl text-[#1A1A1A]">
                  STUDIO WORKFLOW
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { step: 'PHASE 01', title: 'PAINT AUDIT & DECONTAMINATION', desc: 'Digital depth gauge analysis and anti-static decontamination wash.' },
                  { step: 'PHASE 02', title: 'CAD PLOTTER TEMPLATE CUT', desc: 'Graphtec plotter cuts 210U film for zero-blade paint contact.' },
                  { step: 'PHASE 03', title: 'ISO-7 CLEANROOM INSTALL', desc: 'Dust-free positive air application with wrapped invisible edges.' },
                  { step: 'PHASE 04', title: '360° LIGHT AUDIT & CERTIFICATE', desc: 'Multi-angle Scangrip LED audit and digital serial registration.' }
                ].map((p, idx) => (
                  <div key={idx} className="space-y-1 border-l-2 border-[#1A1A1A] pl-4">
                    <span className="text-[10px] font-mono-tech text-[#1A1A1A] uppercase font-bold">{p.step}</span>
                    <h4 className="font-sans text-xs font-bold text-[#1A1A1A]">{p.title}</h4>
                    <p className="text-[11px] text-stone-600 font-sans">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured L460 Spec Card */}
            <div className="bg-white border border-[#1A1A1A]/15 rounded-sm p-6 space-y-3 relative overflow-hidden shadow-xs">
              <img 
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80" 
                alt="Range Rover L460 Stealth Package"
                className="w-full h-36 object-cover rounded-xs filter brightness-95"
              />
              <span className="text-[10px] font-mono-tech text-stone-500 uppercase font-bold block">
                FEATURED COMMISSION /// SPEC 01.44
              </span>
              <h4 className="font-display font-bold text-[#1A1A1A] text-base">
                RANGE ROVER L460 STEALTH PACKAGE
              </h4>
              <p className="text-xs text-stone-600 font-sans">
                Complete 210U Satin Stealth PPF conversion with black-out badging and wheel ceramic matrix.
              </p>
            </div>

          </div>

        </div>
      ) : (
        /* DIGITAL BUILD CERTIFICATE TICKET GENERATED UPON SUBMISSION */
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          
          <div className="bg-white border-2 border-[#1A1A1A] rounded-sm p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            {/* Certificate Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#1A1A1A]/15 pb-6 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F8F7F4] flex items-center justify-center font-bold rounded-xs">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-[#1A1A1A] tracking-tight">
                    STUDIO<span className="text-stone-400 italic">.</span>FORM
                  </h2>
                  <p className="text-[10px] font-mono-tech text-stone-500 font-bold">
                    DIGITAL BUILD COMMISSION CERTIFICATE /// Z LAB
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right font-mono-tech text-xs">
                <span className="text-stone-500 block">SERIAL NO.</span>
                <span className="text-[#1A1A1A] font-bold text-sm tracking-widest">{certificateSerial}</span>
              </div>
            </div>

            {/* Certificate Body Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#EEEDE8] p-6 rounded-xs border border-[#1A1A1A]/15 font-mono-tech text-xs">
              <div>
                <span className="text-[#1A1A1A] uppercase font-bold block mb-2">CLIENT & VEHICLE</span>
                <div className="space-y-1.5 text-stone-800">
                  <div>NAME: <span className="text-[#1A1A1A] font-bold">{formData.clientName}</span></div>
                  <div>PHONE: <span className="text-[#1A1A1A]">{formData.clientPhone}</span></div>
                  <div>VEHICLE: <span className="text-[#1A1A1A] font-bold">{formData.vehicleMakeModel}</span></div>
                </div>
              </div>

              <div>
                <span className="text-[#1A1A1A] uppercase font-bold block mb-2">COMMISSION SCOPE</span>
                <div className="space-y-1.5 text-stone-800">
                  <div>SERVICES: <span className="text-[#1A1A1A] font-bold">{formData.services.join(', ')}</span></div>
                  <div>LOCATION: <span className="text-[#1A1A1A]">Z LAB Indirapuram</span></div>
                  <div>STATUS: <span className="text-[#1A1A1A] font-bold">SLOT RESERVED Q3/Q4</span></div>
                </div>
              </div>
            </div>

            {/* Certificate Footer Note */}
            <div className="text-xs text-stone-700 font-sans leading-relaxed border-t border-[#1A1A1A]/15 pt-4 flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-[#1A1A1A] shrink-0" />
              <span>
                Thank you, {formData.clientName}. Your commission details have been registered in our Z LAB queue. Our Senior Technical Concierge will contact you at {formData.clientPhone} within 2 hours.
              </span>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.print()}
                className="py-3 px-6 bg-white hover:bg-stone-100 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs border border-[#1A1A1A]/20 transition flex items-center justify-center space-x-2"
              >
                <Printer className="w-4 h-4 text-[#1A1A1A]" />
                <span>PRINT CERTIFICATE</span>
              </button>
              
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setActiveTab('home');
                }}
                className="flex-1 py-3 px-6 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-extrabold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition border border-[#1A1A1A]"
              >
                <span>RETURN TO LABORATORY HOME</span>
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
