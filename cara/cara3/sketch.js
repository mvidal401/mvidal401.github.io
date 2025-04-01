let mic; //creem variable global per un micròfon, ara es un espai a la memòria amb un nom.

function setup() { 
 mic = new p5.AudioIn(); // la variable mic és una instància de la "classe entrada de àudio" (audioIn)
 // Hem creat un nou objecte de la classe "entrada de àudio" i tindrà totes les seves característiques i s'anomena "mic".
  mic.start();
 createCanvas(600,400);
 // put setup code here
}

function draw() {
  let faceX;

 let vol = mic.getLevel(); 
 let h = map(vol,0,1,0,300); 
   let x = 200 * noise(0.1 * frameCount);
 let y = 200 * noise(0.1 * frameCount + 100);
  let ales = 10*random(1);
  let xeye = map(mouseX, 0,600,-10,+10);
  let yeye = map(mouseY, 0,400,-10,+10);
  let leftEyeSize = 30+10*cos(frameCount*0.1);//mida variable segons el temps
 let rightEyeSize = 30+10*sin(frameCount*0.1);//mida variable segons el temps
 
   strokeWeight(5);
  line(200,125,300,125);
  line(325,125,400,125);

 background(127);
 fill(205,133,77);
 ellipse(300,200,520,300);
  fill(0,0,0);
    arc(300,105,200,100,PI,0); 
 fill(255,255,255);
 ellipse(250,150,75,30);
 ellipse(350,150,75,30);
 fill(0,0,0);
 ellipse(270+(10*cos(frameCount*0.1)),150,20,10);
 ellipse(370+(10*sin(frameCount*0.1)),150,20,10);
 fill(255,0,0);
 arc(300,250,120,h,0,PI); // la variable "h" determina la alçada de la boca. 

   fill(255, 180, 160); // Defineix el color del nas
            beginShape(); // Inicia una nova forma per dibuixar el nas
            vertex (width / 2 , height / 2); // Primer punt: al centre de la cara
            vertex(width / 2 - 18, height / 2 + 20); // Segon punt: lleugerament a l'esquerra i cap avall
            // Tercer punt: lleugerament a la dreta, amb un petit moviment vertical oscil·lant amb sin()
            vertex(width / 2 + 18, height / 2 + 20);
            endShape(CLOSE); // Tanca la forma del nas
 // Els consoles.log ens serveixen per veure el valor de les variables a cada moment.
  
  fill(255);
  strokeWeight(0.1);
  ellipse(x - 10, y, 15 + ales, 25);
  ellipse(x + 10, y, 15 + ales, 25);
  fill(0);
  ellipse(x, y, 10, 20);
  text("Cara con mosca" , 50, 350)
  print(10*cos(frameCount*0.1));
  
  strokeWeight(3);
  line(200,125,300,125);
  line(325,125,400,125);

}
