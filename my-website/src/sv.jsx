import h1 from "./assets/h1.png";
import h2 from "./assets/h2.png";
import "./projects.css";


function SV() {
    return (
        <div className="start">
        <p>StockView</p>
       <img src={h2} alt="Project 1" className="subproject-img"/>
       <div className="project-text-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium feugiat mauris, et tristique lorem malesuada at. Nam cursus id tellus at dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pretium viverra mi, a sodales velit tincidunt egestas. Pellentesque est urna, aliquet ac lacus ut, faucibus fermentum urna. Phasellus enim nibh, interdum ac ante vel, imperdiet congue risus. Nam vulputate fringilla mi quis blandit. Praesent hendrerit fringilla interdum. Cras iaculis ultricies scelerisque. Proin venenatis odio sit amet tincidunt bibendum. Fusce eget augue dignissim, viverra odio rutrum, tincidunt ex.</p>
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

export default SV;