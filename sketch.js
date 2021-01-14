var db, dbref;
var PlayerCount = 0;
var GameState = 0;
var game, form, player;
var allPlayers;
var car1, car2, car3, car4;
var Cars = [];
var car1Img, car2Img, car3Img, car4Img, trackImg, groundImg;

function preload(){
    groundImg = loadImage("images/ground.png");

    trackImg = loadImage("images/track.jpg");

    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");

}



function setup(){
    createCanvas(displayWidth, displayHeight);

    db = firebase.database();

    game = new Game();
    
    game.getState();

    game.start();


}

function draw (){
    
    if(PlayerCount === 4){
        game.update(1);
    }

    if(GameState === 1){
        clear();
        game.play();
    }
    
    if(GameState === 2){
        game.end();
    }

    console.log(GameState)
}


