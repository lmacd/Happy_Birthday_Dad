$(window).load(function(){
    var counter = 2;
    $('#buttonPushed').hide();
    $('#buttonUpCircle').mousedown(function(){
        counter++;
        if(counter%2===0)
            {
              $('#cakeTop',"#concealer").animate({'margin-top':"0%"});
            }            
        else if(counter%2===1)
            {
            $('#cakeTop',"#concealer").animate({'margin-top':"15%"});
            }            
        $('#buttonUp').hide();
        $('#buttonPushed').show();
    });
    $('#buttonUpCircle').mouseup(function(){
        $('#buttonPushed').hide();
        $('#buttonUp').show();
    });
});



