$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.8), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.8), opacity: 1, bottom: 0}, 0.09);
  title1.to(".button", 0.6, {visibility: 'visible' ,opacity: 1})
}
