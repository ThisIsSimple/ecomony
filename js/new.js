$(document).ready(function(){
  $('#inlineRadio1').click(function(){
    $('#gongin').removeClass('disnone');
    $('#personal').addClass('disnone');
  });
  $('#inlineRadio2').click(function(){
    $('#gongin').addClass('disnone');
    $('#personal').removeClass('disnone');
  });
});
