/* eslint-disable react/prop-types */
import { joinLetters, joinNumbers, joinSymbols } from "../utilities/data";

function GeneratePassword({
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
  onPasswordGenerated,
}) {
  const generatePassword = () => {
    let allChars = "";

    if (includeUppercase) {
      allChars += joinLetters.toUpperCase();
    }

    if (includeLowercase) {
      allChars += joinLetters;
    }

    if (includeNumbers) {
      allChars += joinNumbers;
    }

    if (includeSymbols) {
      allChars += joinSymbols;
    }
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
    return password;
  };

  const handleClick = () => {
    const newPassword = generatePassword();
    onPasswordGenerated(newPassword);
  };

  return (
    <div className="generate_password">
      <button onClick={handleClick}>Generate Password</button>
    </div>
  );
}

export default GeneratePassword;
