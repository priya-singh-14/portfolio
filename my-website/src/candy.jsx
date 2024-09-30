import h1 from "./assets/h1.png";
import h2 from "./assets/h2.png";
import "./projects.css";
import {motion} from 'framer-motion';

function Candy() {
    return (
        <div className="start">
        <p>Candid Candies</p>
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}  /* Delayed entry */
        >
       <img src={h2} alt="Project 1" className="subproject-img"/>
       </motion.div>
       <div className="project-text-section">
       <p>Candid Candies is a message-board web application that allows for the drafting and posting of messages onto a candy heart inspired landing page. The UI includes hand-drawn visual elements with coded functionality using React.js, showcases an ability to combine front-end development skills with hand-drawn designs. This project is currently in development, in collaboration with Arushi Aggarwal. Available on Github.</p>
        <hr class="custom-hr" />
        <div className="info-block">

        <div className="project-info-left">
        <div className="project-info-header">
            <p>Langauges</p>
       </div>
       <p>Javascript | HTML | CSS</p>
       </div>

       <div className="project-info-right">
        <div className="project-info-header">
            <p>Tools</p>
       </div>
       <p>VSCode | Node.js | MongoDB | React | Figma | Adobe Fresco</p>
       </div>

        </div>
        </div>
        <img src={h1} alt="Project 1" className="subproject-img"/>
       </div>
    )
}

export default Candy;