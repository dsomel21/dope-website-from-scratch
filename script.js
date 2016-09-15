console.log("WAHEGURU");


function scroll(scrollY, headerSize) {
  console.log(scrollY);
  console.log(headerSize);

  if(scrollY >= headerSize) {
    $('header').css({
      'top' : '0px'
    });
  }
  else
  {
    $('header').css({
      'top' : '-' + headerSize + 'px'
    });
  }
}

$(document).ready(function() {
  $(window).load(function(){
    var windowHeight        = $(window).height(),
    headerSize        = $('header').height(),
    heightDocument      = (windowHeight) + ($('.content').height()) - 20;

    $('#scroll, #scroll-main').css({
      'height' :  heightDocument + 'px'
    });

    $('header').css({
      'height' : windowHeight + 'px',
      'line-height' : windowHeight + 'px'
    });

    $('.wrapper').css({
      'margin-top' : windowHeight + 'px'
    });
  });
});
  // scrollFooter(window.scrollY, footerHeight);

  //   // ao dar rolagem
  //   window.onscroll = function(){
  //     var scroll = window.scrollY;

  //     $('#scroll-animate-main').css({
  //       'top' : '-' + scroll + 'px'
  //     });

  //     $('header').css({
  //       'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
  //     });

  //     scrollFooter(scroll, footerHeight);
  //   }
  // });