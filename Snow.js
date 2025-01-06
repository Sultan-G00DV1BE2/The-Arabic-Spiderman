class Snow {
constructor(x, y, Img, length){
this.sprite = createSprite(x, y, 100, length);

this.sprite.addImage(Img);
this.sprite.scale = 0.029;
this.sprite.height = length;
this.sprite.velocityY = -44;


}
}



function Shoot(){

    
    let snowLength = 1;
const newSnow = new Snow(spiderman.position.x+5, spiderman.position.y-120,snowImg, snowLength)
return newSnow;
}