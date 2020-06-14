let sliderImages = document.querySelectorAll('.carousel-container');
let arrowLeft1 = document.getElementById('arrow-left1');
let arrowLeft2 = document.getElementById('arrow-left2');
let arrowLeft3 = document.getElementById('arrow-left3');
let arrowLeft4 = document.getElementById('arrow-left4');
let arrowRight1 = document.getElementById('arrow-right1');
let arrowRight2 = document.getElementById('arrow-right2');
let arrowRight3 = document.getElementById('arrow-right3');
let arrowRight4 = document.getElementById('arrow-right4');

let finishTime = new Date("May 10, 2020 17:00:00");

let dot1 = document.getElementById('dot-1');
let dot2 = document.getElementById('dot-2');
let dot3 = document.getElementById('dot-3');
let dot4 = document.getElementById('dot-4');



// ------COUNTDOWN TIMER------
let newTimer = setInterval(myTimer, 1000);

function myTimer() {
  let today = new Date();
  let newTime = (Math.round((finishTime-today)/1000)).toLocaleString();
  document.getElementById("countdown").textContent = newTime;
}

// ---------CAROUSEL---------

let current = 0;

 function reset() {
  for(let i =0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// init slider
function startSlide(){
  reset();
  sliderImages[0].style.display = 'flex';
  dot1.style.backgroundColor = '#808080';
}


// show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'flex';
  current--;
}

// left arrow click
arrowLeft1.addEventListener('click', function(){
  resetDotColor();
  dot4.style.backgroundColor = '#808080';

  if(current === 0){
    current = sliderImages.length;
  }
  slideLeft();
});

arrowLeft2.addEventListener('click', function(){
  resetDotColor();
  dot1.style.backgroundColor = '#808080';

  slideLeft();
});

arrowLeft3.addEventListener('click', function(){
  resetDotColor();
  dot2.style.backgroundColor = '#808080';

  slideLeft();
});

arrowLeft4.addEventListener('click', function(){
  resetDotColor();
  dot3.style.backgroundColor = '#808080';

  slideLeft();
});



//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'flex';
  current++;
}

//right arrow click
arrowRight1.addEventListener('click', function(){
  resetDotColor();
  dot2.style.backgroundColor = '#808080';
  slideRight();
});

arrowRight2.addEventListener('click', function(){
  resetDotColor();
  dot3.style.backgroundColor = '#808080';
  slideRight();
});

arrowRight3.addEventListener('click', function(){
  resetDotColor();
  dot4.style.backgroundColor = '#808080';
  slideRight();
});

arrowRight4.addEventListener('click', function(){
  resetDotColor();
  dot1.style.backgroundColor = '#808080';
  if(current === sliderImages.length - 1){
    current = -1;
  }
  slideRight();
});

//----CAROUSEL DOTS ----------
function resetDotColor() {
  dot1.style.backgroundColor = '#bbb';
  dot2.style.backgroundColor = '#bbb';
  dot3.style.backgroundColor = '#bbb';
  dot4.style.backgroundColor = '#bbb';
}

dot1.addEventListener("click", function(){
  reset();
  resetDotColor();
  sliderImages[0].style.display = 'flex';
  dot1.style.backgroundColor = '#808080';
  current = 0;
});

dot2.addEventListener("click", function(){
  reset();
  resetDotColor();
  sliderImages[1].style.display = 'flex';
  dot2.style.backgroundColor = '#808080';
  current = 1;
});

dot3.addEventListener("click", function(){
  reset();
  resetDotColor();
  sliderImages[2].style.display = 'flex';
  dot3.style.backgroundColor = '#808080';
  current = 2;
});

dot4.addEventListener("click", function(){
  reset();
  resetDotColor();
  sliderImages[3].style.display = 'flex';
  dot4.style.backgroundColor = '#808080';
  current = 3;
});



startSlide();
