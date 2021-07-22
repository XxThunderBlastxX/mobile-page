import './App.css';
import logo from './Images/affilboost.png';
import cross from './Images/Vector.svg';

function App() {
  return (
    <div className="mobile">
      <div className={"mobile__affilboostLogo"}>
        <img src={logo} className={"mobile__affilboost"} alt={"affilboost"}/>
      </div>
        <div className={"mobile__content"}>
            <img src={cross} alt={"Can't"} className={"mobile__cross"}/>
            <h1>OOPS!</h1>
            <h4>This page can’t be opened in your current device.</h4>
        </div>
        <button className={"mobile__button"} type={"submit"}>Go Back</button>
    </div>
  );
}

export default App;
