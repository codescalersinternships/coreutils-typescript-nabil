import { Command } from 'commander';
import * as fs from 'fs';
import * as readline from 'readline';
import * as path from 'path';

const program = new Command();

function tree(currLevel: number, maxLevel: number, dirPath: string): void {
    if (currLevel > maxLevel) {
      return;
    }
    let entries = fs.readdirSync(dirPath) ;
    entries.forEach((entry) => {
        const fullPath = path.join(dirPath, entry);
        let isDirectory: boolean = fs.statSync(fullPath).isDirectory();
    
        for (let i = 1; i < currLevel; i++ ){
            process.stdout.write(" ")
        }
    
        if (isDirectory) {
            console.log("|--", entry)
            tree((currLevel + 1), maxLevel, fullPath)
        }else {
            console.log("|--", entry)
        }
      });
}

program
  .option('-l, --depth <number>', 'depth', '2')
  .arguments('<dirPath>')
  .action((dirPath: string) => {
    tree(1, program.opts().depth, dirPath);
  });

program.parse(process.argv);

if (program.args.length < 1) {
  console.error('No directory passed');
  process.exit(1);
}
