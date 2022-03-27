// window.alert("This is an alert! JavaScript is running!");
// this creates a function named "fight"
// var playerName = window.prompt("What is your robot's name?");
// window.alert(playerName);
// console.log(playerName);
// console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
// console.log(10 + 10);
// what is this?
// console.log("Our robot's name is " + playerName);
// function fight() {
//     window.alert("The fight has begun!");
//   }

// fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  if (promptFight === 'FIGHT' || promptFight === 'fight') {
        enemyHealth = enemyHealth - playerAttack;
    console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    } 
  else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }


  playerHealth = playerHealth - enemyAttack;
  console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  )
  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
} else if (promptFight === 'skip' || promptFight === 'SKIP') {
    window.alert(playerName + " has chosen to skip the fight!");
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
    }
};
// } else {
//     window.alert("You need to choose a valid option. Try again!")
// }
// };

fight();