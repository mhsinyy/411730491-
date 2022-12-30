var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
var mic

function setup() {
  createCanvas(windowWidth,windowHeight);
 music_btn = createButton("音樂跳舞")
music_btn.position(10,10)
music_btn.size(350, 100);
music_btn.style('background-color', 'black');
music_btn.style('font-size', '44px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)

mouse_btn = createButton("滑鼠跳動")
mouse_btn.position(370,10)
mouse_btn.size(350, 100);
mouse_btn.style('background-color', 'black');
mouse_btn.style('font-size', '44px');
mouse_btn.style('color', 'white');
mouse_btn.mousePressed(mouse_btn_pressed)

Speech_btn = createButton("語音辨識(跳舞/不要跳)")
Speech_btn.position(740,10)
Speech_btn.size(350, 100);
Speech_btn.style('background-color', 'black');
Speech_btn.style('font-size', '32px');
Speech_btn.style('color', 'white');
Speech_btn.mousePressed(Speech_btn_pressed)
  angleMode(DEGREES)
  mic= new p5.AudioIn();
  mic.start();
}

function draw() {
  background('#669bbc');
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
 fill(255)
 strokeWeight(2)
 ellipse(width/2-5,height/3-60,150,135) //頭
 triangle(645,260,715,440,786,260)
 ellipse(width/2+20,height/2+140,150,135) //大園
 ellipse(width/2,height/3+178,90,80) //小圓
 ellipse(width/2+110,height/2+150,50) //右腳
 ellipse(width/2-15,height/2+220,50) //左腳

 fill(mouseX%256,(184+frameCount),3+mouseX/3)
 ellipse(width/2+35,height/2+165,32,28)
 ellipse(width/2+5,height/2+116,32,30)
 ellipse(width/2,height/3+178,30,27) //鈕扣1

 fill('#e36414')
 ellipse(width/2-5,height/3-18,48,41) //鼻子

 fill('#000814')
 ellipse(width/2+18,height/3-58,50) //右眼
 ellipse(width/2-28,height/3-58,50) //左眼
 fill('#ffffff')
 ellipse(width/2+18,height/3-58,43) //右眼
 ellipse(width/2-28,height/3-58,43) //左眼
 fill('#000814')
 ellipse(width/2+16,height/3-53,24) //右眼
 ellipse(width/2-26,height/3-53,24) //左眼

 fill('#003566')
 triangle(670,283,715,395,759,284) 

 fill(255)
 rect(width/2-20,height/3+10,35,26) //牙齒

 fill('#6c584c')
 curveVertex()
 strokeWeight(6)
 line(586,363,615,389)
 line(583,389,615,389)
 line(615,359,615,389)
 line(680,431,615,389)
 line(803,325,806,366)
 line(831,323,806,366)
 line(842,362,806,366)
 line(754,421,806,366)
 line(705,157,678,164)
 line(669,173,678,164)
 line(719,155,752,164)
 line(759,170,752,164) 
 line(678,99,695,121)
 line(692,80,695,121)
 line(705,83,695,121)
 line(703,147,693,101)
 line(708,72,715,104)
 line(715,104,712,146)
 line(731,86,731,95)
 line(739,90,731,95)
 line(731,95,718,146)
}

function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()  

}
function mouse_btn_pressed(){
  song.pause()
  mosueIsplay = true
  songIsplay = false

}
function Speech_btn_pressed(){
  myRec.onResult = showResult;
	myRec.start();

}
function preload(){
  song = loadSound("Do You Want to Build a Snowman (From FrozenSing-Along).mp3");
}

function mousePressed()
  {
   if(!songIsplay){
     song.play()
     songIsplay = true
     amp=new p5.Amplitude()
   }
   else{
     song.pause()
     songIsplay = false
   }
}