'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () =>{
    // const results = ['大吉','大吉','大吉','大吉','凶'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if(n <0.05){
      btn.textContent = '大吉';
    } else if(n < 0.2){
      btn.textContent = '中吉';
    }else{
      btn.textContent = '凶';
    }

    // switch(n){
    //   case 0:
    //   btn.textContent = '大吉';
    //   break;
    //   case 1:
    //   btn.textContent = '中吉';
    //   break;
    //   case 2:
    //   btn.textContent = '吉';
    //   break;
    // }
  });
}