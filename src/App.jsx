import "./App.css";
import GeneratePassword from "./components/GeneratePassword";
import Settings from "./components/Settings";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="main-container">
      <header>
        <h1>Welcome to Password Generator</h1>
        <h2>
          Too lazy to come up with a password on your own? Well, then use this
          app!
        </h2>
      </header>
      <div className="container">
        <h2>generated password</h2>
        <p>LENGTH: the value of slider</p>
        <Slider />
        <p>SETTINGS</p>
        <Settings />
        <GeneratePassword />
      </div>
    </div>
  );
}

export default App;
