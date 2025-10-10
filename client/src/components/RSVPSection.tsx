import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const ringImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760114687/7af95078-ed51-4993-89eb-6f5f4d9be205.png";
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue relative overflow-hidden py-20"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 10.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto px-4 relative">
        <motion.div 
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.8 } : { duration: 0 }}
        >
          {/* Ring Image Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={ringImage}
              alt="Wedding Ring"
              className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-contain opacity-20 sepia grayscale"
              style={{ filter: 'sepia(0.5) grayscale(0.3)' }}
              data-testid="img-ring-background"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* "please" */}
            <motion.p 
              className="font-script text-4xl md:text-5xl text-gray-600"
              initial={animationsEnabled ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, delay: 11.0 } : { duration: 0 }}
              data-testid="text-rsvp-please"
            >
              please
            </motion.p>

            {/* "RSVP" */}
            <motion.h2 
              className="font-display text-7xl md:text-9xl font-bold text-black tracking-tight leading-none"
              initial={animationsEnabled ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { duration: 0.8, delay: 11.2 } : { duration: 0 }}
              data-testid="text-rsvp-title"
            >
              RSVP
            </motion.h2>

            {/* Deadline */}
            <motion.div 
              className="space-y-2"
              initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, delay: 11.4 } : { duration: 0 }}
            >
              <p 
                className="font-display text-2xl md:text-3xl font-semibold text-black tracking-wide"
                data-testid="text-rsvp-deadline"
              >
                BY OCTOBER 30
              </p>
              <a 
                href="https://paul-diana-rsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-sm md:text-base text-gray-600 hover:text-black transition-colors duration-300"
                data-testid="link-rsvp-email"
              >
                PAUL-DIANA-RSVP.REPLIT.APP
              </a>
            </motion.div>

            {/* "thank you" */}
            <motion.p 
              className="font-script text-4xl md:text-5xl text-gray-600 pt-8"
              initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, delay: 11.6 } : { duration: 0 }}
              data-testid="text-rsvp-thankyou"
            >
              thank you
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
