// criando as variaveis 
var buraco,buracoImg;
var crianca,criancaImg;
var campo,campoImg;
var moeda,moedaImg;
var pa,paImg;
var poçaDeAgua,poçaDeAguaImg;
var ronaldo,ronaldoImg;
var background,backgroundImg;
var ball,ballIpng


//preload carrega as midías do jogo 
function preload(){
  buracoImg = loadImage("Buraco.gif");
  criancaImg = loadImage("Crianca.jpg");
  campoImg = loadImage("Campo.png");
  moedaImg = loadImage("Moeda.png");
  paImg = loadImage("pa.png");
  poçaDeAguaImg = loadImage("PoçaDeAgua.png");
  ronaldoImg = loadImage("ronaldo.png");
  ballImg = loadImage("Bola.png");
  
}
//setup faz a aconfiguração
function setup(){
 
  canvas = createCanvas(2000,1000);
  
  crianca = createSprite(960,160,100,100);
  crianca.addImage("crianca",criancaImg);
  crianca.scale = 0.9;
  

  ronaldo = createSprite(1000,600,100,100);
  ronaldo.addImage("ronaldo",ronaldoImg);
  ronaldo.scale = 0.4;

  ball = createSprite(300,200,100,100);
  ball.addImage("ball",ballImg);
  ball.scale = 0.4;
  

  buraco = createSprite(1400,250,10,10);
  buraco.addImage("buraco",buracoImg);
  buraco.scale = 0.6;
 
}
//draw faz o movimento, a ação do jogo
function draw(){
  
  background(campoImg);
 

  if(keyIsDown(UP_ARROW)){
    ronaldo.y-=5;
  }

  if(keyIsDown(DOWN_ARROW)){
    ronaldo.y+=5;
  }

  if(keyIsDown(LEFT_ARROW)){
    ronaldo.x-=5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ronaldo.x+=5;
  }

 
   drawSprites();
  }
  
  function mousePressed(){
  
  }