import { motion } from 'framer-motion';

const backgroundImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760112875/fb109d51-e0f3-4bfe-990b-d0d91e07eaf9.png";
const qrCodeImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760112758/e0470bd7-d558-4ffc-ab72-05979e344aee.png";

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue relative overflow-hidden py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-primary" data-testid="text-gifts-header">
            Gifts
          </h2>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Black and White Background Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img 
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover grayscale"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* White Card Overlay */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 md:px-8">
            <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-gifts-title"
              >
                Gift Guide
              </motion.h2>

              <motion.div
                className="space-y-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p 
                  className="text-base md:text-lg text-foreground/80 leading-relaxed"
                  data-testid="text-gifts-message"
                >
                  Thanks a million for your love and support. Let's make some great memories together!
                  <br /><br />
                  If you wish to send us an early gift, please scan the QR below.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section with QR Code */}
          <div className="bg-background/95 backdrop-blur-sm py-12 px-4">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                className="inline-block bg-white p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={qrCodeImage}
                  alt="Bank QR Code"
                  className="w-[576px] h-[576px] object-contain max-w-full"
                  data-testid="img-qr-code"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
