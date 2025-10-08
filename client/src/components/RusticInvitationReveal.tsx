import { Heart } from 'lucide-react';
import prenup1 from '@assets/groom_1759741344818.png';
import prenup2 from '@assets/hero-section_1759741344822.png';
import prenup3 from '@assets/bride_1759741344818.png';
import flower1Image from '@assets/flower1_1759854441524.png';
import flowerImage from '@assets/flower_1759854441531.png';

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const polaroids = [
    { src: prenup1, alt: 'Groom' },
    { src: prenup2, alt: 'Couple' },
    { src: prenup3, alt: 'Bride' }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4" style={{ backgroundColor: 'transparent' }}>
      {/* Polaroid Photos */}
      <div className="relative z-10 mb-20 flex flex-wrap items-center justify-center gap-8 max-w-6xl">
        {polaroids.map((polaroid, index) => (
        <div
          key={index}
          className="relative group"
          data-testid={`polaroid-${index}`}
        >
          {/* Modern Minimalist Frame with Accent */}
          <div className="relative">
            {/* Decorative background layer */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-lg blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main card */}
            <div 
              className="relative bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-2 border-primary rounded-sm"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary/30" />
              
              <div className="relative overflow-hidden bg-gray-50 rounded-sm" style={{ width: '240px', height: '240px' }}>
                <img
                  src={polaroid.src}
                  alt={polaroid.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </div>
              
              {/* Modern caption with accent */}
              <div className="mt-4 text-center relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <p className="text-gray-700 text-sm font-medium tracking-wider uppercase">
                  {polaroid.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* Minimalist Invitation */}
      <div
        className="relative z-10 max-w-2xl w-full"
        data-testid="invitation-paper"
      >
        {/* Clean Paper */}
        <div 
          className="relative bg-white p-12 md:p-16 shadow-lg border-t-4 border-primary overflow-hidden"
        >
          {/* Decorative Flowers on Edges */}
          <img 
            src={flower1Image} 
            alt="" 
            className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-70 animate-float pointer-events-none"
            data-testid="decoration-flower-invitation-topleft"
          />
          <img 
            src={flowerImage} 
            alt="" 
            className="absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-70 animate-float-delayed pointer-events-none"
            data-testid="decoration-flower-invitation-topright"
          />
          <img 
            src={flower1Image} 
            alt="" 
            className="absolute bottom-4 left-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-70 animate-float-delayed pointer-events-none transform rotate-45"
            data-testid="decoration-flower-invitation-bottomleft"
          />
          <img 
            src={flowerImage} 
            alt="" 
            className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 object-contain opacity-70 animate-float pointer-events-none transform -rotate-12"
            data-testid="decoration-flower-invitation-bottomright"
          />

          {/* Content */}
          <div className="text-center relative z-10 space-y-8">
            {/* Heart Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary fill-primary" />
              </div>
            </div>

            <h2 
              className="text-5xl md:text-6xl font-script italic text-primary"
              style={{ fontFamily: 'Boska, serif' }}
            >
              You're Invited
            </h2>

            <div className="w-20 h-px bg-primary mx-auto"/>

            <p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto"
            >
              Come witness the moment we tie the knot and start our greatest adventure together
            </p>

            <div className="text-base md:text-lg text-gray-600 italic space-y-2">
              <p>with love, laughter,</p>
              <p>and a lifetime of memories</p>
            </div>

            {/* Simple Hearts decoration */}
            <div className="flex items-center justify-center gap-3 pt-6">
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RusticInvitationReveal;
