import AssetManager from "./AssetManager.js";
import Mapa from "./Mapa.js";
import Cena from "./Cena.js";
import {Dungeon as modeloDungeon} from "../maps/Dungeon.js"
import Sprite from "./Sprite.js";
import InputManager from "./InputManager.js";

const input = new InputManager();
const assets = new AssetManager();

const canvas = document.querySelector("canvas");
canvas.width = 14*32;
canvas.height = 10*32;
const ctx = canvas.getContext("2d");
input.configurarTeclado({
    ArrowLeft:"MOVE_ESQUERDA",
    ArrowRight:"MOVE_DIREITA",
    ArrowUp:"MOVE_CIMA",
    ArrowDown:"MOVE_BAIXO"
});
const cena1 = new Cena(canvas,assets);
const Dungeon = new Mapa(10,14,32);
Dungeon.carregaMapa(modeloDungeon);
cena1.configuraMapa(Dungeon);

const personagem = new Sprite({x:208,y:285});
personagem.controlar = function(dt){
    if(input.comandos.get("MOVE_ESQUERDA")){
        this.vx=-64;
    }else if(input.comandos.get("MOVE_DIREITA")){
        this.vx=+64;
    }else{
        this.vx = 0;
    }
    if(input.comandos.get("MOVE_CIMA")){
        this.vy=-64;
    }else if(input.comandos.get("MOVE_BAIXO")){
        this.vy=+64;
    }else{
        this.vy = 0;
    }
};
const npc1 = new Sprite({x:32,y:96 ,h:30,color:"lightblue"});
const npc2 = new Sprite({x:398,y: 256,h:30,color:"lightblue"});

cena1.adicionar(personagem);
cena1.adicionar(npc1);
cena1.adicionar(npc2);
cena1.iniciar();