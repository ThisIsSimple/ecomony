$(document).ready(function(){
  $('#search_option').hover(function(){
    $('#select_search').css("display", "flex");
  });
  $('.jumbotron').mouseenter(function(){
    $('#select_search').css("display", "none");
  });
  $('.jumbotron').click(function(){
    $('#select_search').css("display", "none");
  });
});
