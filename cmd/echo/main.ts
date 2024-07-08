import { Command } from 'commander';
import * as fs from 'fs';
import * as readline from 'readline';

const program = new Command();

program
  .option('-n, --omitNewline', 'omit trailing newlines')
  .arguments('[args...]')
  .action((args: string[]) => {
    const output = args.join(' ');

    if (program.opts().omitNewline) {
      process.stdout.write(output);
    } else {
      console.log(output);
    }
  });

program.parse(process.argv);

