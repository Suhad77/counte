const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');
const resetBtn = document.querySelector('.reset-btn');
const count = document.querySelector('.count');

function increment(){
    count.innerHTML++;
}
incrementBtn.addEventListener('click', increment);

function decrement(){
    count.innerHTML--;
}

decrementBtn.addEventListener('click', decrement);

function reset(){
    count.innerHTML=0;
}

resetBtn.addEventListener('click', reset);