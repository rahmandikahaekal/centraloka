$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeOut: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function(){
    var date_input=$('input[name="date1"]'); //our date input has the name "date"
    var container=$('.container form').length>0 ? $('.container form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
})

$(document).ready(function(){
    var date_input=$('input[name="date2"]'); //our date input has the name "date"
    var container=$('.container form').length>0 ? $('.container form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
})