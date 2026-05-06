let images = [];
let currentIndex = 0;

function preload() {
    images [0] = loadImage("img/img1.png");
    images [1] = loadImage("img/img2.png");
    images [2] = loadImage("img/img3.png");
    images [3] = loadImage("img/img4.png");
    images [4] = loadImage("img/img5.png");
    images [5] = loadImage("img/img6.png");
    images [6] = loadImage("img/img7.png");
}
function setup(){
    createCanvas(1000,1000);
   
}

function draw() {
    background(0);




let img = images[currentIndex];
if (img) {
        image(img, 0, 0, width, height);
    }
}

function keyPressed() {
    if (keyCode === 65) { // A
        currentIndex = (currentIndex + 1) % images.length;
    }

    if (keyCode === 76) { // L
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
    }
}