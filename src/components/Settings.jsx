import SettingComponent from "./SettingComponent";

function Settings() {
  return (
    <>
      <SettingComponent text="Include Uppercase" id="switch1" />
      <SettingComponent text="Include Lowercase" id="switch2" />
      <SettingComponent text="Include Numbers" id="switch3" />
      <SettingComponent text="Include Symbols" id="switch4" />
    </>
  );
}

export default Settings;
