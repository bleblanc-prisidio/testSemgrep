class Player {
    constructor(startX, startY) {
        this.startY = startY;
        this.startX = startX;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

// The new instance Player called player1
let player1 = new Player(1, 1);

console.log(player1.x);
console.log(player1.y);