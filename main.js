Fancybox.bind("[data-fancybox]" {
    // Your custom options
  });

  $(document).ready(function(){
    $('.skills').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000 ,
    });
    var Scrolled=200;
    $(window).scroll(function(){
      if($(window).scrollTop()>Scrolled){
        $('a.btn-top').fadeIn('slow');
      }else{
        $('a.btn-top').fadeOut('slow');
      }  
    });
    $('a.btn-top').click(function({
      $('html, body').animate({ 
        scrollTop:0
      },700);
      return false;
    }));
  });  
