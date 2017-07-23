import { should } from 'chai';
import _toRGB from '../source/_toRGB';
import _compareDeep from '../source/_compareDeep';

should();
describe('toRGB', () => {
  describe('normal cases', () => {
    it('colorCode: #000000', () => {
      const ans = {r: 0, g: 0, b: 0};
      const act = _toRGB('#000000');
      _compareDeep(ans, act).should.equal(true);
    });

    it('colorCode: #ff4081', () => {
      const ans = {r: 255, g: 64, b: 129};
      const act = _toRGB('#ff4081');
      _compareDeep(ans, act).should.equal(true);
    });

    it('colorCode: #ffffff', () => {
      const ans = {r: 255, g: 255, b: 255};
      const act = _toRGB('#ffffff');
      _compareDeep(ans, act).should.equal(true);
    });
  })

  describe('error cases', () => {
    it('colorCode: null', () => {
      const ans = false;
      const act = _toRGB(null);
      _compareDeep(ans, act).should.equal(true);
    });
    it('colorCode: int', () => {
      const ans = false;
      const act = _toRGB(100);
      _compareDeep(ans, act).should.equal(true);
    });
    it('colorCode: ffffff', () => {
      const ans = false;
      const act = _toRGB("ffffff");
      _compareDeep(ans, act).should.equal(true);
    });
  })

})
