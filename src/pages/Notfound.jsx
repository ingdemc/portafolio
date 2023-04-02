
import { motion } from "framer-motion";
import { StarsCanvas } from "../components/canvas";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Notfound= () => {
  return (
    <div
      className={`justify-center  xl:mt-12 flex xl:flex-row  `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>404</p>
        <h3 className={styles.sectionHeadText}>Not found.</h3>

    
      </motion.div>
      <StarsCanvas/>
    
     
    </div> 
   
  
  )
}

export default Notfound;
