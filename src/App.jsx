import "./App.css";
import GeneratePassword from "./components/GeneratePassword";
import Settings from "./components/Settings";
import Slider from "./components/Slider";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordGenerated = (newPassword) => {
    setPassword(newPassword);
  };

  return (
    <div className="main-container">
      <header>
        <h1>Welcome to Password Generator</h1>
      </header>
      <div className="container">
        <div className="password">
          <h1 style={{ display: password.length === 0 ? "none" : "flex" }}>
            {password}
          </h1>
        </div>
        <p>LENGTH: {length}</p>
        <Slider value={length} onChange={(newValue) => setLength(newValue)} />
        <p>SETTINGS</p>
        <Settings
          includeUppercase={includeUppercase}
          includeLowercase={includeLowercase}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
          setIncludeUppercase={setIncludeUppercase}
          setIncludeLowercase={setIncludeLowercase}
          setIncludeNumbers={setIncludeNumbers}
          setIncludeSymbols={setIncludeSymbols}
        />
        <GeneratePassword
          length={length}
          includeUppercase={includeUppercase}
          includeLowercase={includeLowercase}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
          onPasswordGenerated={handlePasswordGenerated}
        />
      </div>
    </div>
  );
}

export default App;
