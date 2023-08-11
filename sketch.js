function setup() {
    createCanvas(500, 881);
    fill(0);
    noStroke();
    rectMode(CENTER);
    frameRate(70);
    noiseDetail(2, 0.9);
}

function draw() {
    background(255);
    for (var x = 30; x < width; x += 10) {
        for (var y = 10; y < height; y += 10) {
            var n = noise(x * 0.005, y * 0.005, frameCount * 0.04);
            push();
            translate(x, y);
            rotate(TWO_PI * n);
            scale(10 * n);
            rect(3, 2, 1.5, 1.5);
            pop();
        }
    }
}