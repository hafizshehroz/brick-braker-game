import React, { Component } from 'react';
import './assets/css/style.css';
import Game from './src/game';

class BlockBaster extends Component {
    componentDidMount() {
        let canvas = this.refs.gameScreen;
        let ctx = canvas.getContext('2d');
        const GAME_WIDTH = 800;
        const GAME_HEGITH = 600;
        
        let game = new Game(GAME_WIDTH, GAME_HEGITH);
        let lastTime = 0;


        function gameLoop(timestamp){
            let daltaTime = timestamp - lastTime;
            lastTime = timestamp;

            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEGITH);

            game.update(daltaTime)
            game.draw(ctx);

            requestAnimationFrame(gameLoop)
        }
        // gameLoop();
        requestAnimationFrame(gameLoop)
    }
    render(){
        return(
            <div>
                {/* <img src={ballImage} id="img_ball" ref="img_ball" alt="" /> */}
                <canvas id="gameScreen" width="800" height="600" ref="gameScreen" ></canvas>
                
            </div>
        )
    }
}
export default BlockBaster;