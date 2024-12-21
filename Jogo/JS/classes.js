export class Sprite{

    constructor(x, y, radius, color ){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    
}

export class Player extends Sprite{
    
    constructor(x, y, radius, color){
        super(x, y, radius, color)
    }
    
    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = 'black'
        ctx.strokeStyle = this.color
        ctx.lineWidth = 3;
        ctx.stroke()
        ctx.fill()


    }

}