import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { inf } from "../assets";
import { SectionWrapper } from "../hoc";
import  Es  from "../constants/Es";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' p-5 bg-tertiary rounded-2xl sm:w-[360px] w-full'
      >

        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={inf}
                alt='More inf'
                className='w-1/2 h-1/2 object-contain'
              />
              
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-primary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {
          tags.map((tag) => (
         
         
            <p
            key={`${name}-${tag.name}`}
              className={`text-[14px] font-bold ${tag.color}`}
            >
              #{tag.name}
            </p>       
))
          }
        </div>
      </Tilt>
    </motion.div>
  );
};

const InfText = ({ subt,title,text }) => (
  <>
  <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>{subt}</p>
  <h2 className={styles.sectionHeadText}>{title} </h2>
</motion.div>
<div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-tertiary text-[17px] max-w-3xl leading-[30px]'
        >
      {text} 
        </motion.p>
      </div>

 
 </>


);


const Works = () => {
  return (
    <>
     { Es[5].map((item, index) => 
   
   <InfText key={item.index} index={index} {...item} />

   )}
 

      <div className='mt-20 flex flex-wrap gap-7'>
        {Es[6].map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* <div className='mt-10  flex justify-center items-center'>
      <div className=' w-[auto] h-[39px] rounded-3xl border-4 border-tertiary flex justify-center items-center p-5 text-[18px] font-medium cursor-pointer'>
           
        <Link to='/project'>
           More projects
         
          
        </Link>
        </div>
      </div> */}

    </>
  );
}

export default SectionWrapper(Works, "work");
