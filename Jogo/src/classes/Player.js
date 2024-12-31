class Player{

    constructor(canvasWidth, canvasHeight){
        this.width = 48 * 2;
        this.height = 48 * 2;
        this.velocity = 8;

        this.position = {
            x: canvasWidth/2 - this.width/2,
            y: canvasHeight - this.height - 30,
        };

        this.image = this.getImage("src/images/spaceship.png")
        this.engineImage = this.getImage("src/images/engine.png")
        this.engineSprites = this.getImage("src/images/engine_sprites.png")

        this.sx = 0
        this.framesCounter = 5
    }

    getImage(path){
        const image = new Image()

        image.src = path

        return image
    }

    moveLeft(){
        this.position.x -= this.velocity
    }
    
    moveRight(){
        this.position.x += this.velocity
    }

    draw(ctx){   
        
        ctx.drawImage(
            this.image, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        )
        
        ctx.drawImage(
            this.engineSprites, 
            this.sx,
            0, 
            48, 48,
            this.position.x,
            this.position.y + 3,
            this.width,
            this.height 
        )

        ctx.drawImage(
            this.engineImage, 
            this.position.x, 
            this.position.y + 2, 
            this.width, 
            this.height
        )

        this.update()
        
    }

    update(){

        if(this.framesCounter === 0){
        
            this.sx = this.sx === 96 ? 0 : this.sx + 48

            this.framesCounter = 5
            

        }

        this.framesCounter -- 

    }


}

export default Player 
