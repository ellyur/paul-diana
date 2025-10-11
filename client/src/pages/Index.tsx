import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
// Cover videos
const cover1Video = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760178149/cover1_oaxvl0.mp4";
const cover2Video = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760178155/cover2_y1imab.mp4";
const cover3Video = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760178160/1011_qxyiep.mp4";
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import TimelineCardsSection from '@/components/TimelineCardsSection';
import LoveStoryCover from '@/components/LoveStoryCover';
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
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);
    
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
        console.log('Audio playing after user consent');
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dpvmwejes/video/upload/v1760183359/ytmp3free.cc_forevermore-side-a-wedding-violin-cover-youtubemp3free.org_usyrdn.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <TimelineCardsSection />
        <LoveStoryCover />
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
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;