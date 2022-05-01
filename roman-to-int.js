// Konversi Roman to Integer
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

// IV = 4
// IX = 9
// XL = 40
// XC = 90
// CD = 400
// CM = 900
let input = 'MCMXCIV';

let romanToInt = function (input) {
  let inputArray = [...input];
  //   let calcuLation = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i] + inputArray[i + 1];
    if (element === 'IV') {
      inputArray[i] = 4;
      inputArray[i + 1] = 0;
    } else if (element === 'IX') {
      inputArray[i] = 9;
      inputArray[i + 1] = 0;
    } else if (element === 'XL') {
      inputArray[i] = 40;
      inputArray[i + 1] = 0;
    } else if (element === 'XC') {
      inputArray[i] = 90;
      inputArray[i + 1] = 0;
    } else if (element === 'CD') {
      inputArray[i] = 400;
      inputArray[i + 1] = 0;
    } else if (element === 'CM') {
      inputArray[i] = 900;
      inputArray[i + 1] = 0;
    } else {
      switch (inputArray[i]) {
        case 'I':
          inputArray[i] = 1;
          break;
        case 'V':
          inputArray[i] = 5;
          break;
        case 'X':
          inputArray[i] = 10;
          break;
        case 'L':
          inputArray[i] = 50;
          break;
        case 'C':
          inputArray[i] = 100;
          break;
        case 'D':
          inputArray[i] = 500;
          break;
        case 'M':
          inputArray[i] = 1000;
          break;
      }
    }
  }
  console.log(inputArray);
  const result = inputArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(result);
};
romanToInt(input);
