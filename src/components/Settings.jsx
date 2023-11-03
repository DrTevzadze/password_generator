/* eslint-disable react/prop-types */
import SettingComponent from "./SettingComponent";

function Settings({
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
  setIncludeUppercase,
  setIncludeLowercase,
  setIncludeNumbers,
  setIncludeSymbols,
}) {
  return (
    <>
      <SettingComponent
        text="Include Uppercase"
        id="switch1"
        checked={includeUppercase}
        onChange={() => setIncludeUppercase(!includeUppercase)}
      />
      <SettingComponent
        text="Include Lowercase"
        id="switch2"
        checked={includeLowercase}
        onChange={() => setIncludeLowercase(!includeLowercase)}
      />
      <SettingComponent
        text="Include Numbers"
        id="switch3"
        checked={includeNumbers}
        onChange={() => setIncludeNumbers(!includeNumbers)}
      />
      <SettingComponent
        text="Include Symbols"
        id="switch4"
        checked={includeSymbols}
        onChange={() => setIncludeSymbols(!includeSymbols)}
      />
    </>
  );
}

export default Settings;
