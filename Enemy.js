class Enemy{
constructor(){
this.body=createSprite(800, random(200,700), 20,20)
this.image = loadImage("eel.png")
this.body.addImage("eelimg", this.image)
this.body.scale = 0.2
}
move() {
this.body.velocityX = (-3,-6)
this.body.velocityY = (-3,3)
}
}