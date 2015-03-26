var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.nav-mobile').animate({
      top: "0px"
    }, 200);

   
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.nav-mobile').animate({
      top: "-368px"
    }, 200);

    
  });
};


$(document).ready(main);

