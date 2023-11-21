#!/usr/bin/env node

import { program } from 'commander';
// import pageLoader from '../src/index.js';

program
    .version('1.0.0')
    .description('Page loader utility')
    .argument('<url>')
    .option('-o, --output, [dir]', 'output dir', '/home/user/current-dir')
    .parse(process.argv);