var canvas = document.getElementById("myCanvas");



function drawQs(name, x, y,contactsPos) {
   
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillText(name, x, y);
    
    ctx.arc(x + 10, y - 5, 20, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.stroke();
   
}

function fillText(properties, from, to, contactsPos){
    var textBox = canvas.getContext("2d");
    textBox.beginPath();
    textBox.font = "15px Arial";
    
    
    
    textBox.fillText(properties,contactsPos.get(from).x,contactsPos.get(to).y)
    
}


function drawLine(from,to,contactsPos){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    fromX = contactsPos.get(from).x
    fromY = contactsPos.get(from).y
    toX = contactsPos.get(to).x
    toY = contactsPos.get(to).y
    
    //jobb alulrol indul
    if(fromX <= toX && fromY <= toY){
        ctx.moveTo(contactsPos.get(from).x, contactsPos.get(from).y);
        ctx.moveTo(contactsPos.get(from).x+20, contactsPos.get(from).y+10);
        //bal felulre erkezik
        ctx.lineTo(contactsPos.get(to).x, contactsPos.get(to).y-20);
        //nyil
       /* ctx.moveTo(contactsPos.get(to).x, contactsPos.get(to).y-20);
        ctx.lineTo(contactsPos.get(to).x+5, contactsPos.get(to).y-30);
        /*ctx.lineTo(contactsPos.get(to).x+5, contactsPos.get(to).y+30);/*
        ctx.lineTo(contactsPos.get(to).x-5, contactsPos.get(to).y+10);*/

    }
    //jobb felulrol indul
    if(fromX <= toX && fromY >= toY){
        ctx.moveTo(contactsPos.get(from).x+20, contactsPos.get(from).y-25);
        //bal alulra érkezik
        ctx.lineTo(contactsPos.get(to).x, contactsPos.get(to).y-20);
        //nyil
    }
    //bal alulrol indul
    if(fromX >= toX && fromY <= toY){
        ctx.moveTo(contactsPos.get(from).x, contactsPos.get(from).y+10);
        //jobb felulre érkezik
        ctx.lineTo(contactsPos.get(to).x+20, contactsPos.get(to).y-20);
        //nyil
    }
    //bal felulrol indul
    if(fromX >= toX && fromY >= toY){
        ctx.moveTo(contactsPos.get(from).x, contactsPos.get(from).y-5);
        //jobb alulra érkezik   
        ctx.lineTo(contactsPos.get(to).x+20, contactsPos.get(to).y+10);
        //nyil

    }

    ctx.stroke();
    
}



document.getElementById('toGraphFromFile').addEventListener('click',function(){makeGraph("toGraphFromFile")},false )

document.getElementById('toGraph').addEventListener('click',function(){makeGraph("toGraph")},false )


async function makeGraph(kindOf) { 
    
   

    if(kindOf == "toGraphFromFile"){
       
        document.getElementById("graph").style.display = "block";
        r = document.getElementById("fileSelect").value
        tableObj = await fetchToServer("appendToDiv",r)
        tableObj = JSON.parse(tableObj)
       

    } if(kindOf == "toGraph"){
     
        document.getElementById("graph").style.display = "block";
    
        tableObj = fromTableToObject()
      
    }

    contactsPos = new Map()

    side = true
    t=1
    for(key in tableObj){
        if(side){
            if(contactsPos.has(key.split(":")[0]) == false){
                contactsPos.set(key.split(":")[0], { x: 500 + Math.floor(Math.random() * 10), y: 80*t })
                drawQs(key.split(":")[0], contactsPos.get(key.split(":")[0]).x, contactsPos.get(key.split(":")[0]).y,contactsPos)
                side = false
                t+=1
            }}
        else{
            if(contactsPos.has(key.split(":")[0]) == false){
                contactsPos.set(key.split(":")[0], { x: 20 + Math.floor(Math.random() * 10), y: 80*t })
                drawQs(key.split(":")[0], contactsPos.get(key.split(":")[0]).x, contactsPos.get(key.split(":")[0]).y)
                side = true
                t+=1
            }
        }

}
//console.log(contactsPos)

properties = []
for (var key in tableObj) {
    if (tableObj.hasOwnProperty(key)) {
      for (var key2 in tableObj[key]) {
        if (tableObj[key].hasOwnProperty(key2)) {
          properties.push(tableObj[key][key2]);
        }
      }
     
      if(contactsPos.has(properties[0])==false){
        contactsPos.set(properties[0], { x: 20, y: 80*contactsPos.size })
        drawQs(properties[0], contactsPos.get(properties[0]).x, contactsPos.get(properties[0]).y)
    }
    
      if(key.split(":")[0] != properties[0]){
        console.log(key.split(":")[0]," : ",properties[0])
      drawLine(key.split(":")[0],properties[0],contactsPos)
      fillText(properties,key.split(":")[0],properties[0],contactsPos)}
      properties = [];
    }
}

}



function moveableG(){
var canvas = document.getElementById('myCanvas'),
ctx = canvas.getContext('2d'),
rect = {},
drag = false,
mouseX,
mouseY,
closeEnough = 10,
dragTL = dragBL = dragTR = dragBR = false;

function init() {
canvas.addEventListener('mousedown', mouseDown, false);
canvas.addEventListener('mouseup', mouseUp, false);
canvas.addEventListener('mousemove', mouseMove, false);

rect = {
    startX: 100,
    startY: 200,
    w: 300,
    h: 200
}
}

function mouseDown(e) {
mouseX = e.pageX - this.offsetLeft;
mouseY = e.pageY - this.offsetTop;

// if there isn't a rect yet
if (rect.w === undefined) {
    rect.startX = mouseY;
    rect.startY = mouseX;
    dragBR = true;
}

// if there is, check which corner
//   (if any) was clicked
//
// 4 cases:
// 1. top left
else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY)) {
    dragTL = true;
}
// 2. top right
else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY)) {
    dragTR = true;

}
// 3. bottom left
else if (checkCloseEnough(mouseX, rect.startX) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
    dragBL = true;

}
// 4. bottom right
else if (checkCloseEnough(mouseX, rect.startX + rect.w) && checkCloseEnough(mouseY, rect.startY + rect.h)) {
    dragBR = true;

}
// (5.) none of them
else {
    // handle not resizing
}

