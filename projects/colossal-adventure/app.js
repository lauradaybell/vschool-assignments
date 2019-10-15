const ask = require('readline-sync')
let isAlive = true
let hasWon = false
function Baddies(name, health, strength, armor) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.armor = armor
}
function Player(name, health, strength, armor) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.armor = armor
}
const name = ask.question('What is your name?')
const kerrigan = new Baddies('Kerrigan', 500, 230, 270)
const shaoKahn = new Baddies('Shao Kahn', 600, 175, 120)
const lichKing = new Baddies("The Lich King", 1000, 150, 225)
const deathwing = new Baddies('Deathwing', 400, 150, 68)

const enemies = [kerrigan, shaoKahn, lichKing, deathwing]

const player = new Player(name, 700, 130, 200)
console.log(`Hello ${name}! Welcome to the Burning Glade`)


while (isAlive && !hasWon) {
    let choice = ask.keyIn(`${name}, would you like to [w] walk, [i] check inventory, or [q] leave game?`, {limit: `wiq`})
    if(choice === 'w') {
        walk()
    } else if (choice === 'i'){
        check()
    } else {
        isAlive = false
        console.log(`${name} I didn't know you were a quitter. Oh the sadness!!!`)
    }
}

function walk() {
    let chance = Math.floor(Math.random()*3) 
        if(chance === 2) {
            enemyEncounter()
        } else {
            console.log(`You hear the wind through the trees. A little bird is singing in the distance.`)
        }
    }
function newEnemy() {
    let enemy = Math.floor(Math.random()*enemies.length)
    return enemies[enemy]
}

function enemyEncounter() {
    let currEnemy = newEnemy()
    let choice = ask.keyIn(player.name + " you have been ambushed by " + currEnemy.name + ". You turn away from your campfire and [a] attack, [f] flee, or [q] leave the game.", {limit: 'afq'})
    
    if (choice === "f") {
        let escape = Math.floor(Math.random() *2) + 1;
            if (escape === 1) {
            console.log(`You are truly wise, ${name}. You have escaped!`)
            } else {
                console.log ("It was a good try, but " + currEnemy.name + "caught up with you" );
                enemyAttack()
            }
    } else if (choice === "q") {
        console.log("That's a good idea. " + currEnemy.name + " will be here next time you visit. I'm sure you'll win!");
        isAlive = false;
    } else {
        fight()
    }
}

function fight() {
    let hit = Math.floor(Math.random)

}




// printInventory() <--- to show what's in inventory

