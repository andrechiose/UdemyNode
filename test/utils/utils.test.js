const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var rs = utils.add(5,2);

      expect(rs).toBeA('number').toBe(7);
      // if(rs !== 7) {
      //   throw new Error(`Expected 7, but got ${rs}`);
      // }
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBeA('number').toBe(7);
        done();
      });
    });
  });
  
  it('should square a number', () => {
    var res = utils.square(8);

    expect(res).toBeA('number').toBe(64);

    // if(res !== 64) {
    //   throw new Error(`Expected 64, but got ${res}`);
    // }
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (sq) => {
      expect(sq).toBeA('number').toBe(16);
      done();
    });
  });

  it('should verify first and last name are set', () => {
    var user = utils.setName({}, 'Andre Chiose');

    expect(user).toInclude({
      firstName: 'Andre',
      lastName: 'Chiose'
    })
  });


  it('should expect some values', () => {
    // expect({ name: 'Andre'}).toEqual({ name: 'Andre'}); // to not equal
    // expect(12).toNotBe(12);
    // expect([2,3,4]).toInclude(2); // to exclude
    expect({
      name: 'Andre',
      age: 26,
      location: 'Indaiatuba'
    }).toInclude({
      age: 26
    });
  });
});
