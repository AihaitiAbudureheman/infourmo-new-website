//Function for 3D slider animation
$(function() {

    //Module for slider
    var SliderModule = (function() {
        var pb = {};
        pb.el = $('#slider');
        pb.items = {
            panels: pb.el.find('.slider-wrapper > li'),
        }

        //Consider slider elements
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        //fucntion to initialize slider
        pb.init = function(settings) {
            this.settings = settings || {
                duration: 8000
            };
            var items = this.items,
                lengthPanels = items.panels.length,
                output = '';
            //check to display slider element or not
            for (var i = 0; i < lengthPanels; i++) {
                if (i == 0) {
                    output += '<li class="active"></li>';
                } else {
                    output += '<li></li>';
                }
            }

            $('#control-buttons').html(output);

            //call activate slider function to start slider event
            activateSlider();

            //control the slider with control button's click event
            $('#control-buttons').on('click', 'li', function(e) {
                var $this = $(this);
                if (!(currentSlider === $this.index())) {
                    changePanel($this.index());
                }
            });

        }

        //Function definition for activate slider function
        var activateSlider = function() {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        //Function to start slider
        pb.startSlider = function() {
            var items = pb.items,
                controls = $('#control-buttons li');
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            //Slider animation set up
            controls.removeClass('active').eq(nextSlider).addClass('active');
            items.panels.eq(currentSlider).fadeOut('slow');
            items.panels.eq(nextSlider).fadeIn('slow');

            currentSlider = nextSlider;
            nextSlider += 1;
        }

        //Set up slide event for control-buttons
        var changePanel = function(id) {
            clearInterval(SliderInterval);
            var items = pb.items,
                controls = $('#control-buttons li');
            if (id >= lengthSlider) {
                id = 0;
            } else if (id < 0) {
                id = lengthSlider - 1;
            }

            controls.removeClass('active').eq(id).addClass('active');
            items.panels.eq(currentSlider).fadeOut('slow');
            items.panels.eq(id).fadeIn('slow');

            currentSlider = id;
            nextSlider = id + 1;
            activateSlider();
        }

        return pb;
    }());

    //initialize slider event module
    SliderModule.init({
        duration: 4000
    });

});


//Styling the  customers page
$(document).ready(function() {
    $("[rel='tooltip']").tooltip();

    $('.thumbnail').hover(
        function() {
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function() {
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});

//Number counter animation
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//For smooth scrolling animation
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
