// criando as variaveis 
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body =Matter.Body; 
const Constraint = Matter.Constraint;
var buraco,buraco2,buracoImg;
var crianca,criancaImg;
var campo,campoImg;
var moeda,moedaImg;
var pa,paImg;
var poçaDeAgua,poçaDeAguaImg;
var ronaldo,ronaldoImg;
var background,backgroundImg;
var ball,ballIpng;
var ground,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10;
var ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20;
var ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31;



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
  crianca.visible = true;
  

  ronaldo = createSprite(1000,600,100,100);
  ronaldo.addImage("ronaldo",ronaldoImg);
  ronaldo.scale = 0.4;
  ronaldo.debug=false
  ronaldo.setCollider("rectangle",0,0,180,120)

  ball = createSprite(1200,715,100,100);
  ball.addImage("ball",ballImg);
  ball.scale = 0.4;
  ball.visible = false;
  ball.setCollider("circle",0,0,50)

  buraco = createSprite(300,270,10,10);
  buraco.addImage("buraco",buracoImg);
  buraco.scale = 0.6;
  buraco.depth = ronaldo.depth-1;
  buraco.visible = true;
  buraco.debug=false
  buraco.setCollider("rectangle",0,0,100,100)

  buraco2 = createSprite(1600,850,10,10);
  buraco2.addImage("buraco",buracoImg);
  buraco2.scale = 0.6;
  buraco2.depth = ronaldo.depth-1;
  buraco2.visible = false;
  buraco2.setCollider("rectangle",0,0,50,50)

  paredes= new Group()

  ground = createSprite(160,555,10,800);
  ground.visible=false;
  ground2 = createSprite(310,680,300,10);
  ground2.visible=false;
  ground3 = createSprite(960,950,1600,10);
  ground3.visible=false;
  ground4 = createSprite(1760,555,10,800);
  ground4.visible=false;
  ground5 = createSprite(960,160,1600,10);
  ground5.visible=false;
  ground6 = createSprite(830,900,10,100);
  ground6.visible=false;
  ground7 = createSprite(1100,900,10,100);
  ground7.visible=false;
  ground8 = createSprite(1100,850,200,10);
  ground8.visible=false;
  ground9 = createSprite(1000,805.50,10);
  ground9.visible=false;
  ground10 = createSprite(1200,805,10,100);
  ground10.visible=false;
  ground11 = createSprite(1200,750,200,10);
  ground11.visible=false;
  ground12 = createSprite(1300,555,10,400);
  ground12.visible=false;
  ground13 = createSprite(1300,350,200,10);
  ground13.visible=false;
  ground14 = createSprite(1200,395,10,100);
  ground14.visible=false;
  ground15 = createSprite(1100,630,10,250);
  ground15.visible=false;
  ground16 = createSprite(1055,500,100,10);
  ground16.visible=false;
  ground17 = createSprite(1000,390,10,230);
  ground17.visible=false;
  ground18 = createSprite(930,280,150,10);
  ground18.visible=false;
  ground19 = createSprite(1100,210,10,100);
  ground19.visible=false;
  ground20 = createSprite(700,260,10,200);
  ground20.visible=false;
  ground21 = createSprite(655,360,300,10);
  ground21.visible=false;
  ground22 = createSprite(500,315,10,100);
  ground22.visible=false;
  ground23 = createSprite(545,260,100,10);
  ground23.visible=false;
  ground24 = createSprite(800,455,10,200);
  ground24.visible=false;
  ground25 = createSprite(750,550,100,10);
  ground25.visible=false;
  ground26 = createSprite(700,695,10,300);
  ground26.visible=false;
  ground27 = createSprite(550,840,300,10);
  ground27.visible=false;
  ground28 = createSprite(1610,670,300,10);
  ground28.visible=false;
  ground29 = createSprite(1690,400,150,10);
  ground29.visible=false;
  ground30 = createSprite(1610,470,10,150);
  ground30.visible=false;
  ground31 = createSprite(1450,500,310,10);
  ground31.visible=false;
 
 

  
 
}
//draw faz o movimento, a ação do jogo
function draw(){

  background("white")
  background(campoImg);
  
  

  fill("red");
  textSize(20);
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  

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

  
  ronaldo.bounce(ground)
  ronaldo.bounce(ground2)
  ronaldo.bounce(ground3)
  ronaldo.bounce(ground4)
  ronaldo.bounce(ground5)
  ronaldo.bounce(ground6)
  ronaldo.bounce(ground7)
  ronaldo.bounce(ground8)
  ronaldo.bounce(ground9)
  ronaldo.bounce(ground10)
  ronaldo.bounce(ground11)
  ronaldo.bounce(ground12)
  ronaldo.bounce(ground13)
  ronaldo.bounce(ground14)
  ronaldo.bounce(ground15)
  ronaldo.bounce(ground16)
  ronaldo.bounce(ground17)
  ronaldo.bounce(ground18)
  ronaldo.bounce(ground19)
  ronaldo.bounce(ground20)
  ronaldo.bounce(ground21)
  ronaldo.bounce(ground22)
  ronaldo.bounce(ground23)
  ronaldo.bounce(ground24)
  ronaldo.bounce(ground25)
  ronaldo.bounce(ground26)
  ronaldo.bounce(ground27)
  ronaldo.bounce(ground28)
  ronaldo.bounce(ground29)
  ronaldo.bounce(ground30)
 

  if(ronaldo.isTouching(buraco)){
 
   ronaldo.scale=0.2;
   crianca.visible=false;
   buraco2.visible=true;
   ball.visible=true;
   ronaldo.setCollider("rectangle",0,0,180,300)

   ground.visible=true;
   ground2.visible=true;
   ground3.visible=true;
   ground4.visible=true;
   ground5.visible=true;
   ground6.visible=true;
   ground7.visible=true;
   ground8.visible=true;
   ground9.visible=true;
   ground10.visible=true;
   ground11.visible=true;
   ground12.visible=true;
   ground13.visible=true;
   ground14.visible=true;
   ground15.visible=true;
   ground16.visible=true;
   ground17.visible=true;
   ground18.visible=true;
   ground19.visible=true;
   ground20.visible=true;
   ground21.visible=true;
   ground22.visible=true;
   ground23.visible=true;
   ground24.visible=true;
   ground25.visible=true;
   ground26.visible=true;
   ground27.visible=true;
   ground28.visible=true;
   ground29.visible=true;
   ground30.visible=true;
   ground31.visible=true;

  //  ronaldo.bounceOff(ground)
  //  ronaldo.bounce(ground2)
  //  ronaldo.bounce(ground3)
  //  ronaldo.bounce(ground4)
  //  ronaldo.bounce(ground5)
  //  ronaldo.bounce(ground6)
  //  ronaldo.bounce(ground7)
  //  ronaldo.bounce(ground8)
  //  ronaldo.bounce(ground9)
  //  ronaldo.bounce(ground10)
  //  ronaldo.bounce(ground11)
  //  ronaldo.bounce(ground12)
  //  ronaldo.bounce(ground13)
  //  ronaldo.bounce(ground14)
  //  ronaldo.bounce(ground15)
  //  ronaldo.bounce(ground16)
  //  ronaldo.bounce(ground17)
  //  ronaldo.bounce(ground18)
  //  ronaldo.bounce(ground19)
  //  ronaldo.bounce(ground20)
  //  ronaldo.bounce(ground21)
  //  ronaldo.bounce(ground22)
  //  ronaldo.bounce(ground23)
  //  ronaldo.bounce(ground24)
  //  ronaldo.bounce(ground25)
  //  ronaldo.bounce(ground26)
  //  ronaldo.bounce(ground27)
  //  ronaldo.bounce(ground28)
  //  ronaldo.bounce(ground29)
  //  ronaldo.bounce(ground30)
  //  ronaldo.bounce(ground31)

  
  }

  if(ronaldo.isTouching(ball)){
    textAlign(CENTER,TOP)
    textSize(50)
    text("agora saia do labirinto",900,400)
    setTimeout(()=>{
      ball.visible=false
      ground31.visible=false
     
    },5000)
   
  }
  if(ronaldo.isTouching(buraco2)){
   
    crianca.visible=true;
    buraco2.visible=true;
    ball.visible=false;
    ronaldo.setCollider("rectangle",0,0,180,30)
    ground.visible=false;
    ground2.visible=false;
    ground3.visible=false;
    ground4.visible=false;
    ground5.visible=false;
    ground6.visible=false;
    ground7.visible=false;
    ground8.visible=false;
    ground9.visible=false;
    ground10.visible=false;
    ground11.visible=false;
    ground12.visible=false;
    ground13.visible=false;
    ground14.visible=false;
    ground15.visible=false;
    ground16.visible=false;
    ground17.visible=false;
    ground18.visible=false;
    ground19.visible=false;
    ground20.visible=false;
    ground21.visible=false;
    ground22.visible=false;
    ground23.visible=false;
    ground24.visible=false;
    ground25.visible=false;
    ground26.visible=false;
    ground27.visible=false;
    ground28.visible=false;
    ground29.visible=false;
    ground30.visible=false;
    ground31.visible=false;
  }
 
   drawSprites();
  }
  
  function mousePressed(){
  

  }