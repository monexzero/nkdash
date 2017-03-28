import { should } from 'chai';
import _isFullWidth from '../source/_isFullWidth';

should();
describe('isFullWidth', () => {
  it('全角ひら: あ', () => {
    _isFullWidth('あ').should.equal(true);
  });

  it('全角カナ: ン', () => {
    _isFullWidth('ン').should.equal(true);
  });

  it('全角漢字: 家', () => {
    _isFullWidth('家').should.equal(true);
  });

  it('半角英: a', () => {
    _isFullWidth('a').should.equal(false);
  });
  it('半角英: Z', () => {
    _isFullWidth('Z').should.equal(false);
  });
  it('半角数字: 9', () => {
    _isFullWidth('9').should.equal(false);
  });
  it('半角数字: 0', () => {
    _isFullWidth('0').should.equal(false);
  });
  it('半角記号: !', () => {
    _isFullWidth('!').should.equal(false);
  });

})
