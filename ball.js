class Ball {

    constructor(x, y, r, dx, dy) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
    }
    
    tick() {
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

    draw() {
        // center point of circle is (x, y) of ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
    }

    paddle_collision_detect(paddle) {
        if (paddle.y - paddle.height/2 - this.r < this.y && this.y < paddle.y + paddle.height/2 + this.r && 
            (this.dx < 0 ? 
                this.x > paddle.x - paddle.width/2 && this.x < paddle.x + paddle.width/2 + this.r : 
                this.x < paddle.x + paddle.width/2 && this.x > paddle.x - paddle.width/2 - this.r)) {
            this.dx *= -1;
            this.dy = 6*(this.y - paddle.y)/paddle.height;
        }
    }

    wall_collision_detect() {
        if (this.y - this.r < 0) this.dy *= -1;
        if (this.y + this.r > canvas.height) this.dy *= -1;
    }

    score_detect() {
        if (this.x - this.r < 0) { // player 2 scored
            this.x = canvas.width/2; 
            this.y = canvas.height/2; 
            this.dx = Math.abs(this.dx);
            this.dy = 0;
            score2++;

            let score2_element = document.getElementById("score2");
            score2_element.innerText = score2;
        } 
        if (this.x + this.r > canvas.width) { // player 1 scored
            this.x = canvas.width/2; 
            this.y = canvas.height/2; 
            this.dx = -Math.abs(this.dx);
            this.dy = 0;
            score1++;

            let score1_element = document.getElementById("score1");
            score1_element.innerText = score1;
            score1_element.style.margin = `0 ${400 - score1.toString().length*42 - 15}px`;
        }
    }

}
