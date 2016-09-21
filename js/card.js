$(document).ready(function(){
  $('#result_list .media-left').click(function(){
    $('.innercontent').removeClass('display-none');
    $('#inner-back').removeClass('display-none');
  });
  $('#result_list .inner-open').click(function(){
    $('.innercontent').removeClass('display-none');
    $('#inner-back').removeClass('display-none');
  });
  $('.inner-close').click(function(){
    $('.innercontent').addClass('display-none');
    $('#inner-back').addClass('display-none');
  });
});
