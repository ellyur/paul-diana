import { motion } from 'framer-motion';

const RSVPSection = () => {
  const ringImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760115700/7af95078-ed51-4993-89eb-6f5f4d9be205-removebg-preview_xmuztu.png";
  
  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 10.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.8 }}
        >
          <h2 
            className="text-gold text-[48px] md:text-5xl" 
            style={{ fontFamily: 'Boska, serif', fontWeight: 300, fontStyle: 'normal' }} 
            data-testid="text-rsvp-header"
          >
            RSVP Here
          </h2>
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
            {/* "RSVP" - Split into RS and VP */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 11.2 }}
            >
              <span 
                className="text-[150px] md:text-[240px] lg:text-[320px] leading-[0.8] text-black tracking-tight block"
                style={{ fontFamily: 'Boska, serif', fontWeight: 350 }}
                data-testid="text-rsvp-title"
              >
                RS<br />VP
              </span>
            </motion.div>

            {/* Deadline and Button */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 11.4 }}
            >
              <a 
                href="https://paul-diana-rsvp.replit.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-black text-white text-sm md:text-base font-display tracking-wider hover:bg-gray-800 transition-colors duration-300 border-2 border-black uppercase"
                data-testid="button-rsvp"
              >RSVP HERE!</a>

              {/* Message below button with white container */}
              <div className="mt-8 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl border border-gray-100">
                <p 
                  className="font-body text-base md:text-lg text-black font-medium text-center mb-4"
                  data-testid="text-rsvp-message"
                >
                  Please confirm your attendance by responding to our invitation. Click the RSVP HERE! button above.
                </p>
                <p className="text-center">
                  <span className="font-body text-base md:text-lg font-bold text-white px-3 py-1 rounded whitespace-nowrap" style={{ backgroundColor: '#333333' }}>
                    THE DEADLINE IS OCTOBER 30
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
