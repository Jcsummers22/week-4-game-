 $(document.ready(function(){
  var Random=Math.floor(Math.random()*101+19);
 //Random Number Selector
  $('#randomNumber').text(Random);

//Variable list of numbers
  var num1= Math.floor(Math.random()*11+1);
  var num2= Math.floor(Math.random()*11+1);
  var num3= Math.floor(Math.random()*11+1);
  var num4= Math.floor(Math.random()*11+1);

  //User Input and Count
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  //Variable for Counting Information
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //reset the game 
  function reset() {
   Random=Math.floor(Math.random()*101+19);
      console.log(Random);
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      
  }

//Adding the total of wins
function winner() {
  alert("You won!");
  wins++;
  $("#numberWins").text(wins);
  reset();
}

//Adding total number of losses
function loser(){
  alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset();
}

//Sets up Click Events
 $('#panda').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  });  

$('#bowl').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  });

$('#diamond').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}));

    