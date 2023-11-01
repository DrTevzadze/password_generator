import "./App.css";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="main-container">
      <header>
        <h1>Welcome to Password Generator</h1>
        <h2>
          Too lazy to come up with a password by yourself? Well, then use this
          app!
        </h2>
      </header>
      <div className="container">
        <h2>generated password</h2>
        <Slider />
      </div>
    </div>
  );
}

export default App;
