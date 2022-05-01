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
var intToRomanConverter = function (num) {
  var num = num;
  var stringInput = num.toString();
  var inputArray = [...stringInput];

  function firstDigit() {
    if (inputArray[inputArray.length - 1] > 0 && inputArray[inputArray.length - 1] < 4) {
      var roman1 = '';
      for (var j = 0; j < inputArray[inputArray.length - 1]; j++) {
        roman1 += 'I';
      }
      return roman1;
    } else if (inputArray[inputArray.length - 1] > 4 && inputArray[inputArray.length - 1] < 9) {
      var roman1 = 'V';
      for (var j = 5; j < inputArray[inputArray.length - 1]; j++) {
        roman1 += 'I';
      }
      return roman1;
    } else if (inputArray[inputArray.length - 1] == 4) {
      var roman1 = 'IV';
      return roman1;
    } else if (inputArray[inputArray.length - 1] == 9) {
      var roman1 = 'IX';
      return roman1;
    } else {
      var roman1 = '';
      return roman1;
    }
  }

  function secondDigit() {
    if (inputArray[inputArray.length - 2] > 0 && inputArray[inputArray.length - 2] < 4) {
      var roman2 = '';
      for (var j = 0; j < inputArray[inputArray.length - 2]; j++) {
        roman2 += 'X';
      }
      return roman2;
    } else if (inputArray[inputArray.length - 2] > 4 && inputArray[inputArray.length - 2] < 9) {
      var roman2 = 'L';
      for (var j = 5; j < inputArray[inputArray.length - 2]; j++) {
        roman2 += 'X';
      }
      return roman2;
    } else if (inputArray[inputArray.length - 2] == 4) {
      var roman2 = 'XL';
      return roman2;
    } else if (inputArray[inputArray.length - 2] == 9) {
      var roman2 = 'XC';
      return roman2;
    } else {
      var roman2 = '';
      return roman2;
    }
  }

  function thirdDigit() {
    if (inputArray[inputArray.length - 3] > 0 && inputArray[inputArray.length - 3] < 4) {
      var roman3 = '';
      for (var j = 0; j < inputArray[inputArray.length - 3]; j++) {
        roman3 += 'C';
      }
      return roman3;
    } else if (inputArray[inputArray.length - 3] > 4 && inputArray[inputArray.length - 3] < 9) {
      var roman3 = 'D';
      for (var j = 5; j < inputArray[inputArray.length - 3]; j++) {
        roman3 += 'C';
      }
      return roman3;
    } else if (inputArray[inputArray.length - 3] == 4) {
      var roman3 = 'CD';
      return roman3;
    } else if (inputArray[inputArray.length - 3] == 9) {
      var roman3 = 'CM';
      return roman3;
    } else {
      var roman3 = '';
      return roman3;
    }
  }

  function fourthDigit() {
    if (inputArray[inputArray.length - 4] > 0 && inputArray[inputArray.length - 4] < 4) {
      var roman4 = '';
      for (var j = 0; j < inputArray[inputArray.length - 4]; j++) {
        roman4 += 'M';
      }
      return roman4;
    } else if (inputArray[inputArray.length - 4] >= 4) {
      var roman4 = 'Beyond the maximum roman numeral';
      return roman4;
    } else {
      var roman4 = '';
      return roman4;
    }
  }

  function intToRoman() {
    //   console.log();
    var result = fourthDigit() + thirdDigit() + secondDigit() + firstDigit();
    return result;

    //   console.log(inputArray);
  }

  var result = intToRoman();
  return result;

  // for (var i = inputArray.length - 1; i >= 0; i--) {
};

const coba = intToRomanConverter(4000);
console.log(coba);
