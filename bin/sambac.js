#! /usr/bin/env node

let sambac = require('../index.js'),
    program = require('commander');

program
    .usage('[options] <file ...>')
    .option('--webpackConfig <webpackConfig>', 'webpackConfigLocation')
    .option('--port <portNumber>', 'serve spec list on the specified local port number')
    .option('--webpackPort <webpackPort>', 'local webpack dev server port')
    .parse(process.argv);

sambac(program);