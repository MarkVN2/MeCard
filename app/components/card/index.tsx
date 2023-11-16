import {motion} from "framer-motion"
import Image from 'next/image'
import { Children, useState } from "react";
import Langs from "../lang";
import LangBlock from "../langblock";

const Card = () => {

    const variants ={
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    };
    return(
        <motion.div 
        className="font-JetBrains card-container text-center m-auto p-4 relative top-40"
        variants={variants}
        initial="hidden"
        animate="visible"
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
            </div>    
            
            <h1
            className="text-white m-2 p-5 text-[1.2rem]"
            >Hello! <br></br> I am Markos</h1>
            <p></p>
            <LangBlock></LangBlock>
       
        </motion.div>
    )
}

export default Card;