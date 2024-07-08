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
        let lines: string[] = [];
        readLine.on('line', (line) => {
            lines.push(line)
        });
        readLine.on('close',() => {
            for (let i = lines.length - (program.opts().numberOfLines); i < lines.length; i++) {
                console.log(lines[i]);
            }
        })
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
