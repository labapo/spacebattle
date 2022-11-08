//Create SS Hello World Ship
class UssHelloWorld {
    constructor (hull, firepower, accuracy) {
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = .7
    }
};

const ussHelloWorld = new UssHelloWorld;
console.log(ussHelloWorld);

//Create Alien Ship Class 
class AlienShip {
    constructor (hull, firepower, accuracy) {
        this.hull = Math.floor(Math.random() * 4) +3,
        this.firepower = Math.floor(Math.random() * 3) +2,
        this.accuracy = Math.floor((Math.random() * 3) +6 )/10
        }
    }
let alienArray = [];
for(let i=0;i<6;i++)
{
    let alienShips = new AlienShip;
    alienArray.push(alienShips);
};
console.log(alienArray);
// End game function to determine if ship is still alive? 
function endGame () {

}

function restartGame() {
    let attackOrRetreat = prompt("Would you like to attack the alien ship or retreat?", "A for attack or R for retreat");
    if (attackOrRetreat === "A" || attackOrRetreat==="a"|| attackOrRetreat==="attack") {
        confirm("You have chosen to ATTACK"); 
        attackAlienShip (ussHelloWorld, alienArray[0]);
    } else if (attackOrRetreat === "R" || attackOrRetreat==="r" || attackOrRetreat==="retreat") {
        confirm("You have chosen to RETREAT");
    } else {
        alert("Click Start Game again")
    }
};

//USS Hello World Attacks
function attackAlienShip (ship1, ship2){
    if (ship1.accuracy >= ship2.accuracy) {
       //let newHull = ship2.hull -= ship1.firepower;
       // return newHull;
       ship2.hull-=ship1.firepower;
        alert(`Direct hit! You reduced the Alien Ship's hull by ${ussHelloWorld.firepower} points. The Alien's ship's hull is now at ${ship2.hull-=ship1.firepower}`);
        //add in something that makes you attack again 
        if (ship2.hull <= 0) {
            alert("Congrats! You destroyed the Alien Ship!");
            console.log(alienArray);
            alienArray.shift();
        //create new ship to destroy - maybe put in a loop
            alert("However, a new ship is coming in for the attack. Brace yourself!")
            attackAlienShip (ship2, ussHelloWorld);
            
        }  else  {
            alert("Brace yourself, the alien ship will attack")
            attackUssHelloWord(ship2, ussHelloWorld);
            restartGame();
        }
    } // Alien's ship acccuracy is higher than SS Hello world. 
    else {
        alert("You missed!");
        alert("Brace yourself, the alien ship will attack")
        attackUssHelloWord(ship2, ship1);
        restartGame();
    }
} 

// if ship 1 accuracy = ship 2 accuracy

console.log(ussHelloWorld);

//Alien Battle Ship Attacks
function attackUssHelloWord (ship2, ship1) {
    if (ship2.accuracy >= ship1.accuracy) {
        ship2.hull-=ship1.firepower;
        alert(`You've been hit! Your hull's points are at ${ship1.hull-ship2.firepower}`);
        restartGame();
    } else if (ship2.accuracy < ship1) {
        alert(`The alien ship missed! Your hull points are at ${ship1.hull}`)
        restartGame();
    }
}

//Start Game
let startGame = document.getElementById("start-game");

function Start(){
    console.log("Started");
    alert("The Game Has Started");
    alert("Aliens are attacking your ship, USS Hello World!");
    restartGame();
};

startGame.addEventListener("click", Start);

