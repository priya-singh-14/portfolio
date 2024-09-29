import sv1 from "./assets/sv.png";
import sv2 from "./assets/sv2.png";
import sv3 from "./assets/sv3.png";
import "./projects.css";


function SV() {
    return (
        <div className="start">
        <p>StockView</p>
       <img src={sv3} alt="Project 1" className="subproject-img"/>
       <div className="project-text-section">
       <p> StockView is a stock trading simulation program, coded in Java, that utilizes SOLID principles and MVC architecture to create an environment  for simulating stock trading. The program supports over 700 stock tickers, and functionalities such as building multiple portfolios, determining x-day averages, buying, selling, and valuating stocks and portfolios on certain dates, and creating bar-graph representations of stock and portfolio performance among other functionalities. The project features both text-based and Swing GUI interfaces, enabling users to query real-time stock data through integrated API retrieval using AlphaVantageAPI. To enhance performance, we implemented a data caching mechanisms, allowing for more efficient API usage and improved query responsiveness. Built in collaboration with Ayomide Addey. Available on Github upon request.  </p>        <hr class="custom-hr" />
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
       <p>IntelliJ | JavaSwing | AlphaVantage API</p>
       </div>

        </div>
        </div>
        <img src={sv1} alt="Project 1" className="subproject-img"/>
       </div>
    )
}

export default SV;