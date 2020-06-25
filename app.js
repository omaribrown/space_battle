// create the players


let USS_Schwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}
let Alien1 = {
    hull: 4,
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
    } else {
        console.log("The enemy ship missed!")
    }
}
// enemyAttack()

// lets create an aftermath function that will show what our ship looks like and what their ship looks like after both turns
let userAttackAftermath = () => {
    if (Alien1.hull <= 0) {
        console.log("You've destroyed the enemy ship!")
    } else {
        console.log(`Remaining enemy health: ${Alien1.hull}`)
        console.log("Prepare for an enemy attack!")
    }
}

let enemyAttackAftermath = () => {
    if (USS_Schwarzenegger.hull <= 0) {
        console.log("Game over")
    } else {
        console.log(`Remaining enemy health: ${USS_Schwarzenegger.hull}`)
    }
    // call next round function
}

// since I'm just testing the players and actions, I wont worry about the randomization of enemy specs yet.



// testing battle functionality
userAttack()
userAttackAftermath()
enemyAttack()
enemyAttackAftermath()




// Alright, we've got the user/enemy attack functions together and retreat done, we can try and involve the user to battle it out.
// so user input by alerts to the console




//
// ─── THE GAME ───────────────────────────────────────────────────────────────────
//

// let startAttack = prompt("Fire?", "yes")

// if (attackCommand == "yes") {
//     userAttack()
//     if 
// }

