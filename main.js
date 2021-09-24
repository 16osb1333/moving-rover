canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width = 100; 
rover_height = 90;

Images_array =["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];
random_number=Math.floor(Math.random()*4);
background_image = Images_array[random_number];
rover_image = "rover.png";
rover_x=10;
rover_y=10;
function add(){
    bg_imgtag= new Image();
    bg_imgtag.onload=upload_background;
    bg_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=upload_rover;
    rover_imgtag.src=rover_image;
}
function upload_background(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function upload_rover() { 
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed == "38") {
     up(); 
     console.log("up"); 
      
}
if(keyPressed == "40") {
    down(); 
    console.log("down"); 
     
}if(keyPressed == "37") {
    left(); 
    console.log("left");
     
}if(keyPressed == "39") {
    right(); 
    console.log("right"); 
}
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       upload_background();
       upload_rover();
    }

}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       upload_background();
       upload_rover();
    }

}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       upload_background();
       upload_rover();
    }

}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
       upload_background();
       upload_rover();
    }

}