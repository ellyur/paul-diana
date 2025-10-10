import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Sparkles, Star, Ship, Heart, Infinity } from 'lucide-react';
import flowerImage from '@assets/flower_1759854441531.png';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});

  const storyCards = [
    {
      id: 1,
      title: "How We Met",
      text: "We met while serving in church ministry, unaware of how meaningful that moment would become. What started as friendship grew into a special bond through faith.",
      image: "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851677/loveStory1_wlmnn1.jpg",
      icon: Sparkles
    },
    {
      id: 2, 
      title: "Dreams Together",
      text: "We found love in the simple moments—shared dreams and quiet support. Even as one journeyed abroad and the other set sail across the ocean, our hearts kept moving in the same direction, always dreaming together.",
      image: "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851677/loveStory3_breabq.jpg",
      icon: Star
    },
    {
      id: 3,
      title: "Oceans Apart", 
      text: "Though miles and oceans lay between us, love bridged the distance. With every challenge, our hearts grew closer, always moving as one.",
      image: "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851678/loveStory4_qij73x.jpg",
      icon: Ship
    },
    {
      id: 4,
      title: "The Decision",
      text: "We chose to wait for the right time, setting aside our dream wedding to focus on what mattered most—supporting one another. With a simple civil union as our beginning, we now look forward to celebrating our love in its fullness.",
      image: "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851678/loveStory12_rtxmx4.jpg",
      icon: Heart
    },
    {
      id: 5,
      title: "Our Future",
      text: "Today we celebrate a promise made possible by God's grace. With Him at the center, we step into the future together.",
      image: "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851678/loveStory15_ighl0h.jpg",
      icon: Infinity
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal || !animationsEnabled) return;

    // Detect mobile/tablet viewports
    const isMobile = window.innerWidth < 1024;
    const scrollMultiplier = isMobile ? 2 : 1.5;
    const scrubValue = isMobile ? 0.2 : 0.2;

    // Create horizontal scrolling animation with dynamic width calculation
    const horizontalScrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - container.offsetWidth),
      ease: "none",
    });

    // Create ScrollTrigger with dynamic end calculation - Give each card much more vertical scroll space
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${(horizontal.scrollWidth - container.offsetWidth) * scrollMultiplier}`,
      pin: true,
      scrub: scrubValue,
      animation: horizontalScrollTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    // Refresh ScrollTrigger after images and fonts load
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Add load listener for window to refresh after fonts and lazy images
    window.addEventListener('load', handleRefresh);

    // Add load listeners to all images to refresh after each image loads
    const images = horizontal.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleRefresh, { once: true });
      }
    });

    // Initial refresh to handle any already loaded content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Animate story cards on load
    gsap.fromTo(".story-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-card",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener('load', handleRefresh);
      images.forEach(img => {
        img.removeEventListener('load', handleRefresh);
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationsEnabled]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue relative overflow-hidden isolate"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* SVG Background Decorations - Urban City Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating SVG Elements */}
        <svg className="absolute top-20 right-20 w-24 h-24 text-primary-foreground/30 animate-pulse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
        </svg>

        <svg className="absolute bottom-32 left-16 w-16 h-16 text-primary-foreground/20 animate-bounce" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
          <path fill="currentColor" d="M9,11H15L13,13L15,15H9L11,13L9,11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
        </svg>
      </div>
      {/* Header */}
      <div className="text-center relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black mb-6 sm:mb-8 text-foreground" data-testid="text-story-title">
            Our Story
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 text-foreground/90">
            Scroll vertically to journey through our love story horizontally
          </p>
          
          {/* SVG Arrow Indicator */}
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-bounce" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
            <span className="text-xs sm:text-sm text-muted-foreground">Scroll down</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </motion.div>
      </div>
      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef} 
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div 
          ref={horizontalRef}
          className="flex h-full items-center will-change-transform"
          style={{ width: `${storyCards.length * 100 + 100}vw` }}
        >
          {/* Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12"
              style={{ width: '100vw', minWidth: '100vw' }}
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  background: mousePosition[card.id] 
                    ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 40%), rgba(0, 0, 0, 0.05)`
                    : 'rgba(0, 0, 0, 0.05)'
                }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 bg-primary/20 border-2 border-primary">
                    <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-foreground" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl leading-relaxed text-foreground/90" data-testid={`text-story-card-${card.id}-text`}>
                    {card.text}
                  </p>

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                    {/* Square image with rounded corners on all screen sizes */}
                    <img
                      src={card.image}
                      alt={`Story moment ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      data-testid={`img-story-card-${card.id}`}
                    />

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Flower - Lower Right */}
                <img 
                  src={flowerImage} 
                  alt="" 
                  className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-80 animate-float pointer-events-none"
                  data-testid={`decoration-flower-story-${card.id}`}
                />
              </div>
            </div>
          ))}

          {/* Final "Our Promise" Card */}
          <div
            className="story-card flex-shrink-0 h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12"
            style={{ width: '100vw', minWidth: '100vw' }}
          >
            <div 
              className="max-w-6xl mx-auto grid lg:grid-cols-1 gap-8 lg:gap-16 items-center h-full relative overflow-hidden rounded-3xl p-8 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
              style={{ background: 'rgba(0, 0, 0, 0.05)' }}
              data-testid="card-story-promise"
            >
              {/* Content - Centered */}
              <div className="space-y-6 sm:space-y-8 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 bg-primary/20 border-2 border-primary">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={2} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-foreground" data-testid="text-story-promise-title">
                  Our Promise
                </h3>
                
                <div className="space-y-4">
                  <p className="text-xl sm:text-2xl leading-relaxed italic text-foreground/90" data-testid="text-story-promise-verse">
                    "Above all, clothe yourselves with love, which binds us all together in perfect harmony."
                  </p>
                  <p className="text-base sm:text-lg text-foreground/80" data-testid="text-story-promise-reference">
                    Colossians 3:14
                  </p>
                </div>

                {/* SVG Decorative Element */}
                <div className="flex items-center justify-center space-x-4 pt-4 sm:pt-6">
                  <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                </div>
              </div>

              {/* Decorative Flower - Lower Right */}
              <img 
                src={flowerImage} 
                alt="" 
                className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-80 animate-float pointer-events-none"
                data-testid="decoration-flower-story-promise"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;