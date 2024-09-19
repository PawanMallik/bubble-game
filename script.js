

//this code is for timer

var time = document.querySelector("#time")
var timer=60;
function timee() {
    var timerr = setInterval(function(){
        if(timer > 0){
            timer--;
            time.textContent = timer;
        }else{
            clearInterval(timerr)
            bub.innerHTML=""
            bub.innerHTML="<h1> game over</h1><br>"
            // bub.innerHTML=`<h3>final score${count()}</h3>`
        }
    },1000)
}

timee();



// this code is for creating new bubble 


var bub = document.querySelector("#bub")
function bubble() {

    var bubble = "";

    for (i = 1; i < 45; i++) {
        var ma = Math.floor(Math.random() * 10)
        bubble += `<div class="bubble">${ma}</div> `
    }
    bub.innerHTML = bubble
}

bubble();


// this code is for hit button

var no=0;
var hit = document.querySelector("#hit")

function showHit(){
   no = Math.floor(Math.random()*10)
    hit.textContent= no;
}

showHit();



// this code is for score count

var scoreCount=0;
var score = document.querySelector("#score")
function count(){
scoreCount+=10;
score.textContent=scoreCount
}

// count();

// main work

bub.addEventListener("click",function(dets){
    console.log(dets.target.textContent)
    if(no == (dets.target.textContent)){
        count();
        showHit();
        bubble();
    }else{
        showHit();
        bubble();
    }
})