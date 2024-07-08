import { Command } from 'commander';
import * as fs from 'fs';
import * as readline from 'readline';

const program = new Command();

program
    .option('-l, --printLineCount', 'Print Number of lines')
    .option('-w, --printWordCount', 'Print Number of words')
    .option('-c, --printCharactersCount', 'Print Number of characters')
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
        let lineCount = 0;
	    let wordCount = 0;
	    let charactersCount = 0;
        readLine.on('line', (line) => {
            lineCount++;
            charactersCount += line.length
            wordCount += line.split(" ").length
        });
        readLine.on("close", () => {
            if (program.opts().printLineCount) {
                console.log(lineCount )
            }
            if (program.opts().printWordCount) {
                console.log(wordCount )
            }
            if (program.opts().printCharactersCount) {
                console.log(charactersCount )
            }
            if (!program.opts().printLineCount && !program.opts().printWordCount && !program.opts().printCharactersCount) {
                console.log(lineCount, wordCount, charactersCount)
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
