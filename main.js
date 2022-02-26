var canvas=new fabric.Canvas("canvas")
width=30
height=30
playerx=10
playery=10
var playerimage=""
var blockimage=""
function updateplayer(){
    fabric.Image.fromURL("minecraft.jfif",function(Img){
    playerimage=Img
    playerimage.scaleToWidth(150)
    playerimage.scaleToHeight(150)
    playerimage.set({
    top:playery,left:playerx

    })
    canvas.add(playerimage)
    })
}
function updateblock(getimage){
fabric.Image.fromURL(getimage,function(Img){
 blockimage=Img
 blockimage.scaleToWidth(width) 
 blockimage.scaleToHeight(height)
 blockimage.set({
top:playery,left:playerx
 })
 canvas.add(blockimage)    
})

}
window.addEventListener("keydown",keydown)
function keydown(e){
keypress=e.keyCode
console.log(keypress)
if (e.shiftKey==true && keypress=="80") {
console.log("shift and p")
width=width+10 ;
height=height+10;
document.getElementById("width").innerHTML=width;  
document.getElementById("height").innerHTML=height;  
}
if (e.shiftKey==true && keypress=="77") {
 console.log("shift and m")
 width=width-10;
 height=height-10; 
 document.getElementById("width").innerHTML=width;  
document.getElementById("height").innerHTML=height;   
}
if(keypress=="67"){
updateblock("cloud.jpg")
console.log("c")
}
if(keypress=="68"){
    updateblock("dark_green.png")
    console.log("d")
    }
    if(keypress=="71"){
        updateblock("ground.png")
        console.log("g")
    } 
    if(keypress=="76"){
        updateblock("light_green.png")
        console.log("l")
    } 
    if(keypress=="82"){
        updateblock("roof.jpg")
        console.log("r")
    } 
    if(keypress=="84"){
        updateblock("trunk.jpg")
        console.log("t")
    } 
    if(keypress=="85"){
        updateblock("unique.png")
        console.log("u")
    }
    if(keypress=="87"){
        updateblock("wall.jpg")
        console.log("w")
    }  
    if(keypress=="89"){
        updateblock("yellow_wall.png")
        console.log("y")
  }
  if (keypress=="37") {
left()
console.log("left")
  }
  if (keypress=="38") {
    up()
    console.log("up")
      }
       if (keypress=="39") {
right()
console.log("right")
  }
  if (keypress=="40") {
    down()
    console.log("down")
      }
}

function up() {
if (playery>0) {
 playery=playery-width
 canvas.remove(playerimage)
 updateplayer()   
}
}
function down() {
    if (playery<500) {
     playery=playery+width
     canvas.remove(playerimage)
     updateplayer()   
    }
    }
    function left() {
        if (playerx>0) {
         playerx=playerx-width
         canvas.remove(playerimage)
         updateplayer()   
        }
        }
        function right() {
            if (playerx<850) {
             playerx=playerx+width
             canvas.remove(playerimage)
             updateplayer()   
            }
            }









