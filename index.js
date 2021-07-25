const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML.js");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { create } = require("domain");

// Array of employees
const employeeData = [];


// Array to choose what type of profile to create
const profileType = [
  {
    type: "list",
    name: "profile",
    message: "Select what employee profile to create.",
    choices: ["Engineer", "Intern", "Manager"],
  },
];

// 
const addEmployee = [
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?"
      }
]

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
  }
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
  }
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
  }
 
];

function engineerFunc() {
  inquirer.prompt(engineerPrompts).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employeeData.push(engineer);
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
    employeeData.push(intern);
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
    employeeData.push(manager)
  });
}

// Function to create an employee profile 
function createEmployee() {
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
    
  })
  ;
};

// TODO: Create function that will either exit prompts or add employee again 
function exitPrompt() {
    inquirer.prompt(addEmployee)
    if (false) {
        return inquirer.prompt({
            
        })
    }
}

// TODO: Create function to init app 
function init() {
    createEmployee()
    fs.writeFile('index.html', generateHTML(employeeData), err => {
        if (err) {
            console.log(err)
            return;
        }
    })
    
}



// Function call to initialize app
init();

// Create function to create HTML file
