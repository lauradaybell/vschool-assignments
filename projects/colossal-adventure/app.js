const ask = require('readline-sync')

let isAlive = true
let hasWon = false

function Baddies(name, health, ap, drop) {
    this.name = name;
    this.health = health;
    this.ap = ap;
    this.drop = drop;
}
function Player(name, health, ap) {
    this.name = name;
    this.health = health;
    this.ap = ap;
}
function GameRewards(name, healthBonus) {
    this.name = name;
    this.healthBonus = healthBonus;
}


const name = ask.question('What is your name?')
const kerrigan = new Baddies('Kerrigan', 500, 20, "personalized plaque")
const shaoKahn = new Baddies('Shao Kahn', 600, 1, "painted music box")
const lichKing = new Baddies("The Lich King", 675, 75, "pink bike with a basket")
const deathwing = new Baddies('Deathwing', 400, 20, "rubber duckie")

const enemies = [kerrigan, shaoKahn, lichKing, deathwing]

const healingPotion = new GameRewards("healing potion", 200)
const sandwich = new GameRewards("peanut butter and jelly sandwich", 400)
const chocolateMilk = new GameRewards("chocolate milk", 150)
const jerky = new GameRewards("jerky", 100)
const soda = new GameRewards("soda", 300)

const rewards = [healingPotion, sandwich, chocolateMilk, jerky, soda]

const bag = []
const player = new Player(name, 700, 145)
console.log(`Hello ${name}! Welcome to the Burning Glade`)


while (isAlive && !hasWon) {
    let choice = ask.keyIn(`${name}, would you like to [w] walk, [i] check inventory and player stats, or [q] leave game?\n`, {limit: `wiq`})
    if(choice === 'w') {
        walk()
    } else if (choice === 'i'){
        checkInventory()
    } else {
        isAlive = false
        console.log(`${name} I didn't know you were a quitter. Oh the sadness!!!\n`)
    }
}

function walk() {
    let chance = Math.floor(Math.random()*3) 
        if(chance === 2) {
            enemyEncounter()
        } else {
            let game = Math.floor(Math.random() *3);
                if(game === 2) {
                    let newChoice = ask.keyIn(`As you look around, you see three rocks that look.... wrong.  Would you like to [i] inspect the rocks, or [w] keep walking?\n`, {limit: `iw`})
                    if (newChoice === 'i') {
                    rockGame()
                    } else {
                        console.log(`That's probably a good choice... Those rocks probably had germs...\n`)
                    }
                } else {
                    console.log(`You hear the wind through the trees. A little bird is singing in the distance.`)
                }
            }
            
        }


function newEnemy() {
    let enemy = Math.floor(Math.random()*enemies.length)
    return enemies[enemy]
}

function enemyEncounter() {
    let currEnemy = newEnemy()
    let choice = ask.keyIn(`${name} you have been ambushed by ${currEnemy.name}. You turn away from your campfire and [a] attack, [f] flee, or [q] leave the game.\n`, {limit: 'afq'})
    
    if (choice === "f") {
        flee(currEnemy)
    } else if (choice === "q") {
        console.log(`That's a good idea ${name}. ${currEnemy.name} will be here next time you visit. I'm sure you'll win!\n`);
        isAlive = false;
    } else {
        firstFight(currEnemy)
    }
}
function firstFight(baddie) {
        let hit = Math.floor((Math.random()) * player.ap);
        console.log (`${player.name} you wounded ${baddie.name}. His health is now ${baddie.health}\n`);
        // console.log(` before hit ${baddie.health}`)
        baddie.health -= hit;
        if (baddie.health > 0) {
            enemyAttack(baddie)
        } else {
            enemyDead(baddie)
        }
}
function fight(badGuy) {

    let choice = ask.keyIn(`Your health is now ${player.health} Would you like to [a] attack, or [f] flee?\n`, {limit: 'af'});
    if (choice === "a") {
        let hit = Math.floor((Math.random()) * player.ap);
        
        badGuy.health -= hit;
        if (badGuy.health <= 0) {
            enemyDead(badGuy)
        }else {
        console.log(`${player.name} you wounded ${badGuy.name}; ${badGuy.name} health ${badGuy.health}\n`);
        enemyAttack(badGuy)}
    } else {
        flee(badGuy)
    }    
    
}
function enemyAttack(nasty) {
    let hit = Math.floor((Math.random()) * nasty.ap);
    if (hit === 0) {
        console.log(`${nasty.name} missed you!!!\n`)
    } else console.log (`${nasty.name} wounded you!\n`)
    player.health -= hit
    if (player.health > 0) {
        fight(nasty)
    } else {
        playerDead(nasty)
    }
}

function playerDead(killer) {
    console.log(`${name} you were killed by ${killer.name}.  The world will forever mourn your passing.\n`)
    isAlive = false
}
function enemyDead(badGuy) {
    let dead = enemies.indexOf(badGuy);
    enemies.splice(dead, 1);
    bag.push(badGuy.drop);
    console.log(`${player.health}`)
    player.health += 300;
    console.log(`${player.health}`)
    console.log (`You killed ${badGuy.name}!!! You have gained 300 health and ${badGuy.drop} was added to your inventory.\n`)
    if (enemies.length === 0) {
        console.log(`${name} you have defeated all the threats in the Burning Glade!  The birds and squirels can now live in peace.  They will praise your name forever!\n`)
        hasWon = true
    } else {
        console.log 
    }
}
function checkInventory(){
    console.log(`${name} is currently playing- current health is ${player.health}`)
    console.log(bag)
    
}
function flee(enemy) {
    let escape = Math.floor((Math.random() *2) + 1);
            if (escape === 1) {
            console.log(`You are truly wise, ${name}. You have escaped!\n`)
            } else {
                console.log (`It was a good try, but ${enemy.name} caught up with you\n`);
                enemyAttack(enemy)
            }
}


function rockGame() {
    let rockChoice = ask.keyIn(`As you inspect the rocks more closely, you see that they are different color and each has a different amount of light emitting from its surface.  You somehow understand that you'll only get one chance...\n Will you pick up the [b] blue rock, [g] green rock, or [r] red rock?\n`, {limit: `bgr`})
    let chance = Math.floor(Math.random() * 3);
         if (chance === 2) {
             getReward(rockChoice)
         } else {
             console.log(`The rock burns your hand as you pick it up.  You quickly drop it and continue on your quest.\n`)
         }
    
}

function getReward(rock) {
    let object = Math.floor(Math.random() * rewards.length)
    console.log(`You feel drawn to ${rock}.  As you pick it up it transorms into your hand and becomes ${object}\n`)
    bag.push(object)
    return rewards[reward]
}
// integerate a way to use the items. 
