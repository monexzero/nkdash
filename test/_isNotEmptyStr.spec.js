import { should } from 'chai';
import _isNotEmptyStr from '../source/_isNotEmptyStr';

should();
describe('isNotEmptyStr', () => {
  it('"a" => true', () => {
    _isNotEmptyStr("a").should.equal(true);
  });

  it('"hello" => true', () => {
    _isNotEmptyStr("hello").should.equal(true);
  });

  it('"" => false', () => {
    _isNotEmptyStr("").should.equal(false);
  });

  it('["array"] => false', () => {
    _isNotEmptyStr(["array"]).should.equal(false);
  });

})
