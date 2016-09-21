$(document).ready(function(){
  $( ".star_rating a" ).hover(function() {
       $(this).parent().children("a").removeClass("on");
       $(this).addClass("on").prevAll("a").addClass("on");
       return false;
  });
})
