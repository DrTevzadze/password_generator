import "./App.css";
import GeneratePassword from "./components/GeneratePassword";
import Settings from "./components/Settings";
import Slider from "./components/Slider";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");

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
        <p>LENGTH: {length}</p>
        <Slider value={length} onChange={(newValue) => setLength(newValue)} />
        <p>SETTINGS</p>
        <Settings />
        <GeneratePassword value={password} />
      </div>
    </div>
  );
}

export default App;
