
var canvas = document.getElementById("myCanvas");
var contactsPos = new Map;

function drawQs(name, x, y) {
   
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillText(name, x, y);
    ctx.beginPath();
    ctx.arc(x + 10, y - 5, 20, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.stroke();
}

function contactDescribe(from, to,contacts) {
    let rowHeight = 0

    

    var textBox = canvas.getContext("2d");
    textBox.font = "15px Arial";
    if (from === to) {
        if (contactsPos.get('q' + from).y < 200) {
            if (contacts.get(from).a.split(',')[0] === to) {
            
                textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 45 - rowHeight * 15);
                rowHeight++;
            }
            if (contacts.get(from).b.split(',')[0] === to) {
                textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 45 - rowHeight * 15);
                rowHeight++;
            }
            if (contacts.get(from).x.split(',')[0] === to) {
                textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 45 - rowHeight * 15);
                rowHeight++;
            }
            if (contacts.get(from).ü.split(',')[0] === to) {
                textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 45 - rowHeight * 15);
                rowHeight++;
            }
        }
        else {
            if (contacts.get(from).a.split(',')[0] === to) {
                textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 45 + rowHeight * 15);
                rowHeight++;
            }
            if (contacts.get(from).b.split(',')[0] === to) {
                textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 45 + rowHeight * 15);
                rowHeight++;
            }
            if (contacts.get(from).x.split(',')[0] === to) {
                textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 45 + rowHeight * 15);
                rowHeight++;
            }
            if (contacts.get(from).ü.split(',')[0] === to) {
                textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 45 + rowHeight * 15);
                rowHeight++;
            }
        }
    }
    else {
        let y = contactsPos.get('q' + from).y;
        if (contactsPos.get('q' + from).y < contactsPos.get('q' + to).y) {
            y += 40;
           //textBox.rotate(45 * Math.PI / 180);
        }
        else if (contactsPos.get('q' + from).y > contactsPos.get('q' + to).y) {
            y -= 30;
           // textBox.rotate(Math.PI * 2 / (6));


        }
        let yy = Math.abs(contactsPos.get('q' + to).y - contactsPos.get('q' + from).y)/2 
        let xx = Math.abs(contactsPos.get('q' + to).x - contactsPos.get('q' + from).x)/2 

        if(contactsPos.get('q' + to).y < contactsPos.get('q' + from).y)
        {
                yy = contactsPos.get('q' + to).y + yy
        }
        else{

            yy = contactsPos.get('q' + from).y + yy
        }
        if(contactsPos.get('q' + to).x < contactsPos.get('q' + from).x)
        {
                xx = contactsPos.get('q' + to).x + xx
        }
        else{

            xx = contactsPos.get('q' + from).x + xx
        }

        //if (contactsPos.get('q' + from).x < contactsPos.get('q' + to).x) {
           
        if(to=='i'){
            to ='igen'
        }
        if(to=='n'){
            to ='nem'
        }
        if (contacts.get(from).a.split(',')[0] === to) {
            if(to=="igen" ||to=="nem" ){
                textBox.fillText('a / a, stop', xx,yy - rowHeight * 15);
                rowHeight++;
            }
            else{
            textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], xx,yy - rowHeight * 15);
            rowHeight++;}
        }
        if (contacts.get(from).b.split(',')[0] === to) {
            if(to=="igen" ||to=="nem" ){
                textBox.fillText('b / b, stop', xx,yy - rowHeight * 15);
                rowHeight++;
            }
            else{
            textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], xx,yy - rowHeight * 15);
            rowHeight++;}
        }
        if (contacts.get(from).x.split(',')[0] === to) {
            if(to=="igen" ||to=="nem" ){
                textBox.fillText('x / x, stop', xx,yy - rowHeight * 15);
                rowHeight++;
            }
            else{
            textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], xx,yy - rowHeight * 15);
            rowHeight++;}
        }
        if (contacts.get(from).ü.split(',')[0] === to) {
            if(to=="igen" ||to=="nem" ){
                textBox.fillText('ü / ü, stop',xx,yy - rowHeight * 15);
                rowHeight++;
            }
            else{
            textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], xx,yy - rowHeight * 15);
            rowHeight++;}
        }
    
    
    }
}
function fillText(properties, from, to){
    var textBox = canvas.getContext("2d");
    textBox.font = "15px Arial";

    textBox.fillText(properties,contactsPos.get(from).x+30,contactsPos.get(to).y-30)
}


