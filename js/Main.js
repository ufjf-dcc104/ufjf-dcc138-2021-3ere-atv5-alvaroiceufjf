import AssetManager from "./AssetManager.js";
import Mapa from "./Mapa.js";

const assets = new AssetManager();

assets.carregaImagem("parede","assets/parede.png");
assets.carregaImagem("chao","assets/chao.png");
assets.carregaImagem("fundo","assets/fundo.png");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const Dungeon = new Mapa(canvas,assets);