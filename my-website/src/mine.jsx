import m3 from "./assets/ms3.png";
import m4 from "./assets/ms4.png";
import "./projects.css";
import {motion} from 'framer-motion';

function Minesweeper() {
    return (
        <div className="start">
        <p>Minesweeper</p>
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}  /* Delayed entry */
        >
       <img src={m4} alt="Project 1" className="subproject-img"/>
       </motion.div>
       <div className="project-text-section">
       <p>This Minesweeper program is a Java-based rendition of the classic game, challenging players to uncover all safe cells while avoiding hidden mines. The program’s interface allows users to click through a 14x18 cell grid, flagging potential mines with essential features like randomized mine placement for every game, game state checks for winning and losing, and a visually bright front-end built in the Big Bang Library. The program supports restarting, and flood clicking in empty spaces, similar to the original game. Available on Github upon request.</p>        <hr class="custom-hr" />
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
       <p>Eclipse </p>
       </div>

        </div>
        </div>
        <img src={m3} alt="Project 1" className="subproject-img"/>
       </div>
    )
}

export default Minesweeper;