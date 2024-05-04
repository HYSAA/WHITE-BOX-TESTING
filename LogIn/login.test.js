const login = require('./login');

test('valid login credentials', () => {
  expect(login('admin', 'password')).toBe(true);
});

test('invalid login credentials', () => {
  expect(login('user', 'pass')).toBe(false);
});
