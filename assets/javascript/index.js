'use strict';

console.log('Hello world!');

$('[id^=anchorLink]').each(function () {

   var keyword = $(this).attr("id");
   var anchorLink = keyword.replace("anchorLink", "anchorPost");
   $(this).attr('href', '#' + anchorLink);
});

var mySecondDiv = $("<a class='sidebar-toggle'>&#9776;</a>").appendTo(".home");

$('.sidebar-toggle]').click(function () {
   $('.post-list').toggleClass("hide-sidebar");
   $('.post-content').toggleClass("full-content");
});
"use strict";
//# sourceMappingURL=index.js.map
