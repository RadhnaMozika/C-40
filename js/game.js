class Game {
    constructor(){

    }


    getState(){

        dbref = db.ref("gameState");
        dbref.on("value", function (data){GameState = data.val();} );
    }

    update(state){
        db.ref("/").update({"gameState" : state});
    }

    async start(){
        if(GameState === 0){
            player = new Player();
            
            var countRef = await db.ref("playerCount").once("value");
            if(countRef.exists()){
                PlayerCount = countRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();

            car1 = createSprite(100, 200);
              car1.addImage(car1Img);
            car2 = createSprite(300, 200);
              car2.addImage(car2Img);
            car3 = createSprite(500, 200);
              car3.addImage(car3Img);
            car4 = createSprite(700, 200);
              car4.addImage(car4Img);

            Cars = [car1, car2, car3, car4];

        }
    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if(allPlayers != undefined){
            var positionX = 450;

            var positionY, index = 0;

            background(groundImg);
            image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);

            for(var p in allPlayers){
                
                positionY = displayHeight - allPlayers[p].Distance;
                
                Cars[index].x=positionX;
                Cars[index].y=positionY;

                

                if(index===player.index-1){
                    fill("red");
                    strokeWeight(2);
                    ellipse(positionX, positionY, 80, 80);
                    camera.position.x = displayWidth/2;
                    camera.position.y = Cars[index].y;
                }
                else{
                    Cars[index].shapeColor = "yellow";
                }

                positionX = positionX+300;
                index++;
            }
            
        }
        if(keyDown(UP_ARROW) && player.index != null){
            player.distance=player.distance+50;
            player.updateName();
            
        }

        if(player.distance>5300){
            GameState = 2;
            
        }
        drawSprites();
    }

    end(){
        console.log("Game has Ended");
    }
    
}