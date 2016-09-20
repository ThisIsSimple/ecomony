$(document).ready(function(){
  $('.dropdown-toggle').dropdown()

  $('.heart').click(function(){
    $(this).addClass('glyphicon-heart-empty');
    $(this).removeClass('glyphicon-heart');
  });
  $('.heart').click(function(){
    $(this).addClass('glyphicon-heart');
    $(this).removeClass('glyphicon-heart-empty');
  });

  $('ul.dropdown-menu').on('click', function(event){
    event.stopPropagation();
  });

  $('#reportrange').click(function(){
    $('.daterangepicker').addClass('show-calendar');
    $('.ranges').addClass('display-none');
  });
});
