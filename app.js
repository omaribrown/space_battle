// create the players


let USS_Schwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}
let Alien1 = {
    shipName: "Alien1",
    hull: 10, 
    firepower: 3,
    accuracy: .6
}
let Alien2 = {
    shipName: "Alien2",
    hull: 11, 
    firepower: 3,
    accuracy: .6
}
let Alien3 = {
    shipName: "Alien3",
    hull: 10, 
    firepower: 3,
    accuracy: .6
}
let Alien4 = {
    shipName: "Alien4",
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


// current enemy:

var currentEnemy;
// let currentEnemyCheck = () => {
//     if (Alien1.hull > 0) {
//         currentEnemy = Alien1
//     } else if (Alien1.hull <= 0) {
//         currentEnemy = Alien2
//     } else if (Alien2.hull <= 0) {
//         currentEnemy = Alien3
//     } else if (Alien3.hull <= 0) {
//         currentEnemy = Alien4
//     }
// 
// Retreat function:

let retreat = () => {
    alert("You've escaped! Unfortunately, the enemy will have time to regroup.")
}

// lets create an aftermath function that will show what our ship looks like and what their ship looks like after both turns
// update: we moved the aftermath functions on top because we are going to embed them in the attack functions
let userAttackAftermath = () => {
    if (currentEnemy.hull <= 0) {
        alert("You've destroyed the enemy ship!")
    } else {
        alert(`It's a hit! ${currentEnemy.shipName} only has ${currentEnemy.hull} health remaining!`)
        alert("Prepare for an enemy attack!")
    }
}

let enemyAttackAftermath = () => {
    if (USS_Schwarzenegger.hull > 0) {
        alert(`We still have ${USS_Schwarzenegger.hull} health remaining.`)
    } else {
        alert("Game over")
    }
}

// User attack:

let userAttack = () => {
    // let userHitChance = Math.random()
    let testHitChance = .6
    if (testHitChance <= USS_Schwarzenegger['accuracy']) {
        currentEnemy.hull = currentEnemy.hull - USS_Schwarzenegger.firepower
        userAttackAftermath()
    } else {
        alert("It's a miss! We'll get them next time")
    }
}
// userAttack()

// Enemy Attack:

let enemyAttack = () => {
    // randomize in future
    let enemyHitChance = .3
    if (enemyHitChance <= currentEnemy['accuracy']) {
        alert("You've been hit")
        USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - currentEnemy.firepower
        enemyAttackAftermath()
    } else {
        alert("The enemy ship missed!")
    }
}
// enemyAttack()


// let destroyedEnemy = () => {
//     let checkContinue = prompt("We've survided an enemy attack. Do you wish to continue?")
//     if (checkContinue == "yes") {
//         // check for remaining enemy objects
//         if (Alien1)
//     }
// }


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


//
// ─── LEVEL 1 ────────────────────────────────────────────────────────────────────
//

    
let beginGame = prompt("ready for war?")

if (beginGame == "yes") {
    alert("enemy ship approaching")
} else {
    alert("Maybe some other time")
    // insert game over function
}
// initial user attack
alert("firing at the enemy!")
currentEnemy = Alien1
userAttack()

// check enemy damages
// userAttackAftermath()


// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    // enemyAttackAftermath()
}

// check user damages

// second round / battle loop
alert("We are preparing for a second attack on the enemy!")

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

//
// ─── LEVEL 2 ────────────────────────────────────────────────────────────────────
//

    
// alert(" second enemy ship approaches!")
// new enemy
currentEnemy = Alien2
alert(`${currentEnemy.shipName} is approaching! Looks like they've got a health of ${currentEnemy.hull}`)

// initial level 2 attack
alert("I think we've got the aim right. Firing at the enemy!")
userAttack()
enemyAttack()



// not sure what this block was, but I'm goingto comment it out for the moment

// if (currentEnemy.hull > 0) {
//     alert(`refering to ${currentEnemy.shipName}`)
//     enemyAttack()
//     enemyAttackAftermath()
// }


// check enemy damages
// userAttackAftermath()

// initial enemy attack
// if (currentEnemy.hull > 0) {
//     enemyAttack()
//     enemyAttackAftermath()
// }

while (currentEnemy.hull > 0 && USS_Schwarzenegger.hull > 0) {
    alert("Looks like they're still going. Firing on the target!")
    userAttack()
    // userAttackAftermath()
    if (currentEnemy.hull > 0) {
        enemyAttack()
        // enemyAttackAftermath()
    } 

}

alert("end of level 2")
//
// ─── LEVEL 3 ────────────────────────────────────────────────────────────────────
//

    
alert("a third enemy approaches")
// I think a simple if statement wont work here. Will try a while loop instead
// if (Alien1.hull <= 0) {
//     currentEnemy = Alien2
//     alert("second enemy ship approaching! Firing on the target!")
// } else {
//     alert("Looks like they're still going. Firing on the target!")
//     userAttack()
//     userAttackAftermath()
// }



//
// ─── LEVEL 4 ────────────────────────────────────────────────────────────────────
//

    
// test alien1 to alien2 switch
// console.log(currentEnemy.shipName)

// check continue:


// new enemy


// enemy ship destroyed displays twice