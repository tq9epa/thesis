var myForm = document.getElementById('formAjax');
var myFile = document.getElementById('fileAjax');  
var statusP = document.getElementById('status');

document.getElementById('choose_file').addEventListener('click',appendToDiv); 
document.getElementById('downloadfile').addEventListener('click',download ); 
document.getElementById('listupdate').addEventListener('click',updateFileList); 

document.getElementById('tapeaddv').addEventListener('click',tipp); 
document.getElementById('firstaddv').addEventListener('click',tipp); 
document.getElementById('lastaddv').addEventListener('click',tipp); 
document.getElementById('finaladdv').addEventListener('click',tipp); 


let finalMap = new Map()

function tipp(){
  r = document.getElementById("jsonSelect").value


  if(r.includes("example1")){
  document.getElementById("tape").value = "['1', '1', '1', '*', '1', '1', '*', '1', '=']";
  document.getElementById("first").value = "s1";
  document.getElementById("last").value = "s9";
  document.getElementById("final").value = "3! =";}

if(r.includes("example2")){
  document.getElementById("tape").value = "['1', '1', '1', '!', '=']";
  document.getElementById("first").value = "s1";
  document.getElementById("last").value = "s99";
  document.getElementById("final").value = "3! =";}

if(r.includes("example3")){
  document.getElementById("tape").value = "['1', '1', '1', '*', '1', '1', '=']";
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
  console.log(data)
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

  
//https://stackoverflow.com/questions/25134998/how-to-give-a-unique-id-for-each-cell-when-adding-custom-columns

  $('button#c').on('click', addColumn);              // add column handler
  $('button#r').on('click', addRow);                 // add row handler
  $('table[data-canexpand]').on('click', 'th:nth-child(n+2)', removeColumn);
  
 
  

  function getConfig(){
    console.log( JSON.parse($('textarea#thetextarea').val()))
    return $('textarea#thetextarea').val()
  }
  // remove a column
  function removeColumn(e){
    var currentCell = $(this)
   
     currentCell = colIndex = +(currentCell.attr('data-colindex').split('#')[1])
     currentCell = forTable = $(this).parents('table').first()
     currentCell = rows = forTable.find('tr');

    // using rownumbers, this won't be hit
    if (rows.last().find('td').length < 2) {
        return alert('last column in table can\'t be removed');
    }
    console.log(colIndex);
    rows.each( function(i, row) {
                row.removeChild(row.childNodes[colIndex]);
               } );
    reNumber(forTable);
}
   
  $('table[data-canexpand]')
    .on('click', 'tr td:nth-child(1)', removeRow);   // remove row handler
  
  // initial numbering of all table cells
  $('table[data-canexpand]').each(function(i, tbl) { reNumber($(tbl)); });
  
  // renumber a headerrow, row, or all rows
  function reNumber(table, row, i) {
      // renumber column headers
      if (row && $(row).find('th').length) { return numberColumnHeaders(row); }
      
      // renumber specific row
      if (row) { return numberRow(row, i);  }
      
      // renumber all cells in table
      return $.each( 
          table.find('tr'), 
          function(i, row) { 
            
            if (i>0) { numberRow(row, i); } 
            else { numberColumnHeaders(row); }

          });
      
      // renumber: local numberRow method
      function numberRow(rw, rnr) {
       
        $(rw).find('td').each(
                function (j, cell) {
                   void( j>0 && $(cell).attr('data-cellindex','r' + (rnr) + 'c' + j)
                             || ($(cell).attr('data-rowindex','row#' + (rnr)),
                                $(cell).html(rnr-1)) );
                } );
                  
      }
      
      // renumber: local numberColumnHeader method
      function numberColumnHeaders(headerRow) {
            $.each( $(headerRow).find('th'),
                    function (j, head) {
                       $(head).attr('data-colindex','col#'+j);
                    } );
      }
  }
  
  // add new column cell
  function addCell(currentRow, rownr) {
    console.log(currentRow+" : "+rownr)
      var nwcell = $('<td>'+'<input type="text" id="new" size="5" maxlength="10" >').addClass('new');
      $(currentRow).append(nwcell);
  }
  
  // add new column header
  function addColumnHeader(headerRow) {
      if( document.getElementById('addcolumn').value.match(/^ *$/)=== null || document.getElementById('addcolumn').value == ""){
      var nwcell = $('<th> <input type="text" id="new" size="3" maxlength="10" value="' + document.getElementById('addcolumn').value +'"> '+'</th>');
      $(headerRow).append(nwcell);
      reNumber(null, headerRow);}
      else{
        alert("meg kell adj az ábácá egy betüjét asd")
      }
  }
  
  // add a column
  function addColumn(){
    if(document.getElementById('addcolumn').value.match(/^ *$/)=== null || document.getElementById('addcolumn').value == ""){
     var forTable = $('#'+$(this).attr('data-tableID')); 
     $.each( forTable.find('tr'),
             function(i, row) {
               return i<1 ? addColumnHeader(row) : addCell(row, i);
             }
      );
      // renumber the whole enchillada
      reNumber(forTable);}
      else{
        alert("meg kell adj az ábácá egy betüjét")
      }
  }
  
  // add a row
  function addRow(e) {
      var forTable = $('#'+$(this).attr('data-tableID'))
         ,nCells = forTable.find('tr').last().find('td').length
         ,row = $('<tr>')
         ,cell = $('<td>'+'<input type="text" id="new" size="3" maxlength="10" required>').addClass('new');
      ;
      while (nCells) {
          row.append(cell.clone());
          nCells -= 1;
      }
      forTable.append(row);
      reNumber(null, row, forTable.find('tr').length-1);
  }
  
  // remove a row
  function removeRow() {
      var currentCell = $(this)
         ,row = currentCell.parents('tr').first()
         ,forTable = currentCell.parents('table').first();
      if (forTable.find('tr').length < 3) {
        return alert('utlosó sort nem lehet törölni');
      }
      row.remove();
      reNumber(forTable);
  }
  
  // remove a column
  function removeColumn(e){
      var currentCell = $(this)
      console.log(currentCell)
       currentCell = colIndex = +(currentCell.attr('data-colindex').split('#')[1])
       currentCell = forTable = $(this).parents('table').first()
       currentCell = rows = forTable.find('tr');

      // using rownumbers, this won't be hit
      if (rows.last().find('td').length < 2) {
          return alert('utlosó oszlopot nem lehet törölni');
      }
      console.log(colIndex);
      rows.each( function(i, row) {
                  row.removeChild(row.childNodes[colIndex]);
                 } );
      reNumber(forTable);
  }

  function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
  }

  
  var myForm2 = document.getElementById('formAjaxTable');
  myForm2.onsubmit = function(event) {
    event.preventDefault();


  document.getElementById("submitTable").onclick = GetCellValues;
  
  function GetCellValues() {
    
    let maps = new Map()
     
    var table = document.getElementById('first');
    let v=0;
    var lenght = table.rows.length;
    
    let the= 0
    
    let vz= {}

    let headerMap = new Map()
    for (i = 0; i < lenght; i++){
        var inputs = table.rows.item(i).getElementsByTagName("input");
        var inputslengte = inputs.length;

        for(var j = 0; j < inputslengte; j++){
            var inputval = inputs[j].value;                
            maps.set(v++,inputval)
        }            
    }
    
    
    maps.forEach(function(value,key) {
      if(value.length==1)
      the++
    });

    
    const mapsIter = maps.values()
    const headerMapIter = headerMap.values()
    for(var t=0;t<the;t++){
      headerMap.set(t,Array.from(maps)[0][1])
     
      maps.delete(Array.from(maps)[0][0])
    }
    
    for(var k = 0;k<maps.size / headerMap.size;k++){ 
      const headerMapIter = headerMap.values()
        for(var z=0;z<headerMap.size;z++){
          vz = Object.assign(vz,{[headerMapIter.next().value]:mapsIter.next().value})
      finalMap.set(k.toString(),vz)
    }
    vz={}
  }
  

hidediv();
MainDraw(the)
}
}


function finalMapGetter(){
  console.log(finalMap)
  return finalMap
}


function hidediv(){
 
  document.getElementById("graph").style.display = 'block';
}
