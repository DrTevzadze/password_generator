import React from "react";

function SettingComponent({text}) {
  return (
    <div className="setting_component">
      <h1>{text}</h1>
      <input type="checkbox" id="switch" />
      <label for="switch">Toggle</label>
    </div>
  );
}

export default SettingComponent;
