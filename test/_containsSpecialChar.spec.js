import { should } from 'chai';
import _containsSpecialChar from '../source/_containsSpecialChar';

should();
describe('containsSpecialChar', () => {
  describe('contains', () => {
    it('contains *', () => {
      _containsSpecialChar('*abv').should.equal(true);
    });

    it('contains %', () => {
      _containsSpecialChar('avc%').should.equal(true);
    });

    it('contains ?', () => {
      _containsSpecialChar('a?vc').should.equal(true);
    });
  })

  describe('not contains', () => {
    it('not contains any special characters', () => {
      _containsSpecialChar('helloworld').should.equal(false);
    });
  })
})
