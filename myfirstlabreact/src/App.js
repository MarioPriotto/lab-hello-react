import ironhacklogoxs from './images/ironhack-logo-xs.png';
import menutopxs from './images/menu-top-xs.png';
import ComponenteColuna from './Components/Componentecoluna/ComponenteColuna';

import './App.css';

function App() {
  return (
    <div className="App">

    <div className="AppframeTop">
      <div className="ApplineOne">
        <img className="Appimg01" src={ironhacklogoxs} />
        <img className="Appimg02" src={menutopxs} />
      </div>
      <p className="ApptitleFrame">Say hello to</p>
      <p className="ApptitleFrame">ReactJS</p>

      <p className="AppdescritionFrame">You will learn how to use</p>
      <p className="AppdescritionFrame">the most popular frontend library,</p>
      <p className="AppdescritionFrame">and become a super Ninja developer.</p>

      <button className="AppAwesome">Awesome!</button>
    </div>

    <div className="AppframeButton">
      <div className="ApplineTwo">
        <ComponenteColuna imagem="0" titulo="Declarative" textual="React makes it painless to create interactive UIs."/>
        <ComponenteColuna imagem="1" titulo="Components"  textual="Build encapsulated components that manage their state."/>
        <ComponenteColuna imagem="2" titulo="Single-Way"  textual="A set of immutable values are passed to the component's"/>
        <ComponenteColuna imagem="3" titulo="JSX"         textual="Statically-typed, designed to run on modern browsers."/>
      </div>
    </div>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


    </div>
  );
}

export default App;
