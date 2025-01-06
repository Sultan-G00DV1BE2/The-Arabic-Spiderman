const questions = [
  { question: "من الخبر: القمر بعيد", answer: "بعيد" },
  { question: "من الفاعل: اكله احمد الطعام", answer: "احمد" },
  { question: "من المبتد: الشمس كبير", answer: "الشمس" }
];

//let playerAnswer= "";

let currentQuestions = "";  
let asteroidSpeed=1;
class Asteroid {
    constructor(x, y,Img, text="Arabic") {
      this.sprite = createSprite(x, y, 10000, 10000);
      this.sprite.setCollider("rectangle", 0, 0, 5700, 5900); 
      this.sprite.addImage(Img);
      this.sprite.scale = 0.029;
      //this.sprite.velocityY = 40
      //this.sprite.rotationSpeed = random(-10,10)
      this.text = text;

     
    }

    remove() {
    this.sprite.remove(); 

  }
 


  displayText(){
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text(this.text, this.sprite.position.x, this.sprite.position.y - 20);
    //text(this.text, width/2, 50)
    if(currentQuestions.question){
      fill(0);
      textAlign(CENTER);
      textSize(30);
      text(currentQuestions.question, width / 2, 50);
    }
  }






}


 
function Spawn(){
    
  let x = random(100,900)
  //let x =(500) 
  
let randomQuestion = random(questions)
currentQuestions = randomQuestion; 
const newAsteroid = new Asteroid(x,5,asteroidImg, randomQuestion.question);
newAsteroid.sprite.velocityY = asteroidSpeed;
asteroid.push(newAsteroid);

asteroidSpeed += 1.5;

  }

  function checkAnswers(playerAnswer) {
    const correctAnswer = currentQuestions.answer.trim();
    const trimmedPlayerAnswer = playerAnswer.trim();

    console.log("Correct Answer:", correctAnswer);
    console.log("Player Answer", trimmedPlayerAnswer);

    if (trimmedPlayerAnswer === correctAnswer){
      console.log("correct");
      return true;
    }
    else{
      console.log("incorrect")
      return false;
    }

}

function keyPressed() {
 
  if (keyCode >= 65 && keyCode <= 90) { 
      playerAnswer += key; 
  } else if (keyCode === BACKSPACE) {
      playerAnswer = playerAnswer.slice(0, -1); 
  } 
  else if (keyCode === ENTER) {
      const isCorrect = checkAnswers(playerAnswer.trim())
     
  
  if (isCorrect){
score+=10
collision();
let newSnow = Shoot();
snow.push(newSnow);
console.log("Player Answer:", playerAnswer.trim());

  }
  else{
score -= 50

  }
  console.log("Player Answer:", playerAnswer.trim());
  playerAnswer="";
   }
  }

  function collision(){
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