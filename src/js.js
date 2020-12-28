var myForm = document.getElementById('formAjax');  // Our HTML form's ID
var myFile = document.getElementById('fileAjax');  // Our HTML files' ID
var statusP = document.getElementById('status');
var statusP2 = document.getElementById('status2');

let finalMap = new Map()

/*let contacts = new Map();
    contacts.set('0', {a: "1,x,->", b: "nem",x: "igen",ü:"nem"})
    contacts.set('1', {a: "1,a,->", b: "1,b,->",x: "2,x,<-",ü:"2,ü,<-"})
    contacts.set('2', {a: "nem", b: "3,x,<-",x: "nem",ü:"nem"})
    contacts.set('3', {a: "3,a,<-", b: "3,b,<-",x: "0,x,>",ü:"nem"})
*/


myForm.onsubmit = function(event) {
    event.preventDefault();

    statusP.innerHTML = 'Uploading...';

    // Get the files from the form input
    var files = myFile.files;
    console.log(files)
    // Create a FormData object
    var formData = new FormData();

    // Select only the first file from the input array
    var file = files[0]; 
   
    // Add the file to the AJAX request
    formData.append('fileAjax', file, file.name);
   
    // Set up the request
    var xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('POST', 'upload.php', true);

    // Set up a handler for when the task for the request is complete
    xhr.onload = function () {
      if (xhr.status == 200) {
        statusP.innerHTML = "Uploaded succesfully";
        statusP2.innerHTML = this.responseText;
        
      } else {
        statusP.innerHTML = 'Upload error. Try again.';
      }
    };
    // Send the data.
    xhr.send(formData);
}

//https://stackoverflow.com/questions/25134998/how-to-give-a-unique-id-for-each-cell-when-adding-custom-columns

  $('button#c').on('click', addColumn);              // add column handler
  $('button#r').on('click', addRow);                 // add row handler
  $('table[data-canexpand]')
    .on('click', 'th:nth-child(n+2)', removeColumn); // remove column handler
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
                                $(cell).html(rnr)) );
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
      var nwcell = $('<td>'+'<input type="text" id="new" size="5" maxlength="10" required>').addClass('new');
      $(currentRow).append(nwcell);
  }
  
  // add new column header
  function addColumnHeader(headerRow) {
      if(document.getElementById('addcolumn').value === null ||  document.getElementById('addcolumn').value.match(/^ *$/)=== null){
      var nwcell = $('<th>'+document.getElementById('addcolumn').value+'</th>');
      $(headerRow).append(nwcell);
      reNumber(null, headerRow);}
      else{
        alert("meg kell adj az ábácá egy betüjét")
      }
  }
  
  // add a column
  function addColumn(){
    if(document.getElementById('addcolumn').value === null ||  document.getElementById('addcolumn').value.match(/^ *$/)=== null){
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
         ,cell = $('<td>'+'<input type="text" id="new" size="5" maxlength="10" required>').addClass('new');
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
        return alert('last row in table can\'t be removed');
      }
      row.remove();
      reNumber(forTable);
  }
  
  // remove a column
  function removeColumn(e){
      var currentCell = $(this)
         ,colIndex = +(currentCell.attr('data-colindex').split('#')[1])
         ,forTable = $(this).parents('table').first()
         ,rows = forTable.find('tr');

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
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
         
          if(r==0 && c!=0)
          maps.set(v++,table.rows[r].cells[c].innerText)
          else
           maps.set(v++,table.rows[r].cells[c].innerText)
          
        }
    }
    
    let the = Math.sqrt(maps.size) //4
    
    console.log(maps)
    //maps.delete(getByValue(maps,'δ'))
    
    maps.forEach(function(value,key) {
      v = parseInt(value.slice(-1),10)
      
      if(Number.isInteger(v)||value=='δ')
      maps.delete(key)
    });
    
    console.log(maps)

    let headerMap = new Map()
    const mapsIter = maps.values()
    const headerMapIter = headerMap.values()
    for(var t=0;t<the-1;t++){
      headerMap.set(t,Array.from(maps)[0][1])
     
      maps.delete(Array.from(maps)[0][0])
    }let vz= {}
    for(var k = 0;k<the-1;k++){ //létrehozom a végső tömböt de ebből még törölni kell
      const headerMapIter = headerMap.values()
        for(var z=0;z<headerMap.size;z++){
          vz = Object.assign(vz,{[headerMapIter.next().value]:mapsIter.next().value})
      finalMap.set(k,vz)
    }
    vz={}
  }
  
console.log(headerMap)
console.log(finalMap)

hidediv();
}
}


function finalMapGetter(){
  console.log(finalMap)
  return finalMap
}


function hidediv(){
 
  document.getElementById("graph").style.display = 'block';
}
/*function init() {
	
  document.getElementById("submitTable").addEventListener('click', hidediv, true);
  
  
}

window.addEventListener('load', init, false);*/



/*TODO
max 10 abece adhato meg, ennek ellenorzese

*/