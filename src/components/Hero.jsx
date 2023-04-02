import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-8 h-8 rounded-full flex items-center p-2 text-primary  bg-[#f5d20e] dark:bg-[#31dde9] ' />
        
          <div className='w-1 sm:h-80 h-40 blue-gradient dark:blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hola, soy <span className='dark:text-[#31dde9] text-[#f5d20e] '>Diana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
          Bienvenidos a mi espacio creativo  <br className='sm:block hidden' />
         
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
            {<motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-tertiary mb-1'
            /> }
          </div>
        </a>
      </div>
     
    </section>
  );
}

export default Hero;
