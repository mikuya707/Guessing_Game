//Consider including Ajax in the code?? Try tmr

$(document).ready(function(){
    //Generate the random number and initiate allowed attempts.
	  var number = Math.floor(Math.random() * 100 + 1);
      var times = 7;
      //Reset the game
	  $('#reset').click(function() {
    location.reload();
        });
      //Reveal the answer
      $('#hint').click(function() {
            $('#msg').text(number);
        });

      //User submits the guess
	 $('#submit').click(function(){
        

    	var icecold = "Ice cold!! Be generous on the guess.";
        var cold = "Cold. Guess higher!";
    	var hot = "Hot. Guess lower!";
    	var win = "You win!";
        var burnhot = "Burning hot!! Be gentle on the guess.";
        var warm = "Getting warmer, guess higher!";
        var warmish = "Warmish, guess lower!";
        var value = $(".form-group").find('input[name="guess"]').val();

        //simplify the if /else statement
        if(times > 0) {
        if (value < number)
        {
            if ((number - value) <10)
            {
                $('#msg').text(warm);
            }
            else
            {
                if ((number-value) <50 )
                {
                    
                    $('#msg').text(cold);
                }
                else
                {
                    $('#msg').text(icecold);
                    
                }
            }
        }
        else if (value > number)
        {
            if ((value-number) <10)
            {
                $('#msg').text(warmish);
            }
            else
            {
                if ((value-number) < 50)
                {
                     $('#msg').text(hot);
                }
                else
                {

                   $('#msg').text(burnhot);
                }
                
            }
        }
        else
        {
        	$('#msg').text(win);
        }
     }
     else{
        $('#msg').text("Sorry, you ran out of the luck. Try again!");
     }
        times--;
    });
    
  
});