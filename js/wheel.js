$(document).ready(function() {

    let time = 1800;
    let intr;

    function start_timer() {
        intr = setInterval(tick, 1000);
    }

    function tick() {
        time = time - 1;
        let mins = Math.floor(time / 60);
        let secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        mins = mins >= 10 ? mins : "0" + secs;
        secs = secs >= 10 ? secs : "0" + secs;
        document.getElementById("min").innerHTML = mins;
        document.getElementById("sec").innerHTML = secs;
    }
   
    // -------------spin-------------------
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var wheel = $('.wheel-img');

    $('.spin_active').on("click", function(event) {
        $(this).off(event);
        if (wheel.hasClass('rotated')) {
            resultWrapper.css({
                'display': 'block'
            });
        } else {
            wheel.addClass('super-rotation');
            setTimeout(function() {
                resultWrapper.css({
                    'display': 'block'
                });
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                start_timer();
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    $('.close-popup, .spin-result-wrapper').click(function() {
        resultWrapper.fadeOut();
    });
});