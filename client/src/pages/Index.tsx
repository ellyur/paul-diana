import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
import MusicConsentPopup from '@/components/MusicConsentPopup';
// Cover videos
const cover1Video = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760101535/cover2_tpy0ji.mp4";
const cover2Video = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760101543/part3_q0uvmz.mp4";
const cover3Video = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760101550/part4_swg7kv.mp4";
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import TimelineCardsSection from '@/components/TimelineCardsSection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicControl from '@/components/MusicControl';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showMusicConsent, setShowMusicConsent] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  // Handle music consent
  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Music play failed:', error);
      }
    }
  };

  // Ensure audio is properly initialized
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;

      // Handle audio loading
      const handleCanPlay = () => {
        console.log('Audio is ready to play');
      };

      const handleError = (e: Event) => {
        console.error('Audio loading error:', e);
      };

      const handleLoadedData = () => {
        console.log('Audio data loaded successfully');
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dyos7sol5/video/upload/v1759744636/ytmp3free.cc_forevermore-side-a-wedding-violin-cover-youtubemp3free.org_xrela7.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="min-h-screen relative">
        <Navigation />

        {/* Music Consent Popup */}
        <MusicConsentPopup 
          onConsent={handleMusicConsent} 
          isVisible={showMusicConsent}
        />

        {/* Main Content Sections */}
        <main className="relative z-10 space-y-20">
          <HeroSection audioRef={audioRef} />
          <InvitationRevealSection />
          <CountdownSection />
          <ImageLoop />
          <StorySection />
          <TimelineCardsSection />
          <CoverSection
            videoUrl={cover1Video}
            alt="Paul & Diana Wedding Cover Video 1"
          />
          <ScrollTriggeredTimeline />
          <VenueSection />
          <CoverSection
            videoUrl={cover2Video}
            alt="Paul & Diana Wedding Cover Video 2"
          />
          <DressCodeSection />
          <HashtagGiftsSection />
          <MemorableMomentsSection />
          <RSVPSection />
          <EntourageSection />
          <CoverSection
            videoUrl={cover3Video}
            alt="Paul & Diana Wedding Cover Video 3"
          />
          <FAQSection />
          <Footer />
        </main>

        {/* Music Control - always show */}
        <MusicControl audioRef={audioRef} />
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;