
import { should } from 'chai';
import _isAscii from '../source/_isAscii';

should();
describe('isAscii', () => {
  it('0 => true', () => {
    _isAscii('1').should.equal(true);
  });
  it('9 => true', () => {
    _isAscii('0').should.equal(true);
  });

  it('a => true', () => {
    _isAscii('a').should.equal(true);
  });
  it('z => true', () => {
    _isAscii('z').should.equal(true);
  });

  it('A => true', () => {
    _isAscii('A').should.equal(true);
  });
  it('Z => true', () => {
    _isAscii('Z').should.equal(true);
  });

  it('! => true', () => {
    _isAscii('!').should.equal(true);
  });
  it('/ => true', () => {
    _isAscii('/').should.equal(true);
  });

  it(': => true', () => {
    _isAscii(':').should.equal(true);
  });
  it('? => true', () => {
    _isAscii('?').should.equal(true);
  });

  it('０ => false', () => {
    _isAscii('１').should.equal(false);
  });
  it('ｚ => false', () => {
    _isAscii('ｚ').should.equal(false);
  });
  it('！ => false', () => {
    _isAscii('！').should.equal(false);
  });
  it('？ => false', () => {
    _isAscii('？').should.equal(false);
  });
})
