import { should } from 'chai';
import _compareDeep from '../source/_compareDeep';

should();
describe('compareDeep', () => {
  describe('normal cases', () => {
    it('int', () => {
      _compareDeep(24, 24).should.equal(true);
    });

    it('string', () => {
      _compareDeep('abc', 'abc').should.equal(true);
    });

    it('array (same order)', () => {
      _compareDeep(['a', 'b'], ['a', 'b']).should.equal(true);
    });

    it('array (different order)', () => {
      _compareDeep(['a', 'b', 'c'], ['c', 'a', 'b']).should.equal(true);
    });

    it('object (same order)', () => {
      const v1 = {
        one: 120,
        two: 'hoge fuga',
        three: [12, '34', 9.5],
        four: {a: 2, b: 'abde', c: [1,3,4]},
      };

      const v2 = {
        one: 120,
        two: 'hoge fuga',
        three: ['34', 9.5, 12],
        four: {a: 2, b: 'abde', c: [1,3,4]},
      };
      _compareDeep(v1, v2).should.equal(true);
    });

    it('object (different order)', () => {
      const v1 = {
        four: {b: 'abde', a: 2, c: [4,1,3]},
        two: 'hoge fuga',
        three: [12, '34', 9.5],
        one: 120,
      };

      const v2 = {
        one: 120,
        two: 'hoge fuga',
        three: ['34', 9.5, 12],
        four: {a: 2, b: 'abde', c: [1,3,4]},
      };
      _compareDeep(v1, v2).should.equal(true);
    });
  })

  describe('abnormal cases', () => {
    it('int', () => {
      _compareDeep(24, 36).should.equal(false);
    });

    it('string', () => {
      _compareDeep('abc', 'abcd').should.equal(false);
    });

    it('array (different element)', () => {
      _compareDeep(['a', 'b'], ['a', 'c']).should.equal(false);
    });

    it('array (different length)', () => {
      _compareDeep(['a', 'b'], ['a', 'b', 'c']).should.equal(false);
    });


    it('object (different value)', () => {
      const v1 = {
        one: 120,
        two: 'hoge fuga',
        three: [12, '34', 9.5],
        four: {a: 2, b: 'abde', c: [1,3,4]},
      };

      const v2 = {
        one: 120,
        two: 'hoge fuga',
        three: ['34', 9.5, 12],
        four: {a: 2, b: 'abde', c: [1,3,5]},
      };
      _compareDeep(v1, v2).should.equal(false);
    });

    it('object (different length)', () => {
      const v1 = {
        four: {b: 'abde', a: 2, c: [4,1,3]},
        two: 'hoge fuga',
        three: [12, '34', 9.5],
        one: 120,
      };

      const v2 = {
        one: 120,
        two: 'hoge fuga',
        three: ['34', 9.5, 12],
        four: {a: 2, b: 'abde', c: [1,3,4]},
        five: 1,
      };
      _compareDeep(v1, v2).should.equal(false);
    });
  })
})
