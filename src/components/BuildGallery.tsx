import React, { useState } from 'react';
import { BuildProject, ActiveTab } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Sparkles, X, ChevronRight, CheckCircle2, Shield, Eye, Calendar, MapPin, Award, Layers } from 'lucide-react';

interface BuildGalleryProps {
  projects: BuildProject[];
  setActiveTab: (tab: ActiveTab) => void;
  selectedProjectModal: BuildProject | null;
  setSelectedProjectModal: (project: BuildProject | null) => void;
}

export const BuildGallery: React.FC<BuildGalleryProps> = ({
  projects,
  setActiveTab,
  selectedProjectModal,
  setSelectedProjectModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeGalleryImage, setActiveGalleryImage] = useState<number>(0);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-12 py-10 max-w-7xl mx-auto px-4 sm:px-8">
      
      {/* Header */}
      <div className="space-y-3 border-b border-[#1A1A1A]/15 pb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-stone-100 border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BESPOKE ARCHIVE /// Z LAB</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-[#1A1A1A] uppercase tracking-tight">
          THE BUILD GALLERY<span className="text-stone-400 italic">.</span>
        </h1>
        <p className="max-w-3xl text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
          Inspect completed commissions from our Indirapuram cleanroom facility. Every build undergoes rigorous 360° light audit inspection and certification.
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#1A1A1A]/15 pb-4">
        {[
          { id: 'all', label: 'ALL BUILDS' },
          { id: 'bodykits', label: 'BODYKITS & AERO' },
          { id: 'ppf', label: 'PPF PROTECTION' },
          { id: 'finishes', label: 'BESPOKE FINISHES' },
          { id: 'motorsport', label: 'TRACK & MOTORSPORT' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 font-mono-tech text-xs uppercase tracking-wider rounded-xs transition ${
              activeCategory === cat.id
                ? 'bg-[#1A1A1A] text-[#F8F7F4] font-bold shadow-xs'
                : 'bg-white text-stone-600 hover:text-[#1A1A1A] border border-[#1A1A1A]/15'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* BENTO GRID OF BUILDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => {
          // Make first project span 2 columns in large screen for bento variation
          const isLargeCard = idx === 0 && activeCategory === 'all';
          return (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProjectModal(project);
                setActiveGalleryImage(0);
              }}
              className={`bg-white border border-[#1A1A1A]/15 rounded-sm overflow-hidden group cursor-pointer hover:border-[#1A1A1A] transition-all duration-300 relative flex flex-col justify-between shadow-xs ${
                isLargeCard ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`relative ${isLargeCard ? 'h-80 md:h-96' : 'h-64'} overflow-hidden bg-stone-100`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-[10px] uppercase font-bold rounded-xs">
                    {project.tag}
                  </span>
                  <span className="px-3 py-1 bg-[#F8F7F4]/90 text-[#1A1A1A] font-mono-tech text-[10px] uppercase rounded-xs font-semibold">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono-tech text-stone-300 uppercase tracking-widest block font-bold">
                      {project.categoryLabel}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-stone-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 bg-[#1A1A1A] border border-[#1A1A1A] rounded-full flex items-center justify-center text-[#F8F7F4] group-hover:bg-black transition-colors shrink-0">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3 bg-white">
                <p className="text-xs text-stone-600 font-sans line-clamp-2">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1A1A1A]/10 font-mono-tech text-[11px] text-stone-700">
                  <div className="flex items-center space-x-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    <span className="truncate">{project.specs.filmThickness}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Award className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    <span className="truncate">{project.specs.warranty}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* BUILD DETAIL MODAL */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
          <div className="bg-[#F8F7F4] border-2 border-[#1A1A1A] rounded-sm w-full max-w-4xl overflow-hidden shadow-2xl my-8 relative">
            
            {/* Modal Header */}
            <div className="bg-[#1A1A1A] text-[#F8F7F4] px-6 py-4 border-b border-[#1A1A1A] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono-tech text-stone-300 uppercase tracking-wider block">
                  BUILD SPECIFICATION SHEET /// Z LAB
                </span>
                <h3 className="font-display font-bold text-white text-xl">
                  {selectedProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="p-2 text-stone-300 hover:text-white bg-stone-800 border border-stone-700 rounded-xs transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Image Lightbox View */}
              <div className="space-y-3">
                <div className="relative h-80 sm:h-96 rounded-sm overflow-hidden border border-[#1A1A1A]/20 bg-stone-100">
                  <img 
                    src={selectedProjectModal.gallery[activeGalleryImage] || selectedProjectModal.image} 
                    alt={selectedProjectModal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#1A1A1A] text-[#F8F7F4] font-mono-tech text-xs uppercase rounded-xs">
                    IMAGE {activeGalleryImage + 1} OF {selectedProjectModal.gallery.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {selectedProjectModal.gallery.length > 1 && (
                  <div className="flex space-x-3 overflow-x-auto pb-1">
                    {selectedProjectModal.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveGalleryImage(i)}
                        className={`w-20 h-16 rounded-xs overflow-hidden border transition shrink-0 ${
                          activeGalleryImage === i ? 'border-[#1A1A1A] ring-2 ring-[#1A1A1A]/20' : 'border-[#1A1A1A]/20 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Before After Slider if available */}
              {selectedProjectModal.beforeAfterImage && (
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-[#1A1A1A] uppercase font-bold block">
                    /// BEFORE & AFTER FINISH COMPARISON
                  </span>
                  <BeforeAfterSlider 
                    beforeImage={selectedProjectModal.beforeAfterImage.before}
                    afterImage={selectedProjectModal.beforeAfterImage.after}
                    aspectRatio="aspect-[16/8]"
                  />
                </div>
              )}

              {/* Build Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xs border border-[#1A1A1A]/15 shadow-xs">
                <div className="space-y-3">
                  <span className="text-xs font-mono-tech text-[#1A1A1A] uppercase font-bold block">
                    VEHICLE METRICS
                  </span>
                  <div className="space-y-2 font-mono-tech text-xs">
                    <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
                      <span className="text-stone-500">MODEL:</span>
                      <span className="text-[#1A1A1A] font-bold">{selectedProjectModal.clientModel}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
                      <span className="text-stone-500">YEAR:</span>
                      <span className="text-[#1A1A1A]">{selectedProjectModal.year}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
                      <span className="text-stone-500">LOCATION:</span>
                      <span className="text-[#1A1A1A]">{selectedProjectModal.specs.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono-tech text-[#1A1A1A] uppercase font-bold block">
                    PROTECTION SPECIFICATIONS
                  </span>
                  <div className="space-y-2 font-mono-tech text-xs">
                    <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
                      <span className="text-stone-500">SERVICE:</span>
                      <span className="text-[#1A1A1A] font-bold">{selectedProjectModal.specs.service}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
                      <span className="text-stone-500">FILM THICKNESS:</span>
                      <span className="text-[#1A1A1A] font-bold">{selectedProjectModal.specs.filmThickness}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
                      <span className="text-stone-500">WARRANTY:</span>
                      <span className="text-[#1A1A1A]">{selectedProjectModal.specs.warranty}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="text-xs font-mono-tech text-stone-500 uppercase block">SCOPE OF WORK</span>
                <p className="text-xs text-stone-700 font-sans leading-relaxed bg-white p-4 rounded-xs border border-[#1A1A1A]/15">
                  {selectedProjectModal.description}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#1A1A1A]/15 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="py-3 px-6 bg-white hover:bg-stone-100 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs border border-[#1A1A1A]/20 transition"
                >
                  CLOSE SPEC SHEET
                </button>
                <button
                  onClick={() => {
                    setSelectedProjectModal(null);
                    setActiveTab('inquiry');
                  }}
                  className="flex-1 py-3 px-6 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-extrabold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition shadow-md border border-[#1A1A1A]"
                >
                  <span>REQUEST SIMILAR BUILD ALLOCATION</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
