let video = document.querySelector('video');
let playBtn = document.querySelector('.play-btn');
let pauseBtn = document.querySelector('.pause-btn');

function playVid() {
  video.play();
  // video.removeAttribute('controls');

  let body = document.querySelector('body main div');
  let container = document.createElement('div');
  body.appendChild(container);

  setTimeout(function () {
    container.style.display = 'none';
  }, 39500);

  setTimeout(function () {
    container.style.display = 'block';
  }, 42000);
}

// playBtn.addEventListener('click', function () {

// });

pauseBtn.addEventListener('click', function () {
  video.pause();
  // video.setAttribute('controls', 'controls');
});

function darkModeToggle() {
  var element = document.body;
  element.classList.toggle('dark-mode');
  let linkHeader = document.querySelector('header a');
  linkHeader.classList.toggle('dark-mode');
  let linkFooter = document.querySelector('footer a');
  linkFooter.classList.toggle('dark-mode');
  // let playBtn = document.querySelector('.play-btn');
  // let pauseBtn = document.querySelector('.pause-btn');
  // let darkModeBtn = document.querySelector('body header button');
  // playBtn.setAttribute('style', 'border: 3px solid white');
  // pauseBtn.setAttribute('style', 'border: 3px solid white');
  // darkModeBtn.setAttribute('style', 'border: 3px solid white');
}
