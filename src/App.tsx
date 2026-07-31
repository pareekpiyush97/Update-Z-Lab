import React, { useState } from 'react';
import { ActiveTab, BuildProject } from './types';
import { SERVICES_DATA, BUILD_PROJECTS } from './data/studioData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroHome } from './components/HeroHome';
import { ServicesCatalog } from './components/ServicesCatalog';
import { BuildGallery } from './components/BuildGallery';
import { FacilityStudio } from './components/FacilityStudio';
import { BespokeInquiry } from './components/BespokeInquiry';
import { AiAdvisorModal } from './components/AiAdvisorModal';
import { audioEngine } from './utils/audioEngine';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [aiAdvisorOpen, setAiAdvisorOpen] = useState<boolean>(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState<BuildProject | null>(null);
  const [estimatorConfig, setEstimatorConfig] = useState<any>(null);

  const toggleAudio = () => {
    const playing = audioEngine.toggle();
    setAudioPlaying(playing);
  };

  const handleApplyEstimatorToInquiry = (config: any) => {
    setEstimatorConfig(config);
    setActiveTab('inquiry');
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1A1A1A] flex flex-col justify-between font-sans selection:bg-[#1A1A1A] selection:text-[#F8F7F4]">
      {/* Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        audioPlaying={audioPlaying}
        toggleAudio={toggleAudio}
        openAiAdvisor={() => setAiAdvisorOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'home' && (
              <HeroHome
                setActiveTab={setActiveTab}
                services={SERVICES_DATA}
                projects={BUILD_PROJECTS}
                openBuildDetail={(p) => setSelectedProjectModal(p)}
                openAiAdvisor={() => setAiAdvisorOpen(true)}
              />
            )}

            {activeTab === 'services' && (
              <ServicesCatalog
                services={SERVICES_DATA}
                setActiveTab={setActiveTab}
                onApplyEstimatorToInquiry={handleApplyEstimatorToInquiry}
              />
            )}

            {activeTab === 'gallery' && (
              <BuildGallery
                projects={BUILD_PROJECTS}
                setActiveTab={setActiveTab}
                selectedProjectModal={selectedProjectModal}
                setSelectedProjectModal={setSelectedProjectModal}
              />
            )}

            {activeTab === 'facility' && (
              <FacilityStudio setActiveTab={setActiveTab} />
            )}

            {activeTab === 'inquiry' && (
              <BespokeInquiry
                initialConfig={estimatorConfig}
                setActiveTab={setActiveTab}
                openAiAdvisor={() => setAiAdvisorOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* AI Consultant Modal */}
      <AiAdvisorModal
        isOpen={aiAdvisorOpen}
        onClose={() => setAiAdvisorOpen(false)}
        onSelectSpec={(specText) => {
          setEstimatorConfig({ projectVision: specText });
          setActiveTab('inquiry');
        }}
      />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
