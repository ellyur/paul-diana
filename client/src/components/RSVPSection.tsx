import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const ringImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760115700/7af95078-ed51-4993-89eb-6f5f4d9be205-removebg-preview_xmuztu.png";
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue relative overflow-hidden py-20"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 10.5 } : { duration: 0 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.8 } : { duration: 0 }}
        >
          <h2 className="font-display font-light italic text-gold text-[48px] md:text-5xl" data-testid="text-rsvp-header">RSVP Here</h2>
        </motion.div>

        {/* RSVP Content */}
        <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          {/* Ring Image Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={ringImage}
              alt="Wedding Ring"
              className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-40"
              data-testid="img-ring-background"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            {/* "please" */}
            <motion.p 
              className="font-pencerio text-6xl md:text-7xl lg:text-8xl text-black mb-12"
              initial={animationsEnabled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, delay: 11.0 } : { duration: 0 }}
              data-testid="text-rsvp-please"
            >
              please
            </motion.p>

            {/* "RSVP" - Split into RS and VP */}
            <motion.div 
              className="mb-12"
              initial={animationsEnabled ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { duration: 0.8, delay: 11.2 } : { duration: 0 }}
            >
              <h2 
                className="font-display text-[150px] md:text-[240px] lg:text-[320px] leading-[0.8] text-black tracking-tight"
                style={{ fontWeight: 300 }}
                data-testid="text-rsvp-title"
              >
                RS<br />VP
              </h2>
            </motion.div>

            {/* Deadline and Button */}
            <motion.div 
              className="space-y-6 mb-12"
              initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, delay: 11.4 } : { duration: 0 }}
            >
              <p 
                className="font-display text-2xl md:text-3xl lg:text-4xl font-normal text-black tracking-widest"
                data-testid="text-rsvp-deadline"
              >
                BY OCTOBER 30
              </p>
              <a 
                href="https://paul-diana-rsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-black text-white text-sm md:text-base font-display tracking-wider hover:bg-gray-800 transition-colors duration-300 border-2 border-black uppercase"
                data-testid="button-rsvp"
              >RSVP HERE!</a>
            </motion.div>

            {/* "thank you" */}
            <motion.p 
              className="font-pencerio text-6xl md:text-7xl lg:text-8xl text-black"
              initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, delay: 11.6 } : { duration: 0 }}
              data-testid="text-rsvp-thankyou"
            >
              thank you
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
