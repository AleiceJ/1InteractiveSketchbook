let images = [];
let currentIndex = 0;

function preload() {
    images [0] = loadImage("img/img.png");
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

