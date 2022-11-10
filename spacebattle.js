//Create SS Hello World Ship
class UssHelloWorld {
  constructor(hull, firepower, accuracy) {
    (this.hull = 20), (this.firepower = 5), (this.accuracy = 0.7);
  }
}

const ussHelloWorld = new UssHelloWorld();
console.log(ussHelloWorld);

//Create Alien Ship Class
class AlienShip {
  constructor(hull, firepower, accuracy) {
    (this.hull = 2),
      //this.hull = Math.floor(Math.random() * 4) +3,
      (this.firepower = Math.floor(Math.random() * 3) + 2),
      (this.accuracy = Math.floor(Math.random() * 3 + 6) / 10);
  }
}
let alienArray = [];
for (let i = 0; i < 3; i++) {
  let alienShips = new AlienShip();
  alienArray.push(alienShips);
}
console.log(alienArray);

//when a ships go to 0, declaring a win for SS hello world
//Issue: when I add these lines of code, the arrays don't work correctly
//const alienShipCount = alienArray.length = 0 ? alert("Congratulations! You have destroyed all alien ships! You saved the world!") : false
//console.log(alienShipCount);

//alien ships in hard code to test results
//accuracy for alien ship higher than accuracy for ss hello world
// let alienShipOne = {
//     hull: 3,
//     firepower: 2,
//     accuracy: .8,
// }
// //accuracy for hello world higher than alien ship
// let alienShipTwo = {
//     hull: 3,
//     firepower: 4,
//     accuracy: .6,
// }
//Start Game
let startGame = document.getElementById("start-game");

function Start() {
  console.log("Started");
  alert("The Game Has Started");
  alert("Aliens are attacking your ship, the USS Hello World!");
  restartGame();
}

startGame.addEventListener("click", Start);
  

  //restart the game
function restartGame() {
    let attackOrRetreat = prompt(
      "Would you like to attack the alien ship or retreat?",
      "A for attack or R for retreat"
    );
    if (
      attackOrRetreat === "A" ||
      attackOrRetreat === "a" ||
      attackOrRetreat === "attack"
    ) {
      confirm("You have chosen to ATTACK");
      attackAlienShip(ussHelloWorld, alienArray[0]);
      attackUssHelloWorld(alienArray[0], ussHelloWorld);
      //Create SS Hello World Ship
  class UssHelloWorld {
      constructor(hull, firepower, accuracy) {
        (this.hull = 20), (this.firepower = 5), (this.accuracy = 0.7);
      }
    }
  
  //when a ships go to 0, declaring a win for SS hello world
  //Issue: when I add these lines of code, the arrays don't work correctly
  //const alienShipCount = alienArray.length = 0 ? alert("Congratulations! You have destroyed all alien ships! You saved the world!") : false
  //console.log(alienShipCount);
  
  //alien ships in hard code to test results
  //accuracy for alien ship higher than accuracy for ss hello world
  // let alienShipOne = {
  //     hull: 3,
  //     firepower: 2,
  //     accuracy: .8,
  // }
  // //accuracy for hello world higher than alien ship
  // let alienShipTwo = {
  //     hull: 3,
  //     firepower: 4,
  //     accuracy: .6,
  // }
  //Start Game
//   let startGame = document.getElementById("start-game");
  
//   function Start() {
//     console.log("Started");
//     alert("The Game Has Started");
//     alert("Aliens are attacking your ship, the USS Hello World!");
//     restartGame();
//   }
  
  startGame.addEventListener("click", Start);
  
  //restart the game
  function restartGame() {
    let attackOrRetreat = prompt(
      "Would you like to attack the alien ship or retreat?",
      "A for attack or R for retreat"
    );
    if (
      attackOrRetreat === "A" ||
      attackOrRetreat === "a" ||
      attackOrRetreat === "attack"
    ) {
      confirm("You have chosen to ATTACK");
      attackAlienShip(ussHelloWorld, alienArray[0]);
    } //end the game by retreating
    else if (
      attackOrRetreat === "R" ||
      attackOrRetreat === "r" ||
      attackOrRetreat === "retreat"
    ) {
      confirm("You have chosen to RETREAT. Click OK to exit.");
    } else {
      alert("Did not enter correct response. Click Start Game again.");
    }
  }
  
  //Alien Battle Ship Attacks
  //Not sure why this isn't working
  function attackUssHelloWorld(ship2, ship1) {
    if (alienArray.length === 0) {
      alert("Congrats you won!");
      //after this happens, it goes into restart game again. Whyyyyyy
    } else if (!alienArray.length === 0) {
      restartGame();
      if (ship2.accuracy >= ship1.accuracy) {
        alert(
          `You've been hit! Your hull's points are at ${(ship1.hull -=
            ship2.firepower)}`
        );
        restartGame();
      } else if (ship2.accuracy < ship1.accuracy) {
        alert(`The alien ship missed! Your hull points are at ${ship1.hull}`);
        restartGame();
      }
    }
  }
  
  //USS Hello World Attacks
  function attackAlienShip(ship1, ship2) {
    if (ship1.accuracy >= ship2.accuracy) {
      //let newHull = ship2.hull -= ship1.firepower;
      // return newHull;
      //ship2.hull-=ship1.firepower;
      alert(
        `Direct hit! You reduced the Alien Ship's hull by ${
          ussHelloWorld.firepower
        } points. The Alien's ship's hull is now at ${(ship2.hull -=
          ship1.firepower)}`
      );
      // attackUssHelloWord(alienArray[0], ussHelloWorld);
      //add in something that makes you attack again
      if (ship2.hull <= 0) {
        alert("Congrats! You destroyed the Alien Ship!");
        alienArray.shift();
        attackUssHelloWorld()
        console.log(alienArray);
        //create new ship to destroy - maybe put in a loop
        alert(
          "However, a new ship is coming in for the attack. Brace yourself! Oh no!"
        );
        attackUssHelloWorld(alienArray[0], ussHelloWorld);
        console.log(alienArray[0], ussHelloWorld);
        //restartGame();
      } else {
        alert("Brace yourself, the alien ship will attack.");
        //this does not work right now. This is where the break happens
        attackUssHelloWorld(alienArray[0], ussHelloWorld);
        restartGame();
      }
    } // Alien's ship acccuracy is higher than SS Hello world.
    //COME BACK TO THIS PIECE OF CODE. THIS MIGHT BE WHERE THINGS GET WONKY
    else if (ship1.accuracy < ship2.accuracy && alienArray.length > 0) {
      alert("You missed!");
      alert("Brace yourself, the alien ship will attack");
      attackUssHelloWorld(alienArray[0], ussHelloWorld);
      restartGame();
    }
  }
  
  // if ship 1 accuracy = ship 2 accuracy
  
  console.log(ussHelloWorld);
  
  //needs a way to declare a loss and alien takeover
  // function alienShipsLeft(){
  //     if (alienArray.length === 0){
  //         return true
  //     } else {
  //         return false
  //     }
  // }
  //console.log(helloWorldHull())
  
  } //end the game by retreating
  else if (
    attackOrRetreat === "R" ||
    attackOrRetreat === "r" ||
    attackOrRetreat === "retreat"
  ) {
    confirm("You have chosen to RETREAT. Click OK to exit.");
  } else {
    alert("Did not enter correct response. Click Start Game again.");
  }
}

