import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Parents of the Groom", names: ["Sergio B. Garcia", "Leonora A. Garcia"] },
      { label: "Parents of the Bride", names: ["Fernando R. Magalong Jr. (+)", "to be represented with honor by his son, Dave Julius S. Magalong", "Imelda S. Magalong"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      men: [
        "Major Gamaliel Ibale",
        "Mr. Joven De Vera",
        "Dr. Armando Ceralde",
        "CSM Artemio De Vera",
        "Ret. Police Domingo Agbuya",
        "Mr. Ernesto Agbuya",
        "Mr. Ronnie June Santiago",
        "Engr. Joel Cadiang",
        "Mr. Ernesto Pacia Jr.",
        "Capt. Brando Gabriel",
        "Engr. Arnold Diño",
        "Mr. Mark Jonas Plegino",
        "Mr. Armenio Oloa",
        "Mr. Joel Andres",
        "Mr. Bernie Baladjay",
        "Ms. Ghie Serrano",
        "Mr. Mario Camba",
        "Mr. Erwin Cacal"
      ],
      women: [
        "Major Irene Ibale",
        "Mdm. Anecita Diaz",
        "Mdm. Elsie Obenza",
        "HT Perla De Vera",
        "Mrs. Jane Agbuya",
        "Mrs. Lucila Agbuya",
        "Mrs. Myrna Agbuya",
        "Dr. Beah Bautista",
        "Dr. Leah Ellen Pacia",
        "Mrs. Josephine Gabriel",
        "Mrs. Mia Tamayo",
        "Mrs. Mary Grace Plegino",
        "Mrs. Revelina Oloa",
        "Mrs. Memilyn Andres",
        "Mrs. Joelyn Kuo",
        "Ms. Mhindy Serrano",
        "Mrs. Marissa Bautista",
        "Mrs. Sheryl Cacal"
      ]
    },
    secondarySponsors: {
      title: "Secondary Sponsors",
      roles: [
        { role: "Candle", names: ["Orlando Tagum Jr.", "Divina Angela Tagum"] },
        { role: "Veil", names: ["Harold Lambago", "Chris Lambago"] },
        { role: "Cord", names: ["Danilo Tabasa", "Pearl Blessy Catalan"] }
      ]
    },
    matronOfHonor: { name: "Daniella Paula Magalong", role: "Matron of Honor" },
    bestMan: { name: "Denver Josh Magalong", role: "Best Man" },
    maidOfHonor: { name: "Lyca May Baladjay", role: "Maid of Honor" },
    seniorGroomsmen: [
      "Keane Kimverlee Eusebio",
      "Ruel Ferrer",
      "Elliott Ness Conde",
      "Adrian Moises Solis",
      "Zion John Lobo",
      "John Andrei Sison"
    ],
    seniorBridesmaids: [
      "Marianne Romero",
      "Monica Agbuya",
      "Jenia Reine Gabriel",
      "Princess Rica Arambulo",
      "Ma. Andrea Rose Ruiz",
      "Jasney Mae Magalong"
    ],
    juniorGroomsmen: [
      "Randy II Baladjay",
      "Mark Juriel Ramos",
      "Reon James Ching",
      "Fred Gabriel Garcia",
      "Mark Enzo Garcia"
    ],
    juniorBridesmaids: [
      "Ma. Jasmine Ramos",
      "Divine Grace Garcia",
      "Michaella Rose Garcia",
      "Neriah Garcia",
      "Atasha Myrlyn Ruiz"
    ],
    bearers: [
      { role: "Ring Bearer", names: ["Aieon Azrael Arambulo"] },
      { role: "Coin Bearer", names: ["Symon Remillosa"] },
      { role: "Bible Bearer", names: ["Wize Axl Macaranas"] }
    ],
    flowerGirls: [
      "Mineah Rowaine Garcia",
      "Meziah Garcia",
      "Dayana Nhebea Quiñones",
      "Angel Bañaga"
    ],
    bannerBearers: ["Oleen Andana", "Oyeen Andana"],
    littleGroom: "Emmanuel Agbuya",
    littleBride: "Olivia Ivanna Tagum"
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              {entourageData.principalSponsors.men.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 whitespace-nowrap text-right" data-testid={`principal-sponsor-men-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center">
              {entourageData.principalSponsors.women.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 whitespace-nowrap text-left" data-testid={`principal-sponsor-women-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Matron of Honor, Best Man & Maid of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center" data-testid="matron-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.matronOfHonor.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="matron-of-honor-name">
                {entourageData.matronOfHonor.name}
              </p>
            </div>
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.maidOfHonor.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="maid-of-honor-name">
                {entourageData.maidOfHonor.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Senior Groomsmen & Senior Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="senior-groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Senior Groomsmen
              </h3>
              {entourageData.seniorGroomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`senior-groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="senior-bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Senior Bridesmaids
              </h3>
              {entourageData.seniorBridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`senior-bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Junior Groomsmen & Junior Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="junior-groomsmen-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Junior Groomsmen
              </h3>
              {entourageData.juniorGroomsmen.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`junior-groomsman-${index}`}>
                  {name}
                </p>
              ))}
            </div>
            <div className="text-center" data-testid="junior-bridesmaids-section">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                Junior Bridesmaids
              </h3>
              {entourageData.juniorBridesmaids.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`junior-bridesmaid-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg font-display font-semibold mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Girls */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.2 }}
        >
          <div className="text-center" data-testid="flower-girls-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Girls
            </h3>
            <div className="grid grid-cols-2 gap-2 max-w-3xl mx-auto">
              {entourageData.flowerGirls.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-girl-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Banner Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          <div className="text-center" data-testid="banner-bearers-section">
            <h3 className="text-lg md:text-xl font-display font-semibold mb-3 text-primary">
              Banner Bearers
            </h3>
            {entourageData.bannerBearers.map((name, index) => (
              <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`banner-bearer-${index}`}>
                {name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Little Groom & Little Bride */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.6 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="little-groom-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                Little Groom
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="little-groom-name">
                {entourageData.littleGroom}
              </p>
            </div>
            <div className="text-center" data-testid="little-bride-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                Little Bride
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="little-bride-name">
                {entourageData.littleBride}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
