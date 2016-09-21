'use strict';
var gulp = require('gulp');
var requireDir = require('require-dir');
var chalk = require('chalk');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

console.log("");
console.log(chalk.green(" █████╗  ██████╗     ██████╗ ██████╗ ███╗   ███╗"));
console.log(chalk.green("██╔══██╗██╔═══██╗   ██╔════╝██╔═══██╗████╗ ████║"));
console.log(chalk.green("███████║██║   ██║   ██║     ██║   ██║██╔████╔██║"));
console.log(chalk.green("██╔══██║██║   ██║   ██║     ██║   ██║██║╚██╔╝██║"));
console.log(chalk.green("██║  ██║╚██████╔╝██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║"));
console.log(chalk.green("╚═╝  ╚═╝ ╚═════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝"));
console.log("");

gulp.task('default', ['watch']);
