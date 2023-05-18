<h1 align="center">
Expressjs Typescript Sequelize
</h1>

<p>
This package is designed to address the issue of generating Sequelize migrations using the Sequelize CLI in a TypeScript-based project that utilizes Sequelize.

Sequelize is an ORM (Object-Relational Mapping) library for Node.js that provides easy database access and management. Sequelize migrations are used to manage changes in the database schema over time, allowing developers to make alterations without losing existing data. However, using Sequelize with TypeScript can sometimes present challenges when generating migrations through the Sequelize CLI.

The "expressjs-typescript-sequelize" package aims to simplify this process by providing a solution specifically tailored for TypeScript-based projects using Sequelize. It likely includes custom functionality or modifications to the Sequelize CLI to ensure seamless migration generation and TypeScript integration.
</p>

```bash
# development server using ts-node
$ npm run dev

# development server by building typescript file to js
$ npm run build:dev

# just to build project for production
$ npm run build:prod

# start production server
$ npm run prod-start
```
<h2>Generate Migration</h2>
<p>
Migration can be generated using two different approaches
<ul>
    <li>calling npm script by</li>
    <li>calling script using ts-node </li>
</ul>
</p>

<strong>Example Simple Migration</strong>

```bash
#Calling scripts to generate migrartion
#method 1
$ npm run crt-mig -- --name="{migration_name}"

#method 2
$ ts-node src/createMigrations.ts --name="{migration_name}"
```


<strong>Example migration with Create Table template</strong>

```bash
#Calling scripts to generate migrartion
#method 1
$ npm run crt-mig -- --name="{migration_name}" --template="CT"

#method 2
$ ts-node src/createMigrations.ts --name="{migration_name}"  --template="CT"
```


