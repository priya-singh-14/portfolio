import m1 from "./assets/ms1.png";
import m2 from "./assets/ms2.png";
import m3 from "./assets/ms3.png";
import m4 from "./assets/ms4.png";
import "./projects.css";


function Minesweeper() {
    return (
        <div className="start">
        <p>Minesweeper</p>
       <img src={m4} alt="Project 1" className="subproject-img"/>
       <div className="project-text-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium feugiat mauris, et tristique lorem malesuada at. Nam cursus id tellus at dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pretium viverra mi, a sodales velit tincidunt egestas. Pellentesque est urna, aliquet ac lacus ut, faucibus fermentum urna. Phasellus enim nibh, interdum ac ante vel, imperdiet congue risus. Nam vulputate fringilla mi quis blandit. Praesent hendrerit fringilla interdum. Cras iaculis ultricies scelerisque. Proin venenatis odio sit amet tincidunt bibendum. Fusce eget augue dignissim, viverra odio rutrum, tincidunt ex.</p>
        <hr class="custom-hr" />
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