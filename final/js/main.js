let video = document.querySelector('video');
let playBtn = document.querySelector('.play-btn');

function playVid() {
  video.play();
  playBtn.style.display = 'none';

  let body = document.querySelector('body main div');
  let container = document.createElement('div');
  body.appendChild(container);

  setTimeout(function () {
    container.style.display = 'none';
  }, 39500);

  setTimeout(function () {
    container.style.display = 'block';
  }, 42000);

  setTimeout(function () {
    container.style.display = 'none';
  }, 64500);

  setTimeout(function () {
    playBtn.style.display = 'block';
  }, 67500);
}

function darkModeToggle() {
  let element = document.body;
  element.classList.toggle('dark-mode');
  let linkHeader = document.querySelector('header a');
  linkHeader.classList.toggle('dark-mode');
  let linkFooter = document.querySelector('footer a');
  linkFooter.classList.toggle('dark-mode');
}
