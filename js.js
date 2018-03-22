var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ball = {
	height: 50,
	width: 50,
	x: 200,
	y: 200,
	color: "red"
}

var moveLeft = moveRight = moveTop = moveBottom = false;

function moveBall(){
	if (moveLeft == true && ball.x > 0) {
		ball.x -= 5;
	} 

	if (moveRight == true && ball.x + ball.width < canvas.width) {
		ball.x += 5;
	}

	if (moveTop == true && ball.y > 0) {
		ball.y -= 5;
	}

	if (moveBottom == true && ball.y + ball.height < canvas.height) {
		ball.y += 5;
	}
}

window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
	var key = e.keyCode;
	switch (key) {
		case 37:
			moveLeft = true;
			break;
		case 39:
			moveRight = true;
			break;
		case 38:
			moveTop = true;
			break;
		case 40:
			moveBottom = true;
			break;
	}
}

function keyUpHandler(e){
	var key = e.keyCode;
	switch (key) {
		case 37:
			moveLeft = false;
			break;
		case 39:
			moveRight = false;
			break;
		case 38:
			moveTop = false;
			break;
		case 40:
			moveBottom = false;
			break;
	}
}

function colide() {
	if (ball.x <= 0) {
		ball.color = "blue";
	} 

	else if (ball.x + ball.width >= canvas.width) {
		ball.color = "blue";
	} 

	else if (ball.y <= 0) {
		ball.color = "blue";
	}

	else if (ball.y + ball.height >= canvas.height) {
		ball.color = "blue";
	} 

	else {
		ball.color = "red";
	}
}

function update(){
	moveBall();
	colide();
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = ball.color;
	ctx.fillRect(ball.x, ball.y, ball.height, ball.width);
}

function loop(){
	window.requestAnimationFrame(loop, canvas);
	update();
	draw();
}

loop();