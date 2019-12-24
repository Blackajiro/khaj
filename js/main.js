(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

(function($){

    function generateStar(canvas, ctx, starRadius){
        var gen = Math.random();
        if(gen <= 0.8) {
            ctx.beginPath();
            ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius * Math.random(), 0, Math.PI * 2, false);
            //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

            var rand = Math.random();
            if (rand <= 0.5) {
                ctx.fillStyle = "rgba(255, 255, 255, 1)";
                ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
                ctx.shadowBlur = 3;
            }
            else if (rand > 0.75) {
                ctx.fillStyle = "rgba(255, 254, 196, 1)";
                ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
                ctx.shadowBlur = 4;
            }
            else {
                ctx.fillStyle = "rgba(192, 247, 255, 1)";
                ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
                ctx.shadowBlur = 7;
            }
            ctx.fill();
        }
    }

    $(function(){

        var canvas = document.getElementById("space");
        var context = canvas.getContext("2d");

        onresize = function(){
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };
        onresize();

        interval = setInterval(
            function(interval){
                generateStar(canvas, context, 3);
            }
            , 200);

        setTimeout(
            function(){ clearInterval(interval); }
            ,60000
        );

    });
})(jQuery);
