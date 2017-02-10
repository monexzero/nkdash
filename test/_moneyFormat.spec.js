import { should } from 'chai';
import _moneyFormat from '../source/_moneyFormat';

should();
describe('moneyFormat', () => {
  describe('valid arg', () => {
    it('0 -> 0', () => {
      _moneyFormat(0).should.equal('0');
    });
    it('999 -> 999', () => {
      _moneyFormat(999).should.equal('999');
    });

    it('1000 -> 1,000', () => {
      _moneyFormat(1000).should.equal('1,000');
    });
    it('999999 -> 999,999', () => {
      _moneyFormat(999999).should.equal('999,999');
    });

    it('1000000 -> 1,000,000', () => {
      _moneyFormat(1000000).should.equal('1,000,000');
    });
    it('999999999 -> 999,999,999', () => {
      _moneyFormat(999999999).should.equal('999,999,999');
    });
  });

  describe('invalid arg', () => {
    it('string', () => {
      const compared = _moneyFormat('12') == null;
      compared.should.equal(true);
    });

    it('array', () => {
      const compared = _moneyFormat([]) == null;
      compared.should.equal(true);
    });
  })
})
