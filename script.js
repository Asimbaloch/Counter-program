const decreaseBtn=document.getElementById('decreaseBtn');
const increaseBtn=document.getElementById('increaseBtn');
const resetBtn=document.getElementById('resetBtn');
const counter=document.getElementById('counter')

let counting=0;

increaseBtn.onclick =function() {
    counting++;
    counter.textContent=counting;
}

decreaseBtn.onclick =function() {
    counting--;
    counter.textContent=counting;
}

resetBtn.onclick =function() {
    counting=0;
    counter.textContent=counting;
}
