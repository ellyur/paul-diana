import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, Camera, Utensils, Music, Heart, Users, Wine, PartyPopper, Sparkles } from 'lucide-react';

interface TimelineEvent {
    time: string;
    event: string;
    description: string;
    icon: React.ComponentType<any>;
    hueA: number;
    hueB: number;
}

interface TimelineCardProps {
    timelineEvent: TimelineEvent;
    i: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timelineEvent, i }) => {
    const IconComponent = timelineEvent.icon;
    const isEven = i % 2 === 0;

    return (
        <motion.div
            className="relative py-6 md:py-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            data-testid={`timeline-card-${i}`}
        >
            {/* Timeline dot in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center z-20"
                style={{
                    background: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 4px rgba(212, 168, 83, 0.2)'
                }}
            >
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>

            {/* Content alternating left/right */}
            <div className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                {/* Left side content */}
                {isEven ? (
                    <>
                        <motion.div 
                            className="w-[45%] pr-4 md:pr-8 text-right"
                            variants={cardVariants}
                        >
                            <div className="space-y-1">
                                {timelineEvent.time && (
                                    <div className="text-xs font-bold text-primary">
                                        {timelineEvent.time}
                                    </div>
                                )}
                                <h3 className="text-sm md:text-base font-serif font-semibold text-foreground uppercase tracking-wide">
                                    {timelineEvent.event}
                                </h3>
                                <p className="text-[10px] md:text-xs text-muted-foreground/80 leading-tight">
                                    {timelineEvent.description}
                                </p>
                            </div>
                        </motion.div>
                        <div className="w-[10%]"></div>
                        <motion.div 
                            className="w-[45%] pl-4 md:pl-8"
                            variants={cardVariants}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-2 border-primary/30 flex items-center justify-center">
                                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                            </div>
                        </motion.div>
                    </>
                ) : (
                    <>
                        <motion.div 
                            className="w-[45%] pr-4 md:pr-8 text-right"
                            variants={cardVariants}
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-background border-2 border-primary/30 flex items-center justify-center ml-auto">
                                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
                            </div>
                        </motion.div>
                        <div className="w-[10%]"></div>
                        <motion.div 
                            className="w-[45%] pl-4 md:pl-8 text-left"
                            variants={cardVariants}
                        >
                            <div className="space-y-1">
                                {timelineEvent.time && (
                                    <div className="text-xs font-bold text-primary">
                                        {timelineEvent.time}
                                    </div>
                                )}
                                <h3 className="text-sm md:text-base font-serif font-semibold text-foreground uppercase tracking-wide">
                                    {timelineEvent.event}
                                </h3>
                                <p className="text-[10px] md:text-xs text-muted-foreground/80 leading-tight">
                                    {timelineEvent.description}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        x: -30,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5,
            delay: 0.1
        },
    },
};

const hue = (h: number, s: number = 100, l: number = 50): string => `hsl(${h}, ${s}%, ${l}%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px 10px',
};

/**
 * ==============   Data   ================
 */

const timelineEvents: TimelineEvent[] = [
    {
        time: "3:00 PM",
        event: "Arrival",
        description: "Guests arrive and are welcomed to our special day.",
        icon: Users,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "3:30 PM",
        event: "CEREMONY",
        description: "Witness our vows and the beginning of our journey together as we exchange rings and promises.",
        icon: Heart,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "5:00 PM",
        event: "PHOTOS",
        description: "Capture beautiful moments with us and our loved ones.",
        icon: Camera,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "5:30 PM",
        event: "Grazing",
        description: "Enjoy delicious refreshments and mingle with our guests.",
        icon: Wine,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "6:30 PM",
        event: "RECEPTION",
        description: "Join us in a joyful celebration of love, laughter, and gratitude.",
        icon: Sparkles,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "7:30 PM",
        event: "DINNER",
        description: "A delightful meal to celebrate our special day.",
        icon: Utensils,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "8:30 PM",
        event: "PARTY",
        description: "Let's celebrate with music and dancing as we create unforgettable memories together.",
        icon: Music,
        hueA: 40,
        hueB: 40,
    },
    {
        time: "10:30 PM",
        event: "SEND OFF",
        description: "Say goodbye as we close the night with love, gratitude, and blessings.",
        icon: PartyPopper,
        hueA: 40,
        hueB: 40,
    },
];

export default function ScrollTriggeredTimeline() {
    return (
        <motion.section 
            id="timeline" 
            className="section-pastel-blue bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Enhanced Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-primary/30 rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-primary/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-primary/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-primary/40 rotate-45"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
                <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
            </div>
            {/* Header Section */}
            <div className="relative z-10 text-center mb-12">
                <motion.div 
                    className="text-center max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-primary" data-testid="text-timeline-title">
                        Wedding Timeline
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#0b0b0b]">
                        Here's what to expect on our special day.
                    </p>
                </motion.div>
            </div>
            {/* Timeline Cards Container */}
            <div className="relative max-w-4xl mx-auto px-4 py-8">
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"></div>

                {timelineEvents.map((timelineEvent, i) => (
                    <TimelineCard i={i} timelineEvent={timelineEvent} key={`${timelineEvent.event}-${i}`} />
                ))}
            </div>
            {/* Oh Snap! Section */}
            <motion.div 
                className="mt-16 max-w-md mx-auto text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 shadow-lg">
                    <div className="mb-4">
                        <Camera className="w-12 h-12 mx-auto text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-script italic mb-4 text-foreground" data-testid="text-ohsnap-title">
                        Oh Snap!
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                        Help us capture moments on our special day by using the hashtag
                    </p>
                    <div className="inline-block border-2 border-primary rounded-lg px-4 md:px-6 py-3 bg-[#ffffff] max-w-full">
                        <p className="text-primary text-sm sm:text-base md:text-lg break-all" style={{ fontFamily: 'Satoshi, sans-serif' }} data-testid="text-hashtag">#HapPAULyEverAfterWithDIANA</p>
                    </div>
                </div>
            </motion.div>
            {/* Bottom Decorative */}
            <motion.div 
                className="mt-16 text-center pb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center space-x-2">
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                    <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                </div>
            </motion.div>
        </motion.section>
    );
}