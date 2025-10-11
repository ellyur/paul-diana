import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineCardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineCards = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760179831/f16846e9-82d9-4b4c-9197-935b9ac83617.png",
      title: "Our first day as a couple",
      date: "09.17.18"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106977/513281087_10081304398590972_8164128154106684885_n_1_fore49.jpg",
      title: "The day diana said \"Yes\"",
      date: "12.17.24"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760106974/JAH02565_1_upazo1.jpg",
      title: "The day we'll say \"I do\"",
      date: "12.26.25"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

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
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
      data-testid="section-timeline-cards"
    >
      <div className="max-w-7xl mx-auto">
        <span 
          className="text-4xl sm:text-5xl lg:text-6xl font-display italic text-center mb-16 text-foreground font-normal block"
          data-testid="text-timeline-heading"
          style={{ fontFamily: 'Boska, serif', fontWeight: 400 }}
        >
          A story of forever and a lifetime!
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {timelineCards.map((card) => (
            <div
              key={card.id}
              className="timeline-card group"
              data-testid={`card-timeline-${card.id}`}
            >
              {/* Outer border container with transparent background */}
              <div className="relative bg-transparent p-6 sm:p-8 border-[3px] border-black transition-all duration-300">
                {/* Inner border around image */}
                <div className="relative border-[3px] border-black p-3 mb-6">
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

                {/* Text content */}
                <div className="text-center space-y-2">
                  <h3 
                    className="text-base sm:text-lg font-serif text-black"
                    data-testid={`text-timeline-title-${card.id}`}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-base text-black"
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
    </section>
  );
};

export default TimelineCardsSection;
