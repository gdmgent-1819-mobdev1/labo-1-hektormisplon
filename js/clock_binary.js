const binaryClock = document.getElementById('clock-binary');

function displayBinaryTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const binHours = convertToBinary(hours);
    const binMins = convertToBinary(minutes);
    const binSecs = convertToBinary(seconds);

    const hourDots = document.querySelectorAll('.hour .dot');
    const minDots = document.querySelectorAll('.min .dot');
    const secDots = document.querySelectorAll('.sec .dot');

    for(let i = 0; i < binSecs.length; i++) {
        (binHours[i]== 1) ? hourDots[i].classList.add('on') : hourDots[i].classList.remove('on');
        (binMins[i]== 1) ? minDots[i].classList.add('on') : minDots[i].classList.remove('on');
        (binSecs[i]== 1) ? secDots[i].classList.add('on') : secDots[i].classList.remove('on');
    }

    setTimeout(displayBinaryTime, 1000);
}

function convertToBinary(num) {
    return parseInt(num).toString(2).padStart(6, '0');
}

displayBinaryTime();