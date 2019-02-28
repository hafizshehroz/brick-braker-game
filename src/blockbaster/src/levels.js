import Brick from './brick'
export function buildLevel(game, level){
    let bricks = [];
    console.log(level)
    level.forEach((row, rowIndex)=>{
        row.forEach((brick, brickIndex)=>{
            if(brick === 1){
                let position = {
                    x: 80 * brickIndex,
                    y: 75 + 24 * rowIndex,
                }
                bricks.push(new Brick(game, position))
            }
        })
    })
    
    return bricks;
    
}


export let level1 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

]
export let level2 = [
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1],   

]
export let level3 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],   

]
export let level4 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],   
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],   
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],   

]