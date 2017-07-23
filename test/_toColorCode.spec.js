import { should } from 'chai';
import _toColorCode from '../source/_toColorCode';
import _compareDeep from '../source/_compareDeep';

should();
describe('toColorCode', () => {
  describe('normal cases', () => {
    it('rgb: {r: 0, g: 0, b: 0}', () => {
      const ans = "#000000";
      const act = _toColorCode({r: 0, g: 0, b: 0});
      _compareDeep(ans, act).should.equal(true);
    });

    it('rgb: {r: 255, g: 248, b: 225}', () => {
      const ans = "#fff8e1";
      const act = _toColorCode({r: 255, g: 248, b: 225});
      _compareDeep(ans, act).should.equal(true);
    });

    it('rgb: {r: 255, g: 255, b: 255}', () => {
      const ans = "#ffffff";
      const act = _toColorCode({r: 255, g: 255, b: 255});
      _compareDeep(ans, act).should.equal(true);
    });
  })

  describe('error cases', () => {
    it('rgb: null', () => {
      const ans = false;
      const act = _toColorCode(null);
      _compareDeep(ans, act).should.equal(true);
    });
    it('rgb: string', () => {
      const ans = false;
      const act = _toColorCode("hello");
      _compareDeep(ans, act).should.equal(true);
    });
  })

})
