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
$('#projects-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="projects"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
$('#co-btn').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="contact"]').offset().top;
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
  document.getElementById("what-i-do").style.background = "url(img/ci-bg.jpg)";
}, false);
document.getElementById("box-id").addEventListener("mouseout", function() {
   document.getElementById("what-i-do").style.background = "";
}, false);

// Active en li Items
$('nav li a').on('click', function(){
    $('li a.activo').removeClass('activo');
    $(this).addClass('activo');
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('nav li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.navList li a').each(function () {
            $(this).removeClass('activo');
        })
        $(this).addClass('activo');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav-menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav-menu ul li a').removeClass("activo");
            currLink.addClass("activo");
        }
        else{
            currLink.removeClass("activo");
        }
    });
}
