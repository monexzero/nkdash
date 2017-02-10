import { should }   from 'chai';
import _pluck       from '../source/_pluck';
import _compareDeep from '../source/_compareDeep';

should();
describe('pluck', () => {
  describe('valid arg', () => {
    const collection = [
      {one: 1, two: 2, three: 3},
      {one: 2, two: 5, three: 10},
      {one: 3, two: 6, three: 12},
    ];

    it('basic', () => {
      const ans = [1,2,3];
      const act = _pluck(collection, 'one');
      _compareDeep(ans, act).should.equal(true);
    });
  })

  describe('invalid args', () => {
    it('invalid args => (string, string)', () => {
      const compared = _pluck('str', 'one') == null;
      compared.should.equal(true);
    });

    it('invalid args => (array, int)', () => {
      const compared = _pluck([{},{}], 2) == null;
      compared.should.equal(true);
    });

    it('invalid args => (array, array)', () => {
      const compared = _pluck([{},{}], []) == null;
      compared.should.equal(true);
    });

  })
})
