var cvs =  document.getElementById('soucoupeCanvas');
var ctx = cvs.getContext('2d');
//dessus de la soucoupe//
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="white";
ctx.moveTo(120,150);
ctx.quadraticCurveTo(200,1,260,150);
ctx.fill();
//base de la soucoupe//
ctx.beginPath();
ctx.lineWidth="3";
ctx.fillStyle="#E0E1F3";
ctx.moveTo(30,180);
ctx.quadraticCurveTo(200,50,350,180);
ctx.moveTo(30,180);
ctx.quadraticCurveTo(200,300,350,180);
ctx.fill();
