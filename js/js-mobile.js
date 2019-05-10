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
$(document).ready(function(){
    var date_input=$('input[name="inputTanggalPergi"] , input[name="inputTanggalPulang"]'); //our date input has the name "date"
    var container=$('.container form').length>0 ? $('.container form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
});