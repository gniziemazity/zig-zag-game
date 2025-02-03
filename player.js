class Player {
    constructor(x, y, radius, speed = 2) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.direction = "right";
        this.speed = speed;
        this.collision = false;
    }

    move() {
        if (this.direction == "right") {
            this.x += this.speed;
        } else {
            this.y += this.speed;
        }
    }

    moreSpeed(value)
    {
        this.speed = this.speed < 20 ? this.speed + 1 : this.speed;
    }

    lessSpeed(value)
    {
        this.speed = this.speed > 2 ? this.speed - 1 : this.speed;
    }

    changeDirection() {
        this.direction = this.direction == "right" ? "down" : "right";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = (this.collision ? "gray" : "red");
        ctx.fill();
    }
}