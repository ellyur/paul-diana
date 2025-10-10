import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimationContext } from '@/contexts/AnimationContext';

gsap.registerPlugin(ScrollTrigger);

const TimelineCardsSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineCards = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106978/48385962_1941090289302750_8392576910558756864_n-eUdMZ_kw3idd.jpg",
      title: "Our first day as a couple",
      date: "02.22.12"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106977/513281087_10081304398590972_8164128154106684885_n_1_fore49.jpg",
      title: "The day Yam said \"yes\"",
      date: "02.22.22"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106974/JAH02565_1_upazo1.jpg",
      title: "The day we'll say \"I do\"",
      date: "02.22.24"
    }
  ];

  useEffect(() => {
    if (!animationsEnabled || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-card", 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [animationsEnabled]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      data-testid="section-timeline-cards"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-script italic text-center mb-16 text-foreground"
          data-testid="text-timeline-heading"
        >
          A story of forever and a lifetime!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {timelineCards.map((card) => (
            <div
              key={card.id}
              className="timeline-card group"
              data-testid={`card-timeline-${card.id}`}
            >
              <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl border-4 border-gray-800 dark:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="relative bg-white dark:bg-gray-800 p-4 mb-6 border-2 border-gray-800 dark:border-gray-200">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      data-testid={`img-timeline-${card.id}`}
                    />
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <h3 
                    className="text-lg sm:text-xl font-serif text-gray-800 dark:text-gray-200"
                    data-testid={`text-timeline-title-${card.id}`}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium"
                    data-testid={`text-timeline-date-${card.id}`}
                  >
                    {card.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default TimelineCardsSection;
