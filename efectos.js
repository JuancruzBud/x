// Transiciones de scroll para botones del body
$('#about-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="about"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#what-i-do-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="what-i-do"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#scroll-down-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="about"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});

// Hover en Box What i do
document.getElementById("box-id").addEventListener("mouseover", function() {
  document.getElementById("what-i-do").style.backgroundImage = "url(img/id-bg.png)";
}, false);
document.getElementById("box-id").addEventListener("mouseout", function() {
   document.getElementById("what-i-do").style.backgroundImage = "";
}, false);


document.getElementById("box-ui").addEventListener("mouseover", function() {
  document.getElementById("what-i-do").style.backgroundImage = "url(img/ui-bg.png)";
}, false);
document.getElementById("box-ui").addEventListener("mouseout", function() {
   document.getElementById("what-i-do").style.backgroundImage = "";
}, false);


document.getElementById("box-wd").addEventListener("mouseover", function() {
  document.getElementById("what-i-do").style.backgroundImage = "url(img/wd-bg.png)";
}, false);
document.getElementById("box-wd").addEventListener("mouseout", function() {
   document.getElementById("what-i-do").style.backgroundImage = "";
}, false);


document.getElementById("box-ci").addEventListener("mouseover", function() {
  document.getElementById("what-i-do").style.backgroundImage = "url(img/ci-bg.png)";
}, false);
document.getElementById("box-ci").addEventListener("mouseout", function() {
   document.getElementById("what-i-do").style.backgroundImage = "";
}, false);
