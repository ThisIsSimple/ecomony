$(document).ready(function(){
  $('.dropdown-toggle').dropdown()

  var a=0;

  if(a===0) {
    $(this).removeClass('glyphicon-heart');
    $(this).addClass('glyphicon-heart-empty');
  }
  else {
    $(this).addClass('glyphicon-heart');
    $(this).removeClass('glyphicon-heart-empty');
  }

  $('.glyphicon-heart-empty').click(function(){
    $(this).addClass('glyphicon-heart');
    $(this).removeClass('glyphicon-heart-empty');
    a=1;
  });
  $('.glyphicon-heart').click(function(){
    $(this).removeClass('glyphicon-heart');
    $(this).addClass('glyphicon-heart-empty');
    a=0;
  });

  $('ul.dropdown-menu').on('click', function(event){
    event.stopPropagation();
  });

  $('#reportrange').click(function(){
    $('.daterangepicker').addClass('show-calendar');
    $('.ranges').addClass('display-none');
  });
});