//Alien Battle Ship Attacks
//Not sure why this isn't working
function attackUssHelloWorld(ship2, ship1) {
  if (alienArray.length === 0) {
    alert("Congrats you won!");
    //after this happens, it goes into restart game again. Whyyyyyy
  } else if (!alienArray.length === 0) {
    restartGame();
    if (ship2.accuracy >= ship1.accuracy) {
      alert(
        `You've been hit! Your hull's points are at ${(ship1.hull -=
          ship2.firepower)}`
      );
      restartGame();
    } else if (ship2.accuracy < ship1.accuracy) {
      alert(`The alien ship missed! Your hull points are at ${ship1.hull}`);
      restartGame();
    }
  }
}

//USS Hello World Attacks
function attackAlienShip(ship1, ship2) {
  if (ship1.accuracy >= ship2.accuracy) {
    //let newHull = ship2.hull -= ship1.firepower;
    // return newHull;
    //ship2.hull-=ship1.firepower;
    alert(
      `Direct hit! You reduced the Alien Ship's hull by ${
        ussHelloWorld.firepower
      } points. The Alien's ship's hull is now at ${(ship2.hull -=
        ship1.firepower)}`
    );
    //attackUssHelloWorld(alienArray[0], ussHelloWorld);
    //add in something that makes you attack again
    if (ship2.hull <= 0) {
      alert("Congrats! You destroyed the Alien Ship!");
      alienArray.shift();
      console.log(alienArray);
      //create new ship to destroy - maybe put in a loop
      alert(
        "However, a new ship is coming in for the attack. Brace yourself! Oh no!"
      );
      attackUssHelloWorld(alienArray[0], ussHelloWorld);
      console.log(alienArray[0], ussHelloWorld);
      restartGame();
    } else {
      alert("Brace yourself, the alien ship will attack.");
      //this does not work right now. This is where the break happens
      attackUssHelloWorld(alienArray[0], ussHelloWorld);
      restartGame();
    }
  } // Alien's ship acccuracy is higher than SS Hello world.
  //COME BACK TO THIS PIECE OF CODE. THIS MIGHT BE WHERE THINGS GET WONKY
  else if (ship1.accuracy < ship2.accuracy && alienArray.length > 0) {
    alert("You missed!");
    alert("Brace yourself, the alien ship will attack");
    attackUssHelloWorld(alienArray[0], ussHelloWorld);
    
  }
}

// if ship 1 accuracy = ship 2 accuracy

console.log(ussHelloWorld);

//needs a way to declare a loss and alien takeover
// function alienShipsLeft(){
//     if (alienArray.length === 0){
//         return true
//     } else {
//         return false
//     }
// }
//console.log(helloWorldHull())
