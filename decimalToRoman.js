const mapping = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

const bricks = Object.keys(mapping).map((key) => parseInt(key, 10)).reverse();

const extractNewSymbol = (number) => {
  let result = '';
  for(brick of bricks) {
    if (brick <= number) {
      return {
        newNumber: number - brick,
        symbol: mapping[brick]
      };
    }
  }
};

module.exports = (number) => {
  if (typeof number !== 'number') throw new Error("The argument should be a number!");
  let result = '';
  while(number > 0) {
    const { newNumber, symbol } = extractNewSymbol(number);
    result += symbol;
    number = newNumber;
  }
  return result;
};