function drawLine(from,to){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(contactsPos.get(from).x, contactsPos.get(from).y - 22);

    ctx.lineTo(contactsPos.get(to).x - 10, contactsPos.get(to).y - 40);
    ctx.lineTo(contactsPos.get(to).x + 30, contactsPos.get(to).y - 40);
    ctx.lineTo(contactsPos.get(to).x + 20, contactsPos.get(to).y - 22);
    ctx.lineTo(contactsPos.get(to).x + 17, contactsPos.get(to).y - 30);
    ctx.lineTo(contactsPos.get(to).x + 30, contactsPos.get(to).y - 25);
    ctx.lineTo(contactsPos.get(to).x + 20, contactsPos.get(to).y - 22);
    ctx.stroke();
}




document.getElementById('toGraph').addEventListener('click', async e => { 
    //moveableG()
    console.log("asd")
    document.getElementById("graph").style.display = "block";
    
    tableObj = fromTableToObject()
  
    var contacts = tableObj

    side = true
    t=1
    for(key in tableObj){
        if(side){
            if(contactsPos.has(key.split(":")[0]) == false){
                contactsPos.set(key.split(":")[0], { x: 500, y: 80*t })
                drawQs(key.split(":")[0], contactsPos.get(key.split(":")[0]).x, contactsPos.get(key.split(":")[0]).y)
                side = false
                t+=1
            }}
        else{
            if(contactsPos.has(key.split(":")[0]) == false){
                contactsPos.set(key.split(":")[0], { x: 20, y: 80*t })
                drawQs(key.split(":")[0], contactsPos.get(key.split(":")[0]).x, contactsPos.get(key.split(":")[0]).y)
                side = true
                t+=1
            }
        }

}
console.log(contactsPos)

properties = []
for (var key in tableObj) {
    if (tableObj.hasOwnProperty(key)) {
      for (var key2 in tableObj[key]) {
        if (tableObj[key].hasOwnProperty(key2)) {
          properties.push(tableObj[key][key2]);
        }
      }
      console.log(key.split(":")[0]," : ",properties[0])
      if(contactsPos.has(properties[0])==false){
        contactsPos.set(properties[0], { x: 20, y: 80*contactsPos.size })
        drawQs(properties[0], contactsPos.get(properties[0]).x, contactsPos.get(properties[0]).y)
    }
      drawLine(key.split(":")[0],properties[0])
      fillText(properties,key.split(":")[0],properties[0])
      properties = [];
    }
}

})

/*
for (let i = 0; i < 4; i++) {
    
    
    for(var k=0;k<contacts.size+2;k++){
        if(k == contacts.size){
            if (contacts.get('' + i).a === 'igen' || contacts.get('' + i).b === 'igen' || contacts.get('' + i).x === 'igen' || contacts.get('' + i).ü === 'igen') {
                contactTo('q'+i, 'qi');
                contactDescribe(""+i, 'i',contacts);
            }
        }
        if(k == contacts.size+1){
            if (contacts.get('' + i).a === 'nem' || contacts.get('' + i).b === 'nem' || contacts.get('' + i).x === 'nem' || contacts.get('' + i).ü === 'nem') {
                contactTo('q'+i, 'qn');
                contactDescribe(""+i, 'n',contacts);
            }
        }


        if (contacts.get('' + i).a.split(',')[0] === ""+k || contacts.get('' + i).b.split(',')[0] === ""+k || contacts.get('' + i).x.split(',')[0] === ""+k || contacts.get('' + i).ü.split(',')[0] === ""+k) {
            contactTo('q'+i, 'q'+k);
            contactDescribe(""+i, ""+k,contacts);
        }
    }


}
*/

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