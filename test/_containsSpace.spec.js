import { should } from 'chai';
import _containsSpace from '../source/_containsSpace';

should();
describe('containsSpace', () => {
  describe('contains', () => {
    it('contains half width space', () => {
      _containsSpace(' a').should.equal(true);
    });

    it('contains full width space', () => {
      _containsSpace('v　').should.equal(true);
    });
  })

  describe('not contains', () => {
    it('not contains any spaces', () => {
      _containsSpace('helloworld').should.equal(false);
    });
  })
})
