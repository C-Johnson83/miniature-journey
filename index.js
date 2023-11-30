const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { default: Choices } = require('inquirer/lib/objects/choices');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'kitchenSink',
  password: 'superSecretMagicPassword',
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
function printCompanyDepartmentBanner() {
  setTimeout(() => {
    console.log('\x1b[93m                                                                                                                                                  ');
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
}
function printCompanyRolesBanner() {
  setTimeout(() => {
    console.log('\x1b[91m                                                                                              ');
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
}
function printCompanyEmployeeBanner() {
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

}
// Function to start the application
function startApp() {
  inquirer
    .prompt({
      name: 'userChoice',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        '\x1b[93m View all departments\x1b[0m',
        '\x1b[93m Add a department\x1b[0m',
        '\x1b[91m View all roles\x1b[0m',
        '\x1b[91m Add a role\x1b[0m',
        '\x1b[92m View all employees\x1b[0m',
        '\x1b[92m Add an employee\x1b[0m',
        '\x1b[92m Update an employee role\x1b[0m',
        '\x1b[97m Exit\x1b[0m',
      ],
    })
    .then((answer) => {
      switch (answer.userChoice) {
        case '\x1b[93m View all departments\x1b[0m':
          viewDepartments();
          break;

        case '\x1b[91m View all roles\x1b[0m':
          viewRoles();
          break;

        case '\x1b[92m View all employees\x1b[0m':
          viewEmployees();
          break;

        case '\x1b[93m Add a department\x1b[0m':
          addDepartment();
          break;

        case '\x1b[91m Add a role\x1b[0m':
          addRole();
          break;

        case '\x1b[92m Add an employee\x1b[0m':
          addEmployee();
          break;

        case '\x1b[92m Update an employee role\x1b[0m':
          updateEmployeeRole();
          break;

        case '\x1b[97m Exit\x1b[0m':
          connection.end();
          break;

        default:
          console.log(`Invalid option: ${answer.userChoice}`);
          break;
      }
    });
}
function init() {
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
}
// Implement the functions for each action 

function viewDepartments() {
  printCompanyDepartmentBanner()
  // Implement code to view all departments from the database
  setTimeout(() => {
    const query = 'SELECT id as ID, name as Name FROM department';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log('\x1b[0m')
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
        message: '\x1b[93m Enter the name of the department:',
        validate: function (input) {
          if (!input) {
            return '\x1b[93m Please enter a department name.';
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
        console.log(`\x1b[93m Department ${answer.departmentName} added successfully!\n\x1b[0m`);
        startApp(); // Go back to the main menu
      });
    });
}

function viewRoles() {
  printCompanyRolesBanner()
  // Implement code to view all roles from the database
  setTimeout(() => {
    const query = 'SELECT roles.id, title AS Job_Title, salary AS Salary, department.name as Department_Name FROM roles JOIN department ON roles.department_id = department.id ORDER BY roles.id ASC';
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      console.log('\x1b[0m');
      startApp();
    });
  }, 1350);
}

function addRole() {
const deptQuery = 'SELECT id, name FROM department';
// query department for department choices
connection.query(deptQuery, (err,res) => {
  if (err) throw err;
  const choices = res.map(({id, name}) => ({
  value: id, name})
  )

  // Implement code to add a role to the database
  inquirer
    .prompt([
      {
        name: 'roleName',
        type: 'input',
        message: '\x1b[91m Enter the name of the role:',
        validate: function (input) {
          if (!input) {
            return '\x1b[31m Please enter a role name.';
          }
          return true;
        },
      },
      {
        name: 'salary',
        type: 'input',
        message: '\x1b[31m Enter the salary of the role:',
        validate: function (input) {
          if (!input) {
            return '\x1b[31m Please enter a salary for the role.';
          }
          return true;
        },
      },
      {
        name: 'roleDeptId',
        type: 'list',
        message: '\x1b[31m Select the name of the department for the role:',
        choices: choices,
        validate: function (input) {
          if (!input) {
            return '\x1b[31m Please select a department.';
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
          console.log(`\x1b[91m Role ${answer.roleName} added successfully!\n\x1b[0m]`);
          startApp(); // Go back to the main menu
        });
    });
})}

function viewEmployees() {
  printCompanyEmployeeBanner()
  // Implement code to view all employees from the database
  setTimeout(() => { 
    const query = 'SELECT employee.id AS ID, first_name AS First_Name, last_name AS Last_Name, roles.title AS Job_Title, department.name AS Department, salary AS Salary, manager_id AS MANAGER FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON roles.department_id = department.id ORDER BY employee.id ASC'; // JOIN employee ON employee.manager_id = employee(id)
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res)
      console.log('\x1b[0m');
      startApp();
    });
  }, 1350);
}

