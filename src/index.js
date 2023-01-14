module.exports = function toReadable (number) {
  let numToString = number.toString();
  let result = '';
  let slise = numToString.slice(1, 3);
  let num = Number(slise);
    const numbersundo20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersundo19and0 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbersmore19 = ['', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    const number100 = ['hundred'];
  if ((number >= 0) && (number <= 19)) {
    result = `${numbersundo20[number]}`;
    return result;
    } else if ((number > 19) && (number < 100)) {
    result = `${numbersmore19[`${numToString[0] - 1}`]}` + `${numbersundo19and0[`${numToString[1]}`]}`;
    return result.trimEnd();
    }  else if ((number >= 100) && ((num < 20))) {
    result = `${numbersundo19and0[`${numToString[0]}`]}` + ` ${number100}` + ` ${numbersundo19and0[num]}`;
    return result.trimEnd();
    } else if ((number >= 100) && ((num >= 20))) {
    result = `${numbersundo19and0[`${numToString[0]}`]}` + ` ${number100}` + ` ${numbersmore19[`${numToString[1] - 1}`]}` + `${numbersundo19and0[`${numToString[2]}`]}`; 
    return result.trimEnd();
  }
 
};
