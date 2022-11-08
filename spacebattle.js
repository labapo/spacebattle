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

const alienShipOne = new AlienShip();
console.log(alienShipOne);

//Start Game
let startGame = document.getElementById("start-game");

function Start(){
    console.log("Started");
    alert("The Game Has Started");
    alert("Aliens are attacking your ship, USS Hello World!")
    let attackOrRetreat = prompt("Would you like to attack the alien ship or retreat?", "A for attack or R for retreat");
    if (attackOrRetreat === "A" || attackOrRetreat==="a"|| attackOrRetreat==="attack") {
        confirm("You have chosen to ATTACK"); 
    } else if (attackOrRetreat === "R" || attackOrRetreat==="r" || attackOrRetreat==="retreat") {
        confirm("You have chosen to RETREAT");
    } else {
        alert("click Start Game again")
    };
};

startGame.addEventListener("click", Start);

//USS Hello World Attacks
// function attackAlienShip (){
//     if (ussHelloWorld.accuracy > alienShipOne.accuracy) {
//         alert(`Direct hit! You reduced the Alien Ship's hull by ${ussHelloWorld.firepower} points. The Alien's ship's hull is now at ${alienShipOne.hull - ussHelloWorld.firepower}`);
//         return alert((alienShipOne.hull - ussHelloWorld.firepower))
//     };
// }

