
var canvas = document.getElementById("myCanvas");


function drawQs(name, x, y) {
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillText(name, x, y);
    ctx.beginPath();
    ctx.arc(x + 10, y - 5, 20, 0, 2 * Math.PI);
    ctx.closePath()
    ctx.stroke();
}

function contactDescribe(from, to, rowHeight) {
    var textBox = canvas.getContext("2d");
    textBox.font = "15px Arial";
    if (from === to) {
        if (contactsPos.get('q' + from).y < 200) {
            if (contacts.get(from).a.split(',')[0] === to) {
                textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 30 - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).b.split(',')[0] === to) {
                textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 30 - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).x.split(',')[0] === to) {
                textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 30 - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).ü.split(',')[0] === to) {
                textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y - 30 - rowHeight * 15);
                rowHeight--;
            }
        }
        else {
            if (contacts.get(from).a.split(',')[0] === to) {
                textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 50 + rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).b.split(',')[0] === to) {
                textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 50 + rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).x.split(',')[0] === to) {
                textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 50 + rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).ü.split(',')[0] === to) {
                textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], contactsPos.get('q' + from).x, contactsPos.get('q' + from).y + 50 + rowHeight * 15);
                rowHeight--;
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
        if (contactsPos.get('q' + from).x < contactsPos.get('q' + to).x) {

            if (contacts.get(from).a.split(',')[0] === to) {
                textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], contactsPos.get('q' + from).x + 50, y - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).b.split(',')[0] === to) {
                textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], contactsPos.get('q' + from).x + 50, y - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).x.split(',')[0] === to) {
                textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], contactsPos.get('q' + from).x + 50, y - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).ü.split(',')[0] === to) {
                textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], contactsPos.get('q' + from).x + 50, y - rowHeight * 15);
                rowHeight--;
            }
        }
        else {
            if (contacts.get(from).a.split(',')[0] === to) {
                textBox.fillText('a / ' + contacts.get(from).a.split(',')[1] + ', ' + contacts.get(from).a.split(',')[2], contactsPos.get('q' + from).x - 70, y - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).b.split(',')[0] === to) {
                textBox.fillText('b / ' + contacts.get(from).b.split(',')[1] + ', ' + contacts.get(from).b.split(',')[2], contactsPos.get('q' + from).x - 70, y - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).x.split(',')[0] === to) {
                textBox.fillText('x / ' + contacts.get(from).x.split(',')[1] + ', ' + contacts.get(from).x.split(',')[2], contactsPos.get('q' + from).x - 70, y - rowHeight * 15);
                rowHeight--;
            }
            if (contacts.get(from).ü.split(',')[0] === to) {
                textBox.fillText('ü / ' + contacts.get(from).ü.split(',')[1] + ', ' + contacts.get(from).ü.split(',')[2], contactsPos.get('q' + from).x - 70, y - rowHeight * 15);
                rowHeight--;
            }
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


var contactsPos = new Map;
contactsPos.set('q0', { x: 100, y: 125 })
contactsPos.set('q1', { x: 340, y: 125 })
contactsPos.set('q2', { x: 100, y: 375 })
contactsPos.set('q3', { x: 340, y: 375 })
contactsPos.set('qi', { x: 50, y: 250 })
contactsPos.set('qn', { x: 390, y: 250 })
drawQs('q0', contactsPos.get('q0').x, contactsPos.get('q0').y);
drawQs('q1', contactsPos.get('q1').x, contactsPos.get('q1').y);
drawQs('q2', contactsPos.get('q2').x, contactsPos.get('q2').y);
drawQs('q3', contactsPos.get('q3').x, contactsPos.get('q3').y);
drawQs('qi', contactsPos.get('qi').x, contactsPos.get('qi').y);
drawQs('qn', contactsPos.get('qn').x, contactsPos.get('qn').y);
var contacts = finalMapGetter()

contacts.set('0', { a: "1,x,->", b: "nem", x: "igen", ü: "nem" })
contacts.set('1', { a: "1,a,->", b: "1,b,->", x: "2,x,<-", ü: "2,ü,<-" })
contacts.set('2', { a: "nem", b: "3,x,<-", x: "nem", ü: "nem" })
contacts.set('3', { a: "3,a,<-", b: "3,b,<-", x: "0,x,->", ü: "nem" })

console.log(finalMapGetter());

for (let i = 0; i < 4; i++) {
    let checkRowHeight = 0;
    if (contacts.get('' + i).a !== "igen" && contacts.get('' + i).a !== "nem" && contacts.get('' + i).a.split(',')[0] !== ('' + i)) {
        checkRowHeight++;
    }
    if (contacts.get('' + i).b !== "igen" && contacts.get('' + i).b !== "nem" && contacts.get('' + i).b.split(',')[0] !== ('' + i)) {
        checkRowHeight++;
    }
    if (contacts.get('' + i).x !== "igen" && contacts.get('' + i).x !== "nem" && contacts.get('' + i).x.split(',')[0] !== ('' + i)) {
        checkRowHeight++;
    }
    if (contacts.get('' + i).ü !== "igen" && contacts.get('' + i).ü !== "nem" && contacts.get('' + i).ü.split(',')[0] !== ('' + i)) {
        checkRowHeight++;
    }
    console.log(checkRowHeight);
    switch (i) {
        case 0:
            if (contacts.get('' + i).a.split(',')[0] === '0' || contacts.get('' + i).b.split(',')[0] === '0' || contacts.get('' + i).x.split(',')[0] === '0' || contacts.get('' + i).ü.split(',')[0] === '0') {
                contactTo('q0', 'q0');
                contactDescribe('0', '0', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '1' || contacts.get('' + i).b.split(',')[0] === '1' || contacts.get('' + i).x.split(',')[0] === '1' || contacts.get('' + i).ü.split(',')[0] === '1') {
                contactTo('q0', 'q1');
                contactDescribe('0', '1', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '2' || contacts.get('' + i).b.split(',')[0] === '2' || contacts.get('' + i).x.split(',')[0] === '2' || contacts.get('' + i).ü.split(',')[0] === '2') {
                contactTo('q0', 'q2');
                contactDescribe('0', '2', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '3' || contacts.get('' + i).b.split(',')[0] === '3' || contacts.get('' + i).x.split(',')[0] === '3' || contacts.get('' + i).ü.split(',')[0] === '3') {
                contactTo('q0', 'q3');
                contactDescribe('0', '3', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'igen' || contacts.get('' + i).b === 'igen' || contacts.get('' + i).x === 'igen' || contacts.get('' + i).ü === 'igen') {
                contactTo('q0', 'qi');
                contactDescribe('0', 'i', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'nem' || contacts.get('' + i).b === 'nem' || contacts.get('' + i).x === 'nem' || contacts.get('' + i).ü === 'nem') {
                contactTo('q0', 'qn');
                contactDescribe('0', 'n', checkRowHeight);
            }
            break;
        case 1:
            if (contacts.get('' + i).a.split(',')[0] === '0' || contacts.get('' + i).b.split(',')[0] === '0' || contacts.get('' + i).x.split(',')[0] === '0' || contacts.get('' + i).ü.split(',')[0] === '0') {
                contactTo('q1', 'q0', checkRowHeight);
                contactDescribe('1', '0', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '1' || contacts.get('' + i).b.split(',')[0] === '1' || contacts.get('' + i).x.split(',')[0] === '1' || contacts.get('' + i).ü.split(',')[0] === '1') {
                contactTo('q1', 'q1', checkRowHeight);
                contactDescribe('1', '1', checkRowHeight);

            }
            if (contacts.get('' + i).a.split(',')[0] === '2' || contacts.get('' + i).b.split(',')[0] === '2' || contacts.get('' + i).x.split(',')[0] === '2' || contacts.get('' + i).ü.split(',')[0] === '2') {
                contactTo('q1', 'q2', checkRowHeight);
                contactDescribe('1', '2', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '3' || contacts.get('' + i).b.split(',')[0] === '3' || contacts.get('' + i).x.split(',')[0] === '3' || contacts.get('' + i).ü.split(',')[0] === '3') {
                contactTo('q1', 'q3', checkRowHeight);
                contactDescribe('1', '3', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'igen' || contacts.get('' + i).b === 'igen' || contacts.get('' + i).x === 'igen' || contacts.get('' + i).ü === 'igen') {
                contactTo('q1', 'qi');
                contactDescribe('1', 'i', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'nem' || contacts.get('' + i).b === 'nem' || contacts.get('' + i).x === 'nem' || contacts.get('' + i).ü === 'nem') {
                contactTo('q1', 'qn');
                contactDescribe('1', 'n', checkRowHeight);
            }
            break;
        case 2:
            if (contacts.get('' + i).a.split(',')[0] === '0' || contacts.get('' + i).b.split(',')[0] === '0' || contacts.get('' + i).x.split(',')[0] === '0' || contacts.get('' + i).ü.split(',')[0] === '0') {
                contactTo('q2', 'q0', checkRowHeight);
                contactDescribe('2', '0', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '1' || contacts.get('' + i).b.split(',')[0] === '1' || contacts.get('' + i).x.split(',')[0] === '1' || contacts.get('' + i).ü.split(',')[0] === '1') {
                contactTo('q2', 'q1', checkRowHeight);
                contactDescribe('2', '1', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '2' || contacts.get('' + i).b.split(',')[0] === '2' || contacts.get('' + i).x.split(',')[0] === '2' || contacts.get('' + i).ü.split(',')[0] === '2') {
                contactTo('q2', 'q2', checkRowHeight);
                contactDescribe('2', '2', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '3' || contacts.get('' + i).b.split(',')[0] === '3' || contacts.get('' + i).x.split(',')[0] === '3' || contacts.get('' + i).ü.split(',')[0] === '3') {
                contactTo('q2', 'q3', checkRowHeight);
                contactDescribe('2', '3', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'igen' || contacts.get('' + i).b === 'igen' || contacts.get('' + i).x === 'igen' || contacts.get('' + i).ü === 'igen') {
                contactTo('q2', 'qi');
                contactDescribe('2', 'i', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'nem' || contacts.get('' + i).b === 'nem' || contacts.get('' + i).x === 'nem' || contacts.get('' + i).ü === 'nem') {
                contactTo('q2', 'qn');
                contactDescribe('2', 'n', checkRowHeight);
            }
            break;
        case 3:
            if (contacts.get('' + i).a.split(',')[0] === '0' || contacts.get('' + i).b.split(',')[0] === '0' || contacts.get('' + i).x.split(',')[0] === '0' || contacts.get('' + i).ü.split(',')[0] === '0') {
                contactTo('q3', 'q0', checkRowHeight);
                contactDescribe('3', '0', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '1' || contacts.get('' + i).b.split(',')[0] === '1' || contacts.get('' + i).x.split(',')[0] === '1' || contacts.get('' + i).ü.split(',')[0] === '1') {
                contactTo('q3', 'q1', checkRowHeight);
                contactDescribe('3', '1', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '2' || contacts.get('' + i).b.split(',')[0] === '2' || contacts.get('' + i).x.split(',')[0] === '2' || contacts.get('' + i).ü.split(',')[0] === '2') {
                contactTo('q3', 'q2', checkRowHeight);
                contactDescribe('3', '2', checkRowHeight);
            }
            if (contacts.get('' + i).a.split(',')[0] === '3' || contacts.get('' + i).b.split(',')[0] === '3' || contacts.get('' + i).x.split(',')[0] === '3' || contacts.get('' + i).ü.split(',')[0] === '3') {
                contactTo('q3', 'q3', checkRowHeight);
                contactDescribe('3', '3', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'igen' || contacts.get('' + i).b === 'igen' || contacts.get('' + i).x === 'igen' || contacts.get('' + i).ü === 'igen') {
                contactTo('q3', 'qi');
                contactDescribe('3', 'i', checkRowHeight);
            }
            if (contacts.get('' + i).a === 'nem' || contacts.get('' + i).b === 'nem' || contacts.get('' + i).x === 'nem' || contacts.get('' + i).ü === 'nem') {
                contactTo('q3', 'qn');
                contactDescribe('3', 'n', checkRowHeight);
            }
            break;
    }
}

function hidediv(){
 
    document.getElementById("graph").style.display = 'block';
    mainDraw()
  }
  function init() {
      
    document.getElementById("submitTable").addEventListener('click', hidediv, true);
    
    
  }
  
  window.addEventListener('load', init, false);