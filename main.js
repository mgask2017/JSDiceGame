let sum = 0;
let count = 0;
let oddEven = 0;
let plr1RoundNo = 0;
let diceRolls = [];
let pl1RoundScore = [];
let plr1OverallScore = [];
const plrScoreEntry = document.querySelector('.player-score');

function rollDicePlr1() {
  //function to roll the die, random number generated
  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  // var die3 = document.getElementById("die3");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var d3 = Math.floor(Math.random() * 6) + 1;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  

  if (d1 != d2) {
    diceRolls.push(d1 + d2);
    console.log(diceRolls);
    count += 1;
    console.log("Count = " + count);
    turnnumber.innerHTML = count;
  } else if (d1 == d2) {
    //status.innerHTML += "You rolled a DOUBLE! You get a FREE turn";
    console.log("You rolled a DOUBLE! You get a FREE turn");
    die3.innerHTML = d3;
    diceRolls.push(d1 + d2);
    diceRolls.push(d3);
    console.log("Your free turn scored " + d3);
    console.log(diceRolls);
  }

  if (count == 5) {
    console.log("Round ended");
    plr1RoundNo += 1;
    console.log("Round no: " + plr1RoundNo);
    roundNo.innerHTML = plr1RoundNo;
    // pl1TotalScore.push(total);
    //console.log("Total score " + pl1TotalScore);
    roundTotal();

    //return false;
  }
} //end rollDicePlr1()

function roundTotal() {
  for (var i = 0, sum = 0; i < diceRolls.length; sum += diceRolls[i++]);
  console.log("Round score: " + sum);

  //EVEN/ODD calculation
   if (sum %2==0) {
    oddEven = 10;
    console.log("Even number scored +10pts");
    bounsScore.innerHTML = oddEven;
  } else {
    oddEven = -5;
    console.log("Odd number scored -5pts");
     bounsScore.innerHTML = oddEven;
  }

  pl1RoundScore.push(sum);
  console.log("Player total: ", pl1RoundScore);

  pl1RoundScore.push(oddEven);
  console.log("Player total inc bonus: " , pl1RoundScore );
  overallTotal();
  diceRolls = [];
  count = 0;
  sum = 0;
  oddEven = 0;
}

function overallTotal() {
  for (var i = 0, sumFinal = 0; i < pl1RoundScore.length; sumFinal += pl1RoundScore[i++]);
  console.log("Player 1 SCORE: " + sumFinal);
  plr1score.innerHTML = sumFinal;
  //sumFinal += plr1OverallScore; 
  plr1OverallScore.push(sumFinal);
  
  gameEnd();
}

function gameEnd() {
  if (plr1RoundNo == 2) { //need to change back to 5
    let finalTotal = (plr1OverallScore.pop());
    console.log("FINAL TOTAL:" + finalTotal);
    //alert("Game Ended - Your score: " + finalTotal);

   let li = document.createElement('li');
    li.className = 'plr-score-entry';
    li.appendChild(document.createTextNode(finalTotal));
    plrScoreEntry.appendChild(li);

    //refreshPage();
  }
}


//Page Refresh - Game restart
function refreshPage() {
  //window.location.reload(); //Refreshes page and deletes all content

  //vars
   finalTotal = 0;
   sum = 0;
   count = 0;
   oddEven = 0;
   plr1RoundNo = 0;
   diceRolls = [];
   pl1RoundScore = [];
   plr1OverallScore = [];

   //HTML
   turnnumber.innerHTML = 0;
   die1.innerHTML = 0;
   die2.innerHTML = 0;
   die3.innerHTML = 0;
   roundNo.innerHTML = 0;
   bounsScore.innerHTML = 0;
   bounsScore.innerHTML = 0;
   plr1score.innerHTML = 0;

}

//========= Adding name and player score ========== 

