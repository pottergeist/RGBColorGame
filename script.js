var numSquares=6;
var colors=generateRandomColor(numSquares);
var displayBackground = document.querySelector("h1");
var message=document.getElementById("message");
var eachSqaure=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var resetButton=document.getElementById("resetButton")
var easyButton=document.getElementById("easyButton");
var hardButton=document.getElementById("hardButton");

var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;

easyButton.addEventListener("click",function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<eachSqaure.length;i++){
        if(colors[i]){
            eachSqaure[i].style.backgroundColor=colors[i];
        }
        else{
            eachSqaure[i].style.display="none";
        }
        
    }
});

hardButton.addEventListener("click",function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<eachSqaure.length;i++){
            eachSqaure[i].style.backgroundColor=colors[i];
            eachSqaure[i].style.display="block";
        }
});

resetButton.addEventListener("click",function(){
    this.textContent="New Colors";
    colors=generateRandomColor(numSquares);
    for(i=0;i<eachSqaure.length;i++){
        eachSqaure[i].style.backgroundColor=colors[i];
    }
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    displayBackground.style.backgroundColor="steelblue";
    message.textContent="";
});
for(var i=0;i<eachSqaure.length;i++){
    eachSqaure[i].style.backgroundColor=colors[i];
    
    eachSqaure[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent="Correct!";
            colorChange(pickedColor);
            resetButton.textContent="Play Again?"
        }
        else{
            this.style.backgroundColor= "#232323" ;
            message.textContent="Try Again!";
        }
    });
}

function colorChange(color){
    for(var j=0;j<eachSqaure.length;j++){
        eachSqaure[j].style.backgroundColor=color;
        displayBackground.style.backgroundColor=color;
    }
}

function generateRandomColor(num){
    var arr=[];
    for(var k=0;k<num;k++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}


