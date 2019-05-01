$(document).ready(function(){
    var date_input=$('input[name="date1"] , input[name="date2"]'); //our date input has the name "date"
    var container=$('.container form').length>0 ? $('.container form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
})

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000000,
      values: [ 0, 1000000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "Rp" + ui.values[ 0 ] + "Rp" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "Rp" + $( "#slider-range" ).slider( "values", 0 ) + " " +
      "Rp" + $( "#slider-range" ).slider( "values", 1 ) );
} );