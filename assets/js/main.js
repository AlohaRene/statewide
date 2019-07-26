// class Test {
// 	main = () => {
// 		console.log(swag);
// 	};
// }
// Test.main();


$(document).ready(function() {
  
  
  
    /*STICKY*/
    $('.js--section-features').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
        
      } else {
          $('nav').removeClass('sticky');
      }
    }, {
    offset: '60px;'
    });
   
    
    /*Srcoll on buttons*/
    
    $('.js--scroll-to-plans').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /*navigation scroll*/
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    })
  
    
    });