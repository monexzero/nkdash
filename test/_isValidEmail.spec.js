import { should } from 'chai';
import _isValidEmail from '../source/_isValidEmail';

should();
describe('isValidEmail', () => {
  describe('valid email format', () => {
    it('xxx@xxx.xxx', () => {
      _isValidEmail('hoge@fuga.com').should.equal(true);
    });

    it('xxx@xxx.xxx.xxx', () => {
      _isValidEmail('hoge@fuga.co.jp').should.equal(true);
    });

    it('xxx.xxx@xxx.xxx.xxx', () => {
      _isValidEmail('hoge.hoge@fuga.co.jp').should.equal(true);
    });

  })

  describe('invalid email format', () => {
    it('xxx', () => {
      _isValidEmail('hoge').should.equal(false);
    });

    it('xxx_xxxx.xx', () => {
      _isValidEmail('hoge_fuga.jp').should.equal(false);
    });
  })
})
