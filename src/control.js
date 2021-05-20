
window.onload = updateFileList

document.getElementById('listupdate').addEventListener('click',updateFileList)

//function saveform
document.getElementById('loadmachine').addEventListener('click', e => {

  localStorage.setItem("tape",document.getElementById("tape").value)
  localStorage.setItem("first",document.getElementById("first").value)
  localStorage.setItem("last",document.getElementById("last").value)
  localStorage.setItem("final",document.getElementById("final").value )
  localStorage.setItem("fileSelect",document.getElementById("fileSelect").value)

})

//function tipp
document.getElementById('tipp').addEventListener('click', e => {

  r = document.getElementById("fileSelect").value


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

})

//appendToDiv 
document.getElementById('choose_file').addEventListener('click',async e => {
  
  r = document.getElementById("fileSelect").value
  fromphp = await fetchToServer("appendToDiv",r)
  $("#jsonarea").empty();
  document.getElementById('jsonarea').append(fromphp)
  
    
})

//function fetchToServer
async function fetchToServer(header,data){

  var form = new FormData();
  form.append(header, data);
  asd = ""
  
  
  var data = await fetch('src/server.php', {
      method: 'POST',
      body: form
  })
  .then(function (response) {
    return response.text();
  })
  .then(function (body) {
   
    return body
  });
  
  return data
}
//function download
document.getElementById('downloadfile').addEventListener('click',async e => {

  asd = document.getElementById('jsonarea').innerHTML
  await fetchToServer('savefile',asd)
      
})

//function updateFileList
async function updateFileList(){

  splitted = await fetchToServer("listnull","")
  splitted = splitted.split(" ")
  document.getElementById("fileSelect").innerHTML = ""
  var select = document.getElementById("fileSelect"); 

  for(var i = 0; i < splitted.length; i++) {
    var opt = splitted[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
 
}
// async function deletefile
document.getElementById('deleteFile').addEventListener('click',async e => {

  r = document.getElementById("fileSelect").value
  
  if(r.includes("example")==false){
  
    fromphp = await fetchToServer("deletefile",r)
    updateFileList()
  }
})
