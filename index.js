const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML.js");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array of employees
const employees = []

// Array to choose what type of profile to create
const profileType = [
    {
        type: "list",
        name: "profile",
        message: "Select what type of profile to create.",
        choices: ["Engineer", "Intern", "Manager", "Quit"]
    },
]

// Array of questions for Employee profile 
const employeePrompts = [
    {
        type: "input",
        name: "name",
        message: "Enter the employee's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's id."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address."
    },
]

// Array of questions for Engineer profile 
const engineerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's id."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address."
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's github username."
    },
]

// Array of questions for Manager profile 
const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the manager's id."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the manager's email address."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office phone number in (XXX)-XXX-XXXX format."
    },
]

// Array of questions for Intern profile 
const internPrompts = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's id."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email address."
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's current school."
    },
]

function engineerFunc() {
    inquirer.prompt(engineerPrompts).then((answers) => {
        const engineer = new Engineer(answer.name, answers.id, answers.email, answers.github)
        employees.push(engineer)
    })
}

function internFunc() {
    inquirer.prompt(internPrompts).then((answers) => {
        const intern = new Intern(answer.name, answers.id, answers.email, answers.school)
        employees.push(intern)
    })
}

function managerFunc() {
    inquirer.prompt(managerPrompts).then((answers) => {
        const manager = new Manager(answer.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager)
    })
}

// Initialize app 
function init() {
    inquirer.prompt(profileType).then((answers) => {
        if (profileType === "Engineer") {
            engineerFunc()
        }
        if (profileType === "Intern") {
            internFunc()
        }
        if (profileType === "Manager") {
            managerFunc()
        }
        if (profileType === "Quit") {
            writeToFile("index.html", generateHTML(employees))
        }
    })
}



// Function call to initialize app
init();

// Create function to create HTML file 