let x = document.getElementById('button-1');
let y = document.getElementById('counter');

let counter = 0;

function increaseCounter() {
    counter ++;

    y.innerHTML = `${counter}`;
}

x.addEventListener("click", increaseCounter);