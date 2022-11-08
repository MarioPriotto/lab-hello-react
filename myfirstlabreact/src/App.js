import ironhacklogoxs from './images/ironhack-logo-xs.png';
import menutopxs from './images/menu-top-xs.png';
import ComponenteColuna from './Components/Componentecoluna/ComponenteColuna';

import  ico1 from './images/icon1.png';
import  ico2 from './images/icon2.png';
import  ico3 from './images/icon3.png';
import  ico4 from './images/icon4.png';

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
        <ComponenteColuna imagem={JSON.stringify(ico1)} titulo="Declarative" textual="React makes it painless to create interactive UIs."/>
        <ComponenteColuna imagem={JSON.stringify(ico2)} titulo="Components"  textual="Build encapsulated components that manage their state."/>
        <ComponenteColuna imagem={JSON.stringify(ico3)} titulo="Single-Way"  textual="A set of immutable values are passed to the component's"/>
        <ComponenteColuna imagem={JSON.stringify(ico4)} titulo="JSX"         textual="Statically-typed, designed to run on modern browsers."/>
      </div>
    </div>

    </div>

  );
}

export default App;
