class Party {
    constructor (name, population) {
    this.name = name;
    this.population = population;
    }
    
}

const penguins = new Party ("Penguins", 1000000)
const communists = new Party ("Communists", 1000000)

let isAlive = true
let whoseTurn = ""

function firstAttack() {
   let turn = Math.floor(Math.random() *2)
   if (turn === 1) {
        let whoseTurn = communists;
       sendNuke(whoseTurn);
       
   } else {
       whoseTurn = penguins;
       sendNuke(whoseTurn);
       
   }
}

// const myTimer = setTimeout(() => {
//     if (isAlive = true) {
//         sendNuke(whoseTurn)
//     } else {clearTimeout(myTimer)}
//     }, 1000);

// let timer = setInterval(sendNuke(attacked), 1000)
  

function sendNuke(attacked) {
    let hitChance = Math.floor(Math.random() *2)
    if (hitChance === 1) {
        onMiss(attacked);
    } else {
        onHit(attacked)
    }
}

function onHit(attacked){
    let damage = Math.floor(Math.random() * 50000)
    let newPopulation =attacked.population -= damage
    if (newPopulation <= 0) {
        isAlive = false
        console.log(`The ${attacked.name} have been destroyed.`)
        // clearInterval(timer)
    } else {
    console.log (`The attack against ${attacked.name} came as a surprise- ${damage} lives were lost... `)
    console.log(`${attacked.name} ${attacked.population}`)
    takeTurns(attacked)
    }
}




function onMiss(attacked) {
    console.log(`The nuke was intercepted by a Himalayan swallow. The ${attacked.name} will live to fight another day!`)
    takeTurns(attacked)

    }

function takeTurns(attacked) {
    if (attacked === penguins) {
        sendNuke(communists)
    } else {
        sendNuke(penguins)
    }
}

firstAttack()