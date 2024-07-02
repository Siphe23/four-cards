import './App.css';
import supervisor from './images/icon-supervisor.svg';
import karma from './images/icon-karma.svg';
import team from './images/icon-team-builder.svg';
import calculator from './images/icon-calculator.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p>Our Artificial Intelligence powered tools use millions of project data</p>
        <p>to ensure that your project is successful</p>
      </header>

      <main >
        <div className="cards">
        <div style={{borderTop: '5px solid cyan'}} className="card supervisor">
           <h1>Supervisor</h1>
           <p> Monitors activity to identify project roadblocks</p>
           <div className="icon">
             <img src={supervisor} alt='picture'/>
             </div>
        </div>

        <div style={{borderTop: '5px solid red'}} className="card team">
           <h1>Team Builder</h1>
           <p>  Scans our talent network to create the optimal team for your project</p>
           <div className="icon">
           <img src={team} alt='picture'/>
             </div>
        </div>

        <div style={{borderTop: '5px solid orange'}} className="card karma">
           <h1>Karma</h1>
           <p>  Monitors activity to identify project roadblocks</p>
           <div className="icon">
           <img src={calculator} alt='picture'/>
             </div>
        </div>

        <div style={{borderTop: '5px solid 	#1E90FF'}} className="card calculator">
           <h1>Calculator</h1>
           <p>  Uses data from past projects to provide better delivery estimates </p>
           <div className="icon">
           <img src={karma} alt='picture'/>
             </div>
        </div>

        </div>
      </main>
    </div>
  );
}

export default App;
