//Consider including Ajax in the code?? Try tmr

$(document).ready(function(){
    /**Initialize game variables.*/

	  var number = Math.floor(Math.random() * 100 + 1); 
      var guesses = [];
      var times = 7;

      $('#attempt').html('<p id="attempt">Attempt:  ' + times + '  times left.</p>');

      /**
        * Reset function.
        * User clicks on Restart buttom to start new game.
        */
	  $('#reset').click(function() {
        location.reload();
        });
      
      /**
        * Cheating function.
        * User clicks on Hint buttom to find out the answer.
        */
      $('#hint').click(function() {
            $('#msg').text(number).css('color', 'black');
        });
   
      /**
        * Submit function.
        * User input number and click on Submit buttom to find out the result.
        */
	 $('#submit').click(function(){

        //customize response messages.
    	var icecold = "Ice cold!! #The winter is coming..";
        var cold = "Cold Brr";
    	var hot = "Hot Oww";
        var warm = "Warming up"
    	var win = "Strike! Great job!";
        var tryAgain = "Game over. #VALAR MORGHTULIS";
        var invalid = "Type a valid number!"
        var repeat = "You guessed that already!"

        //retrive user input and add into guesses array.
        var value = $(".form-group").find('input[name="guess"]').val();
        

         //when user submit an invalid guess

        if (times == 0){
            $('#msg').text(tryAgain).css("color", "red");
            alert('You ran out of luck, loser :p');
        }
        else{
            if (value < 1 || value > 100 || isNaN(value)) {
                $('#msg').text(invalid).css("color", "red");
                alert("type a valid number between 1 and 100!");
            }
            else if (jQuery.inArray(value, guesses) !== -1){
                $('#msg').text(repeat).css("color", "red");
            }
            else{
                //when user exhausted allowed attempts.
                 if (times == 0){
                    $('#msg').text(tryAgain).css("color", "red");
                    alert('You ran out of luck, loser :p');
                    }
                else if(times < 0){
                    $('#msg').text('VALAR MORGHTULIS').css("color", "red");
                    }
                else{
                    //add guessed value into array
                    guesses.push(value);
                    //when user guess the right answer
                    if (value == number){
                        $('#msg').text(win).css("color", "green");
                    }
                    else{
                        //find out how far user's guess to the answer.
                        var diff = Math.abs(value-number);

                        //Based on diff's range, assign appropriate response.
                        if(5 >= diff){
                            $('#msg').text(hot).css("color", "red");
                        }
                        else if(10 >= diff){
                             $('#msg').text(warm).css("color", "orange");
                        }
                         else if (40 >= diff){                           
                            $('#msg').text(cold).css("color", "blue");
                        }
                        else
                        {
                           $('#msg').text(icecold).css("color", "#00FFFF");
                        }
                    }
                    //Suggest user how to adjust their guess
                    if(value < number){
                        $("#msg").append("<p style='color:red'>Guess higher.</h1>");
                    }
                     else if (value > number){
                        $("#msg").append("<p style='color:blue'>Guess lower.</h1>");
                    }
                    //decrement attempt times
                    times--;
                }
            }
        }
        //display user's input in a table.
        $.each(guesses, function( i, val ) {
         $( "#" + i ).text(val);
        });
        
        //update times
        $('#attempt').html('<p id="attempt">Attempt:  ' + times + '  times left.</p>');

    });
  
});