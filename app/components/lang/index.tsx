
import {motion} from 'framer-motion'



const Lang = ()=>{

    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
      

    return(
        <div>
            <motion.div
            className=' m-1 rounded-full bg-blue-600'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.input
                type='radio'
                className='invisible'
                name='lang'
                id='python'
                
                >
                    
                </motion.input>
                <motion.label
                className='font-JetBrains'
                variants={variants}
                htmlFor="python"
                >Python</motion.label>

            </motion.div>
            <motion.div
            className=' m-1 rounded-full bg-yellow-500'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >JavaScript</motion.div>

            </motion.div>

            <motion.div
            className=' m-1 rounded-full bg-blue-500'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >TypeScript</motion.div>

            </motion.div>
    
            <motion.div
            className=' m-1 rounded-full bg-green-400'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >C#</motion.div>

            </motion.div>

            <motion.div
            className=' m-1 rounded-full bg-red-500'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >Java</motion.div>

            </motion.div>


            <motion.div
            className=' m-1 rounded-full bg-pink-700'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >C++</motion.div>

            </motion.div>

            <motion.div
            className=' m-1 rounded-full bg-purple-700'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >CSS</motion.div>

            </motion.div>
        
            <motion.div
            className=' m-1 rounded-full bg-orange-700'
            initial="hidden"
            animate="visible"
            variants={variants}
            >
                <motion.div
                className='font-JetBrains'
                variants={variants}
                >HTML</motion.div>

            </motion.div>
    

        </div>
    )
}
export default Lang;