import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-1 px-6 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-[6rem] h-[6rem] object-contain max-w-[6rem] max-h-[6rem]" />
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
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18.25px] max-w-3xl leading-[30px]">
       I am a programming, web, games, and artificial intelligence enthusiast. My goal is to impact lives with practical solutions by developing applications that benefit society and help the world. 

I graduated in Computer Science from PUCRS, with academic merit in two semesters, and for my thesis, I developed an App, using machine learning, which I trained, to recommend IT careers based on student knowledge. In my most recent position, At the Apple Developer Academy, I gained extensive experience in iOS & Mobile Development, Software Engineering, Full-Stack Development, and UX/UI Design, focusing on Swift, SwiftUI, UIKit, APIs, Frameworks, Figma, MVVM and MVC architectures, and agile methodologies, especially Scrum, acting as Scrum Master and PO.

I also have practical experience in Web Development & Design, Cloud, Database and Flutter through projects at EPJEL Engineer, freelance work and personal projects. I am proficient in languages like Swift, Java, Python, C, Dart, SQL, Go, JavaScript/HTML/CSS, and Haskell. In part of my projects I used Machine Learning, gaining expertise in this field as well as in Artificial Intelligence. With over 40 projects completed, with 10+ apps published and live websites, I focus on delivering impactful solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
