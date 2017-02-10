import { should } from 'chai';
import _containsEmoji from '../source/_containsEmoji';

should();
describe('containsEmoji', () => {
  describe('contains', () => {
    it('U+1F600 (MIN)', () => {
      _containsEmoji('😀ba').should.equal(true);
    });

    it('U+1F197 (MIDDLE)', () => {
      _containsEmoji('a 🆗 b').should.equal(true);
    });

    it('U+1F1FC (MAX)', () => {
      _containsEmoji('aa🇿🇼').should.equal(true);
    });
  })

  describe('not contains', () => {
    it('case1', () => {
      _containsEmoji('hello world').should.equal(false);
    });
  })
})
