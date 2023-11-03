/* eslint-disable react/prop-types */
function Slider({ value, onChange }) {
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    console.log(`Slider Value: ${value}`);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <span>6</span>
      <input
        type="range"
        name="slider"
        min={6}
        max={16}
        step={1}
        onChange={handleSliderChange}
        value={value}
      />
      <span>16</span>
    </div>
  );
}

export default Slider;
