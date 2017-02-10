import { should } from 'chai';
import _ellipsisStr from '../source/_ellipsisStr';

should();
describe('ellipsisStr', () => {
  it('invalid args', () => {
    const compared = _ellipsisStr(100) == '';
    compared.should.equal(true);
  });

  it('len = 5', () => {
    _ellipsisStr('abcdefg').should.equal('abcde…');
  });

  it('len = 10', () => {
    _ellipsisStr('abcdefghijklmn', 10).should.equal('abcdefghij…');
  });

  it('len = 5 (str < len)', () => {
    _ellipsisStr('abc').should.equal('abc');
  });
})
