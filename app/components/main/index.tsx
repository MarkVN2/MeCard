import {motion} from "framer-motion"

const Main = ({children}) => {

    const dropIn ={
        hidden:{
            y:"-100vh",
            opacity:0,
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                duration:0.1,
                type:"spring",
                damping:25,
                stiffness:500,
            }
        },
        exit:{
            y:"100vh",
            opacity:0
        },
    };
    
    return(
        <motion.main initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }}
        } 
        className="min-h-screen flex-col relative ">
            {children}
        </motion.main>
    )
}
export default Main;