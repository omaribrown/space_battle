// create the players


let USS_Schwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}
let Alien1 = {
    hull: 10, 
    firepower: 3,
    accuracy: .6
}
let Alien2 = {
    hull: 10, 
    firepower: 3,
    accuracy: .6
}
let Alien3 = {
    hull: 10, 
    firepower: 3,
    accuracy: .6
}
let Alien4 = {
    hull: 10, 
    firepower: 3,
    accuracy: .6
}

// create the actions

// for actions: 
// ask if we are going to attack enemy ship
// if yes, run attack function
// calculate math.random
// if that number is within a range, then the other ship is hit


// Retreat function:

let retreat = () => {
    console.log("You've escaped! Unfortunately, the enemy will have time to regroup.")
}

// User attack:

let userAttack = () => {
    // let userHitChance = Math.random()
    let testHit = .6
    if (testHit <= USS_Schwarzenegger['accuracy']) {
        console.log("It's a hit!")
        Alien1.hull = Alien1.hull - USS_Schwarzenegger.firepower
    } else {
        console.log("It's a miss!")
    }
}
// userAttack()

// Enemy Attack:

let enemyAttack = () => {
    let enemyHitChance = Math.random()
    if (enemyHitChance <= Alien1['accuracy']) {
        console.log("You've been hit")
        USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - Alien1.firepower
        console.log(`Remaining health: ${USS_Schwarzenegger.hull}`)
    } else {
        console.log("The enemy ship missed!")
    }
}
// enemyAttack()

// lets create an aftermath function that will show what our ship looks like and what their ship looks like after both turns
let userAttackAftermath = () => {
    if (Alien1.hull <= 0) {
        console.log("You've destroyed the enemy ship!")
        alert("You've destroyed the enemy ship!")
    } else {
        console.log(`Remaining enemy health: ${Alien1.hull}`)
        console.log("Prepare for an enemy attack!")
    }
}

let enemyAttackAftermath = () => {
    if (USS_Schwarzenegger.hull <= 0) {
        console.log("Game over")
    }
}

// let destroyedEnemy = () => {
//     let checkContinue = prompt("We've survided an enemy attack. Do you wish to continue?")
//     if (checkContinue == "yes") {
//         // check for remaining enemy objects
//         if (Alien1)
//     }
// }

// since I'm just testing the players and actions, I wont worry about the randomization of enemy specs yet.



// testing battle functionality
// userAttack()
// userAttackAftermath()
// enemyAttack()
// enemyAttackAftermath()




// Alright, we've got the user/enemy attack functions together and retreat done, we can try and involve the user to battle it out.
// so user input by alerts to the console


// check enemy damages function 



//
// ─── THE GAME ───────────────────────────────────────────────────────────────────
//


// Intro section goals: 
// 1. create first attack exchanges and aftermath reports using set accuracy parameters. 
// 2. introduce second enemy once first is killed and initiate battle.
// 3. introduce randomized values to alien objects and loop first battle enemy not dead
let beginGame = prompt("ready for war?")

if (beginGame == "yes") {
    console.log("enemy ship approaching")
} else {
    alert("Maybe some other time")
}

// establish who we're fighting
// let currentEnemy = Alien1

// initial user attack
firstAttack = alert("firing at the enemy!")
userAttack()

// check enemy damages
userAttackAftermath()

// initial enemy attack
if (Alien1.hull > 0) {
    enemyAttack()
}

// check user damages
enemyAttackAftermath()

// second round
alert("preparing for a second attack on the enemy!")
userAttack()
userAttackAftermath()

// check continue:


// new enemy
