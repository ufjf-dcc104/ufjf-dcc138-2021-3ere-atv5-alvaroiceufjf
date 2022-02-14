import AssetManager from "./AssetManager.js";
import Mapa from "./Mapa.js";
import Cena from "./Cena.js";
import {Dungeon as modeloDungeon} from "../maps/Dungeon.js"
import Sprite from "./Sprite.js";

const assets = new AssetManager();

const canvas = document.querySelector("canvas");
canvas.width = 14*32;
canvas.height = 10*32;
const ctx = canvas.getContext("2d");
const cena1 = new Cena(canvas,assets);
const Dungeon = new Mapa(10,14,32);
Dungeon.carregaMapa(modeloDungeon);
cena1.configuraMapa(Dungeon);

const personagem = new Sprite({x:208,y:285});
const npc1 = new Sprite({x:32,y:96 ,h:30,color:"lightblue"});
const npc2 = new Sprite({x:398,y: 256,h:30,color:"lightblue"});

cena1.adicionar(personagem);
cena1.adicionar(npc1);
cena1.adicionar(npc2);
cena1.iniciar();