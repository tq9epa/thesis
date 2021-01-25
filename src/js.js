var myForm = document.getElementById('formAjax');
var myFile = document.getElementById('fileAjax');  
var statusP = document.getElementById('status');


let finalMap = new Map()
let examples = new Array()
  examples = null

$('#check').on('click', ajaxfunction);   

function ajaxfunction(){
  
  var req = new XMLHttpRequest();
  
  req.onreadystatechange = function() {
    //Is request finished? Does the requested page exist?
    if( req.status==200) {   
      //Your HTML arrives here
      //statusP.innerHTML = req.responseText
       examples = req.responseText.split(",")
      statusP.innerHTML = examples
     
    }
  }
  
  req.open("GET","./src/upload.php",true)  //true indicates ASYNCHRONOUS
  req.send(null);

 if(examples!=null){
  
  var myDiv = document.getElementById("dropd");


//Create and append select list

var selectList = document.createElement("select");

if(document.getElementById("mySelect")!=null){
  var asd = document.getElementById("mySelect")
  asd.remove();
  
}
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);




  for (var i = 0; i < examples.length; i++) {
   
      var option = document.createElement("option");
      option.setAttribute("value",examples[i]);
      option.text = examples[i];
      selectList.appendChild(option);
  }
}
  
    
}



//https://stackoverflow.com/questions/25134998/how-to-give-a-unique-id-for-each-cell-when-adding-custom-columns

  $('button#c').on('click', addColumn);              // add column handler
  $('button#r').on('click', addRow);                 // add row handler
  $('table[data-canexpand]').on('click', 'th:nth-child(n+2)', removeColumn);
  $('#choose_file').on('click', newtable); 

  function newtable(){
   
    document.getElementById('hidableTable').style.display = 'none';

    var e = document.getElementById("file_option")
    option = e.value;
   

    var tablearea = document.getElementById('textDiv'),
    table = document.createElement('table');

    tablearea.appendChild(table);
    if(document.getElementById("thetextarea")!=null){
  var asd = document.getElementById("thetextarea")
  asd.remove();
  
}

  var x = document.createElement("TEXTAREA");
  x.setAttribute("name", "text"); 
  x.setAttribute("id", "thetextarea"); 
  x.setAttribute("style", "height:500px"); 
  x.setAttribute("oninput", 'this.style.height = "";this.style.height = this.scrollHeight + "px"'); 
  var t = document.createTextNode(JSON.stringify(machines(option)));



  x.appendChild(t);
  

tablearea.appendChild(x)


readFile('File:\\')
    
  }

  function readFile(file)
{
    var f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = function ()
    {
        if(f.readyState === 4)
        {
            if(f.status === 200 || f.status == 0)
            {
                var res= f.responseText;
                alert(res);
            }
        }
    }
    f.send(null);
}

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

