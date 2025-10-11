import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

const Landing = () => {
  const [, setLocation] = useLocation();

  const handleEnter = () => {
    setLocation('/invitation');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
      <div className="flex flex-col items-center gap-6">
        {/* Hands Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 flex items-center justify-center"
        >
          <img
            src="https://res.cloudinary.com/dr3xey7h9/image/upload/v1760171663/image-removebg-preview_4_y3kmmb.png"
            alt="Hands"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Names */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl font-display font-light tracking-wider text-gray-800"
        >
          PAUL & DIANA
        </motion.span>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl tracking-widest text-gray-700"
        >
          12 | 26 | 25
        </motion.p>

        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8"
        >
          <button
            onClick={handleEnter}
            className="px-12 py-4 bg-black hover:bg-gray-800 text-white font-semibold text-lg shadow-2xl transition-all duration-300 hover:scale-105"
            data-testid="button-enter-invitation"
          >
            Open Invitation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
