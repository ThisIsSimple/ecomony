$(document).ready(function(){
  $('.dropdown-toggle').dropdown()
  
  $('span.glyphicon-heart').click(function(){
    $(this).addClass('.glyphicon-heart-empty');
    $(this).removeClass('.glyphicon-heart');
  });
  $('span.glyphicon-heart-empty').click(function(){
    $(this).addClass('.glyphicon-heart');
    $(this).removeClass('.glyphicon-heart-empty');
  });

  $('.etcdate').click(function(){
    $('#datepick-back').removeClass('date-hide');
    $('#datepick').removeClass('date-hide');
  });
  $('#datepick-back').click(function(){
    $('#datepick-back').removeClass('date-hide');
    $('#datepick').removeClass('date-hide');
  });
  $('#good').click(function(){
    $('#datepick-back').addClass('login_hide');
    $('#datepick').addClass('login_hide');
  });

  $('ul.dropdown-menu').on('click', function(event){
    event.stopPropagation();
  });
});
