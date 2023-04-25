let x = 1;
let y = 4;

for (let i = 0; i < 9; i ++) {
    for (let j = 0; j < y; j ++) process.stdout.write(' ');
    for (let j = 0; j < x; j ++) process.stdout.write('*');
    for (let j = 0; j < y; j ++) process.stdout.write(' ');

    if (i < 4) x += 2, y --; else x -= 2, y ++;

    process.stdout.write('\n');
}