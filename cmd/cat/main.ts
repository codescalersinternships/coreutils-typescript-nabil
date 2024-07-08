import { Command } from 'commander';
import * as fs from 'fs';
import * as readline from 'readline';

const program = new Command();

program
  .option('-n, --number', 'number of lines')
  .arguments('<filepath>')
  .action((filepath: string) => {
    if (!fs.existsSync(filepath)) {
      console.error('Incorrect file path or file does not exist');
      process.exit(1);
    }
    const fileStream = fs.createReadStream(filepath);
    const readLine = readline.createInterface({
      input: fileStream,
      terminal: false
    });

    let cnt = 0;
    readLine.on('line', (line) => {
      if (program.opts().number) {
        console.log(`${cnt} ${line}`);
      } else {
        console.log(line);
      }
      cnt++;
    });

    readLine.on('error', (error) => {
      console.error(`Error reading file: ${error.message}`);
      process.exit(1);
    });
  });

program.parse(process.argv);

if (program.args.length < 1) {
  console.error('No file passed');
  process.exit(1);
}
