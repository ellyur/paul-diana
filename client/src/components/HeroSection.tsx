import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect, useRef } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';

const heroVideo = "https://res.cloudinary.com/dr3xey7h9/video/upload/v1760101530/top_page_eeee0w.mp4";

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const HeroSection = ({ audioRef }: HeroSectionProps) => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync video sound with background music
  useEffect(() => {
    const audio = audioRef.current;
    const video = videoRef.current;
    if (!audio || !video) return;

    const syncVideoWithAudio = () => {
      // Sync mute state and volume
      video.muted = audio.paused || audio.muted || audio.volume === 0;
      if (!video.muted) {
        video.volume = audio.volume;
      }
    };

    const handlePlay = () => {
      video.muted = false;
      video.volume = audio.volume;
    };

    const handlePause = () => {
      video.muted = true;
    };

    const handleVolumeChange = () => {
      syncVideoWithAudio();
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('volumechange', handleVolumeChange);

    // Initial sync
    syncVideoWithAudio();

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('volumechange', handleVolumeChange);
    };
  }, [audioRef]);

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: 'transparent'
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="hero-video"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Date on the top right */}
      <div className="absolute top-8 right-6 sm:top-12 sm:right-12 lg:top-16 lg:right-20 z-20">
        <div className={`text-right transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-wider leading-relaxed" data-testid="text-date" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            12<br />26<br />25
          </p>
        </div>
      </div>

      {/* Content - Names on the left */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col items-start">
          {/* Top decorative line */}
          <div className="w-1 h-16 sm:h-20 lg:h-24 bg-white mb-4 sm:mb-6 lg:mb-8"></div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'Paul\n&\nDiana',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                Paul
                <br />
                &
                <br />
                Diana
              </span>
            )}
          </h1>
          
          {/* Bottom decorative line */}
          <div className="w-1 h-16 sm:h-20 lg:h-24 bg-white mt-4 sm:mt-6 lg:mt-8"></div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 3rem !important;
            line-height: 1.1 !important;
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: #111827;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;