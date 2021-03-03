$(function(){
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  })
  $('section, .menu a').click(function(){
    $('.trigger').removeClass('active');
    $('.gnb').removeClass('active');
  })
})