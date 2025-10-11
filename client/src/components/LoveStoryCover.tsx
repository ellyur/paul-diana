import { motion } from 'framer-motion';

const loveStoryImage = "https://res.cloudinary.com/dr3xey7h9/image/upload/v1760161432/JAH03200_1_psactr.jpg";

const LoveStoryCover = () => {

  return (
    <section className="bg-white relative w-full overflow-hidden">
      {/* Text Above Image */}
      <div className="py-12 px-4">
        <motion.p 
          className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wide text-foreground max-w-5xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}
          data-testid="text-love-story-quote"
        >
          <span style={{ fontFamily: 'Telma, sans-serif', fontWeight: 400 }}>Every love story is beautiful but ours is my favorite</span>
        </motion.p>
      </div>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.img 
          src={loveStoryImage}
          alt="Love Story Cover"
          className="w-full h-auto object-contain object-center mx-auto"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          data-testid="img-love-story-cover"
        />
      </div>
    </section>
  );
};

export default LoveStoryCover;
