var rex, rexImg;
var paredes;

function preload() {
  //pré carrega arquivos: imagens, sons , etc;
  rexImg = loadAnimation("trex3.png", "trex4.png");
}

function setup() {
  //função de configuração
  createCanvas(600, 200);

  rex = createSprite(50, 100, 50, 50);
  rex.addAnimation("running", rexImg);
  rex.scale = 0.5;

  paredes = createEdgeSprites();
}

function draw() {
  background("white");

  if (keyDown("space")) {
    rex.velocityY = -10;
  }

  rex.velocityY = rex.velocityY + 1;

  rex.collide(paredes);

  drawSprites();
}
