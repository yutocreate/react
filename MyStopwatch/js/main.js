"use strict";

{
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  let startTime;
  let timeoutId;
  let elapsedTime = 0

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    //現在の時刻 - スタートボタンを押したときの時刻
    // → スタート時間からの経過時間がわかる
    const m = String(d.getMinutes()).padStart(2, "0");
    const s = String(d.getSeconds()).padStart(2, "0");
    const ms = String(d.getMilliseconds()).padStart(2, "0");
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial (){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStateRunning (){
    start.classList.add('inactive');
    stop.classList.remove('inactive'); //動く
    reset.classList.add('inactive');   //動かない
  }

  function setButtonStateStopped (){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setButtonStateInitial()

  start.addEventListener("click", () => {
    if(start.classList.contains('inactive') === true){
      return;
    }
    setButtonStateRunning()
    startTime = Date.now(); //現在時刻
    countUp();
  });
  stop.addEventListener("click", () => {
    if(stop.classList.contains('inactive') === true){
      return;}
    setButtonStateStopped()
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime
  });
  reset.addEventListener("click", () => {
    if(reset.classList.contains('inactive') === true){
        return;}
    setButtonStateInitial()
    timer.textContent = "00:00.000";
    elapsedTime = 0
  });
}
