function Slider() {
  const handleSliderChange = (event) => {
    const value = event.target.value;
    console.log(`Slider Value: ${value}`);
  };

  return (
    <div className="slider-container">
      <span>4</span>
      <input
        type="range"
        name="slider"
        min={6}
        max={16}
        step={1}
        onChange={handleSliderChange}
      />
      <span>16</span>
    </div>
  );
}

export default Slider;
