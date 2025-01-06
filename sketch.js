
var asteroid=[];
var spiderman;
var snow=[];
var shotFrame=0
var ground
var score=0; 
var heart=4;
var hp=100
var boom;
var game;
var restart;
var over;
var frames=10
var isGameActive = 0;
var isGam=false;
var currentQuestion;
var canShoot = false;
var playerAnswer = "";
var restartInGame
var menu
var menu2
var menu3
var menuInGame

var spidermanImg;
var asteroidImg;
var asteroidImg2
var bgCityImg;
var bgCity2Img
var bgCity3Img
var snowImg;
var heartImg;
var boomImg;
var gameOverImg;
var restartImg;
var overImg;
var skyImg
var menuImg
var hardImg



function preload() {
  
  spidermanImg = loadImage('image/marvel.png');
  asteroidImg = loadImage('image/asteroid.png');
  asteroidImg2 = loadImage('image/asteroid2.png')
  bgCityImg = loadImage('image/City.png');
  bgCity2Img = loadImage('image/City2.avif')
  bgCity3Img = loadImage('image/City3.webp')
  snowImg = loadImage('image/Snow.png');
  heartImg = loadImage('image/Heart.png');
  boomImg = loadImage('image/Boom.png');
  gameOverImg = loadImage('image/game.png');
  restartImg = loadImage('image/restart.png')
  overImg = loadImage('image/Over.jpg')
  skyImg = loadImage('image/Sky.jpg')
  menuImg = loadImage('image/menu.webp')
  hardImg = loadImage('image/Hard.avif')
}

function setup() {
  createCanvas(1000, 800);  

  textSize(32);
  fill(25);
  
  over = createSprite(500,400,200,200);
  over.addImage(overImg);
  over.scale=2;
  over.visible=false;
  

  spiderman = createSprite(500, 600, 40, 40);  
  spiderman.addImage(spidermanImg);
  spiderman.setCollider("rectangle", 0,0, 400, 400); 

  ground = createSprite(500,730,1000,20);
  ground.setCollider("rectangle",0,30,1000,20);
  ground.visible=false;

  menu = createSprite(500,550,100,100)
  menu.addImage(menuImg);
  menu.scale=0.5;
  menu.visible = false;

  game = createSprite(500,100,40,40);
  game.addImage(gameOverImg);
  game.scale=0.5;
  game.visible=false;

  restart = createSprite(500,400,1000,1000);
  restart.addImage(restartImg);
  restart.scale=0.1;
  restart.visible=false;



  
  let newAsteroid = new Asteroid (800,750, asteroidImg);
  asteroid.push(newAsteroid);

 const canvas = document.querySelector('canvas');
  canvas.addEventListener('click', handleCanvasClick);
}

function draw(){
background(skyImg);

buttons()




if(isGameActive === 1) {
gameState()
} 
else if(isGameActive == 2){
  normalState()
} 
else if(isGameActive == 3){
  
hardState()
}

for (let i = 0; i < asteroid.length; i++) {
  asteroid[i].displayText(); 
}
Collide()

}

function buttons(){

  fill(0, 255, 0);
  rect(250, 500, 120, 100);
  fill(0);
  textSize(30)
  text("Easy", 277, 540);
  textSize(11)
  text("Recomended for",253,570)
  text("beginners in arabic",253,590)
  

  fill(255, 255, 0);
  rect(450, 500, 120, 100);
  fill(0);
  textSize(30)
  text("Normal", 461, 540);
  
  textSize(11)
  text("Recomended for",453,570)
  text("Intermediates in arabic",453,590)

  fill(255, 0, 0);
  rect(650, 500, 120, 100);
  fill(0);
  textSize(30)
  text("Hard", 675, 540);

  textSize(50)
  fill(0)
  text("THE ARABIC SPIDERMAN",width/5,100)

  
  textSize(11)
  text("Recomended for",653,570)
  text("Professionals in arabic",653,590)
  
}



function gameState() {    
 
  background(bgCityImg);
  textSize(37)
  text(`Score: ${score}`, 10, 30)
  

  for(let v = 0; v < heart; v++){
image(heartImg, 880 + v * 40 , 10, 30, 30);
  }

  Moving();
  Spawningeasy();
  Collide();
  fill(55, 55, 0);
  rect(300, 745, 500, 70)
  fill(500)
  text(`Type: ${playerAnswer}`, width/3.3 , height/1.02);
  gameIsOver()
  



drawSprites();
 
}

function normalState(){
  background(bgCity2Img)
  textSize(37)
  fill(300)
  text(`Score: ${score}`, 10, 30)
  

  for(let v = 0; v < heart; v++){
image(heartImg, 880 + v * 40 , 10, 30, 30);

  }
  fill(55, 55, 0);
  rect(300, 745, 500, 70)
  fill(500)
  text(`Type: ${playerAnswer}`, width/3.3 , height/1.02);
    Moving();
   
    Spawningnormal();
    Collide();
    isGameOverNormal()

    

  
  drawSprites()
  }
  function hardState(){
    background(hardImg)
    textSize(37)
    fill(200)
    text(`Score: ${score}`, 10, 30)
    

    fill(55, 55, 0);
  rect(300, 745, 500, 70)
  fill(0)
  text(`Type: ${playerAnswer}`, width/3.3 , height/1.02);
  
    for(let v = 0; v < heart; v++){
  image(heartImg, 880 + v * 40 , 10, 30, 30);
  
    }



  Moving();
  Spawninghard();
  Collide();
  isGameOverHard()
  
  drawSprites()
 
  }
  


