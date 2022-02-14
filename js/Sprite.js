export default class Sprite{

    //Modela algo que se move na tela
    constructor({x=100,y=100,w=18,h=32,color="orangered",vx=0,vy=0}={}){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.color = color;

    }

    desenhar(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);

    }

    controlar(dt){

    }

    mover(dt){
        this.x = this.x + this.vx*dt;
        this.y = this.y + this.vy*dt;
    }

    passo(dt){
        this.controlar(dt);
        this.mover(dt);
    }
    colidiuCom(outro){
        return !(
            this.x > outro.x + outro.w ||
            this.x + this.w < outro.x ||
            this.y > outro.y + outro.h ||
            this.y + this.h < outro.y
        );
    }
}  