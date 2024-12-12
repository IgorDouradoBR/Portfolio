import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleMouseEnter,
  handleMouseLeave,
  showText,
}) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow transition-all duration-100 ease-in-out
      ${active === id ? 'lg:flex-[3] flex-[8]' : 'lg:flex-[1] flex-[2]'}`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave()}
      style={{
        transition: 'all 0.7s ease-in-out',
      }}
    >
  <div
        className={`absolute top-0 left-0 z-10 bg-jetLight 
        h-full w-full rounded-[24px] transition-opacity duration-700 ease-in-out 
        ${active === id ? 'opacity-0' : 'opacity-[0.5]'}`}></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
              className={`absolute bottom-0 p-8 justify-start w-full 
  flex-col bg-[rgba(13,13,13,0.5)] rounded-b-[24px] z-20 h-[230px]
  transition-opacity duration-[0.5s] ease-in-out ${showText ? 'opacity-100' : 'opacity-0'}`}>
  
            

            <h2
              className={`font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]
              ${showText ? 'opacity-100' : 'opacity-0'}
              transition-opacity duration-[0.5s] ease-in-out delay-[0.3s]`}>
              {name}
            </h2>
            <p
              className={`text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] 
              ${showText ? 'opacity-100' : 'opacity-0'}
              transition-opacity duration-[0.5s] ease-in-out delay-[0.3s]`}>
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.5s] 
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain transition-transform duration-100 ease-in-out"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState(''); // Initially no project is active
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = (id) => {
    setActive(id);
    setTimeout(() => setShowText(true), 300); // 1-second delay for showing text
  };

  const handleMouseLeave = () => {
    setActive('');
    setShowText(false); // Reset on mouse leave
  };

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Works and Practical</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects showcase my expertise through practical examples, with detailed descriptions, links to downloads, websites and demos. They highlight my ability to tackle complex challenges, adapt to various technologies, and manage projects efficiently. With a solid foundation in iOS and mobile development, full-stack development, team collaboration, AI, and machine learning, I have advanced skills in database, cloud management, and UX/UI design. My approach focuses on creating user-friendly, scalable solutions across platforms and technologies.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              showText={showText}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
