$(document).ready(function() {

    //1 When a colored panel is clicked, all panels vanish
    $('.theButton').click(function() {
        $('#panel .container').siblings().hide();
    });
    //comment: here I targetted #panel id and its siblings with the click of .theButton class.

    //2 When a colored panel is clicked, just that panel disappears
    $('.theButton').click(function() {
        $(this).hide();
    });
    //3 When a panel is clicked, all siblings fade to 10% opacity
    $('.theButton').click(function() {
        $('#panel .container').siblings().fadeTo('slow', .1);
    });
    //4 When reset is clicked, all panels revert to full opacity
    $('.superButton').click(function() {
        $('#panel .container').siblings().fadeTo(1000, 1);
    });
    //5 When the mouse hovers over a panel, that panel turns black
    $('.theButton').mouseenter(function() {
        $(this).addClass('makeBlack');
    });
    //6 When the mouse moves away, the panel reverts back to its previous colour
    $('.theButton').mouseout(function() {
        $(this).removeClass('makeBlack');
    });
});
