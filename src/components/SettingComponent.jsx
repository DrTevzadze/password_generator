/* eslint-disable react/prop-types */
function SettingComponent({ text, id, checked, onChange }) {
  return (
    <div className="setting_component">
      <h2>{text}</h2>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
}

export default SettingComponent;
