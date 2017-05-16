import { should }   from 'chai';
import _getDiff     from '../source/_getDiff';
import _compareDeep from '../source/_compareDeep';


should();
describe('getDiff', () => {
  describe('normal cases', () => {
    it('[1,3,5,6,10,10,11]', () => {
      const data = [1, 3, 5, 6, 10, 10, 11];
      const act  = [1, 2, 2, 1,  4,  0,  1];
      const ans  = _getDiff(data);
      _compareDeep(ans, act).should.equal(true);
    });

    it('[1,null,false,undefined,1,100,null]', () => {
      const data = [1, null, 3, undefined, 10, 100, null];
      const act  = [1, null, 2,  null,      7,  90, null];
      const ans  = _getDiff(data);
      _compareDeep(ans, act).should.equal(true);
    });
  })
})
