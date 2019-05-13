var clock;
		
$(document).ready(function() {
    var clock;

    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        showDays: false,
        callbacks: {
            stop: function() {
                $('.message').html('The clock has stopped!')
            }
        }
    });
            
    clock.setTime(24000);
    clock.setCountdown(true);
    clock.start();

});

