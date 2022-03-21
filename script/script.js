const counterContainer = document.querySelector('.counter-container');
const counterDisplay = document.querySelector('.counter-display');
const addButtons = document.querySelectorAll('.add');
const subtractButtons = document.querySelectorAll('.subtract');


const addOneButton = document.querySelector('.operator.add.by-one');
const subtractOneButton = document.querySelector('.operator.subtract.by-one');
const addFiveButton = document.querySelector('.operator.add.by-five');
const subtractFiveButton = document.querySelector('.operator.subtract.by-five');
const addTenButton = document.querySelector('.operator.add.by-ten');
const subtractTenButton = document.querySelector('.operator.subtract.by-ten');

const alert = document.querySelector('#alert');
const resetButton = document.querySelector('.reset-button');
const reverseButton = document.querySelector('input[type=checkbox]');


function updateDisplay(){
    counterDisplay.innerText = counter;
}

// setup for alert
function alertAppears(){
    alert.classList.remove('hidden');
}
function alertDisappears(){
    alert.classList.add('hidden');
}

// main buttons function
function addOne(){
    if (counter >= 100){
        alertAppears();
        setTimeout(alertDisappears, 2000);
        return
    } else {
        counter ++;
    }
    updateDisplay();
}
function subtractOne(){
    if (counter <= 0){
        alertAppears();
        setTimeout(alertDisappears, 2000);
        return
    } else {
        counter --;
    }
    updateDisplay();
}
function addFive(){
    if (counter >= 96){
        alertAppears();
        setTimeout(alertDisappears, 2000);
        counter = 100;
    } else {
        counter += 5;
    }
    updateDisplay();
}
function subtractFive(){
    if (counter <= 4){
        alertAppears();
        setTimeout(alertDisappears, 2000);
        counter = 0;
    } else {
        counter -= 5;
    }
    updateDisplay();
}
function addTen(){
    if (counter >= 91){
        alertAppears();
        setTimeout(alertDisappears, 2000);
        counter = 100;
    } else {
        counter += 10;
    }
    updateDisplay();
}
function subtractTen(){
    if (counter <= 9){
        alertAppears();
        setTimeout(alertDisappears, 2000);
        counter = 0;
    } else {
        counter -= 10;
    }
    updateDisplay();
}

addOneButton.addEventListener('click', addOne);
subtractOneButton.addEventListener('click', subtractOne);
addFiveButton.addEventListener('click', addFive);
subtractFiveButton.addEventListener('click', subtractFive);
addTenButton.addEventListener('click', addTen);
subtractTenButton.addEventListener('click', subtractTen);


// reset function
function resetCounter(){
    if (! reverseButton.checked){
        counter = 0;
    } else{
        counter = 100; // if it's counting in reverse, counter begins from 100
    }
    updateDisplay();
}

resetButton.addEventListener('click', resetCounter);


// first thing when the page is opened
let counter = 0;
updateDisplay();

// if the reverse option is active
reverseButton.addEventListener('click', () => {
    if (reverseButton.checked){
        counter = 100;
        document.body.style.setProperty('background', 'linear-gradient(to left, rgb(101, 101, 182), rgb(182, 101, 101))');
        counterContainer.style.setProperty('flex-direction', 'row-reverse');
        //modify shadow in order to be the same direction even if buttons are inverted
        /* I omitted this part because button:active doesn't work anymore after that.

        Array.from(addButtons).forEach(function(button){
            button.style.setProperty('box-shadow', '-5px 3px 2px rgba(0, 0, 0, .4)')
        });
        Array.from(subtractButtons).forEach(function(button){
            button.style.setProperty('box-shadow', '5px 3px 2px rgba(0, 0, 0, .4)')
        });*/
    } else {
        counter = 0;
        document.body.style.setProperty('background', 'linear-gradient(to right, rgb(101, 101, 182), rgb(182, 101, 101))');
        counterContainer.style.setProperty('flex-direction', 'row');
        /*Array.from(addButtons).forEach(function(button){
            button.style.setProperty('box-shadow', '5px 3px 2px rgba(0, 0, 0, .4)')
        });
        Array.from(subtractButtons).forEach(function(button){
            button.style.setProperty('box-shadow', '-5px 3px 2px rgba(0, 0, 0, .4)')
        });*/
    }
    updateDisplay();
});





