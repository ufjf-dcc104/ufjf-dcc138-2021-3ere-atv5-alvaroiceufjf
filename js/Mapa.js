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
    }

    desenhar(ctx){
        for (let l = 0; l < this.LINHAS; l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch(this.tiles[l][c]){
                    case 1:

                    break;
                    default:
                        
                }       
            }
        }
    }
}