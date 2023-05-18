import * as fs from 'fs'
import * as path from 'path';
import * as yargs from 'yargs';

const argv:any = yargs
    .command('name', 'Migration file name',{
        name: {
            describe: "migrations file name"
        }
    })
    .command('template', 'Choose template for create table',{
        name: {
            describe: `CT: Create table`
        }
    })
    .help()
    .argv;

if(!argv.name){
    console.log("migartion file name missing","\nProcess completed with errors");
    process.exit(0);
}


const content = `'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};`

const createTableTemplate = `'use strict';
/** @type {import('sequelize-cli').Migration} */
const tableName = ""
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction =  await queryInterface.sequelize.transaction()
    try{
      await queryInterface.createTable(tableName,
          {},
          {
            engine: "INNODB",
            charset: "utf8mb4",
            transaction
          })
      await transaction.commit()
    }catch(err){
      console.log(err)
      await transaction.rollback()
    }
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable(tableName)
  }
};`;
const filepath = __dirname
const d = new Date().getTime();
const filename = d+"_"+argv.name+".ts"
const migration_path = path.join(filepath, "../src/db/migrations/",filename);
console.log(migration_path);
let fileContent = ""
switch(argv.template){
    case 'CT':
        fileContent = createTableTemplate;
        break;
    default:
        fileContent = content
}
try {
    fs.writeFileSync(migration_path, fileContent,{encoding:"utf-8"})
    console.log(`${migration_path} created successfully`)
}catch(err){
    console.log(err)
}
