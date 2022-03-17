'use strict';

const
    gameCage          = document.querySelectorAll('.game-cage'),
    message           = document.querySelector('.message'),
    who               = document.querySelector('.who'),
    messageWinner     = document.querySelector('.message-winner'),
    whoWinner         = document.querySelector('.who-winner'),
    messageDraw       = document.querySelector('.message-draw'),
    btnStartOver      = document.querySelector('.start-over'),
    winnerX           = document.querySelector('.statistic-x'),
    winnerO           = document.querySelector('.statistic-o'),
    draw              = document.querySelector('.statistic-xo'),
    btnClearStatistic = document.querySelector('.clear-statistic'),
    firstDiv          = document.querySelector('#first-div');

firstDiv.setAttribute('data-one', 'five');

console.log(firstDiv.dataset.one);

let
    resultArr = [],
    index = 0,
    winner = false;

who.innerText = 'X';
winnerX.innerText = localStorage.getItem('winner x value');
winnerO.innerText = localStorage.getItem('winner o value');
draw.innerText = localStorage.getItem('draw value');

gameCage.forEach(item => {
    item.addEventListener('click', event => {
        if (item.innerText === '' && !winner) {
            item.innerText = who.innerText;
            resultArr[event.target.attributes[1].value] = who.innerText;
            index++;
            if (
            ((resultArr[0] !== undefined && resultArr[1] !== undefined && resultArr[2] !== undefined) && (resultArr[0] === resultArr[1] && resultArr[1] === resultArr[2])) ||
            ((resultArr[3] !== undefined && resultArr[4] !== undefined && resultArr[5] !== undefined) && (resultArr[3] === resultArr[4] && resultArr[4] === resultArr[5])) ||
            ((resultArr[6] !== undefined && resultArr[7] !== undefined && resultArr[8] !== undefined) && (resultArr[6] === resultArr[7] && resultArr[7] === resultArr[8])) ||
            ((resultArr[0] !== undefined && resultArr[4] !== undefined && resultArr[8] !== undefined) && (resultArr[0] === resultArr[4] && resultArr[4] === resultArr[8])) ||
            ((resultArr[2] !== undefined && resultArr[4] !== undefined && resultArr[6] !== undefined) && (resultArr[2] === resultArr[4] && resultArr[4] === resultArr[6]))
            ) {
                message.classList.add('display-none');
                messageWinner.classList.remove('display-none');
                whoWinner.innerText = who.innerText;
                winner = true;
                who.innerText === 'X' ? winnerX.innerText = +winnerX.innerText + 1 : winnerO.innerText = +winnerO.innerText + 1;
            } else if (index === 9) {
                message.classList.add('display-none');
                messageDraw.classList.remove('display-none');
                draw.innerText = +draw.innerText + 1;
            }
            who.innerText === 'X' ? who.innerText = 'O' : who.innerText = "X";
        }
    });
});

btnStartOver.addEventListener('click', () => {
    gameCage.forEach(item => {
        item.innerText = '';
        who.innerText = 'X';
        resultArr = [];
        index = 0;
        winner = false;
        message.classList.remove('display-none');
        messageWinner.classList.add('display-none');
        messageDraw.classList.add('display-none');
    });
});

btnClearStatistic.addEventListener('click', () => {
    winnerX.innerText = '0';
    winnerO.innerText = '0';
    draw.innerText = '0';
    localStorage.clear();
})

window.onbeforeunload = function() {
    localStorage.setItem('winner x value', winnerX.innerText);
    localStorage.setItem('winner o value', winnerO.innerText);
    localStorage.setItem('draw value', draw.innerText);
}