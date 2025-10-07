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
          {/* Minimalist Frame */}
          <div 
            className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="relative overflow-hidden bg-gray-50" style={{ width: '240px', height: '240px' }}>
              <img
                src={polaroid.src}
                alt={polaroid.alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Simple caption */}
            <div className="mt-3 text-center">
              <p className="text-gray-600 text-sm font-light">
                {polaroid.alt}
              </p>
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
