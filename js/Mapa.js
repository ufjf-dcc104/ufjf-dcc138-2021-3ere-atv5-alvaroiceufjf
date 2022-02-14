import AssetManager from "./AssetManager.js";
/*
const assetsMapa = new AssetManager();

assetsMapa.carregaImagem("parede","assets/parede.png");
assetsMapa.carregaImagem("fundo","assets/fundo.png");
assetsMapa.carregaImagem("chao","assets/chao.png");
*/
export default class Mapa {

    constructor(linhas=8,colunas=12,tamanho=32){
        this.LINHAS = linhas;
        this.COLUNAS = colunas;
        this.SIZE = tamanho;
        this.tiles = [];
        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l]=[];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c]=0;         
            }
        }
        this.cena = null;
    }


    desenhar(ctx){
        /*
        pattern1=ctx.createPattern(assetsMapa.img(parede),repeat);
        pattern2=ctx.createPattern(assetsMapa.img(fundo),repeat);
        pattern3=ctx.createPattern(assetsMapa.img(chao),repeat);
        */
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch(this.tiles[l][c]){
                    case 1:
                    ctx.fillStyle = "grey";
                    ctx.fillRect(c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "black";
                    ctx.strokeRect(c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                    case 2:
                    ctx.fillStyle = "red";
                    ctx.fillRect(c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "black";
                    ctx.strokeRect(c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);
                    break;
                    default:
                    ctx.fillStyle = "black";
                    ctx.fillRect(c*this.SIZE,l*this.SIZE,this.SIZE,this.SIZE);

                }       
            }
        }
    }
    carregaMapa(modelo){
        this.LINHAS = modelo.length;
        this.COLUNAS = modelo[0]?.length ?? 0;
        this.tiles = []
        for (let l = 0; l < this.LINHAS; l++) {
            this.tiles[l]=[];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c]=modelo[l][c];         
            }
        }
    }
}