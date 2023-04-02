import React,{useEffect,  useState} from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { inf,logo } from "../assets";
import  Es  from "../constants/Es";
import { fadeIn, staggerContainer } from "../utils/motion";
import Dark from "../components/Dark";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rp-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          
        </div>

   
      </Tilt>
    </motion.div>
  );
}

const Project = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   
<>

<nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-secondary  dark:bg-primary" : "bg-transparent"
    }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Diana Marin&nbsp;
       
          </p>
        </Link>
     
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li>
          <Dark  className='py-5'/>
          </li>
          </ul>

        </div>
        </nav>

      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 bg-secondary  dark:bg-primary`}
      >
        <span className='hash-span' id='project'>
          &nbsp;
        </span>

      

    
      <div className='text-center' >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText} `}>Projects.</h2>
        
      </div>


      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {Es[6].map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      </motion.section>

 </>
  );
}

export default Project;
