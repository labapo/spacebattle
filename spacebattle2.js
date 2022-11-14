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
//for testing
//for(let i=0;i<3;i++)
for(let i=0;i<6;i++)
{
    let alienShips = new AlienShip;
    alienArray.push(alienShips);
};
console.log(alienArray);

//Start Game
let startGame = document.getElementById("start-game");


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


function destroyedShip () {
    alert("Congrats! You destroyed the Alien Ship!");
    alienArray.shift();
    alert(`You have ${alienArray.length} Alien ships to destroy to win the game.`)
    console.log(alienArray);
    if (alienArray.length===0){
        alert("Congrats! You destroyed all the alien ships! You win!");
        return;
    }
}



function restartGame() {
    let attackOrRetreat = prompt("Would you like to attack the alien ship or retreat?", "A for attack or R for retreat");
    if (attackOrRetreat === "A" || attackOrRetreat==="a"|| attackOrRetreat==="attack") {
        confirm("You have chosen to ATTACK"); 
        attackAlienShip (ussHelloWorld, alienArray[0]);
    } //end the game by retreating
    else if (attackOrRetreat === "R" || attackOrRetreat==="r" || attackOrRetreat==="retreat") {
        confirm("You have chosen to RETREAT. Click OK to exit.");
    } else {
        alert("Click Start Game again")
    }}
;



//USS Hello World Attacks
function attackAlienShip (ship1, ship2){
    if (ship1.accuracy >= ship2.accuracy) {
       //let newHull = ship2.hull -= ship1.firepower;
       // return newHull;
       //ship2.hull-=ship1.firepower;
        alert(`Direct hit! You reduced the Alien Ship's hull by ${ussHelloWorld.firepower} points. The Alien's ship's hull is now at ${ship2.hull-=ship1.firepower}`);
        //add in something that makes you attack again 
        if (ship2.hull <= 0) {
            destroyedShip();
        //this is where things get weird
        //create new ship to destroy - maybe put in a loop
            //alert("However, a new ship is coming in for the attack. Brace yourself!")
            attackUssHelloWorld(alienArray[0], ussHelloWorld)
        }  else{
            alert("Brace yourself, the alien ship will attack")
            attackUssHelloWorld(alienArray[0], ussHelloWorld);
        }
    } // Alien's ship acccuracy is higher than SS Hello world. 
    else if (ship1.accuracy < ship2.accuracy) {
        alert("You missed!");
        alert("Brace yourself, the alien ship will attack")
        attackUssHelloWorld(alienArray[0], ussHelloWorld);
    }
}

// if ship 1 accuracy = ship 2 accuracy

console.log(ussHelloWorld);

//needs a way to declare a loss and alien takeover
// const helloWorldHull = ussHelloWorld.hull > 0 ? true : false;
// console.log(helloWorldHull)

// //Alien Battle Ship Attacks
ship1=ussHelloWorld;
ship2=alienArray[0];

//lose when USS Hello World is 0
function checkHull (){
    if (ship1.hull<=0){
        alert("your a loser!");
    }
}

//Alien Battle Ship Attacks
//Not sure why this isn't working
function attackUssHelloWorld (ship2, ship1) {
    if (ship2.accuracy >= ship1.accuracy) {
        alert(`You've been hit! Your hull's points are at ${ship1.hull-=ship2.firepower}`);
        if (ship1.hull<=0){
            alert("The Alien Ships have taken over. The USS Hello World has been destroyed. You lose!")
        } else {
        restartGame();
        };
    //     if (helloWorldHull == true) {
    //    restartGame();
    //     } else {
    //         alert(`I"m sorry, your hull has been destroyed. The aliens will take over!`)
    //     }
    } else if (ship2.accuracy < ship1.accuracy) {
        alert(`The alien ship missed! Your hull points are at ${ship1.hull}`)
       restartGame();
    }
}

function Start(){
    console.log("Started");
    alert("The Game Has Started");
    alert("Aliens are attacking your ship, the USS Hello World!");
    restartGame();
};

startGame.addEventListener("click", Start);