import {motion} from "framer-motion"
import Image from 'next/image'
import { Children, useState } from "react";

const Card = ({greeting,profilepic,langs}) => {

    return(
        <motion.div 
        className="grid card-container text-center m-auto p-4 relative top-40"
        drag
        dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}
        >
            <div 
            className="text-center grid place-content-center"
            >
                <Image
                src={"/static/images/profilepic.jpg"}
                className="p-1 rounded-3xl pointer-events-none"
                alt="profilepic"
                width={180}
                height={180}
                ></Image>
                {/*change this to use json later*/}
            </div>    
            
            <h1
            className="text-white m-2 p-5 text-[1.2rem]"
            >Hello! I am Markos</h1>{/*change this to use json later*/}
            
               
        </motion.div>
    )
}

export default Card;