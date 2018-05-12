const expect = require('expect.js');

const romanToDecimal = require('../romanToDecimal');

describe('Roman to decimal', () => {

  describe('Basic conversions', () => {

    it('should fail if the argument is not a string', () => {
      try {
        romanToDecimal(10);
        return Promise.reject("It should have failed");
      } catch(e) {
        expect(e.message).to.be("The argument should be a string!");
        return Promise.resolve()
      }
    });

    it('should fail if the roman number is invalid', () => {
      try {
        romanToDecimal('XVGII');
        return Promise.reject("It should have failed");
      } catch(e) {
        expect(e.message).to.be("The roman number is not valid!!");
        return Promise.resolve()
      }
    });

    it('should convert I to 1', () => {
      const roman = romanToDecimal('I');
      expect(roman).to.be(1);
    });

    it('should convert V to 5', () => {
      const roman = romanToDecimal('V');
      expect(roman).to.be(5);
    });

    it('should convert X to 10', () => {
      const roman = romanToDecimal('X');
      expect(roman).to.be(10);
    });

    it('should convert II to 2', () => {
      const roman = romanToDecimal('II');
      expect(roman).to.be(2);
    });

    it('should convert III to 3', () => {
      const roman = romanToDecimal('III');
      expect(roman).to.be(3);
    });

    it('should convert IV to 4', () => {
      const roman = romanToDecimal('IV');
      expect(roman).to.be(4);
    });

    it('should convert IX to 9', () => {
      const roman = romanToDecimal('IX');
      expect(roman).to.be(9);
    });

    it('should convert VI to 6', () => {
      const roman = romanToDecimal('VI');
      expect(roman).to.be(6);
    });

    it('should convert L to 50', () => {
      const roman = romanToDecimal('L');
      expect(roman).to.be(50);
    });

    it('should convert C to 100', () => {
      const roman = romanToDecimal('C');
      expect(roman).to.be(100);
    });

    it('should convert D to 500', () => {
      const roman = romanToDecimal('D');
      expect(roman).to.be(500);
    });

    it('should convert M to 1000', () => {
      const roman = romanToDecimal('M');
      expect(roman).to.be(1000);
    });
  });

  describe('random numbers', () => {
    it('should convert MMMCDXCIII to 3493', () => {
      const roman = romanToDecimal('MMMCDXCIII');
      expect(roman).to.be(3493);
    });

    it('should convert MDCCLXXXVI to 1786', () => {
      const roman = romanToDecimal('MDCCLXXXVI');
      expect(roman).to.be(1786);
    });

  });

});