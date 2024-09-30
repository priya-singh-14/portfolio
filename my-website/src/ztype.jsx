import z2 from "./assets/z2.png";
import z3 from "./assets/z3.png";
import "./projects.css";
import {motion} from 'framer-motion';

function ZType() {
    return (
        <div className="start">
        <p>ZType</p>
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}  /* Delayed entry */
        >
       <img src={z3} alt="Project 1" className="subproject-img-tall"/>
       </motion.div>
       <div className="project-text-section">
       <p>This ZType program built in Java is a typing-based game that tests players' typing speed and accuracy. In this game, players must stop the falling words from reaching the bottom of the screen by typing the words as they appear on-screen. The difficulty escalates as the number and complexity of words increase, and our implementation produces randomly generated strings of varying length, score tracking, a visually-interesting front-end that resembles arcade-style gaming and restarting functionality. Built in collaboration with Rusheel Sharma. Available on Github upon request. </p>        <hr class="custom-hr" />
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
        <img src={z2} alt="Project 1" className="subproject-img-tall"/>
       </div>
    )
}

export default ZType;