'use strict';

//Open swtcher menu
$('.style-switcher__control').on('click', function () {
    $('.style-switcher').toggleClass('style-switcher--active');
});

//Change monochrome.css to color.css
$('.style-switcher__link--color').click(function (){
    $('link[href="css/monochrome.css"]').attr('href','css/color.css');
});

//Change color.css to monochrome.css
$('.style-switcher__link--mono').click(function (){
    $('link[href="css/color.css"]').attr('href','css/monochrome.css');
});