let main = document.querySelector('main');
let p = document.querySelector('main p');

let randomHexLetter = '1234567890ABCDEF'.split('');

main.addEventListener('click', () => randomHex())

function randomHex(){
    let hex = randomHexLetter.map(item => [Math.random(), item])
    hex.sort((a, b) => a[0] - b[0]);

    let elems = '';

    hex.forEach(item => elems += item[1]);
    p.textContent = `#${elems.slice(5, 11)}`;

    randomColor();
}

function randomColor(){
    main.style.backgroundColor = p.textContent;
}

