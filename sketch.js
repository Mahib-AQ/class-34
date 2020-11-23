var ball;
var database, position;
function setup() {
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";

    database = firebase.database();

    var databaseRef = database.ref('Ball/Position');
    databaseRef.on('value', readPosition, showError);



}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        writePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
        writePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +1);
    }


    drawSprites();
}



function readPosition(data) {

    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function showError() {

    console.log("There is some issue!Sorry for the inconvinience");

}

function writePosition(x, y) {

    var options = {
        "x": position.x + x,
        "y": position.y + y

    }

    database.ref("Ball/Position").set(options);


}
