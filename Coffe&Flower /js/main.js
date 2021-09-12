'use strict'

{
  const open = document.querySelector('#open');
  const gnav = document.querySelector('.gnav');
  const close = document.querySelector('#close');


  open.addEventListener('click', () => {
    gnav.classList.add('show');
  });

  close.addEventListener('click', () =>{
    gnav.classList.remove('show');
  });
}