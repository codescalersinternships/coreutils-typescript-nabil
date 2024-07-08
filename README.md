# Unix-Based Commands Implemented in TypeScript
Goal is to reimplement several core Unix utilities.


## Operations Implemented

### 1. head

The `head` command in Go prints the first N lines of a file. Implemented with:
```bash
npx ts-node ./cmd/head/main.ts -n2 input.txt
```

### 2. tail

The `tail` command in Go prints the last N lines of a file. Implemented with:
```bash
npx ts-node ./cmd/tail/main.ts -n2 input.txt
```

### 3. wc

The `wc` command in Go counts lines, words, and bytes in a file and prints the counts.
```bash
npx ts-node ./cmd/wc/main.ts -l -w -c input.txt
```

### 4. cat

The `cat` command in Go concatenates files and prints them to standard output. Implemented with:
- `cat -n`: Prints each line with line numbers.
```bash
npx ts-node ./cmd/cat/main.ts -n input.txt
```

### 5. echo

The `echo` command in Go prints its arguments to standard output.
```bash
npx ts-node ./cmd/echo/main.ts -n hello
```

### 6. tree

The `tree` command in Go recursively lists contents of directories in a tree-like format.
```bash
npx ts-node ./cmd/tree/main.ts -l3 ./cmd
```

### 7. env

The `env` command in Go lists the current environment variables and their values.
```bash
npx ts-node ./cmd/env/main.ts
```

### 8. true

The `true` command in Go does nothing except return a successful exit status.
```bash
npx ts-node ./cmd/true/main.ts
```

### 9. false

The `false` command in Go does nothing except return a non-successful exit status.
```bash
npx ts-node ./cmd/false/main.ts
```
