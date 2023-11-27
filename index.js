const mysql = require('mysql2');
const inquirer = require('inquirer');


// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '05Surg3#0556',
  database: 'company_roster_db',
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.\n');
  startApp();
});

// Function to start the application
function startApp() {
  inquirer
    .prompt({
      name: 'userChoice',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.userChoice) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles();
          break;

        case 'View all employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;

        default:
          console.log(`Invalid option: ${answer.userChoice}`);
          break;
      }
    });
}

// Implement the functions for each action 

function viewDepartments() {
  // Implement code to view all departments from the database
  const query = 'SELECT * FROM department';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

function viewRoles() {
  // Implement code to view all roles from the database
  const query = 'SELECT * FROM roles';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

function viewEmployees() {
  // Implement code to view all employees from the database
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    startApp();
  });
}

function addDepartment() {
  // Implement code to add a department to the database
    inquirer
      .prompt([
        {
          name: 'departmentName',
          type: 'input',
          message: 'Enter the name of the department:',
          validate: function (input) {
            if (!input) {
              return 'Please enter a department name.';
            }
            return true;
          },
        },
      ])
      .then((answer) => {
        // Once the user provides the department name, insert it into the database
        const query = 'INSERT INTO department (name) VALUES (?)';
        connection.query(query, [answer.departmentName], (err, res) => {
          if (err) throw err;
          console.log(`Department ${answer.departmentName} added successfully!\n`);
          startApp(); // Go back to the main menu
        });
      });
  }
  

function addRole() {
  // Implement code to add a role to the database
  inquirer
  .prompt([
    {
      name: 'roleName',
      type: 'input',
      message: 'Enter the name of the role:',
      validate: function (input) {
        if (!input) {
          return 'Please enter a role name.';
        }
        return true;
      },
    },
  ])
  .then((answer) => {
    // Once the user provides the role name, insert it into the database
    const query = 'INSERT INTO roles (name) VALUES (?)';
    connection.query(query, [answer.roleName], (err, res) => {
      if (err) throw err;
      console.log(`Role ${answer.roleName} added successfully!\n`);
      startApp(); // Go back to the main menu
    });
  });
}

function addEmployee() {
  // Implement code to add an employee to the database
}

function updateEmployeeRole() {
  // Implement code to update an employee's role in the database
}
