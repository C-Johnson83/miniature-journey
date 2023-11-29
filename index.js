const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '05Surg3#0556',
  database: 'company_roster_db',
});

function printCompanyDatabaseBanner() {
  setTimeout(() => {
    console.log('\x1b[96m                                                                                                            ');
    console.log('                                                                                                             ');
    console.log('                                                                                                             ');
    console.log('                                                                                                             ');
    console.log('    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄         ▄                ');
  }, 100);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌       ▐░▌               ');
  }, 150);
  setTimeout(() => {
    console.log('   ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌       ▐░▌               ');
  }, 200);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌       ▐░▌               ');
  }, 250);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄█░▌               ');
  }, 300);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌               ');
  }, 350);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌ ▀▀▀▀█░█▀▀▀▀                ');
  }, 400);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌                    ');
  }, 450);
  setTimeout(() => {
    console.log('   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▐░▌     ▐░▌                    ');
  }, 500);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌      ▐░░▌     ▐░▌                    ');
  }, 550);
  setTimeout(() => {
    console.log('    ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀            ▀         ▀  ▀        ▀▀       ▀                     ');
    console.log('                                                                                                             ');
  }, 600);
  setTimeout(() => {
    console.log('    ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄   ');
  }, 650);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 700);
  setTimeout(() => {
    console.log('   ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀   ');
  }, 750);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌            ');
  }, 800);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄   ');
  }, 850);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 900);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀█░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀   ');
  }, 950);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌          ▐░▌▐░▌            ');
  }, 1000);
  setTimeout(() => {
    console.log('   ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌ ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄   ');
  }, 1050);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░▌ ▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░▌ ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 1100);
  setTimeout(() => {
    console.log('    ▀▀▀▀▀▀▀▀▀▀   ▀         ▀       ▀       ▀         ▀  ▀▀▀▀▀▀▀▀▀▀   ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀   ');
    console.log('                                                                                                             ');
    console.log('                                                                                                             ');
    console.log('                                                                                                             ');
    console.log('                                                                                                             ');
    
  }, 1150);
}

// Call the function when the application starts to show the Banner
printCompanyDatabaseBanner();
// Connect to the MySQL server

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server.\n');
  setTimeout(() => {
    startApp();
  }, 1350);
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
  setTimeout(() => { 
    console.log('\x1b[33m                                                                                                                                                  ');
    console.log('                                                                                                                                                  ');
    console.log('                                                                                                                                                  ');
    console.log('                                                                                                                                                  ');
    console.log('  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄         ▄                                                       ');
  }, 100);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌       ▐░▌                                                      ');
  }, 150);
  setTimeout(() => {
    console.log(' ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌       ▐░▌                                                      ');
  }, 200);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌       ▐░▌                                                      ');
  }, 250);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄█░▌                                                      ');
  }, 300);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌                                                      ');
  }, 350);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌ ▀▀▀▀█░█▀▀▀▀                                                       ');
  }, 400);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌                                                           ');
  }, 450);
  setTimeout(() => {
    console.log(' ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▐░▌     ▐░▌                                                           ');
  }, 500);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌      ▐░░▌     ▐░▌                                                           ');
  }, 550);
  setTimeout(() => {
    console.log('  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀            ▀         ▀  ▀        ▀▀       ▀                                                            ');
    console.log('                                                                                                                                                  ');
  }, 600);
  setTimeout(() => {
    console.log('  ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄   ');
  }, 650);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 700);
  setTimeout(() => {
    console.log(' ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀   ');
  }, 750);
  setTimeout(() => {
    console.log(' ▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌▐░▌ ▐░▌▐░▌▐░▌          ▐░▌▐░▌    ▐░▌     ▐░▌     ▐░▌            ');
  }, 800);
  setTimeout(() => {
    console.log(' ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄   ');
  }, 850);
  setTimeout(() => {
    console.log(' ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌  ');
  }, 900);
  setTimeout(() => {
    console.log(' ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀      ▐░▌     ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌     ▐░▌      ▀▀▀▀▀▀▀▀▀█░▌  ');
  }, 950);
  setTimeout(() => {
    console.log(' ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌       ▐░▌     ▐░▌       ▐░▌▐░▌          ▐░▌    ▐░▌▐░▌     ▐░▌               ▐░▌  ');
  }, 1000);
  setTimeout(() => {
    console.log(' ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░▌       ▐░▌▐░▌      ▐░▌      ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌     ▐░▌      ▄▄▄▄▄▄▄▄▄█░▌  ');
  }, 1050);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌     ▐░▌     ▐░░░░░░░░░░░▌  ');
  }, 1100);
  setTimeout(() => {
    console.log('  ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀         ▀  ▀         ▀       ▀       ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀   ');
    console.log('                                                                                                                                                  ');
    console.log('                                                                                                                                                  ');
    console.log('                                                                                                                                                  ');
  }, 1150);
  // Implement code to view all departments from the database
  setTimeout(() => {
    const query = 'SELECT id as ID, name as Name FROM department';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res, ['ID', 'Name']);
      console.log('\x1b[0m')
      startApp();
    });
  },1350);
}

