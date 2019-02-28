import inputHandler from './input';
import Paddle from './paddle';
import Ball from './ball';
import Brick from './brick';
import { buildLevel, level1, level2, level3, level4} from './levels';
// console.log(level1)
const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4,
}
export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.gamestate = GAMESTATE.MENU;
        this.ball = new Ball(this)
        this.paddle = new Paddle(this);
        this.gameObject = [];
        this.bricks = [];
        new inputHandler(this.paddle, this);
        this.lives = 3;
        this.levels = [level1, level2, level3, level4];
        this.currentLevel = 0;
    }
    
    start(){
        if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();
        this.gameObject = [this.ball, this.paddle];
        this.gamestate = GAMESTATE.RUNNING;
    }
    update(daltaTime) {
        if(this.lives === 0) this.gamestate = GAMESTATE.GAMEOVER;
        if(
            this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
        ) return;
        if(this.bricks.length === 0){
            this.currentLevel++;
            this.gamestate = GAMESTATE.NEWLEVEL;
            this.start();
        }
        [...this.gameObject, ...this.bricks].forEach((object)=>object.update(daltaTime))
        
        this.bricks = this.bricks.filter(brick => !brick.markForDeletion)
    }
    draw(ctx) {
        [...this.gameObject, ...this.bricks].forEach((object)=>object.draw(ctx));
        if(this.gamestate === GAMESTATE.PAUSED){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            ctx.fill()
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }
        if(this.gamestate === GAMESTATE.MENU){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill()
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("PRESS SPACE BART TO START GAME", this.gameWidth / 2, this.gameHeight / 2);
        }
        if(this.gamestate === GAMESTATE.GAMEOVER){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fill()
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
        }
    }
    togglePause(){
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }else{
            this.gamestate = GAMESTATE.PAUSED;
        }

    }
}