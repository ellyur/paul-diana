import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

const Landing = () => {
  const [, setLocation] = useLocation();

  const handleEnter = () => {
    setLocation('/invitation');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dr3xey7h9/image/upload/v1760170858/Your_paragraph_text_hjm0fl.jpg"
          alt="Wedding Invitation"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better button visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Enter Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-20 z-10"
      >
        <button
          onClick={handleEnter}
          className="px-12 py-4 bg-white/90 hover:bg-white text-black font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          data-testid="button-enter-invitation"
        >
          Open Invitation
        </button>
      </motion.div>
    </div>
  );
};

export default Landing;
