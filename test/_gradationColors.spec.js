import { should }       from 'chai';
import _compareDeep     from '../source/_compareDeep';
import _gradationColors from '../source/_gradationColors';

should();
describe('gradationColors', () => {
  describe('normal cases', () => {
    it('from: #ffffff, to: #000000, count: 1', () => {
      const ans = ["#ffffff"];
      const act = _gradationColors("#ffffff", "#000000", 1);
      _compareDeep(ans, act).should.equal(true);
    });

    it('from: #ffffff, to: #000000, count: 2', () => {
      const ans = ["#ffffff", "#000000"];
      const act = _gradationColors("#ffffff", "#000000", 2);
      _compareDeep(ans, act).should.equal(true);
    });
  })

  describe('error cases', () => {
  })

})
