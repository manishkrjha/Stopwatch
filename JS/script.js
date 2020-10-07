const startButton = document.querySelector('#start-btn');
const stopButton  = document.querySelector('#stop-btn');
const lapButton   = document.querySelector('#lap-btn');

const minuteTimer = document.querySelector('#timer-min');
const secondTimer = document.querySelector('#timer-sec');

var i = 0;
var nowStop = 0;

startButton.addEventListener('click', () => {
    start();
});

stopButton.addEventListener('click', ()=>{
    stop();
});

lapButton.addEventListener('click', ()=>{
    lap();
});

let min = 0;
let sec = 0;

var start = () => {
    setInterval(()=>{
        if(nowStop != 0){
            startButton.innerText = 'restart';
            startButton.addEventListener('click', ()=>{
                window.location.reload();
            });
            //add a eventlistener for 'restart' button that refreshes the page
            return;
        }

        sec++;
        if(sec<60){
            secondTimer.innerText = sec;
        }

        if(sec === 60){
            min++;
            sec = 0;
            secondTimer.innerText = sec;
            minuteTimer.innerText = min;
        }
    }, 1000); 
};

var lap = () => {
    let currentMin = min;
    let currentSec = sec;

    populateDisplay(currentMin, currentSec);
};

var stop = () => {
    nowStop++;

    let presentMin = min;
    let presentSec = sec;

    minuteTimer.innerText = presentMin;
    secondTimer.innerText = presentSec;
}

var populateDisplay = (min, sec) => {

    const displaySection = document.querySelector('#display');

    i++;
    // const div = createElement('div');                                      //ISSUE:: createElement(div) is giving error
    // div.classList.add('display-item');

    const p = document.createElement('p');
    const content = document.createTextNode(`Lap no: ${i} -- ${min} min : ${sec} sec`);

    p.appendChild(content);
    // div.appendChild(p);
    displaySection.appendChild(p);
};