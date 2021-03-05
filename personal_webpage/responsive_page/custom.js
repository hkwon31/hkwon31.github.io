$(function(){
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  })
  $('section, .menu a').click(function(){
    $('.trigger').removeClass('active');
    $('.gnb').removeClass('active');
  })
  //  Smooth Scrolling
  $('.menu a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 900);
  })
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active');
    }
    else {
      $('header, .gototop').removeClass('active');
    }
  })
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2
  })
  $('.project-img').slick({
    dots: true,
    infinite: true,
    sped: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  })
})