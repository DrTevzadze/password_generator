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
    let trueChars = "";

    if (includeUppercase) {
      const randomUpperCase = Math.floor(Math.random() * joinLetters.length);
      const randomLetter = joinLetters[randomUpperCase];
      allChars += joinLetters.toUpperCase();
      trueChars += randomLetter.toUpperCase();
    }

    if (includeLowercase) {
      const randomLowerCase = Math.floor(Math.random() * joinLetters.length);
      const randomLowerLetter = joinLetters[randomLowerCase];
      allChars += joinLetters;
      trueChars += randomLowerLetter;
    }

    if (includeNumbers) {
      const randomNumberIndex = Math.floor(Math.random() * joinNumbers.length);
      const randomNumber = joinNumbers[randomNumberIndex];
      allChars += joinNumbers;
      trueChars += randomNumber;
    }

    if (includeSymbols) {
      const randomSymbolIndex = Math.floor(Math.random() * joinSymbols.length);
      const randomSymbol = joinSymbols[randomSymbolIndex];
      allChars += joinSymbols;
      trueChars += randomSymbol;
    }

    let password = "";

    for (let i = 0; i < length - trueChars.length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
    password += trueChars;

    const stringPass = password.split("");

    for (let j = stringPass.length - 1; j > 0; j--) {
      const random = Math.floor(Math.random() * (j + 1));

      [stringPass[j], [stringPass[random]]] = [
        stringPass[random],
        stringPass[j],
      ];
    }
    const shuffleString = stringPass.join("");
    return shuffleString;
  };

  const handleClick = () => {
    const newPassword = generatePassword();
    onPasswordGenerated(newPassword);
  };

  return (
    <div className="generate_password">
      <button type="submit" onClick={handleClick}>
        Generate Password
      </button>
    </div>
  );
}

export default GeneratePassword;
