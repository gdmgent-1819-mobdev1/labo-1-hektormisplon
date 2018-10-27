const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); // store context in c

function drawRect(x, y, color) {

    color = color ? '#000' : '#fff';
    c.fillStyle = color;
    c.fillRect(x, y, 25, 25);
    c.save();
}

function drawArcadeChar() {
    for(let x = 0; x < 10; x++) {
        for(let y = 0; y < 20; y++) {
            let makeBlack = false;
            if(Math.random() > 0.5) {
                makeBlack = true;
            }
            drawRect(x*25, y*25, makeBlack);
            drawRect(250 + (9-x)* 25, y*25, makeBlack);
        }
    }
    setTimeout(drawArcadeChar, 2000);
}
drawArcadeChar();