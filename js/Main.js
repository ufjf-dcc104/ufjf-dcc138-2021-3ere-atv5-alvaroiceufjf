import AssetManager from "./AssetManager.js";
import Mapa from "./Mapa.js";
import Cena from "./Cena.js";
import {Dungeon as modeloDungeon} from "../maps/Dungeon.js"

const assets = new AssetManager();

const canvas = document.querySelector("canvas");
canvas.width = 14*32;
canvas.height = 10*32;
const ctx = canvas.getContext("2d");
const cena1 = new Cena(canvas,assets);
const Dungeon = new Mapa(10,14,32);
Dungeon.carregaMapa(modeloDungeon);
cena1.configuraMapa(Dungeon);

cena1.iniciar();