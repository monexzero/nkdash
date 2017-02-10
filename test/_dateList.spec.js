import _ from 'lodash';
import { should } from 'chai';
import _dateList  from '../source/_dateList';
import _compareDeep from '../source/_compareDeep';

should();
describe('dateList', () => {
  it('generate dateList', () => {
    const startDate = new Date('2017-01-01 23:50:50');
    const endDate   = new Date('2017-01-07 20:00:00');
    const answer = [
      '2017-01-01',
      '2017-01-02',
      '2017-01-03',
      '2017-01-04',
      '2017-01-05',
      '2017-01-06',
      '2017-01-07',
    ];
    const actual = _dateList(startDate, endDate);
    const dateStrs = _.map(actual, (date) => {
      return date.format('YYYY-MM-DD');
    });
    _compareDeep(dateStrs, answer).should.equal(true);
  });

  it('set invalid args to startDate', () => {
    const actual = _dateList("string", new Date());
    _compareDeep(actual, []).should.equal(true);
  });

  it('set invalid args to endDate', () => {
    const actual = _dateList(new Date(), []);
    _compareDeep(actual, []).should.equal(true);
  });
})
