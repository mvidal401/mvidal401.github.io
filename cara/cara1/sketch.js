let mic; //creem variable global per un micròfon, ara es un espai a la memòria amb un nom. 
function setup() { 
 mic = new p5.AudioIn(); // la variable mic és una instància de la "classe entrada de àudio" (audioIn)
 // Hem creat un nou objecte de la classe "entrada de àudio" i tindrà totes les seves característiques i s'anomena "mic".
 createCanvas(600,400);
 // put setup code here
}

function draw() {
  let faceX
 let vol = mic.getLevel(); // apliquem el mètode "getLevel" que ens donarà el nivell de volum entre 0 i 1
 // registrat pel objecte mic, que és una entrada de àudio. Aquest número el guardarem en una variable local
 // (perquè afecta només al draw a diferència de la variable global mic que afecta a tot el codi perquè està al principi.
 // El punt que hi ha entre mic i getLevel és molt important, s'anomena la síntaxi del punt o "dot syntax". Aquest punt aplica mètodes a objectes.
 // És un sistema que permet crear qualsevol cosa i que faci qualsevol cosa
 let h = map(vol,0,1,0,300); // "map" és una funció molt potent què fa moltes coses, el que fa es conver
 // El que fa es convertir els números de volum que estan entre 0 i 1, sempre en una escala proporcional o mapejada
 // entre els números 0 i 300, vol dir, que si el volum es 0.5, es converteix en 150 i s'emmagatzema en "h".
 // Si el numero es 0.33 de volum, es convertirà en 100 de "h" o alçada de la boca o arc.
 // Si el numero es 0.67 de volum, es convertirà en 200 de "h" o alçada de la boca o arc.
 background(127);
 fill(191,133,77);
 ellipse(300,200,520,300);
  fill(0,0,0);
    arc(300,105,200,100,PI,0); 
 fill(255,255,255);
 ellipse(250,150,75,30);
 ellipse(350,150,75,30);
 fill(0,0,0);
 ellipse(250,150,20,10);
 ellipse(350,150,20,10);
 fill(255,0,0);
 arc(300,250,120,100,0,PI); // la variable "h" determina la alçada de la boca. 
 console.log(mic);
 console.log(vol);
 console.log(h);
 console.log(frameCount);
 // Els consoles.log ens serveixen per veure el valor de les variables a cada moment.
}
