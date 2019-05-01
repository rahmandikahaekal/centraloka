$( document ).ready(function( $ ) {
    $( '#view-hotel' ).sliderPro({
        width: 960,
        height: 500,
        fade: true,
        arrows: true,
        buttons: false,
        fullScreen: true,
        shuffle: true,
        smallSize: 500,
        mediumSize: 1000,
        largeSize: 3000,
        thumbnailArrows: true,
        autoplay: false
    });
});

$('#date1').datepicker('setDate', new Date(2018, 02, 20));
$('#date2').datepicker('setDate', new Date(2018, 02, 25));