<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Turing Machine Visualizer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
 <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css" rel="stylesheet" integrity="sha256-oqtj+Pkh1c3dgdH6V9qoS7qwhOy2UZfyVK0qGLa9dCc= sha512-izanB/WZ07hzSPmLkdq82m5xS7EH/qDMgl5aWR37EII+rJOi5c6ouJ3PYnrw6K+DWQcnMZ+nO1NqDr6SBKLBDg==" crossorigin="anonymous">
 <link rel="stylesheet" href="style.css" />
<style>
table{
    width:100%;
}
table td{
    white-space: nowrap;  /** added **/
}
table td:last-child{
    width:100%;
}
th:hover:after, td:hover:after {
    position: absolute;
    margin-top: 0.8em;
    background: white;
    border: 1px solid #ddd;
    padding: 4px;
    text-align: left;
    white-space: pre;
    font-weight: normal;
    color: #777;
    border-radius: 4px;
    box-shadow: 2px 1px 12px #ccc;
}
th:hover:after {
    content: 'click to remove\A'attr(data-colindex);
}

tr th:nth-child(1):hover:after {
    content: 'row number';
}

td:hover:after {
    content: 'index: ' attr(data-cellindex);
}

tr td:nth-child(1):hover:after {
    content: 'click to remove this row';
}

</style>

</head>
  <body>
    <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Turing Machine Visualizer</a>
          </div>
        </div>
      </nav>

    <div class="container">

    
      
    <div class="well">
    <h2>Szalag futtatása</h2>
    <ol class="turing"></ol>
    <h3>Vezérlés</h3>
			<p>
				<input id="run" type="button" value="Indítás" />
				<input id="step" type="button" value="Következő" />
				<input id="reset" type="button" value="Visszaállítás" />
			</p>
    </div>

      <div class="well">
      <h2>Szalag importálása</h2>
    <form id="formAjax" method="POST">
        <input type="file" id="fileAjax" name="fileAjax" value="Tallózás"/><br /><br />
        <input type="submit" id="submit" name="submit" value="Feltöltés" />
    </form>
    <p id="status"></p>
    <p id="status2"></p>
  
    </div>

    

    
    <div class="well">
    <h2>Az automata konfigurálása</h2>
    

        
        <button id="c" data-tableID="first">Új oszlop hozzáadása</button>
        Ábécé egy betüje: <input type="text" id="addcolumn" size="5" name="asd" required><br>
      <button id="r" data-tableID="first">Új sor hozzáadása</button>

      <form id="formAjaxTable" >
    <table data-canexpand="true" data-hasrownumbers="true" id="first" class="table table-striped">
      <tr><th>δ</th><th>a</th><th>b</th><th>x</th><th>ü</th></tr>
      <tr><td></td><td>1,x,-></td><td>nem</td><td>igen</td><td>nem</td></tr>
      <tr><td></td><td>1,a,-></td><td>1,b,-></td><td>2,x,<-</td><td>2,ü,<-</td></tr>
      <tr><td></td><td>nem</td><td>3,x,<-</td><td>nem</td><td>nem</td></tr>
      <tr><td></td><td>3,a,<-</td><td>3,b,<-</td><td>0,x,-></td><td>nem</td></tr>
    </table>

    <!--
contacts.set('0', { a: "1,x,->", b: "nem", x: "igen", ü: "nem" })
contacts.set('1', { a: "1,a,->", b: "1,b,->", x: "2,x,<-", ü: "2,ü,<-" })
contacts.set('2', { a: "nem", b: "3,x,<-", x: "nem", ü: "nem" })
contacts.set('3', { a: "3,a,<-", b: "3,b,<-", x: "0,x,->", ü: "nem" })
-->
      <input type="submit" id="submitTable" name="submit" value="Küldés" />
      </form>

      <p id="status"></p>
    </div>
    
    <div class="well" id="graph" style="display: none">
    <h2>Gráf</h2>
    <canvas id="myCanvas" width="600" height="600" style="border:1px solid #0e0a0a;">
    </canvas>

    </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript" src="src/js.js"></script>
<script type="text/javascript" src="src/graph.js"></script>
<script type="text/javascript" src="src/turingjs.js"></script>
<script type="text/javascript" src="src/turing.js"></script>
  </body>
</html>