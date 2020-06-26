//
// ─── GENERATE PLAYERS AND VARIABLES ─────────────────────────────────────────────
//

let USS_Schwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}
let Alien1 = {
    shipName: "Alien1",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien2 = {
    shipName: "Alien2",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien3 = {
    shipName: "Alien3",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}
let Alien4 = {
    shipName: "Alien4",
    hull: 0, 
    firepower: 0,
    accuracy: .0
}

var currentEnemy;
let randHull;
let randAccuracy; //creates string. might pose problem in future
let randFirepower;


//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

    
let retreat = () => {
    alert("You've escaped! Unfortunately, the enemy will have time to regroup.")
}

// lets create an aftermath function that will show what our ship looks like and what their ship looks like after both turns
// update: we moved the aftermath functions on top because we are going to embed them in the attack functions
let userAttackAftermath = () => {
    if (currentEnemy.hull <= 0) {
        alert(`It's a hit! The ship is in shambles!`)
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

let userAttack = () => {
    let userHitChance = Math.random()
    // let testHitChance = .6
    if (userHitChance <= USS_Schwarzenegger['accuracy']) {
        currentEnemy.hull = currentEnemy.hull - USS_Schwarzenegger.firepower
        userAttackAftermath()
    } else {
        alert("It's a miss! We'll get them next time")
    }
}

let enemyAttack = () => {
    // randomize in future
    let enemyHitChance = Math.random()
    if (enemyHitChance <= currentEnemy['accuracy']) {
        alert("You've been hit")
        USS_Schwarzenegger.hull = USS_Schwarzenegger.hull - currentEnemy.firepower
        enemyAttackAftermath()
    } else {
        alert("The enemy ship missed!")
    }
}

//
// ─── GENERATING ENEMY ───────────────────────────────────────────────────────────
//

let introEnemy = (alien) => {
    alien.hull = (Math.floor(Math.random() * 4) + 3)
    alien.accuracy = (Math.random() * (.8 - .6) + .6).toFixed(1)
    alien.firepower = (Math.floor(Math.random() * 3) + 2)
    console.log(alien)
    // alert("Incomming communication!")
    alert(`${currentEnemy.shipName}'s got a shielf of ${currentEnemy.hull}, accuracy of ${currentEnemy.accuracy}, and firepower of ${currentEnemy.firepower}`)

}




//
// ─── THE GAME ───────────────────────────────────────────────────────────────────
//

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
alert("Enemy shields are charging!")
currentEnemy = Alien1
introEnemy(Alien1)
userAttack()

// initial enemy attack
if (currentEnemy.hull > 0) {
    enemyAttack()
    alert("We are preparing for a second attack on the enemy!")
    // enemyAttackAftermath()
}

// second round / battle loop


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

currentEnemy = Alien2
introEnemy(Alien2)
// alert(`${currentEnemy.shipName} is approaching! Looks like they've got a health of ${currentEnemy.hull}`)

// initial level 2 attack
alert("I think we've got the aim right. Firing at the enemy!")
userAttack()
enemyAttack()

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