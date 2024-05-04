const UserProfile = require('./userProfile');

test('create user profile', () => {
    const user = new UserProfile('John Doe', 30, 'john@example.com');
    expect(user.getName()).toBe('John Doe');
    expect(user.getAge()).toBe(30);
    expect(user.getEmail()).toBe('john@example.com');
});

test('update user profile', () => {
    const user = new UserProfile('John Doe', 30, 'john@example.com');
    user.updateName('Jane Doe');
    user.updateAge(25);
    user.updateEmail('jane@example.com');
    expect(user.getName()).toBe('Jane Doe');
    expect(user.getAge()).toBe(25);
    expect(user.getEmail()).toBe('jane@example.com');
});
