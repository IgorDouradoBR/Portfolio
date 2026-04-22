import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-1 px-6 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-[6rem] h-[6rem] object-contain max-w-[6rem] max-h-[6rem]"
        />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18.25px] max-w-5xl leading-[30px]"
      >
        I have a bachelor's degree in Computer Science (PUCRS) and work as a
        Mobile Software Engineer (iOS/Swift and React Native). With over 4 years
        of experience and having participated in the launch of 20+ apps, I build
        secure and scalable systems using architectures like MVVM, VIPER, and
        Clean, SOLID principles, and CI/CD automation.
        <br />
        <br />
        Currently at ABC Bank, a major international Arab bank, via CWI
        Software, I develop critical, high-scale financial flows, such as
        transfer and anti-fraud ecosystems, and the new Investment and Pix
        architectures, in native and cross-platform environments. Previously, at
        Aprix, I worked developing corporate mobile and web solutions for giants
        like EuroChem and Vibra Energia, focusing on integration features and
        Pricing catalogs for a large user base across their apps.
        <br />
        <br />
        Before that, I worked for 2 years at Apple, in Apple Developer. Immersed
        in Apple's engineering culture, I participated in the launch of more
        than 10 applications, expanded my market practice to large user bases in
        a massive company. Moreover, a milestone in my career was winning the
        1st place at Campus Mobile competition, promoted by Claro, with the SAF
        Herbaria app, created from scratch. The victory took me to Silicon
        Valley, USA, to present the product to big techs, such as Amazon,
        Google, and Plug and Play. Today, I continue to impact the sector as a
        Technical Mobile Mentor for this program at Claro.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
