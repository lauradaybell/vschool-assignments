const book= {
    cover: "red",
    lines: "narrow",
    holes: 3,
    written: true,
    free: function (used) {
        return used / 100
    },
}

const mug = {
    color: "gray",
    isHot: true,
    teaBags: 1,
    isWarm: function (hoursInMug) {
        if (hoursInMug <= 3) {
            return "HOT"
        } else {
            return "Not too hot"
        }
    },
}

const phone = {
    case: "blue",
    batteryHours: 12,
    alarm: "annoying",
    battery: function (uncharged) {
        if (uncharged >= 6) {
            return "Charge Me!!!!"
        }
    }   
}

const laptop = {
    owner: "Laura",
    brand: "MacBook",
    speed: "fast",
    userError: function (userSkillWeeks) {
        if (userSkillWeeks <= 2) {
            return "Just cry now... "
        }
    }
}

const glasses = {
    frame: "black",
    shape: "oval",
    prescription: "medium",
    isBlind: function (sightDistance) {
        if (sightDistance <= 60) {
            return "get new glasses now"
        }
    }
}

const giraffe = {
    heightInInches: 6,
    hasHanger: true,
    isLookingAtMe: true,
    needsMoved: function (creepyQuota) {
        if (creepyQuota >= 2) {
            return "move the giraffe..."
        }
    }
}

const chair = {
    frameColor: "White",
    numberOfArms: 2,
    back: "mesh",
    isComfortable: function (comfort) {
        if (comfort === "yes") {
            return "YAY!!!"
        } else if (giraffe.needsMoved(5)) {
            return "Move the giraffe and go for a walk!!"
        } else {
            return "Go for a walk"
        }
    }
}



const marker = {
    inkColor: "blue",
    lidColor: "blue",
    bodyColor: "white",
    isDry: function(lidOnorOff) {
        if (lidOnorOff === on) {
            return "is not dry"
        } else {
            return "put on the lid"
        }
    }
}

const backpack = {
    color: "gray",
    zippers: 7,
    owner: "Laura",
    closeIt: function (zippersOpen) {
        if (zippersOpen = true) {
            return "close the backpack"
        }
    }
}

const trashCan = {
    hasLiner: true,
    color: "black",
    size: "small",
    empty: function (fullSpace) {
        if (fullSpace >= 50) {
            return "Take out the trash"
        }
    }
}

console.log(chair.isComfortable("no"))

const items = []

function (array) {
    items.push (book, mug, phone, laptop, glasses, giraffe, chair, backpack, trashCan)
}


