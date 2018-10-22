const hourHand = document.getElementsByClassName('hour-hand')[0],
      minHand = document.getElementsByClassName('min-hand')[0],
      secHand = document.getElementsByClassName('sec-hand')[0];

function displayTime() {
    //get current time
    const date = new Date();
    const hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();
    //convert time formats to corresponding degree values
    const degSeconds = seconds * 6;
    const degMinutes = (minutes + 45 + seconds /60) * 360 / 60;
    const degHours = (hours +  9 + (minutes + seconds /60)/60) * 360 / 12;
    console.log(degSeconds);
    if(seconds === 0) {
        secHand.style.transition = '';
    }
    hourHand.style.transform = `rotate(${degHours}deg)`;
    minHand.style.transform = `rotate(${degMinutes}deg)`;
    secHand.style.transform = `rotate(${degSeconds}deg)`;
    setTimeout(displayTime ,1000);
}
displayTime();