$(document).ready(function(){
	  var number = Math.floor(Math.random() * 100 + 1);
	  $('#reset').click(function() {
    location.reload();
});
	 $('#submit').on('click', function(){
    	var cold = "<p>Too cold!</p>"
    	var hot = "<p>It's getting hot!</p>"
    	var win = "<p>You win!</p>"
        var value = $(".form-group").find('input[name="guess"]').val();
        if(value < number)
        {
        	$('#guesses').append(cold);
        }
        else if (value > number)
        {
        	$('#guesses').append(hot);
        }
        else
        {
        	$('#guesses').append(win);
        }
        //var test = $('<p>'+number+'</p>');
        //$('#guesses').append(test);
    });
  
});