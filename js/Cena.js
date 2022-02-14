export default class Cena{
    //Desenha elementos na tela em uma animação.
    constructor(canvas, assets=null){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.sprites = [];
        this.aRemover = [];
        this.t0 = 0;
        this.dt = 0;
        this.idAnim = null;
        this.assets = assets;
        this.mapa = null;
    }
    desenhar(){
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        
        this.mapa?.desenhar(this.ctx);

        if(this.assets.acabou()){
            for (let s = 0; s < this.sprites.length; s++) {
            const sprite = this.sprites[s];
            sprite.desenhar(this.ctx);

        }
        }
        
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText(this.assets?.progresso(),10,20);
    }

    adicionar(sprite){
        this.sprites.push(sprite);
    }

    passo(dt){
        for (const sprite of this.sprites) {
            sprite.passo(dt);
        }
    }

    quadro(t){
        this.t0 = this.t0 ?? t;
        this.dt = (t-this.t0)/ 1000;
        this.passo(this.dt);
        this.desenhar();
        this.checaColisao();
        this.removeSprites();
        this.iniciar();
        this.t0 = t;
    }

    iniciar(){
        this.idAnim = requestAnimationFrame(
            (t)=>{this.quadro(t); }
        );

    }

    parar(){
        cancelAnimationFrame(this.idAnim);
        this.t0 = null;
        this.dt = 0;
    }

    checaColisao(){

    }
    quandoColidir(){

    }
    removeSprites(){

    }

    configuraMapa(mapa){
        this.mapa = mapa;
        this.mapa.cena = this;
    }
}