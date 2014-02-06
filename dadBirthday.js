$(window).load(function() {
    var counter = 1;
    //alert($(window).width());
    //alert($(window).height());
    try{window.resizeTo(1047, 750);}
    catch(e){};
    $('#buttonPushed').hide();
    $('#lang').hide();
    $('#buttonUpCircle').mousedown(function() {
        counter++;
        if (counter % 2 === 0)
        {
            $('#cakeTop').animate({'margin-top': "1%"});
            $('#concealer').animate({'margin-top': "10%"});
            $('#lang').fadeIn();
        }
        else if (counter % 2 === 1)
        {
            $('#cakeTop').animate({'margin-top': "15%"});
            $('#concealer').animate({'margin-top': "25%"});
            $('#lang').fadeOut();

        }
        $('#buttonUp').hide();
        $('#buttonPushed').show();
    });
    $('#buttonUpCircle').mouseup(function() {
        $('#buttonPushed').hide();
        $('#buttonUp').show();
    });
});



