var canvas;
var music;
var b1,b2,b3,b4;
var ball,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     b1=createSprite(0,580,360,30);
     b1.shapeColor=rgb(0,0,255);
    b2 =createSprite (295,580,200,30);
    b2.shapeColor=rgb(255,128,0)
    b3=createSprite(515,580,200,30);
    b3.shapeColor=rgb(153,0,76);
    b4=createSprite(740,580,220,30);
    b4.shapeColor=rgb(0,100,0);

    ball=createSprite(random(20,750),100,40,40);
    ball.shapeColor=rgb(255,255,255);
    ball.velocityY=9;
    ball.velocityX=4;
    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(istouching(ball,b1)){
        bounce(ball,b1);
        ball.shapeColor=rgb(0,0,255);
        music.play();
    }
    if(istouching(ball,b2)){
        bounce(ball,b2);
        ball.shapeColor=rgb(255,128,0);
        ball.velocityY=0;
         ball.velocityX=0;
    }
    if(istouching(ball,b3)){
        bounce(ball,b3)
        ball.shapeColor=rgb(153,0,76);
       
    }
    if(istouching(ball,b4)){
        bounce(ball,b4);
        ball.shapeColor=rgb(0,100,0);
      
    }

drawSprites();
}
