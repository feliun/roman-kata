const mapping = {
  'I': 1,
  'IV': 4,
  'V': 5,
  'IX': 9,
  'X': 10,
  'XL': 40,
  'L': 50,
  'XC': 90,
  'C': 100,
  'CD': 400,
  'D': 500,
  'CM': 900,
  'M': 1000
};

const bricks = Object.keys(mapping).map((key) => parseInt(key, 10)).reverse();

const oneSymbolCandidate = (symbols, index) => {
  const [ first, ...rest ] = symbols.slice(index, symbols.length);
  return mapping[first];
};

const twoSymbolsCandidate = (symbols, index) => {
  const [ first, second, ...rest ] = symbols.slice(index, symbols.length);
  return mapping[`${first}${second || ''}`];
};

module.exports = (roman) => {
  if (typeof roman !== 'string') throw new Error("The argument should be a string!");
  const symbols = roman.split('');
  let index = 0;
  let number = 0;
  while(index < symbols.length) {
    const candidateTwo = twoSymbolsCandidate(symbols, index);
    const candidateOne = oneSymbolCandidate(symbols, index);
    if (!candidateOne && !candidateTwo) throw new Error('The roman number is not valid!!');
    const winner = candidateTwo || candidateOne;
    const jump = candidateTwo ? 2 : 1;
    index += jump;
    number += winner;
  }
  return number;
};