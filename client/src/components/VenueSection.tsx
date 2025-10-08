"use client";;
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { LinkPreview } from '@/components/ui/link-preview';

const venueImage = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759852614/venue_qklcxs.jpg";

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony and Reception',
      name: 'The White House Resort',
      address: 'Moncada, Tarlac',
      image: venueImage,
      mapUrl: 'https://maps.app.goo.gl/rHTdCZZ4Ei5EvSqW8',
      mapEmbed: 'https://www.google.com/maps?q=The+White+House+Resort+Moncada+Tarlac&output=embed',
      description: 'Join us at The White House Resort for our wedding ceremony and reception. This beautiful venue will witness our vows of eternal love and host our celebration.',
      details: 'The ceremony begins at 3:00 PM. Please arrive early to be seated. Dress code: Formal to Semi-Formal attire.',
      startTime: '3:00 PM',
      locationGuide: 'View on Maps →'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 } : { duration: 0 }}
        >
          <h1 className="text-4xl font-display mb-2 text-primary" data-testid="text-venue-section-title">
            Venue
          </h1>
        </motion.div>
        {/* Venues List */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.div 
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.4) } : { duration: 0 }}
            >
              {/* Venue Title */}
              <motion.div 
                className="text-center mb-12"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 7.0 + (index * 0.4) } : { duration: 0 }}
              >
                <h2 className="font-display text-foreground mb-3 text-2xl" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                  {venue.title}
                </h2>
                <h3 className="font-body text-muted-foreground mb-3 text-base" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                  {venue.name}
                </h3>
              </motion.div>

              {/* Venue Content */}
              <div className="max-w-3xl mx-auto text-center space-y-6 relative">
                {/* Venue Image */}
                <div className="mb-8">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>

                {/* Address */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <p className="text-sm font-body text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                    {venue.address}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-8">
                  <p className="text-base font-body leading-relaxed text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                    {venue.description}
                  </p>
                </div>

                {/* Details */}
                <p className="text-base font-body text-foreground/90" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>

                {/* Google Maps Embed */}
                <div className="mt-8 mb-8">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border border-primary/20">
                    <iframe
                      src={venue.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      data-testid={`map-${venue.title.toLowerCase()}-embed`}
                    />
                  </div>
                </div>

                {/* Time and Location Guide */}
                <div className="flex justify-between items-center pt-6 border-t border-primary/20">
                  <div className="text-left">
                    <p className="text-sm font-body italic text-muted-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                      Start time {venue.startTime}
                    </p>
                  </div>
                  <div className="text-right">
                    <a
                      href={venue.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="location-guide-btn font-body text-primary hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1"
                      data-testid={`button-${venue.title.toLowerCase()}-location`}
                    >
                      {venue.locationGuide}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>


              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unplugged Ceremony Note */}
        <motion.div 
          className="mt-16 text-center border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.4 } : { duration: 0 }}
        >
          <h3 className="text-xl font-display text-foreground mb-4">Unplugged Ceremony</h3>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-4">
            We kindly ask that the ceremony be camera-free so everyone can be fully present in the moment. Once we move to the reception venue, please feel free to take as many photos and videos as you like—we'd love for you to help us capture more memories!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueSection;