// class Player {
//     constructor(startX, startY) {
//         this.x = startX;
//         this.y = startY;
//     }
    
//     move(dx, dy) {
//         this.x += dx;
//         this.y += dy;
//     }
// }

class Actor {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    distanceTo(otherActor) {
        let dx = otherActor.x - this.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }
}

class Player extends Actor {
    constructor(startX, startY){
        super(startX, startY);
        this.hp = 100;
    }
}

class Enemy extends Actor {
    attack(player) {
        if (this.distanceTo(player) < 4) {
            player.hp -= 10;
            return true;
        } else {
            return false;
        }
    }
}


// // The new instance Player called player1
// let player1 = new Player(1, 1);

// console.log(player1.x);
// console.log(player1.y);

// // Calling class method (constructor) with dot notation
// player1.move(2, 3);

// console.log(player1.x);
// console.log(player1.y);

let player = new Player(1,2);
let enemy = new Enemy(3, 4);
console.log(player.hp);