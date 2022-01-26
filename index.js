#!/usr/bin/env node

const clearConsole  =  require('clear-any-console');
const pkgJSON       =  require('./package.json')
const chalk         =  require('chalk');
//const log = console.log;

//Clears the console
clearConsole();

//Alerts

const sym      = require('log-symbols');
const success  = chalk.green;
const info     = chalk.blue;
const warning  = chalk.keyword(`orange`);
const error    = chalk.red.bold;

console.log(`
${chalk.magenta(`Name `)}       : ${chalk.dim(` ${pkgJSON.name} `)}
${chalk.magenta(`Version`)}     : ${chalk.dim(` ${pkgJSON.version} `)}
${chalk.magenta(`Description`)} : ${chalk.dim(` ${pkgJSON.description} `)}

`)

console.log(`${chalk.blue(` Jatin Bhardwaj  is my name `)}`);

console.log(`
${sym.success} ${success(` SUCCESS `)} Thank for checking out my CLI
${sym.info} ${info(` INFO `)} I'm learning NodeCLI
${sym.warning} ${warning(` WARNING `)} Please don't copy me . Be Careful
${sym.error} ${error(` ERROR `)} I'm on amateur . Don't contact me .
`)


//Command used for this project
// #!/usr/env node => to run js without using node
// npm link and npm unlink
// npm publish 
// npx jatinbhardwaj
// npm version minor major patch


