const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function background() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(canvas.width/2-3, 0, 6, canvas.height);
    ctx.fillStyle = "#909090";
    ctx.fill();
    ctx.closePath();
}

let score1 = 0;
let score2 = 0;

// paddle 1 and paddle 2 for player 1 and player 2
let paddle1 = new Paddle(20, 225, 10, 100);
let paddle2 = new Paddle(780, 225, 10, 100);
let ball = new Ball(canvas.width/2, canvas.height/2, 10, -4, 0);

function tick() {
    background();

    paddle1.tick();

    paddle2.y += (ball.y - paddle2.y > 40 ? 1 : ball.y - paddle2.y < 40 ? -1 : 0)*2 // player 2 bot

    paddle2.tick();

    ball.paddle_collision_detect(ball.dx < 0 ? paddle1 : paddle2);
    ball.wall_collision_detect();
    ball.score_detect();
    ball.tick();
}

setInterval(tick, 10);
