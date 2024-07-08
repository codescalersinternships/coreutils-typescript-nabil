import { Command } from 'commander';
import * as fs from 'fs';
import * as readline from 'readline';

const program = new Command();

program
    .option('-n, --number-of-lines <number>', 'number of lines', '10')
    .arguments('<filepath>')
    .action((filepath: string) => {
        if (!fs.existsSync(filepath)) {
            console.error('Incorrect file path or file does not exist');
            process.exit(1);
        }
        const fileStream = fs.createReadStream(filepath);
        const readLine = readline.createInterface({
            input: fileStream,
            terminal: true
        });
        console.log(program.opts().numberOfLines)
        let cnt = 0;
        readLine.on('line', (line) => {
            console.log(line);
            cnt++;
            if (cnt == program.opts().numberOfLines){
                readLine.close();
            }
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
