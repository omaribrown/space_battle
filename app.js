//
// ─── GENERATE PLAYERS AND VARIABLES ─────────────────────────────────────────────
//

let USS_Schwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}
let Alien1 = {
    shipName: "The Harbinger",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien2 = {
    shipName: "The Albatross",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien3 = {
    shipName: "The Hunter",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien4 = {
    shipName: "The Black Cloud",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien5 = {
    shipName: "The Teresa",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien6 = {
    shipName: "The Omen",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}

var currentEnemy;
let randHull;
let randAccuracy; 
let randFirepower;


//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

// this function checks the health of the enemy ship
let userAttackAftermath = () => {
    if (currentEnemy.hull <= 0) {
        alert(`It's a hit! The ship is in shambles!`)
        // alert("You've destroyed the enemy ship!")
    } else {
        alert(`It's a hit! ${currentEnemy.shipName} only has ${currentEnemy.hull} health remaining!`)
        alert("Prepare for an enemy attack!")
    }
}

// this function checks the health of the user ship and if it's game over
let enemyAttackAftermath = () => {
    if (USS_Schwarzenegger.hull > 0) {
        alert(`We still have ${USS_Schwarzenegger.hull} health remaining.`)
    } else {
        alert("Game over")
        didYouDie = 1
        while(didYouDie == 1) {
            gameOver()
        }
    }
}

let userAttack = () => {
    let userHitChance = Math.random()
    if (userHitChance <= USS_Schwarzenegger['accuracy']) {
        currentEnemy.hull = currentEnemy.hull - USS_Schwarzenegger.firepower
        userAttackAftermath()
    } else {
        alert("It's a miss! We'll get them next time.")
    }
}

let enemyAttack = () => {
    let enemyHitChance = Math.random()
    if (enemyHitChance <= currentEnemy['accuracy'] && currentEnemy.hull > 0) {
        alert("You've been hit!")
        USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - currentEnemy.firepower
        enemyAttackAftermath()
    } else {
        alert("The enemy ship missed!")
    }
}

//
// ─── GENERATING ENEMY ───────────────────────────────────────────────────────────
//

// This function will establish the enemy ship specs before each round
let introEnemy = (alien) => {
    alien.hull = (Math.floor(Math.random() * 4) + 3)
    alien.accuracy = (Math.random() * (.8 - .6) + .6).toFixed(1)
    alien.firepower = (Math.floor(Math.random() * 3) + 2)
    console.log(alien)
    alert(`${currentEnemy.shipName}'s got a shield of ${currentEnemy.hull}, accuracy of ${currentEnemy.accuracy}, and firepower of ${currentEnemy.firepower}`)

}
// Exit functions

let gameOver = () => {
    alert("Thanks for playing... You must exit the page, now.")
}

//
// ─── THE GAME ───────────────────────────────────────────────────────────────────
//

//
// ─── LEVEL 1 ────────────────────────────────────────────────────────────────────
//

let beginGame = prompt("The planet is under attack! Are you ready to defend Earth from evil alien ships?")

while (beginGame == 'yes') {

// ---------- Stage 1 Exchange---------------

// initial user attack
alert("Enemy shields are charging!")
currentEnemy = Alien1
introEnemy(Alien1)
userAttack()

// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a another attack on the enemy!")
}

//------------- Stage 2 Loop -------------------


while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Firing on the target!")
    userAttack()
    // userAttackAftermath()
    if (currentEnemy.hull > 0) {
        enemyAttack()
        // enemyAttackAftermath()
    }
}
if (USS_Schwarzenegger.hull <= 0) {
    alert("You've died...")
    // insert game over function
    // insert else: do you want to continue?
}

alert("One enemy down! There's another ship on the horizon!")
var returnQuestion = prompt("Would you like to retreat?")
while (returnQuestion == 'yes') {
    gameOver()
}
//
// ─── LEVEL 2 ────────────────────────────────────────────────────────────────────
//

currentEnemy = Alien2
introEnemy(Alien2)

// initial level 2 attack
alert("I think we've got the aim right. Firing at the enemy!")
userAttack()
// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a another attack on the enemy!")
    // enemyAttackAftermath()
}

while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Looks like they're still going. Firing on the target!")
    userAttack()
    // userAttackAftermath()
    if (currentEnemy.hull > 0) {
        enemyAttack()
        // enemyAttackAftermath()
    } 

}

alert("That's two enemy ships destroyed!")
returnQuestion = prompt("Would you like to retreat?")
while (returnQuestion == 'yes') {
    gameOver()
}
//
// ─── LEVEL 3 ────────────────────────────────────────────────────────────────────
//

// stage 1
alert("A third enemy approaches")
currentEnemy = Alien3
introEnemy(Alien3)
userAttack()
// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a another attack on the enemy!")
    // enemyAttackAftermath()
}

// stage 2
while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Looks like they're still going. Firing on the target!")
    userAttack()
    if (currentEnemy.hull > 0) {
        enemyAttack()
    } 

}

alert("Easy peasy!")
returnQuestion = prompt("Would you like to retreat?")
while (returnQuestion == 'yes') {
    gameOver()
}
//
// ─── LEVEL 4 ────────────────────────────────────────────────────────────────────
//

    
// stage 1
alert("A new enemy approaches")
currentEnemy = Alien4
introEnemy(Alien4)
userAttack()
// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a another attack on the enemy!")
    // enemyAttackAftermath()
}

// stage 2
while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Looks like they're still going. Firing on the target!")
    userAttack()
    // userAttackAftermath()
    if (currentEnemy.hull > 0) {
        enemyAttack()
        // enemyAttackAftermath()
    } 

}

alert("We've got them on their heels!")

//
// ─── LEVEL 5 ────────────────────────────────────────────────────────────────────
//

    
returnQuestion = prompt("Would you like to retreat?")
while (returnQuestion == 'yes') {
    gameOver()
}

// stage 1
alert("A new enemy approaches")
currentEnemy = Alien5
introEnemy(Alien5)
userAttack()
// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a another attack on the enemy!")
    // enemyAttackAftermath()
}

// stage 2
while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Looks like they're still going. Firing on the target!")
    userAttack()
    // userAttackAftermath()
    if (currentEnemy.hull > 0) {
        enemyAttack()
        // enemyAttackAftermath()
    } 

}

alert("They've only got one more ship!")
returnQuestion = prompt("Would you like to retreat?")
while (returnQuestion == 'yes') {
    gameOver()
}
//
// ─── LEVEL 6 ────────────────────────────────────────────────────────────────────
//

    
// stage 1
alert("The final enemy approaches")
currentEnemy = Alien6
introEnemy(Alien6)
userAttack()
// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a another attack on the enemy!")
    // enemyAttackAftermath()
}

// stage 2
while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Looks like they're still going. Firing on the target!")
    userAttack()
    // userAttackAftermath()
    if (currentEnemy.hull > 0) {
        enemyAttack()
        // enemyAttackAftermath()
    } 

}

alert("You defended the planet from evil aliens!")
alert(`You finished with ${USS_Schwarzenegger.hull} health remaining!`)
alert("Refresh to play again!")
break
}
