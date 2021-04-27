// // source: https://codepen.io/nfj525/pen/rVBaab
// window.onload = function () {
//   //   var file = document.getElementById('thefile');
//   var audio = document.getElementById('audio');
//   var button = document.querySelector('#content button');

//   button.addEventListener('click', renderAudio());

//   function renderAudio() {
//     // var files = this.files;
//     // audio.src = URL.createObjectURL(files[0]);
//     const track = new Audio('../edge-of-tomorrow-trailer.mp4');
//     audio.src = track;
//     audio.load();
//     audio.play();
//     var context = new AudioContext();
//     var src = context.createMediaElementSource(audio);
//     var analyser = context.createAnalyser();

//     var canvas = document.getElementById('canvas');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     var ctx = canvas.getContext('2d');

//     src.connect(analyser);
//     analyser.connect(context.destination);

//     analyser.fftSize = 256;

//     var bufferLength = analyser.frequencyBinCount;
//     console.log(bufferLength);

//     var dataArray = new Uint8Array(bufferLength);

//     var WIDTH = canvas.width;
//     var HEIGHT = canvas.height;

//     var barWidth = (WIDTH / bufferLength) * 2.5;
//     var barHeight;
//     var x = 0;

//     function renderFrame() {
//       requestAnimationFrame(renderFrame);

//       x = 0;

//       analyser.getByteFrequencyData(dataArray);

//       ctx.fillStyle = '#000';
//       ctx.fillRect(0, 0, WIDTH, HEIGHT);

//       for (var i = 0; i < bufferLength; i++) {
//         barHeight = dataArray[i];

//         var r = barHeight + 25 * (i / bufferLength);
//         var g = 250 * (i / bufferLength);
//         var b = 50;

//         ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
//         ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

//         x += barWidth + 1;
//       }
//     }

//     audio.play();
//     renderFrame();
//   }
// };

// vinc
document.addEventListener('DOMContentLoaded', () => {
  let ind = 0;
  const video = document.querySelector('video');

  video.addEventListener('play', () => {
    if (ind !== 0) {
      console.log('not working - cannot see video tag');
    } else {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      const src = context.createMediaElementSource(video);
      const analyser = context.createAnalyser();

      // Set canvas width
      const canvas = document.querySelector('canvas');
      canvas.width = 300;
      canvas.height = 300;

      // Set context object
      const ctx = canvas.getContext('2d');

      // Connect the analyser to the video
      src.connect(analyser);
      analyser.connect(context.destination);

      // Set buffer length
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;

      // Create an array of the buffers
      const dataArray = new Uint8Array(bufferLength);

      // Get canvas width
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;

      // Set the width of a single bar
      const barWidth = (WIDTH / bufferLength) * 1.5;
      let barHeight;
      let x = 0;

      function renderFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Callback to animate the next frame
        requestAnimationFrame(renderFrame);

        x = 0;

        analyser.getByteFrequencyData(dataArray);

        // Create each bar
        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i];
          // Make it a lil shorter
          barHeight = barHeight < 20 ? barHeight : barHeight - 20;

          // ctx.globalAlpha = 1;

          ctx.fillStyle = 'rgba(255,255,255, 0.5)';
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 15;
        }
      }

      renderFrame();

      // Don't replace the canvas
      ind++;
    }
  }); // checks if element is playing right now
});
