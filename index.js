const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML.js");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array of employees
const employees = [];

// Array to choose what type of profile to create
const profileType = [
  {
    type: "list",
    name: "profile",
    message: "Select what type of profile to create.",
    choices: ["Engineer", "Intern", "Manager", "Quit"],
  },
  {
    type: "list",
    name: "addProfile",
    message: "Select what type of profile to create.",
    choices: ["Engineer", "Intern", "Manager", "Quit"]
  }
];

// Array of questions for Engineer profile
const engineerPrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email address.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's github username.",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee?",
  },
];

// Array of questions for Manager profile
const managerPrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter the manager's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the manager's id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the manager's email address.",
  },
  {
    type: "number",
    name: "officeNumber",
    message: "Enter the manager's office number.",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee?"
  },
]
;

// Array of questions for Intern profile
const internPrompts = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email address.",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's current school.",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Would you like to add another employee?",
    default: true
  },
];

function engineerFunc() {
  inquirer.prompt(engineerPrompts).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employees.push(engineer);
  });
}

function internFunc() {
  inquirer.prompt(internPrompts).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employees.push(intern);
  });
}

function managerFunc() {
  inquirer.prompt(managerPrompts).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager)
  });
}

// Initialize app
function init() {
  inquirer.prompt(profileType)
  .then((answers) => {
    if (answers.profile === "Engineer") {
      engineerFunc()
    }
    if (answers.profile === "Intern") {
      internFunc();
    }
    if (answers.profile === "Manager") {
      managerFunc();
    }
    if (answers.profile === "Quit") {
       fs.writeToFile("index.html", generateHTML(employees))
    }
    
  })
  ;
}

// Function call to initialize app
init();

// Create function to create HTML file
