'use strict';
const chalk = require('chalk');
const chokidar = require('chokidar');
const cp = require('child_process');
const path = require('path');

const green = chalk.green;
const yellow = chalk.yellow;
const heading = yellow('*** shell lint ***');

const watcher = chokidar.watch('*.sh', {
  persistent: true
});

const lint = file => {
  const filepath = path.resolve(file);
  cp.exec(`shellcheck ${filepath} --color=always`, (err, stdout) => {
    if(stdout){
      var time = new Date().toTimeString();
      console.log(`\n${heading} @ ${time}`);
      console.log(stdout);
    }
  });
}

watcher.on('add', file => {
    console.log(yellow('now watching'), green(file));
    lint(file);
  }).on('change', lint);
