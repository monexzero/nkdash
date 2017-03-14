
import { should } from 'chai';
import _ellipsisInt from '../source/_ellipsisInt';

should();
describe('ellipsisInt', () => {
  it('invalid args', () => {
    const compared = _ellipsisInt('string') == null;
    compared.should.equal(true);
  });

  it('0', () => {
    _ellipsisInt(0).should.equal('0');
  });

  it('999', () => {
    _ellipsisInt(999).should.equal('999');
  });

  it('1000', () => {
    _ellipsisInt(1000).should.equal('1 k');
  });

  it('999949', () => {
    _ellipsisInt(999949).should.equal('999.9 k');
  });
  it('999950', () => {
    _ellipsisInt(999950).should.equal('1 M');
  });

  it('1000000', () => {
    _ellipsisInt(1000000).should.equal('1 M');
  });
  it('999949999', () => {
    _ellipsisInt(999949999).should.equal('999.9 M');
  });
  it('999950000', () => {
    _ellipsisInt(999950000).should.equal('1 B');
  });
})
