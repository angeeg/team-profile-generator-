const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a new employee profile', () => {
    const employee = new Employee('profile');

    expect(employee.name).toBe('name');
    expect(employee.value).toEqual(expect.any(Name));
});