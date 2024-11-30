import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null); // Estado para armazenar a tecnologia sendo hover

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 flex flex-col items-center relative" // Classe 'relative' necessária para o posicionamento absoluto do texto
            key={technology.name}
            onMouseEnter={() => setHoveredTech(technology.name)} // Define o nome quando o mouse entra
            onMouseLeave={() => setHoveredTech(null)} // Reseta o nome quando o mouse sai
          >
            <BallCanvas icon={technology.icon} />
            {/* Exibir o nome da tecnologia se estiver em hover */}
            {hoveredTech === technology.name && (
              <p className="text-white absolute bottom-[-28px] font-semibold text-center">
                {technology.name}
              </p> // Nome exibido abaixo da bola
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');

 