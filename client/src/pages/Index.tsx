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
import MusicControl from '@/components/MusicControl';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Autoplay music on mount
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;

      // Autoplay music
      const playMusic = async () => {
        try {
          await audio.play();
          console.log('Audio playing');
        } catch (error) {
          console.error('Audio autoplay failed:', error);
        }
      };

      // Handle audio loading
      const handleCanPlay = () => {
        console.log('Audio is ready to play');
        playMusic();
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
          src="https://res.cloudinary.com/dr3xey7h9/video/upload/v1760179245/ytmp3free.cc_forevermore-side-a-wedding-violin-cover-youtubemp3free.org_ikuekf.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="min-h-screen relative">
        <Navigation />

        {/* Main Content Sections */}
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

        {/* Music Control - always show */}
        <MusicControl audioRef={audioRef} />
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;