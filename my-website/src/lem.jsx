import l2 from "./assets/l2.png";
import l4 from "./assets/l4.png";
import "./projects.css";
import {motion} from 'framer-motion';

function LightEm() {
    return (
        <div className="start">
        <p>Light 'Em All</p>
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}  /* Delayed entry */
        >
       <img src={l2} alt="Project 1" className="subproject-img-tall"/>
       </motion.div>
       <div className="project-text-section">
       <p>Light 'Em All is a game built in Java where the player must rotate electrical wire tiles on a grid to connect all nodes and illuminate the entire board. The objective is to direct the flow of electricity from a power source to light up as many tiles as possible, using the arrow keys to move the power source around. This version uses Binary Search and Kruskel’s Algorithm to first develop a path to connect all the tiles, before generating the puzzle by turning each tile a random number of times. The grid is randomized on every generation and the program supports time counting, enhanced graphics with implemented gradient, score counting, and a restart functionality. Available on Github upon request. </p>        <hr class="custom-hr" />
        <div className="info-block">

        <div className="project-info-left">
        <div className="project-info-header">
            <p>Langauges</p>
       </div>
       <p>Java</p>
       </div>

       <div className="project-info-right">
        <div className="project-info-header">
            <p>Tools</p>
       </div>
       <p>Eclipse</p>
       </div>

        </div>
        </div>
        <img src={l4} alt="Project 1" className="subproject-img-tall"/>
       </div>
    )
}

export default LightEm;