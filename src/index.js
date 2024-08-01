module.exports = function toReadable (number) {
  const numberLength = number.toString().length;
  const digitToStr = number.toString();
  const firstDigit = +digitToStr[0];
  const lastDigit = +digitToStr[digitToStr.length - 1];
  const twoLastDigits = +(digitToStr[digitToStr.length - 2] + digitToStr[digitToStr.length - 1]);

  let result,
    strEnd;

  const singleDigitNumber = function(num) {
    switch (num) {
      case 0:
        result = 'zero';
        break;
      case 1:
        result = 'one';
        break;
      case 2:
        result = 'two';
        break;
      case 3:
        result = 'three';
        break;
      case 4:
        result = 'four';
        break;
      case 5:
        result = 'five';
        break;
      case 6:
        result = 'six';
        break;
      case 7:
        result = 'seven';
        break;
      case 8:
        result = 'eight';
        break;
      case 9:
        result = 'nine';
        break;
      default:
        console.log('Error: please, check your single digit number');
    }

    return result;
  }

  const twoDigitNumber = function(num) {
    let lastDigitStr;

    const from10To19 = function(number) {
      switch (number) {
        case 10:
          result = 'ten';
          break;
        case 11:
          result = 'eleven';
          break;
        case 12:
          result = 'twelve';
          break;
        case 13:
          result = 'thirteen';
          break;
        case 14:
          result = 'fourteen';
          break;
        case 15:
          result = 'fifteen';
          break;
        case 16:
          result = 'sixteen';
          break;
        case 17:
          result = 'seventeen';
          break;
        case 18:
          result = 'eighteen';
          break;
        case 19:
          result = 'nineteen';
          break;
        default:
          console.log("Error: please, check your number");
      }

      return result;
    }

    const from20To99 = function(number) {
      let strStart;

      switch (+digitToStr[digitToStr.length - 2]) {
        case 2:
          strStart = 'twenty';
          break;
        case 3:
          strStart = 'thirty';
          break;
        case 4:
          strStart = 'forty';
          break;
        case 5:
          strStart = 'fifty';
          break;
        case 6:
          strStart = 'sixty';
          break;
        case 7:
          strStart = 'seventy';
          break;
        case 8:
          strStart = 'eighty';
          break;
        case 9:
          strStart = 'ninety';
          break;
        default:
          console.log("Error: please, check your number");
      }

      if (lastDigit === 0) {
        result = strStart;
      } else {
        lastDigitStr = singleDigitNumber(lastDigit);
        result = strStart + ' ' + lastDigitStr;
      }

      return result;
    }

    result = (num >= 10 && num < 20) ? from10To19(num) : from20To99(num);

    return result;
  }

  const threeDigitNumber = function(num) {

    if (twoLastDigits === 0) {
      result = singleDigitNumber(firstDigit) + ' hundred';
    } else if (twoLastDigits < 10) {
      result = singleDigitNumber(firstDigit) + ' hundred' + ' ' + singleDigitNumber(lastDigit);
    } else if (twoLastDigits >= 10) {
      result = singleDigitNumber(firstDigit) + ' hundred' + ' ' + twoDigitNumber(twoLastDigits);
    };

    return result;
  }

  const numLength = numberLength === 1 ? singleDigitNumber(number) :
    numberLength === 2 ? twoDigitNumber(number) :
    numberLength > 2 ? threeDigitNumber(number) : result = 'Error: please, check your three-digit number';

  return result;
}