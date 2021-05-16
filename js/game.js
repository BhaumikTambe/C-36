class game{
    constructor(){}
    getState()
    { var gameStateRef = dataBase.ref("gameState") 
    gameStateRef.on("value", function(data){ 
        gameState = data.val() 
    })

 }

 start()
 { if(gameState === 0){
      Form = new form();
       Form.display();
     } 
    }

}