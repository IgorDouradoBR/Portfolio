import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { shaq, bwmap, worldmap } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover opacity-100"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-hidden">
        {/* ADICIONADO z-10 NESTA DIV ABAIXO PARA TRAZER O CARD PARA FRENTE */}
        <div
          className={`absolute inset-0 z-10 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          {/* Card com fundo branco e borda cinza */}
          <div className="bg-white border-48 border-gray-400 p-6 rounded-lg shadow-2xl relative -left-4 sm:-left-8">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{"  "}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Igor Dourado
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              I am a Developer. <br className="sm:block hidden" />
              And much more..
            </p>
          </div>

          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full z-10
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* DIV DA IMAGEM AGORA FICA ABAIXO DO CARD */}
        <div className="z-0">
          <img
            className="absolute bottom-0 right-0 
    h-[75vh] sm:h-[80vh] md:h-[80vh] xl:h-[85vh] 
    w-auto max-w-none origin-bottom-right"
            src={shaq}
            alt="shaquille"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
