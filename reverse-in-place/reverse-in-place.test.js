// Learned these tests scripts from Stephen. This will help with practicing the 'Reverse String' interview problem.

const reverse = require('./reverse-in-place');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse function reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse function reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});