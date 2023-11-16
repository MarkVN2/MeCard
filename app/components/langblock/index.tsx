import { motion } from "framer-motion";
import Lang from "../lang";


const LangBlock = () =>{
    return(
        <motion.div 
        className="lang-block grid grid-flow-row"
        >
        <Lang></Lang>
        </motion.div>
    )
}
export default LangBlock;