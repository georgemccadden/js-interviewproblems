const pyramid = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
  });
  
  test('pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function');
  });
  