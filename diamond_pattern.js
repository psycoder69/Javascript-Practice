// diamond pattern using console.log() method

let a = 1;
let b = 4;

let pattern = "";

for (let i = 0; i < 9; i ++) {
    for (let j = 0; j < b; j ++) pattern += ' ';
    for (let j = 0; j < a; j ++) pattern += '*';

    if (i < 4) a += 2, b --; else a -= 2, b ++;

    pattern += '\n';
}

console.log(pattern);

// diamond pattern using process.stdout.write() method

let x = 1;
let y = 4;

for (let i = 0; i < 9; i ++) {
    for (let j = 0; j < y; j ++) process.stdout.write(' ');
    for (let j = 0; j < x; j ++) process.stdout.write('*');

    if (i < 4) x += 2, y --; else x -= 2, y ++;

    process.stdout.write('\n');
}