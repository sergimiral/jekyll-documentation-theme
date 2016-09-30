'use strict';

// console.log('Hello world!');


$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
"use strict";

$('[id^=anchorLink]').each(function () {

   var keyword = $(this).attr("id");
   var anchorLink = keyword.replace("anchorLink", "anchorPost");
   $(this).attr('href', '#' + anchorLink);
});

var sidebarToggle = $("<a class='sidebar-toggle'>&#9776;</a>").prependTo(".home");
$(sidebarToggle).click(function () {
   $('.post-list').toggleClass("hide-sidebar");
   $('.post-container').toggleClass("full-content");
});
//# sourceMappingURL=index.js.map
