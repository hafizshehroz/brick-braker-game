import  { detectCollision } from './collisionDetection'
import brickImage from '../assets/images/brick.png';
export default class Brick {
    constructor(game, position) {
        this.game = game;
        
        this.position = position;
        this.width = 80;
        this.height = 24;
        
        this.markForDeletion = false;
    }
    update(){
        if(detectCollision(this.game.ball, this)){
           this.game.ball.speed.y = -this.game.ball.speed.y; 
           this.markForDeletion = true;
        }
    }
    draw(ctx){
        let imgBrick = new Image();
        imgBrick.src = brickImage
        ctx.drawImage(imgBrick, this.position.x, this.position.y, this.width, this.height)
    }
}