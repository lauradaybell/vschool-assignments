class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = true;
    }
        setName() {
            if (namePicked === "Mario") {
                namePicked = "Luigi"
            } else {
                namePicked = "Mario"
            }
        }
        random() {
            let num = Math.floor(Math.random() * 2) 
                if (num === 0) {
                    luigi.gotHit()
                } else if (num === 1){
                    luigi.gotPowerup()
                } else {
                    luigi.addCoin()
                }
            this.print(luigi)
        }
        gotHit() {
            if (this.status === "Powered Up") {
                this.status = "Big"
                console.log(`You got hit!!! Ouch!`)
            } else if (this.status === "Big") {
                this.status = "Small"
                console.log(`You got hit!!! Ouch!`)
            } else if (this.status === "Small") {
                this.status = "Dead";
                this.gameActive = false
                console.log(`That hurt... You died... Oh, the sadness!!!`)
                // clearInterval(myInterval())
            }
        }
        
        gotPowerup() {
            if (this.status === "Small") {
                this.status = "Big";
                console.log(`You powered up!!!`)
            } else if (this.status === "Big") {
                this.status = "Powered Up"
                console.log(`You powered up!!!`)
            } else if (this.status === "Powered Up") {
                this.hasStar= true;
                console.log (`You got a star!!`)
            } 
        }
       
        addCoin() {
                this.totalCoins = totalCoins += 1
            }
        print() {
                console.log(`
                *${this.name}
                *${this.totalCoins}
                *${this.status}
                *${this.hasStar}`)
        }
    }
    
    
 

const luigi = new Player("Luigi", 2, "Small",  false)
const mario = new Player("Mario", 3, "Big", false)


const myInterval = setInterval(() => {
        let num = Math.floor(Math.random() * 2) 
            if (num === 0) {
                luigi.gotHit()
            } else if (num === 1){
                luigi.gotPowerup()
            } else {
                luigi.addCoin()
            }
        luigi.print(luigi);
        if (luigi.gameActive === false) {
            clearInterval(myInterval)
        }
    }, 1000)

// clearInterval(interval, gameActive === false)