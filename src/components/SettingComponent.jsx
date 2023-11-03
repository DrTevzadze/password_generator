/* eslint-disable react/prop-types */
function SettingComponent({ text, id }) {
  return (
    <div className="setting_component">
      <h2>{text}</h2>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
}

export default SettingComponent;
