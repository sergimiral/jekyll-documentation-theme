
$('[id^=anchorLink]').each(function() {

   var keyword = $(this).attr("id");
   var anchorLink = keyword.replace("anchorLink", "anchorPost");
   $(this).attr('href', '#' + anchorLink);

});

var sidebarToggle = $("<a class='sidebar-toggle'>&#9776;</a>").prependTo(".home");
$(sidebarToggle).click( function() {
    $('.post-list').toggleClass("hide-sidebar");
    $('.post-container').toggleClass("full-content");
});
