const _ = require('./fnselect')._;
const select = require('./fnselect').select;
const selectFirst = require('./fnselect').selectFirst;


const f = (...args) => {
  let sum = 0;
  args.forEach(n => sum += n);
  return sum;
}

describe('select test', () => {

  it('should return empty array if nothing is passed', () => {
    expect(select()).toEqual([]);
  });

  it('should return empty array if nothing will be executed', () => {
    expect(
      select(
        _(false, f, 0),
        _(false, f, 1)
      )
    ).toEqual([]);
  });

  it('should return array of true return values', () => {
    expect(
      select(
        _(false, f, 0),
        _(true, f, 1),
        _(false, f, 2),
        _(true, f, 3)
      )
    ).toEqual([1, 3]);
  });

});

describe('selectFirst test', () => {

  it('should return null if nothing is passed', () => {
    expect(selectFirst()).toBeNull();
  });

  it('should return null if nothing will be executed', () => {
    expect(
      selectFirst(
        _(false, f, 0),
        _(false, f, 1)
      )
    ).toBeNull();
  });

  it('should return the return value of the first true decider', () => {
    expect(
      selectFirst(
        _(false, f, 0),
        _(true, f, 1),
        _(false, f, 2),
        _(true, f, 3)
      )
    ).toEqual(1);
  });

});