function addEmployee() {
  const roleQuery = 'SELECT roles.id, roles.title, employee.id AS eId, employee.first_name, employee.last_name FROM roles LEFT JOIN employee ON roles.id = employee.role_id';

  // query roloes for role choices
connection.query(roleQuery, (err,res) => {
  if (err) throw err;
  const choices = res.map(({id, title}) => ({
  value: id + ' ' + title})
  )
  const managerChoices = res.map(({ eId, first_name, title, last_name}) => ({
    value: eId + ' '+ title + ' ' + first_name +' '+ last_name})
  )
  // Implement code to add an employee to the database
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: '\x1b[92m Enter the first name of the employee:',
        validate: function (input) {
          if (!input) {
            return '\x1b[92m Please enter a first name.';
          }
          return true;
        },
      },
      {
        name: 'last_name',
        type: 'input',
        message: '\x1b[92m Enter the last name of the employee:',
        validate: function (input) {
          if (!input) {
            return '\x1b[92m Please enter a last name.';
          }
          return true;
        },
      },
      {
        name: 'role_id',
        type: 'list',
        message: '\x1b[92m Select the role of the employee:',
        choices: choices,
        validate: function (input) {
          if (!input) {
            return '\x1b[92m Please select a role.';
          }
          return true;
        },
      },
      {
        name: 'manager_id',
        type: 'list',
        message: '\x1b[92m Enter the manager ID of the employee (can be null for no manager):',
        choices: managerChoices,
      },
    ])
    .then((answers) => {
      // Once the user provides the employee information, insert it into the database
      const managerId = answers.manager_id[0] || null;
      const query =
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
      connection.query(
        query,
        [answers.first_name, answers.last_name, answers.role_id[0], managerId],
        (err, res) => {
          if (err) throw err;
          console.log(
            `\x1b[92m Employee ${answers.first_name} ${answers.last_name} added successfully!\n`
          );
          startApp(); // Go back to the main menu
        }
      );
    });
})
}

function updateEmployeeRole() {
  const empQuery =
    'SELECT employee.id AS employeeId, employee.first_name, employee.last_name, roles.id AS roleId, roles.title, employee.manager_id FROM employee LEFT JOIN roles ON employee.role_id = roles.id';

  // Query roles for role choices and employee information
  connection.query(empQuery, (err, res) => {
    if (err) throw err;

    const employeeChoices = res.map(({ employeeId, first_name, last_name, roleId, title, manager_id }) => ({
      value: employeeId,
      name: `${first_name} ${last_name} (Current Role: ${title}, Current Manager ID: ${manager_id || 'None'})`,
    }));

    const roleChoices = res.map(({ roleId, title }) => ({
      value: roleId,
      name: title,
    }));

    // Implement code to update an employee's role and manager ID in the database
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select the employee you want to update:',
          choices: employeeChoices,
        },
        {
          type: 'list',
          name: 'newRoleId',
          message: 'Select the new role for the employee:',
          choices: roleChoices,
        },
        {
          type: 'input',
          name: 'newManagerId',
          message: 'Enter the new manager ID for the employee (can be null for no manager):',
        },
      ])
      .then((answers) => {
        const query = 'UPDATE employee SET role_id = ?, manager_id = ? WHERE id = ?';
        connection.query(
          query,
          [answers.newRoleId, answers.newManagerId || null, answers.employeeId],
          (updateErr, updateRes) => {
            if (updateErr) throw updateErr;
            console.log('Employee role and manager ID updated successfully!');
            startApp(); // Go back to the main menu or perform other actions
          }
        );
      });
  });
}



init();