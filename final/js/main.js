let video = document.querySelector('video');
let playBtn = document.querySelector('.play-btn');
let pauseBtn = document.querySelector('.pause-btn');

playBtn.addEventListener('click', function () {
  video.play();
  video.removeAttribute('controls');
});

pauseBtn.addEventListener('click', function () {
  video.pause();
  video.setAttribute('controls', 'controls');
});

// setTimeout(function () {
//   let body = document.querySelector('body main div');
//   let img = document.createElement('img');
//   img.setAttribute(
//     'style',
//     'position:absolute;bottom:12px;display:block;width:50px;right:0;background:#ff000087;clip-path: circle(50% at 50% 50%);'
//   );
//   img.setAttribute(
//     'src',
//     'https://static.vecteezy.com/system/resources/previews/001/200/798/non_2x/music-note-png.png'
//   );

//   body.appendChild(img);
// }, 1000);
