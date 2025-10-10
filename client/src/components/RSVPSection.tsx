import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const ringImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760114687/7af95078-ed51-4993-89eb-6f5f4d9be205.png";
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue relative overflow-hidden py-20 min-h-screen flex items-center justify-center"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 10.5 } : { duration: 0 }}
    >
      {/* Ring Image Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={ringImage}
          alt="Wedding Ring"
          className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] object-contain opacity-30 sepia grayscale"
          style={{ filter: 'sepia(0.6) grayscale(0.4) brightness(1.1)' }}
          data-testid="img-ring-background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* "please" */}
        <motion.p 
          className="text-5xl md:text-6xl lg:text-7xl text-gray-500 mb-8"
          style={{ fontFamily: 'Pencerio, serif' }}
          initial={animationsEnabled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.6, delay: 11.0 } : { duration: 0 }}
          data-testid="text-rsvp-please"
        >
          please
        </motion.p>

        {/* "RSVP" - Split into RS and VP */}
        <motion.div 
          className="mb-8"
          initial={animationsEnabled ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={animationsEnabled ? { duration: 0.8, delay: 11.2 } : { duration: 0 }}
        >
          <h2 
            className="font-display text-[150px] md:text-[240px] lg:text-[300px] leading-[0.85] text-black tracking-tight"
            style={{ fontWeight: 300 }}
            data-testid="text-rsvp-title"
          >
            RS<br />VP
          </h2>
        </motion.div>

        {/* Deadline */}
        <motion.div 
          className="space-y-6 mb-8"
          initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.6, delay: 11.4 } : { duration: 0 }}
        >
          <p 
            className="font-display text-xl md:text-2xl lg:text-3xl font-normal text-black tracking-widest"
            data-testid="text-rsvp-deadline"
          >
            BY OCTOBER 30
          </p>
          <a 
            href="https://paul-diana-rsvp.replit.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white text-xs md:text-sm font-display tracking-wider hover:bg-gray-800 transition-colors duration-300 border-2 border-black"
            data-testid="button-rsvp"
          >
            PAUL-DIANA-RSVP.REPLIT.APP
          </a>
        </motion.div>

        {/* "thank you" */}
        <motion.p 
          className="text-5xl md:text-6xl lg:text-7xl text-gray-500 mt-12"
          style={{ fontFamily: 'Pencerio, serif' }}
          initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.6, delay: 11.6 } : { duration: 0 }}
          data-testid="text-rsvp-thankyou"
        >
          thank you
        </motion.p>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
