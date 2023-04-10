
var fruitsHover = document.getElementById('fruits'),
  animalsHover = document.getElementById('animals'),
  gamesHover = document.getElementById('games'),
  musicHover = document.getElementById('music'),
  cartoonHover = document.getElementById('cartoon'),
  hearbeat = document.getElementById('heartbeat'),
	audios = document.querySelectorAll('audio');
console.log(audios);


fruitsHover.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

fruitsHover.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

animalsHover.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

animalsHover.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

gamesHover.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);


musicHover.addEventListener('mouseleave', function() {
heartbeat.pause();
heartbeat.currentTime = 0;
}, false);

musicHover.addEventListener('mouseover', function() {
  heartbeat.play();
}, false);


cartoonHover.addEventListener('mouseover', function() {
  heartbeat.play();
}, false);