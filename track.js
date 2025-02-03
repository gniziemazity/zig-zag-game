class Track {
    constructor(left, top, num, shortSide, longSide) {
        this.left = left;
        this.top = top;
        this.shortSide = shortSide;
        this.longSide = longSide;
        this.score = 0;

        this.rectangles = [];
        this.index = 0;
        while(this.index < num) {
            this.enqueueRectangle();
        }
    }

    enqueueRectangle() {
        let adj = (this.longSide - this.shortSide) * Math.random();
        if (this.index % 2 == 0) {
            const [width, height] = [this.longSide + adj, this.shortSide];
            this.rectangles.push(new Rectangle(this.left, this.top, width, height));
            this.left += width;
        } else {
            const [width, height] = [this.shortSide, this.longSide + adj];
            this.rectangles.push(new Rectangle(this.left, this.top, width, height));
            this.top += height;
        }
        this.index ++;
    }

    dequeueRectangle() {
        this.rectangles.shift();
    }

    adjustFor(player) {
        for (let i = 0; i < this.rectangles.length; i++) {
            const rect = this.rectangles[i];
            if (rect.contains(player)) {
                if (i > this.rectangles.length / 2) {
                    this.dequeueRectangle();
                    this.enqueueRectangle();
                    if (this.score % 11 == 0)
                        player.moreSpeed();
                    else if (this.index % 19 == 0)
                        player.lessSpeed();
                    return;
                }
            }
        }
    }

    contains(player) {
        let isOnTrack = false;
        for (const rect of this.rectangles) {
            if (rect.contains(player)) {
                if (rect.isScore(player))
                    this.score++;
                isOnTrack = true;
                break;
            }
        }
        player.collision = !isOnTrack;
        return isOnTrack;
    }

    draw(ctx) {
        for (const rect of this.rectangles) {
            rect.draw(ctx);
        }
    }
}