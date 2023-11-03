import { letters, numbers, symbols } from "../utilities/data";

function GeneratePassword() {
  const handleClick = () => {
    console.log(letters);
    console.log(numbers);
    console.log(symbols);
  };

  return (
    <div className="generate_password">
      <button onClick={handleClick}>Generate Password</button>
    </div>
  );
}

export default GeneratePassword;
