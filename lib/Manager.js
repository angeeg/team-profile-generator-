const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name = '', id, email, school) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

getRole() {
    return "Manager"
}

};

module.exports = Manager;