let countdown;
let nowSeconds = 0;
let globalType;
const timerDisplay = document.querySelector('.display_time-left');
let setZero = false;
let setAdd = false;
let setDate = false;
// const addDisplay = document.querySelector('.display__time-add');
var snd = new Audio("alter.mp3");
snd.loop = true;

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);  
    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      nowSeconds = secondsLeft;
      // console.log(nowSeconds);
      // check if we should stop it!
      if(secondsLeft < 0) {
        snd.currentTime = 1;
        snd.play();
        clearInterval(countdown);
        return;
      }

      // display it
      displayTimeLeft(secondsLeft);
    }, 1000);
}

function showadd(seconds){
// addDisplay
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  addDisplay.textContent = display;
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

// buttons.forEach(button => button.addEventListener('click', startTimer));



function say(){
  stopMusic();
  nowSeconds = 0;
  setDate = true;
  timer(90);
  document.getElementById('add').removeAttribute("disabled");



}

function add(){
  // console.log(nowSeconds);
  // console.log(setZero);
  stopMusic();
  if( setDate == true || setZero == true){ 
    setZero = false;
    timer(nowSeconds+60);
    document.getElementById('add').setAttribute("disabled", "true");
  }
}

function zero(){
  document.getElementById('add').removeAttribute("disabled");
  setZero = true;
  nowSeconds = 0;
  clearInterval(countdown);
  displayTimeLeft(0);  
}



function stop() {
  stopMusic();
  if( nowSeconds != 0 ){
    clearInterval(countdown);  
  }
}

function start(){
  if( nowSeconds != 0 ){ 
    console.log(nowSeconds);
    timer(nowSeconds);
  }
}

function say_sort(){
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11 ,12 ];//原有陣列放全部數字
  var result = [];//開另一個空陣列
  var ranNum = 2;

  for (var i = 0; i < ranNum; i++) {
    var ran = Math.floor(Math.random() * arr.length);
    result.push(arr.splice(ran, 1)[0]); //舊陣列去除數字轉移到新陣列
  };

  document.getElementById('say_sort').innerHTML = result; //最後印出
  document.getElementById("say_sort").style.fontSize = "50px";

}



//停止
function stopMusic(){
    snd.pause();
    snd.currentTime = 0;
}
