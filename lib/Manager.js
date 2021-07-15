const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name = '', id, email, school, officeNumber) {
        super(name, id, email, school)
        this.officeNumber = officeNumber
    }

getRole() {
    return "Manager"
}

};

module.exports = Manager;