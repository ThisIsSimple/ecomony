$(document).ready(function(){
  $('#login_button').click(function(){
    $('#login').removeClass('login_hide');
    $('#login_back').removeClass('login_hide');
  });
  $('#login_back').click(function(){
    $('#login').addClass('login_hide');
    $('#login_back').addClass('login_hide');
  });
  $('#close_btn').click(function(){
    $('#login').addClass('login_hide');
    $('#login_back').addClass('login_hide');
  });
});