ctx.clearRect(0, 0, canvas.width, canvas.height);
draw();

}

function checkCloseEnough(p1, p2) {
return Math.abs(p1 - p2) < closeEnough;
}

function mouseUp() {
dragTL = dragTR = dragBL = dragBR = false;
}

function mouseMove(e) {
mouseX = e.pageX - this.offsetLeft;
mouseY = e.pageY - this.offsetTop;
if (dragTL) {
    rect.w += rect.startX - mouseX;
    rect.h += rect.startY - mouseY;
    rect.startX = mouseX;
    rect.startY = mouseY;
} else if (dragTR) {
    rect.w = Math.abs(rect.startX - mouseX);
    rect.h += rect.startY - mouseY;
    rect.startY = mouseY;
} else if (dragBL) {
    rect.w += rect.startX - mouseX;
    rect.h = Math.abs(rect.startY - mouseY);
    rect.startX = mouseX;
} else if (dragBR) {
    rect.w = Math.abs(rect.startX - mouseX);
    rect.h = Math.abs(rect.startY - mouseY);
}
ctx.clearRect(0, 0, canvas.width, canvas.height);
draw();
}

function draw() {
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
drawHandles();
}

function drawCircle(x, y, radius) {
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI);
ctx.fill();
}

function drawHandles() {
drawCircle(rect.startX, rect.startY, closeEnough);
drawCircle(rect.startX + rect.w, rect.startY, closeEnough);
drawCircle(rect.startX + rect.w, rect.startY + rect.h, closeEnough);
drawCircle(rect.startX, rect.startY + rect.h, closeEnough);
}

init();
}