var myForm = document.getElementById('formAjax');
var myFile = document.getElementById('fileAjax');  
var statusP = document.getElementById('status');

let finalMap = new Map()


document.getElementById('choose_file').addEventListener('click',appendToDiv); 
document.getElementById('downloadfile').addEventListener('click',download ); 
document.getElementById('listupdate').addEventListener('click',updateFileList); 

document.getElementById('tapeaddv').addEventListener('click',tipp); 
document.getElementById('firstaddv').addEventListener('click',tipp); 
document.getElementById('lastaddv').addEventListener('click',tipp); 
document.getElementById('finaladdv').addEventListener('click',tipp);
document.getElementById('loadmachine').addEventListener('click',saveForm);

function saveForm(){
  localStorage.setItem("tape",document.getElementById("tape").value)
  localStorage.setItem("first",document.getElementById("first").value)
  localStorage.setItem("last",document.getElementById("last").value)
  localStorage.setItem("final",document.getElementById("final").value )
  localStorage.setItem("jsonSelect",document.getElementById("jsonSelect").value)

  
 /*onsole.log(localStorage.getItem("tape"))
 console.log(localStorage.getItem("first"))
 console.log(localStorage.getItem("last"))
 console.log(localStorage.getItem("final"))
 console.log(localStorage.getItem("jsonSelect"))*/

}


function tipp(){
  r = document.getElementById("jsonSelect").value


  if(r.includes("example1")){
  document.getElementById("tape").value = ['1', '1', '1', '*', '1', '1', '*', '1', '='];
  document.getElementById("first").value = "s1";
  document.getElementById("last").value = "s9";
  document.getElementById("final").value = "3! =";}

if(r.includes("example2")){
  document.getElementById("tape").value = ['1', '1', '1', '!', '='];
  document.getElementById("first").value = "s1";
  document.getElementById("last").value = "s99";
  document.getElementById("final").value = "3! =";}

if(r.includes("example3")){
  document.getElementById("tape").value = ['1', '1', '1', '*', '1', '1', '='];
  document.getElementById("first").value = "s1";
  document.getElementById("last").value = "s8";
  document.getElementById("final").value = "3 * 2 =";}

}

async function appendToDiv(){
  
  r = document.getElementById("jsonSelect").value
  fromphp = await fetchToServer("appendToDiv",r)
  $("#jsonarea").empty();
  document.getElementById('jsonarea').append(fromphp)
  console.log(fromphp.substring(0,10))
    
}


async function fetchToServer(header,data){

  var form = new FormData();
  form.append(header, data);
  asd = ""
  //console.log(form.values().next().value) // return and obj contain JSON string
  
  var data = await fetch('src/readfile.php', {
      method: 'POST',
      body: form
  })
  .then(function (response) {
    return response.text();
  })
  .then(function (body) {
   
    return body
  });
  //console.log(data)
  //await delay()
  return data
}

function download() {
  //var newFileName = prompt("Kérem, adja meg a menteni kívánt fájl nevét!");
  asd = document.getElementById('jsonarea').innerHTML
  
  //getOutput('?a=download&q='+newFileName+'&path='+ asd)
     
  fetchToServer('savefile',asd)
      
}

async function updateFileList(){

  splitted = await fetchToServer("listnull","")
  splitted = splitted.split(" ")
  var select = document.getElementById("jsonSelect"); 

  for(var i = 0; i < splitted.length; i++) {
  var opt = splitted[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
  
}
}
