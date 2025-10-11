import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-background rounded-lg p-8 md:p-12 max-w-lg w-full mx-4 shadow-2xl border border-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary opacity-20"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary opacity-20"></div>
            
            <div className="relative text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="bg-primary p-5 rounded-full shadow-lg">
                  <Music className="h-10 w-10 text-primary-foreground" />
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif tracking-wide">
                  A Musical Journey
                </h2>
                
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-primary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="h-px w-12 bg-primary"></div>
                </div>

                <p className="text-foreground/80 leading-relaxed text-base md:text-lg italic px-4">
                  Would you like to play music to explore more of our wedding invitation?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  onClick={() => handleConsent(true)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-5 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl text-base"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="outline"
                  className="flex-1 border-2 border-border hover:border-primary text-foreground hover:text-primary bg-transparent hover:bg-muted font-medium py-5 px-6 rounded-lg transition-all duration-300 text-base"
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
                <Heart className="w-3 h-3 text-primary fill-primary opacity-50" />
                <div className="w-1 h-1 rounded-full bg-primary opacity-50"></div>
                <Heart className="w-3 h-3 text-primary fill-primary opacity-50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;
