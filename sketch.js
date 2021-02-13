var canvas;
var music;
var box1;
var box2;
var box3;
var box4;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,200,100,20)
    box1.shapeColour= rgb(255,128,0)
    
    box2 = createSprite(250,200,100,20)
    box2.shapeColour= rgb(255,0,0)
    
    box3 = createSprite(300,200,100,20) 
    box3.shapeColour= rgb(0,128,0)
    
    box4 = createSprite(350,200,100,20)
    box4.shapeColour= rgb(0,0,100)

    striker = createSprite()
   
    
    


  

}

function draw() {
    background(rgb(169,169,169));
        

    drawSprites();

    
}
