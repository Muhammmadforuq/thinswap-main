const stepStyle = document.querySelectorAll('.step-doc > div');
const documentInfo = document.querySelectorAll('.document-progress > div');
const backEl = document.querySelector('.backEl');
const nextEl = document.querySelector('.nextEL');

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
      step.classList.remove('opacity-50');
      documentInfo[i].classList.add('activeDoc');
    } else {
      documentInfo[i].classList.remove('activeDoc');
        if (i < activeDoc - 1) {
          step.classList.add('opacity-50');
        } else {
          step.classList.remove('opacity-50');
        }
    } 
  })


  if(activeDoc === 1){
    backEl.disabled = false
  } else if (activeDoc === documentInfo.length){
    console.log('Open Modul');
  }

}