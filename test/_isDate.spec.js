import { should } from 'chai';
import _isDate from '../source/_isDate';

should();
describe('isDate', () => {
  it('date => true', () => {
    _isDate(new Date()).should.equal(true);
  });

  it('string => false', () => {
    _isDate('string').should.equal(false);
  });

  it('int => false', () => {
    _isDate(10).should.equal(false);
  });
})