function viewRoles() {

  setTimeout(() => {
    console.log('\x1b[31m                                                                                              ');
    console.log('                                                                                              ');
    console.log('                                                                                              ');
    console.log('                                                                                              ');
    console.log('  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄         ▄   ');
  }, 100);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌       ▐░▌  ');
  }, 150);
  setTimeout(() => {
    console.log(' ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌       ▐░▌  ');
  }, 200);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌       ▐░▌  ');
  }, 250);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄█░▌  ');
  }, 300);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌  ');
  }, 350);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌ ▀▀▀▀█░█▀▀▀▀   ');
  }, 400);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌       ');
  }, 450);
  setTimeout(() => {
    console.log(' ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▐░▌     ▐░▌       ');
  }, 500);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌      ▐░░▌     ▐░▌       ');
  }, 550);
  setTimeout(() => {
    console.log('  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀            ▀         ▀  ▀        ▀▀       ▀        ');
    console.log('                                                                                              ');
  }, 600);
  setTimeout(() => {
    console.log('    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄                           ');
  }, 650);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌                          ');
  }, 700);
  setTimeout(() => {
    console.log('   ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀                           ');
  }, 750);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌                                    ');
  }, 800);
  setTimeout(() => {
    console.log('   ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄                           ');
  }, 850);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌                          ');
  }, 900);
  setTimeout(() => {
    console.log('   ▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌▐░▌          ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌                          ');
  }, 950);
  setTimeout(() => {
    console.log('   ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌          ▐░▌                    ▐░▌                          ');
  }, 1000);
  setTimeout(() => {
    console.log('   ▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌                          ');
  }, 1050);
  setTimeout(() => {
    console.log('   ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌                          ');
  }, 1100);
  setTimeout(() => {
    console.log('    ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀                           ');
    console.log('                                                                                              ');
    console.log('                                                                                              ');
    console.log('                                                                                              ');
  }, 1150);
  
  // Implement code to view all roles from the database
  setTimeout(() => {
    const query = 'SELECT * FROM roles JOIN department ON roles.department_id = department.id';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log('\x1b[0m');
      startApp();
    });
  }, 1350);
}

function viewEmployees() {
  setTimeout(() => {
    console.log('\x1b[92m                                                                                                                          ');
    console.log('                                                                                                                          ');
    console.log('                                                                                                                          ');
    console.log('                                                                                                                          ');
    console.log('  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄         ▄                               ');
  }, 100);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░▌       ▐░▌                              ');
  }, 150);
  setTimeout(() => {
    console.log(' ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌▐░▌       ▐░▌                              ');
  }, 200);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌▐░▌       ▐░▌                              ');
  }, 250);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄█░▌                              ');
  }, 300);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌                              ');
  }, 350);
  setTimeout(() => {
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌   ▐░▌ ▐░▌ ▀▀▀▀█░█▀▀▀▀                               ');
  }, 400);
  setTimeout(() => {                            
    console.log(' ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌                                   ');
  }, 450);
  setTimeout(() => {
    console.log(' ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▐░▌     ▐░▌                                   ');
  }, 500);
  setTimeout(() => {
    console.log(' ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌      ▐░░▌     ▐░▌                                   ');
  }, 550);
  setTimeout(() => {
    console.log('  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀            ▀         ▀  ▀        ▀▀       ▀                                    ');
    console.log('                                                                                                                          ');
  }, 600);
  setTimeout(() => {
    console.log('    ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄   ');
  }, 650);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 700);
  setTimeout(() => {
    console.log('   ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀   ');
  }, 750);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌            ');
  }, 800);
  setTimeout(() => {
    console.log('   ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄   ');
  }, 850);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 900);
  setTimeout(() => {
    console.log('   ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌  ');
  }, 950);
  setTimeout(() => {
    console.log('   ▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌     ▐░▌     ▐░▌          ▐░▌                    ▐░▌  ');
  }, 1000);
  setTimeout(() => {
    console.log('   ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌  ');
  }, 1050);
  setTimeout(() => {
    console.log('   ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌  ');
  }, 1100);
  setTimeout(() => {
    console.log('    ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀   ');
    console.log('                                                                                                                          ');
    console.log('                                                                                                                          ');
    console.log('                                                                                                                          ');
  }, 1150);                                                                               

  // Implement code to view all employees from the database
  setTimeout(() => {
    const query = 'SELECT * FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res)
      console.log('\x1b[0m');
      startApp();
    });
  }, 1350);
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
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary of the role:',
        validate: function (input) {
          if (!input) {
            return 'Please enter a salary for the role.';
          }
          return true;
        },
      },
      {
        name: 'roleDeptId',
        type: 'input',
        message: 'Enter the ID number of the department for the role:',
        validate: function (input) {
          if (!input) {
            return 'Please enter a department ID.';
          }
          return true;
        },
      },
    ])
    .then((answer) => {
      // Once the user provides the role name, insert it into the database
      const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
      connection.query(query, [answer.roleName, answer.salary, answer.roleDeptId],
        (err, res) => {
          if (err) throw err;
          console.log(`Role ${answer.roleName} added successfully!\n`);
          startApp(); // Go back to the main menu
        });
    });
}

function addEmployee() {
  // Implement code to add an employee to the database
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'Enter the first name of the employee:',
        validate: function (input) {
          if (!input) {
            return 'Please enter a first name.';
          }
          return true;
        },
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'Enter the last name of the employee:',
        validate: function (input) {
          if (!input) {
            return 'Please enter a last name.';
          }
          return true;
        },
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the role ID of the employee:',
        validate: function (input) {
          if (!input) {
            return 'Please enter a role ID.';
          }
          return true;
        },
      },
      {
        name: 'manager_id',
        type: 'input',
        message: 'Enter the manager ID of the employee (can be null for no manager):',
      },
    ])
    .then((answers) => {
      // Once the user provides the employee information, insert it into the database
      const query =
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      connection.query(
        query,
        [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
        (err, res) => {
          if (err) throw err;
          console.log(
            `Employee ${answers.first_name} ${answers.last_name} added successfully!\n`
          );
          startApp(); // Go back to the main menu
        }
      );
    });
};

function updateEmployeeRole() {
  // Implement code to update an employee's role in the database
}
