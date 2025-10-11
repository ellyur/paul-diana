import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <section id="invitation" className="section-hard-blue bg-white w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
        >
          <p 
            className="text-sm sm:text-base md:text-lg text-foreground font-light tracking-[0.3em] uppercase" 
            data-testid="text-invitation"
            style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          >
            YOU'RE INVITED!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageLoop;
