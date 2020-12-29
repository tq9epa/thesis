
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

function contactTo(from, to) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    if (from == 'q0') {
        if (to == 'q0') {
            
            ctx.moveTo(contactsPos.get('q0').x, contactsPos.get('q0').y - 22);
            ctx.lineTo(contactsPos.get('q0').x - 10, contactsPos.get('q0').y - 40);
            ctx.lineTo(contactsPos.get('q0').x + 30, contactsPos.get('q0').y - 40);
            ctx.lineTo(contactsPos.get('q0').x + 20, contactsPos.get('q0').y - 22);
            ctx.lineTo(contactsPos.get('q0').x + 17, contactsPos.get('q0').y - 30);
            ctx.lineTo(contactsPos.get('q0').x + 30, contactsPos.get('q0').y - 25);
            ctx.lineTo(contactsPos.get('q0').x + 20, contactsPos.get('q0').y - 22);
        }
        if (to == 'q1') {
            
            ctx.moveTo(contactsPos.get('q0').x + 30, contactsPos.get('q0').y - 5);
            ctx.lineTo(contactsPos.get('q1').x - 10, contactsPos.get('q1').y - 5);
            ctx.lineTo(contactsPos.get('q1').x - 20, contactsPos.get('q1').y - 15);
            ctx.lineTo(contactsPos.get('q1').x - 20, contactsPos.get('q1').y + 5);
            ctx.lineTo(contactsPos.get('q1').x - 10, contactsPos.get('q1').y - 5);
        }
        if (to == 'q2') {
            ctx.moveTo(contactsPos.get('q0').x + 10, contactsPos.get('q0').y + 15);
            ctx.lineTo(contactsPos.get('q2').x + 10, contactsPos.get('q2').y - 25);
            ctx.lineTo(contactsPos.get('q2').x, contactsPos.get('q2').y - 35);
            ctx.lineTo(contactsPos.get('q2').x + 20, contactsPos.get('q2').y - 35);
            ctx.lineTo(contactsPos.get('q2').x + 10, contactsPos.get('q2').y - 25);
        }
        if (to == 'q3') {
            ctx.moveTo(contactsPos.get('q0').x + 25, contactsPos.get('q0').y + 10);
            ctx.lineTo(contactsPos.get('q3').x - 5, contactsPos.get('q3').y - 20);
            ctx.lineTo(contactsPos.get('q3').x - 20, contactsPos.get('q3').y - 20);
            ctx.lineTo(contactsPos.get('q3').x - 10, contactsPos.get('q3').y - 35);
            ctx.lineTo(contactsPos.get('q3').x - 5, contactsPos.get('q3').y - 20);
        }
        if (to == 'qi') {
            ctx.moveTo(contactsPos.get('q0').x , contactsPos.get('q0').y + 14);
            ctx.lineTo(contactsPos.get('qi').x + 15, contactsPos.get('qi').y - 25);
            ctx.lineTo(contactsPos.get('qi').x + 10, contactsPos.get('qi').y - 35);
            ctx.lineTo(contactsPos.get('qi').x + 28, contactsPos.get('qi').y - 30);
            ctx.lineTo(contactsPos.get('qi').x + 15, contactsPos.get('qi').y - 25);
        }
        if (to == 'qn') {
            ctx.moveTo(contactsPos.get('q0').x + 25, contactsPos.get('q0').y + 10);
            ctx.lineTo(contactsPos.get('qn').x - 5, contactsPos.get('qn').y - 20);
            ctx.lineTo(contactsPos.get('qn').x - 20, contactsPos.get('qn').y - 15);
            ctx.lineTo(contactsPos.get('qn').x - 10, contactsPos.get('qn').y - 33);
            ctx.lineTo(contactsPos.get('qn').x - 5, contactsPos.get('qn').y - 20);
        }
    }
    if (from == 'q1') {
        if (to == 'q0') {
            ctx.lineTo(contactsPos.get('q1').x - 10, contactsPos.get('q1').y - 5);
            ctx.lineTo(contactsPos.get('q0').x + 30, contactsPos.get('q0').y - 5);
            ctx.lineTo(contactsPos.get('q0').x + 40, contactsPos.get('q0').y - 15);
            ctx.lineTo(contactsPos.get('q0').x + 40, contactsPos.get('q0').y + 5);
            ctx.lineTo(contactsPos.get('q0').x + 30, contactsPos.get('q0').y - 5);
        }
        if (to == 'q1') {
            ctx.moveTo(contactsPos.get('q1').x, contactsPos.get('q1').y - 22);
            ctx.lineTo(contactsPos.get('q1').x - 10, contactsPos.get('q1').y - 40);
            ctx.lineTo(contactsPos.get('q1').x + 30, contactsPos.get('q1').y - 40);
            ctx.lineTo(contactsPos.get('q1').x + 20, contactsPos.get('q1').y - 22);
            ctx.lineTo(contactsPos.get('q1').x + 17, contactsPos.get('q1').y - 30);
            ctx.lineTo(contactsPos.get('q1').x + 30, contactsPos.get('q1').y - 25);
            ctx.lineTo(contactsPos.get('q1').x + 20, contactsPos.get('q1').y - 22);
        }
        if (to == 'q2') {
            ctx.moveTo(contactsPos.get('q1').x - 5, contactsPos.get('q1').y + 10);
            ctx.lineTo(contactsPos.get('q2').x + 25, contactsPos.get('q2').y - 20);
            ctx.lineTo(contactsPos.get('q2').x + 25, contactsPos.get('q2').y - 35);
            ctx.lineTo(contactsPos.get('q2').x + 40, contactsPos.get('q2').y - 20);
            ctx.lineTo(contactsPos.get('q2').x + 25, contactsPos.get('q2').y - 20);
        }
        if (to == 'q3') {
            ctx.moveTo(contactsPos.get('q1').x + 10, contactsPos.get('q1').y + 15);
            ctx.lineTo(contactsPos.get('q3').x + 10, contactsPos.get('q3').y - 25);
            ctx.lineTo(contactsPos.get('q3').x, contactsPos.get('q3').y - 35);
            ctx.lineTo(contactsPos.get('q3').x + 20, contactsPos.get('q3').y - 35);
            ctx.lineTo(contactsPos.get('q3').x + 10, contactsPos.get('q3').y - 25);
        }
        if (to == 'qi') {
            ctx.moveTo(contactsPos.get('q1').x - 5, contactsPos.get('q1').y + 10);
            ctx.lineTo(contactsPos.get('qi').x + 28, contactsPos.get('qi').y - 15);
            ctx.lineTo(contactsPos.get('qi').x + 33, contactsPos.get('qi').y - 30);
            ctx.lineTo(contactsPos.get('qi').x + 43, contactsPos.get('qi').y - 10);
            ctx.lineTo(contactsPos.get('qi').x + 28, contactsPos.get('qi').y - 15);
        }
        if (to == 'qn') {
            ctx.moveTo(contactsPos.get('q1').x + 25, contactsPos.get('q1').y + 10);
            ctx.lineTo(contactsPos.get('qn').x + 5, contactsPos.get('qn').y - 25);
            ctx.lineTo(contactsPos.get('qn').x + 15, contactsPos.get('qn').y - 40);
            ctx.lineTo(contactsPos.get('qn').x - 10, contactsPos.get('qn').y - 30);
            ctx.lineTo(contactsPos.get('qn').x + 5, contactsPos.get('qn').y - 25);
        }
    }
    if (from == 'q2') {
        if (to == 'q0') {
            ctx.moveTo(contactsPos.get('q2').x + 10, contactsPos.get('q2').y - 25);
            ctx.lineTo(contactsPos.get('q0').x + 10, contactsPos.get('q0').y + 15);
            ctx.lineTo(contactsPos.get('q0').x, contactsPos.get('q0').y + 25);
            ctx.lineTo(contactsPos.get('q0').x + 20, contactsPos.get('q0').y + 25);
            ctx.lineTo(contactsPos.get('q0').x + 10, contactsPos.get('q0').y + 15);
        }
        if (to == 'q1') {
            ctx.moveTo(contactsPos.get('q2').x + 25, contactsPos.get('q2').y - 20);
            ctx.lineTo(contactsPos.get('q1').x - 5, contactsPos.get('q1').y + 10);
            ctx.lineTo(contactsPos.get('q1').x - 20, contactsPos.get('q1').y + 10);
            ctx.lineTo(contactsPos.get('q1').x - 5, contactsPos.get('q1').y + 25);
            ctx.lineTo(contactsPos.get('q1').x - 5, contactsPos.get('q1').y + 10);
        }
        if (to == 'q2') {
            ctx.moveTo(contactsPos.get('q2').x, contactsPos.get('q2').y + 12);
            ctx.lineTo(contactsPos.get('q2').x - 10, contactsPos.get('q2').y + 30);
            ctx.lineTo(contactsPos.get('q2').x + 30, contactsPos.get('q2').y + 30);
            ctx.lineTo(contactsPos.get('q2').x + 20, contactsPos.get('q2').y + 12);
            ctx.lineTo(contactsPos.get('q2').x + 17, contactsPos.get('q2').y + 20);
            ctx.lineTo(contactsPos.get('q2').x + 30, contactsPos.get('q2').y + 15);
            ctx.lineTo(contactsPos.get('q2').x + 20, contactsPos.get('q2').y + 12);
        }
        if (to == 'q3') {
            ctx.moveTo(contactsPos.get('q2').x + 30, contactsPos.get('q2').y - 5);
            ctx.lineTo(contactsPos.get('q3').x - 10, contactsPos.get('q3').y - 5);
            ctx.lineTo(contactsPos.get('q3').x - 20, contactsPos.get('q3').y - 15);
            ctx.lineTo(contactsPos.get('q3').x - 20, contactsPos.get('q3').y + 5);
            ctx.lineTo(contactsPos.get('q3').x - 10, contactsPos.get('q3').y - 5);
        }
        if (to == 'qi') {
            ctx.moveTo(contactsPos.get('q2').x , contactsPos.get('q2').y - 24);
            ctx.lineTo(contactsPos.get('qi').x + 15, contactsPos.get('qi').y + 15);
            ctx.lineTo(contactsPos.get('qi').x + 10, contactsPos.get('qi').y + 25);
            ctx.lineTo(contactsPos.get('qi').x + 28, contactsPos.get('qi').y + 20);
            ctx.lineTo(contactsPos.get('qi').x + 15, contactsPos.get('qi').y + 15);
        }
        if (to == 'qn') {
            ctx.moveTo(contactsPos.get('q2').x + 27, contactsPos.get('q2').y - 15);
            ctx.lineTo(contactsPos.get('qn').x - 5, contactsPos.get('qn').y + 10);
            ctx.lineTo(contactsPos.get('qn').x - 20, contactsPos.get('qn').y + 5);
            ctx.lineTo(contactsPos.get('qn').x - 10, contactsPos.get('qn').y + 23);
            ctx.lineTo(contactsPos.get('qn').x - 5, contactsPos.get('qn').y + 10);
        }
    }
    if (from == 'q3') {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        if (to == 'q0') {
            ctx.moveTo(contactsPos.get('q3').x - 5, contactsPos.get('q3').y - 20);
            ctx.lineTo(contactsPos.get('q0').x + 25, contactsPos.get('q0').y + 10);
            ctx.lineTo(contactsPos.get('q0').x + 25, contactsPos.get('q0').y + 25);
            ctx.lineTo(contactsPos.get('q0').x + 40, contactsPos.get('q0').y + 10);
            ctx.lineTo(contactsPos.get('q0').x + 25, contactsPos.get('q0').y + 10);
        }
        if (to == 'q1') {
            ctx.moveTo(contactsPos.get('q3').x + 10, contactsPos.get('q3').y - 25);
            ctx.lineTo(contactsPos.get('q1').x + 10, contactsPos.get('q1').y + 15);
            ctx.lineTo(contactsPos.get('q1').x, contactsPos.get('q1').y + 25);
            ctx.lineTo(contactsPos.get('q1').x + 20, contactsPos.get('q1').y + 25);
            ctx.lineTo(contactsPos.get('q1').x + 10, contactsPos.get('q1').y + 15);
        }
        if (to == 'q2') {
            ctx.lineTo(contactsPos.get('q3').x - 10, contactsPos.get('q3').y - 5);
            ctx.lineTo(contactsPos.get('q2').x + 30, contactsPos.get('q2').y - 5);
            ctx.lineTo(contactsPos.get('q2').x + 40, contactsPos.get('q2').y - 15);
            ctx.lineTo(contactsPos.get('q2').x + 40, contactsPos.get('q2').y + 5);
            ctx.lineTo(contactsPos.get('q2').x + 30, contactsPos.get('q2').y - 5);
        }
        if (to == 'q3') {
            ctx.moveTo(contactsPos.get('q3').x, contactsPos.get('q3').y + 12);
            ctx.lineTo(contactsPos.get('q3').x - 10, contactsPos.get('q3').y + 30);
            ctx.lineTo(contactsPos.get('q3').x + 30, contactsPos.get('q3').y + 30);
            ctx.lineTo(contactsPos.get('q3').x + 20, contactsPos.get('q3').y + 12);
            ctx.lineTo(contactsPos.get('q3').x + 17, contactsPos.get('q3').y + 20);
            ctx.lineTo(contactsPos.get('q3').x + 30, contactsPos.get('q3').y + 15);
            ctx.lineTo(contactsPos.get('q3').x + 20, contactsPos.get('q3').y + 12);
        }
        if (to == 'qi') {
            ctx.moveTo(contactsPos.get('q3').x - 5, contactsPos.get('q3').y - 20);
            ctx.lineTo(contactsPos.get('qi').x + 28, contactsPos.get('qi').y + 5);
            ctx.lineTo(contactsPos.get('qi').x + 33, contactsPos.get('qi').y + 20);
            ctx.lineTo(contactsPos.get('qi').x + 43, contactsPos.get('qi').y );
            ctx.lineTo(contactsPos.get('qi').x + 28, contactsPos.get('qi').y + 5);
        }
        if (to == 'qn') {
            ctx.moveTo(contactsPos.get('q3').x + 25, contactsPos.get('q3').y - 20);
            ctx.lineTo(contactsPos.get('qn').x + 5, contactsPos.get('qn').y + 15);
            ctx.lineTo(contactsPos.get('qn').x + 10, contactsPos.get('qn').y + 30);
            ctx.lineTo(contactsPos.get('qn').x - 8, contactsPos.get('qn').y + 22);
            ctx.lineTo(contactsPos.get('qn').x + 5, contactsPos.get('qn').y + 15);
        }
    }
    ctx.stroke();
}


function MainDraw(qAmount) {
var contacts = new Map(finalMapGetter())




for(var t=1;t<qAmount;t++){
    if(t % 2){
    contactsPos.set('q'+t, { x: 500, y: 80*t })
    drawQs('q'+t, contactsPos.get('q'+t).x, contactsPos.get('q'+t).y);}
    else{
        contactsPos.set('q'+t, { x: 20, y: 80*t })
        drawQs('q'+t, contactsPos.get('q'+t).x, contactsPos.get('q'+t).y);}
    }


contactsPos.set('q0', { x: 200, y: 50 })
contactsPos.set('qi', { x: 400, y: 300 })
contactsPos.set('qn', { x: 300, y: 500 })

drawQs('q0', contactsPos.get('q0').x, contactsPos.get('q0').y);
drawQs('qi', contactsPos.get('qi').x, contactsPos.get('qi').y);
drawQs('qn', contactsPos.get('qn').x, contactsPos.get('qn').y);



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
}
/*
function hidediv(){
 
    document.getElementById("graph").style.display = 'block';
   
  }
  function init() {
      
    document.getElementById("submitTable").addEventListener('click', hidediv, true);
    
    
  }
  
  window.addEventListener('load', init, false);*/