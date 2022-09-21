var site;
var a;
var b;
var c;
var d;
var e;
var f;
var buttonA,buttonB,buttonC;
var buttonAImg,buttonBImg,buttonCImg;
var lingua = "inglês";
var pagina = 1;

function preload(){
  //imagens pré-carregadas
  a = loadImage("1.png");
  b = loadImage("2.png");
  c = loadImage("3.png");
  d = loadImage("4.png");
  e = loadImage("5.png");
  f = loadImage("6.png");
  buttonAImg = loadImage("b1.png");
  buttonBImg = loadImage("b2.png");
  buttonCImg = loadImage("b3.png");
}

function setup(){
  createCanvas(1280,800);
  background("black");

  site = createSprite(640,400,900,200);
  site.scale = 0.4;
  site.addImage(a);

  buttonA = createSprite(1140,720,100,80);
  buttonA.addImage(buttonAImg);
  buttonA.scale = 0.5;

  buttonB = createSprite(1140,620,100,80);
  buttonB.addImage(buttonBImg);
  buttonB.scale = 0.5;

  buttonC = createSprite(1140,520,100,80);
  buttonC.addImage(buttonCImg);
  buttonC.scale = 0.5;
}

function draw() {
  background("black");

  //fazer o chão infinito

 


  drawSprites();

  console.log(pagina);

  if(mousePressedOver(buttonC)){
    pagina = 3;
  }
   if(mousePressedOver(buttonB)){
    pagina = 2;
  }
  if(mousePressedOver(buttonA)){
    pagina = 1;
  }
  if(keyDown("O")){
    if(lingua == "inglês"){
      lingua = "português";
    }
    else{lingua = "inglês";}

    if(pagina == 1){
    if(lingua == "inglês"){
    site.addImage(a);
  }
  if(lingua == "português"){
    site.addImage(b);
  }
 }

 if(pagina == 2){
  if(lingua == "inglês"){
  site.addImage(c);
}
if(lingua == "português"){
  site.addImage(d);
}
}

if(pagina == 3){
  if(lingua == "inglês"){
  site.addImage(e);
}
if(lingua == "português"){
  site.addImage(f);
}
}
  }
   }
