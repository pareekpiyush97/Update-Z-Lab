import React, { useState } from 'react';
import { X, Sparkles, Shield, Cpu, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpec?: (spec: string) => void;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({
  isOpen,
  onClose,
  onSelectSpec
}) => {
  const [carModel, setCarModel] = useState('');
  const [paintColor, setPaintColor] = useState('');
  const [drivingEnv, setDrivingEnv] = useState('city_and_highway');
  const [desiredStyle, setDesiredStyle] = useState('stealth_satin');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleConsultAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!carModel.trim()) return;

    setLoading(true);
    setRecommendation(null);

    try {
      const res = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          carModel,
          paintColor,
          drivingEnv,
          desiredStyle,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setRecommendation(data.recommendation || 'Recommendation generated.');
      } else {
        throw new Error('API request failed');
      }
    } catch (err) {
      console.error('AI Consultation error:', err);
      setRecommendation(`/// STUDIO.FORM TECHNICAL RECOMMENDATION ///
VEHICLE: ${carModel.toUpperCase()} (${paintColor ? paintColor.toUpperCase() : 'FACTORY SPEC'})

RECOMMENDED SPEC:
- 210 Micron Satin Stealth Protection Film (10-Year Warranty)
- 9H Hydrophobic Ceramic Coating for Wheels & Calipers
- ISO-7 Cleanroom Installation (5 Days Turnaround)
- Zero-Blade Contact Template Cut Precision`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#F8F7F4] border-2 border-[#1A1A1A] rounded-sm w-full max-w-2xl overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-[#EEEDE8] px-6 py-4 border-b border-[#1A1A1A]/15 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#1A1A1A] text-[#F8F7F4] rounded-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#1A1A1A] text-lg">AI BUILD CONSULTANT</h3>
              <p className="text-[11px] font-mono-tech text-stone-600 font-semibold">STUDIO.FORM GEMINI ENGINE /// SPEC RECOMMENDER</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-[#1A1A1A] bg-white border border-[#1A1A1A]/20 rounded-xs transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {!recommendation ? (
            <form onSubmit={handleConsultAi} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-stone-700 mb-1 font-bold">
                  1. Vehicle Make & Model <span className="text-stone-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  placeholder="e.g. Range Rover L460, Porsche 911 GT3, AMG G63, BMW M5..."
                  className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-stone-700 mb-1 font-bold">
                    2. Original Paint Color
                  </label>
                  <input
                    type="text"
                    value={paintColor}
                    onChange={(e) => setPaintColor(e.target.value)}
                    placeholder="e.g. Santorini Black, Chalk Gray, White"
                    className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-stone-700 mb-1 font-bold">
                    3. Primary Usage
                  </label>
                  <select
                    value={drivingEnv}
                    onChange={(e) => setDrivingEnv(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/20 rounded-xs px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option value="city_and_highway">Daily Urban & Highway Driving</option>
                    <option value="track_and_motorsport">High Speed Track / Motorsport</option>
                    <option value="show_and_collection">Collector / Show Garaged</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-stone-700 mb-1 font-bold">
                  4. Preferred Finish Aesthetic
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'stealth_satin', label: 'Satin Stealth' },
                    { id: 'coloured_ppf', label: 'Coloured PPF Change' },
                    { id: 'clear_high_gloss', label: 'Ultra High Gloss Clear' },
                    { id: 'carbon_aero', label: 'Carbon Aero Widebody' },
                    { id: 'ceramic_coating', label: '9H Glass Ceramic' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setDesiredStyle(opt.id)}
                      className={`p-2.5 rounded-xs border text-left font-mono-tech transition ${
                        desiredStyle === opt.id
                          ? 'border-[#1A1A1A] bg-[#1A1A1A] text-[#F8F7F4] font-bold'
                          : 'border-[#1A1A1A]/20 bg-white text-stone-700 hover:border-[#1A1A1A]/40'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !carModel}
                className="w-full py-3 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-bold text-xs uppercase tracking-widest rounded-xs flex items-center justify-center space-x-2 transition disabled:opacity-50 border border-[#1A1A1A]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#F8F7F4]" />
                    <span>ANALYZING VEHICLE GEOMETRY & SPECS...</span>
                  </>
                ) : (
                  <>
                    <Cpu className="w-4 h-4 text-[#F8F7F4]" />
                    <span>GENERATE AI BUILD RECOMMENDATION</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-white border border-[#1A1A1A]/20 rounded-xs p-5 font-mono-tech text-xs text-stone-800 leading-relaxed whitespace-pre-line border-l-4 border-l-[#1A1A1A]">
                {recommendation}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setRecommendation(null)}
                  className="flex-1 py-2.5 bg-white hover:bg-stone-100 border border-[#1A1A1A]/20 text-[#1A1A1A] font-mono-tech text-xs uppercase rounded-xs transition"
                >
                  NEW AI CONSULTATION
                </button>
                <button
                  onClick={() => {
                    if (onSelectSpec) onSelectSpec(recommendation);
                    onClose();
                  }}
                  className="flex-1 py-2.5 bg-[#1A1A1A] hover:bg-black text-[#F8F7F4] font-sans font-bold text-xs uppercase tracking-wider rounded-xs flex items-center justify-center space-x-2 transition border border-[#1A1A1A]"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>APPLY TO INQUIRY FORM</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
