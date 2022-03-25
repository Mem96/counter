const counterContainer = document.querySelector('.counter-container');

// create display and buttons
let counterDisplay = document.createElement('p');
counterDisplay.classList.add('counter-display');
counterContainer.appendChild(counterDisplay);

let addOneButton = document.createElement('button');
addOneButton.innerHTML = '+1'
addOneButton.classList.add('operator');
addOneButton.classList.add('add');
addOneButton.classList.add('by-one');
counterContainer.appendChild(addOneButton);

let addFiveButton = addOneButton.cloneNode(true);
addFiveButton.innerHTML = '+5'
addFiveButton.classList.remove('by-one')
addFiveButton.classList.add('by-five');
counterContainer.appendChild(addFiveButton);

let addTenButton = addOneButton.cloneNode(true);
addTenButton.innerHTML = '+10'
addTenButton.classList.remove('by-one')
addTenButton.classList.add('by-ten');
counterContainer.appendChild(addTenButton);

let subtractOneButton = document.createElement('button');
subtractOneButton.innerHTML = '-1'
subtractOneButton.classList.add('operator');
subtractOneButton.classList.add('subtract');
subtractOneButton.classList.add('by-one');
counterContainer.insertBefore(subtractOneButton, counterDisplay);

let subtractFiveButton = subtractOneButton.cloneNode(true);
subtractFiveButton.innerHTML = '-5';
subtractFiveButton.classList.remove('by-one');
subtractFiveButton.classList.add('by-five');
counterContainer.insertBefore(subtractFiveButton, subtractOneButton);

let subtractTenButton = subtractOneButton.cloneNode(true);
subtractTenButton.innerHTML = '-10';
subtractTenButton.classList.remove('by-one');
subtractTenButton.classList.add('by-ten');
subtractTenButton.before(subtractFiveButton);
counterContainer.insertBefore(subtractTenButton, subtractFiveButton);

// define all elements
const addButtons = document.querySelectorAll('.add');
const subtractButtons = document.querySelectorAll('.subtract');
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
        //modify shadow to be the same direction even if buttons are inverted

        /*I omitted this part because button:active doesn't work anymore after that.
        I tried different solutions but none of them worked properly.

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
            button.style.setProperty('box-shadow', '5px 3px 2px rgba(0, 0, 0, .4)');
        });
        Array.from(subtractButtons).forEach(function(button){
            button.style.setProperty('box-shadow', '-5px 3px 2px rgba(0, 0, 0, .4)')
        });*/
    }
    updateDisplay();
});















