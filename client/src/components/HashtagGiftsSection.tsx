import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';
import boq1Image from '@assets/boq1_1759854441527.png';
import flowerImage from '@assets/flower_1759854441531.png';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Oh Snap! Section */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Decorative Flower */}
          <img 
            src={flowerImage} 
            alt="" 
            className="absolute top-4 right-4 w-16 h-16 object-contain opacity-60 animate-float pointer-events-none"
            data-testid="decoration-flower-hashtag"
          />
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-primary" data-testid="icon-camera" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-gold mb-4 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            data-testid="text-ohsnap-title"
          >
            Oh Snap!
          </motion.h2>

          <motion.p 
            className="text-lg text-foreground mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            data-testid="text-hashtag-description"
          >
            Help us capture moments on our
            <br />
            special day by using the hashtag:
          </motion.p>

          <motion.div
            className="bg-primary/10 border border-primary/20 rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 inline-block max-w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-semibold text-primary break-words"
              data-testid="text-hashtag"
            >
              #HapPAULyEverAfterWithDIANA
            </p>
          </motion.div>
        </motion.div>

        {/* Gifts Section */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          {/* Decorative Bouquet */}
          <img 
            src={boq1Image} 
            alt="" 
            className="absolute bottom-4 left-4 w-20 h-20 object-contain opacity-60 animate-float-delayed pointer-events-none"
            data-testid="decoration-bouquet-gifts"
          />
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-primary" data-testid="icon-gift" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-gold mb-6 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            data-testid="text-gifts-title"
          >
            Gifts
          </motion.h2>

          <motion.div
            className="bg-card/20 border border-border/50 rounded-xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p 
              className="text-lg text-foreground leading-relaxed"
              data-testid="text-gifts-message"
            >
              With all that we have,
              <br />
              <br />
              We've been truly blessed. Your
              <br />
              presence and prayers are all that we
              <br />
              request. But if you desire to give
              <br />
              nonetheless, Monetary gift is much
              <br />
              appreciated.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
