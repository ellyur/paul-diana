import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const loveStoryImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760161432/JAH03200_1_psactr.jpg";

const LoveStoryCover = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <section className="bg-white relative w-full overflow-hidden">
      {/* Text Above Image */}
      <div className="py-12 px-4">
        <motion.p 
          className="text-center text-lg md:text-xl lg:text-2xl font-light tracking-wide text-foreground max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          data-testid="text-love-story-quote"
        >
          EVERY LOVE STORY IS BEAUTIFUL BUT OURS IS MY FAVORITE
        </motion.p>
      </div>

      {/* Cover Image */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <motion.img 
          src={loveStoryImage}
          alt="Love Story Cover"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'top',
            margin: 0,
            padding: 0
          }}
          initial={animationsEnabled ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={animationsEnabled ? { duration: 1.2, ease: "easeOut" } : { duration: 0 }}
          data-testid="img-love-story-cover"
        />
      </div>
    </section>
  );
};

export default LoveStoryCover;
