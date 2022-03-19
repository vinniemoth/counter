// set initial count
let i = 0

// select value and buttons
const number = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

btns[2].addEventListener('click', function mais(){
    i++;
    let counter = number.innerHTML = i
    console.log(counter)
})

btns[0].addEventListener('click',function menos(){
    i--
    let counter = number.innerHTML = i
    console.log(counter)
})

btns[1].addEventListener('click', function reset(){
    i=0
    let counter = number.innerHTML = i
    console.log(counter)
})