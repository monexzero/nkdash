import { should } from 'chai';
import _isNumber from '../source/_isNumber';

should();
describe('isNumber', () => {
  it('1 (int) => true', () => {
    _isNumber(1).should.equal(true);
  });

  it('1 (string) => true', () => {
    _isNumber('1').should.equal(true);
  });

  it('0 (string) => true', () => {
    _isNumber('0').should.equal(true);
  });

  it('1200 (string) => true', () => {
    _isNumber('1200').should.equal(true);
  });

  it('01 (string) => false', () => {
    _isNumber('01').should.equal(false);
  });

  it('120a09 (string) => false', () => {
    _isNumber('120a09').should.equal(false);
  });

  it('array => false', () => {
    _isNumber([12, 40]).should.equal(false);
  });
})
