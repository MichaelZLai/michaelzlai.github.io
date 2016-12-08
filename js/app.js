//Scroll Navigation feature
$(window).scroll(function() {
  if ($(document).scrollTop() > 480) {
    $("nav").addClass("showNav");
  } else {
    $("nav").removeClass("showNav");
  }
});

//Block Nav feature

if($(window).width() > 736){
  $("nav .navbar .showNav").show();
}
