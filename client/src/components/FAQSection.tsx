import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Do we really need to RSVP?",
      answer: "Yes! To make sure you are included on our final guest list, please confirm your attendance on or before November 30, 2024"
    },
    {
      question: "Can I bring someone else to your wedding with me?",
      answer: "Please understand that aside from limited budget, the venue is very strict with the headcount."
    },
    {
      question: "I already answered NO to the RSVP, but my schedule cleared up and can now attend your wedding. What do I do?",
      answer: "Please let us know on or before December 15.\n\nBut please understand that we cannot guarantee the availability of the seat/s since we may already have allocated them to other guests when you declined the invitation. We will let you know if there's still seat for you."
    },
    {
      question: "I already answered YES to the RSVP but something came up and cannot attend anymore. What should I do?",
      answer: "We're sorry to hear you can no longer be part of our special day. However, please let us know ahead of time so we can offer your seat/s to other guests."
    }
  ];

  return (
    <motion.section 
      className="section-pastel-blue bg-white py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <span 
            className="text-5xl md:text-6xl text-primary block mb-8"
            style={{ fontFamily: 'Telma, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
            data-testid="text-faq-title"
          >
            Frequently Asked Questions
          </span>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-300 pb-8 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.15) }}
            >
              {/* Question */}
              <div className="flex gap-4 mb-4">
                <span 
                  className="text-4xl md:text-5xl flex-shrink-0"
                  style={{ fontFamily: 'Telma, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                >
                  Q:
                </span>
                <p 
                  className="text-lg md:text-xl pt-2"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}
                >
                  {faq.question}
                </p>
              </div>

              {/* Answer */}
              <div className="flex gap-4">
                <span 
                  className="text-4xl md:text-5xl flex-shrink-0"
                  style={{ fontFamily: 'Telma, sans-serif', fontWeight: 400, fontStyle: 'italic' }}
                >
                  A:
                </span>
                <p 
                  className="text-base md:text-lg pt-2 whitespace-pre-line"
                  style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}
                >
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
