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