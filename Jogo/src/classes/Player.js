import { PATH_SPACESHIP_IMAGE } from "../utils/constants.js";

class Player{

    constructor(canvasWidth, canvasHeight){
        this.width = 100;
        this.height = 100;
        this.velocity = 6

        this.position = {
            x: canvasWidth/2 - this.width/2,
            y: canvasHeight - this.height - 30,
        };

        this.imagem = this.getImage(PATH_SPACESHIP_IMAGE)
    }

      

    getImage(path){
        const image = new Image()

        image.src = ""

        return image
    }

    moveLeft(){
        this.position.x -= this.velocity
    }
    
    moveRight(){
        this.position.x += this.velocity
    }

    draw(ctx){   
        ctx.fillStyle = "Red"
        ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height 
        )
    }

}

export default Player;