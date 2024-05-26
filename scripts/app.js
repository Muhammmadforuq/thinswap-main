"use strict";
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const finishBtn = document.querySelector('.btn-finish');
const steps = document.querySelectorAll('.steps');
const dots = document.querySelectorAll('.dots')
let active = 1;

if(nextBtn){
  nextBtn.addEventListener('click', ()=>{
    active++;
  
    if(active > dots.length){
      active = dots.length
    }
  
    updateProgress();
  })
}

if(prevBtn){
  prevBtn.addEventListener('click', ()=>{
    active--;
    if(active < 1){
      active = 1;
    }
    dots[active].classList.remove('dot-style')
    updateProgress();
  
  })
}

const updateProgress = () =>{
  console.log("steps=>" + dots.length);
  console.log("active =>" + active );

  dots.forEach((dot, i)=>{
    if(i == (active - 1)){
      dot.classList.add('dot-style') 

      steps[i].classList.add('active');
      console.log('i =>' + i);    
    }  
    else{
      steps[i].classList.remove('active');
    }
  });


  if(active===1){
    prevBtn.disabled = true;
  } else if(active === dots.length){
      nextBtn.classList.add('hidden');
      prevBtn.classList.add('hidden');
      finishBtn.classList.remove('hidden');
      document.querySelector('.welcome-text').classList.add('hidden')
      document.querySelector('.finish-text').classList.remove('hidden');

  } else{
    prevBtn.disabled = false
  }
  
} 

const showPassword = (id)=>{
  const showButton = document.querySelector(`.password-${id} button`);
  const inputChangeType = document.querySelector(`.password-${id} input`);
  if(showButton){
    showButton.addEventListener('click', () => {
      if (inputChangeType.type === 'password') {
          inputChangeType.type = 'text';
          showButton.firstElementChild.classList.toggle('hidden');
          showButton.lastElementChild.classList.toggle('hidden');
  
      } else if (inputChangeType.type === 'text') {
          inputChangeType.type = 'password';
          showButton.firstElementChild.classList.toggle('hidden');
          showButton.lastElementChild.classList.toggle('hidden');
      } 
    });
  }

}

showPassword('one');
showPassword('two');

const stepStyle = document.querySelectorAll('.step-doc > div');
const documentInfo = document.querySelectorAll('.document-progress > div');
const backEl = document.querySelector('.backEl');
const nextEl = document.querySelector('.nextEL');
const finishEl = document.querySelector('.finishEl')

let activeDoc = 1;

if(nextEl){
  nextEl.addEventListener('click',()=>{
    activeDoc ++;
      if(activeDoc > stepStyle.length){
        activeDoc = stepStyle.length
      }
      documentFun()
  })
}


if(backEl){
  backEl.addEventListener('click',()=>{
    activeDoc--;

    if(activeDoc < 1){
      activeDoc = 1;
    };

    documentFun();
    stepStyle[activeDoc].classList.remove('progress-style');

  })
}

const documentFun = () => {
  stepStyle.forEach((step, i)=>{
    if(i === (activeDoc - 1)){
      step.classList.add('progress-style');
      step.classList.remove('opacity-35');
      step.firstElementChild.lastElementChild.classList.add('opacity-0');
      nextEl.classList.remove('hidden');
      documentInfo[i].classList.add('activeDoc');
    } else {
      documentInfo[i].classList.remove('activeDoc');
        if (i < activeDoc - 1) {
          step.classList.add('opacity-35');
          step.firstElementChild.lastElementChild.classList.remove('opacity-0');
        } else {
          step.classList.remove('opacity-35');
          step.firstElementChild.lastElementChild.classList.add('opacity-0');
        }
    } 
  })


  if(activeDoc === 1){
    backEl.disabled = false;
  } else if (activeDoc === documentInfo.length){
    nextEl.classList.add('hidden');
    finishEl.classList.remove('hidden')
    // console.log('Open Modul');
    document.querySelector('.modul').classList.remove('hidden')
  } else{;
    finishEl.classList.add('hidden')
  }

}

// open model
const xButton = document.querySelectorAll('.xBtn')

xButton.forEach(xbtn=>{
  if(xbtn){
    xbtn.addEventListener('click',() =>{
      document.querySelector('.modul').classList.add('hidden')
    })
  }
})



var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 0,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  // spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});