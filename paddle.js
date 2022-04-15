class Paddle {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    change_pos(event) {
        let rect = canvas.getBoundingClientRect();
        this.y = event.clientY - rect.top;
    }
   
    draw() {
        // center of rect is (x, y) of paddle
        ctx.beginPath();
        ctx.rect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
    }

    tick() {
        this.draw();
    }

}
