const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);

    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });

  it('should expect some values', () => {
    //expect(12).toNotBe(11);
    //expect({name: "Rodrigo"}).toEqual({name: 'Rodrigo'});
    //expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(1);
    expect({
      name: 'Rodrigo',
      age: 30,
      location: 'Los Angeles'
    }).toInclude({
      age:30
    })
  });

  it('should set firstName and lastName', () => {
    var user = {location: 'Los Angeles', age: 25};
    var res = utils.setName(user, 'Rodrigo Coto');

    expect(res).toInclude({
      firstName: 'Rodrigo',
      lastName: 'Coto'
    });
  });
})
