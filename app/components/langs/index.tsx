
import {motion} from 'framer-motion'



const Langs = ()=>{


    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
      

    return(
        <motion.div
        className='grid grid-flow-row'
        >
            
            <motion.div
            className='rounded-full bg-red-500'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                variants={variants}
                >TEST</motion.div>

            </motion.div>
            
            
        </motion.div>
    )
}
export default Langs;