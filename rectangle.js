class Rectangle {
    constructor(x, y, width, height) {
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.newScore = false;
       this.limitW = width + x;
       this.limitH = height + y;
    }

    isScore(player)
    {
        return (this.newScore ? false : (this.width > this.height ? this.newScore = (player.x > this.limitW + player.radius) : this.newScore = (player.y > this.limitH + player.radius)));
    }
    
    contains(player) {
        const dif = Math.min(this.width, this.height);
        const px = this.x + player.radius;
        const py = this.y + player.radius;
        const pw = px + this.width + (this.width > this.height ? dif : 0) - (player.radius * 2);
        const ph = py + this.height + (this.width > this.height ? 0 : dif) - (player.radius * 2);

        return (player.x >= px && player.y >= py && player.x <= pw && player.y <= ph);
    }
    
    draw(ctx) {   
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width + (this.width > this.height ? 1 : 0), this.height + (this.width > this.height ? 0 : 1));
    }
}