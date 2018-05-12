const expect = require('expect.js');

const decimalToRoman = require('../decimalToRoman');

describe('Decimal to Roman', () => {

  describe('Basic conversions', () => {

    it('should fail if the argument is not a decimal', () => {
      try {
        decimalToRoman("invalid");
        return Promise.reject("It should have failed");
      } catch(e) {
        expect(e.message).to.be("The argument should be a number!");
        return Promise.resolve()
      }
    });

    it('should convert 1 to I', () => {
      const roman = decimalToRoman(1);
      expect(roman).to.be('I');
    });

    it('should convert 5 to V', () => {
      const roman = decimalToRoman(5);
      expect(roman).to.be('V');
    });

    it('should convert 10 to X', () => {
      const roman = decimalToRoman(10);
      expect(roman).to.be('X');
    });

    it('should convert 2 to II', () => {
      const roman = decimalToRoman(2);
      expect(roman).to.be('II');
    });

    it('should convert 3 to III', () => {
      const roman = decimalToRoman(3);
      expect(roman).to.be('III');
    });

    it('should convert 4 to IV', () => {
      const roman = decimalToRoman(4);
      expect(roman).to.be('IV');
    });

    it('should convert 9 to IX', () => {
      const roman = decimalToRoman(9);
      expect(roman).to.be('IX');
    });

    it('should convert 6 to VI', () => {
      const roman = decimalToRoman(6);
      expect(roman).to.be('VI');
    });

    it('should convert 50 to L', () => {
      const roman = decimalToRoman(50);
      expect(roman).to.be('L');
    });

    it('should convert 100 to C', () => {
      const roman = decimalToRoman(100);
      expect(roman).to.be('C');
    });

    it('should convert 500 to D', () => {
      const roman = decimalToRoman(500);
      expect(roman).to.be('D');
    });

    it('should convert 1000 to M', () => {
      const roman = decimalToRoman(1000);
      expect(roman).to.be('M');
    });
  });


  describe('1000s numbers', () => {
    it('should convert 2000 to MM', () => {
      const roman = decimalToRoman(2000);
      expect(roman).to.be('MM');
    });

    it('should convert 3000 to MM', () => {
      const roman = decimalToRoman(3000);
      expect(roman).to.be('MMM');
    });
  });

  describe('100s numbers', () => {
    it('should convert 800 to DCCC', () => {
      const roman = decimalToRoman(800);
      expect(roman).to.be('DCCC');
    });

    it('should convert 500 to D', () => {
      const roman = decimalToRoman(500);
      expect(roman).to.be('D');
    });

    it('should convert 400 to CD', () => {
      const roman = decimalToRoman(400);
      expect(roman).to.be('CD');
    });

    it('should convert 900 to CM', () => {
      const roman = decimalToRoman(900);
      expect(roman).to.be('CM');
    });
  });

  describe('10s numbers', () => {
    it('should convert 80 to LXXX', () => {
      const roman = decimalToRoman(80);
      expect(roman).to.be('LXXX');
    });

    it('should convert 50 to L', () => {
      const roman = decimalToRoman(50);
      expect(roman).to.be('L');
    });

    it('should convert 40 to XL', () => {
      const roman = decimalToRoman(40);
      expect(roman).to.be('XL');
    });

    it('should convert 90 to XC', () => {
      const roman = decimalToRoman(90);
      expect(roman).to.be('XC');
    });
  });

  describe('random numbers', () => {
    it('should convert 2426 to MMCDXXVI', () => {
      const roman = decimalToRoman(2426);
      expect(roman).to.be('MMCDXXVI');
    });

    it('should convert 1618 to MDCXVIII', () => {
      const roman = decimalToRoman(1618);
      expect(roman).to.be('MDCXVIII');
    });

    it('should convert 999 to CMXCIX', () => {
      const roman = decimalToRoman(999);
      expect(roman).to.be('CMXCIX');
    });
  });

});