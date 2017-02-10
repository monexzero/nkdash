import { should } from 'chai';
import _isNotEmptyArray from '../source/_isNotEmptyArray';

should();
describe('isNotEmptyArray', () => {
  it('["a"] => true', () => {
    _isNotEmptyArray(["a"]).should.equal(true);
  });

  it('[] => false', () => {
    _isNotEmptyArray([]).should.equal(false);
  });

  it('string => false', () => {
    _isNotEmptyArray('abcde').should.equal(false);
  });

  it('int => false', () => {
    _isNotEmptyArray(1).should.equal(false);
  });

  it('null => false', () => {
    _isNotEmptyArray(null).should.equal(false);
  });

  it('undefined => false', () => {
    _isNotEmptyArray(undefined).should.equal(false);
  });
})