function gameIsOver(){
 if (heart == 0){
  clear()

background(overImg);

fill(399)
textSize(30)
text(`Final Score  ${score}`, 400, 700);

game.visible=true;
restart.visible=true;
menu.visible=true;

spiderman.remove();

Removing();

 


drawSprites()

 }
}


function displayQuestion() {
  fill(255);
  textSize(24);
  text(currentQuestion.question, 100, 100);
  text("Type your answer and press ENTER", 100, 150);
  text(playerAnswer, 100, 200);
}


  //if (canShoot && key === ' ' && keyCode(32)) {
    //  Shoot();
      //let newSnow = Shoot();
     // snow.push(newSnow);
  //}


/*function checkAnswer(playerAnswer) {
  if (playerAnswer === currentQuestion.answer) {
      canShoot = true; 
      //currentQuestion = null; 
      playerAnswer = ""; 
  } else {
      
      playerAnswer = ""; 
      //currentQuestion = null; 
  }
}*/

function handleCanvasClick(event) {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;


  if (isGameActive === 0){
    if ( x >= 250 && x <= 370 && y >= 500 && y <= 600) {
      console.log("Easy button clicked!");
      isGameActive = 1;
    }
    if (x >= 450 && x <= 570 && y >= 500 && y <= 600) {
      console.log("Normal button clicked!");
      isGameActive = 2;
    }
    if (x >= 650 && x <= 770 && y >= 500 && y <= 600) {
      console.log("Hard button clicked!");
      isGameActive = 3;
    }
  }

  if (
    restart.visible &&
    x >= restart.position.x - restart.width * restart.scale / 2 &&
    x <= restart.position.x + restart.width * restart.scale / 2 &&
    y >= restart.position.y - restart.height * restart.scale / 2 &&
    y <= restart.position.y + restart.height * restart.scale / 2
  ) {
    console.log("Restart button clicked!");
    easyReset()
    normalReset()  
    hardReset()
    
    return;
  }

  if (
    menu.visible &&
    x >= menu.position.x - menu.width * menu.scale / 2 &&
    x <= menu.position.x + menu.width * menu.scale / 2 &&
    y >= menu.position.y - menu.height * menu.scale / 2 &&
    y <= menu.position.y + menu.height * menu.scale / 2
  ) {
    
    console.log("Menu button clicked!");
    easyReset()
    normalReset()
    hardReset()
    isGameActive=0;
    
    restart.visible = false;
    menu.visible = false;
  
  }


  }



function Collide(){

  for (let j = asteroid.length - 1; j >= 0; j-- ){
    if (asteroid[j].sprite.position.y + 100 / 2 >= ground.position.y - 10) { 
      asteroid[j].sprite.remove(); 
      asteroid.splice(j, 1);
      heart -= 1;  
    }
  }

  for (var i = snow.length - 1; i >= 0; i--) {
    for (var j = asteroid.length - 1; j >= 0; j--) {
      if (snow[i].sprite.overlap(asteroid[j].sprite)) {
      
        snow[i].sprite.remove();
        snow.splice(i, 1); 

        asteroid[j].sprite.remove();
        asteroid.splice(j, 1);
        
        score+=50
   

        break; 
      }
    }
  } 

}

function Moving(){

  if (keyIsDown(LEFT_ARROW) && spiderman.position.x>130) {
    spiderman.position.x -= 35; 
  }

  if (keyIsDown(RIGHT_ARROW) && spiderman.position.x<870) {
    spiderman.position.x += 35; 
  }

}




function Spawningeasy(){

if (frameCount %200 === 0){
Spawn()


}
}

function Spawningnormal(){

  if (frameCount %150 === 0){
  Spawn()
  
  
  }
  
}

function Spawninghard(){

  if (frameCount %70 === 0){
  Spawn()
  
  
  }
}

function Removing(){
  for(var b=snow.length-1; b>=0; b--){
    if (snow[b] && snow[b].sprite){
    
    snow[b].sprite.remove()
    snow[b].sprite.visible=false;
    snow.splice(b,1)
    
    }
    }
    snow = [];


    
    for(var c=asteroid.length-1; c>=0; c--){
      if (asteroid[c] && asteroid[c].sprite){
      asteroid[c].sprite.remove();
      asteroid[c].sprite.visible = false;
      asteroid.splice(c,1);
       }
      }
asteroid = [];
}



function isGameOverNormal(){
gameIsOver()
}

function isGameOverHard(){
  gameIsOver()
  }

  function easyReset(){
    if (isGameActive==1 && heart==0){
      heart = 3 
      score = 0
      snow = [];
      asteroid = [];
      asteroidSpeed = 1
      
      isGameActive = 1
      
      spiderman = createSprite(500, 650, 40, 40);  
      spiderman.addImage(spidermanImg);
      
      game.visible = false;
      restart.visible = false;
      over.visible = false;
      menu.visible=false;

      loop();
        }

  }

  function normalReset(){

    if (isGameActive==2 && heart==0){
      heart = 3 
      score = 0
      snow = [];
      asteroid = [];
      asteroidSpeed = 1
      
      isGameActive = 2
      
      spiderman = createSprite(500, 650, 40, 40);  
      spiderman.addImage(spidermanImg);
      
      game.visible = false;
      restart.visible = false;
      over.visible = false;
      menu.visible=false;
      
      loop();
        }


  }
  function hardReset(){

    if (isGameActive==3 && heart==0){
      heart = 3 
      score = 0
      snow = [];
      asteroid = [];
      asteroidSpeed = 1
      
      isGameActive = 2
      
      spiderman = createSprite(500, 650, 40, 40);  
      spiderman.addImage(spidermanImg);
      
      game.visible = false;
      restart.visible = false;
      over.visible = false;
      menu.visible=false;
      
      loop();
        }


  }

