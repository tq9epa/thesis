<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Turing Machine Visualizer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
 <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.6/sandstone/bootstrap.min.css" rel="stylesheet" integrity="sha256-oqtj+Pkh1c3dgdH6V9qoS7qwhOy2UZfyVK0qGLa9dCc= sha512-izanB/WZ07hzSPmLkdq82m5xS7EH/qDMgl5aWR37EII+rJOi5c6ouJ3PYnrw6K+DWQcnMZ+nO1NqDr6SBKLBDg==" crossorigin="anonymous">


</head>
  <body>
    <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Webfejlesztés 2.</a>
          </div>
        </div>
      </nav>

    <div class="container">

      <div class="jumbotron">
        <h1>Turing Machine<small>Visualizer</small></h1>
      </div>
      
      <div class="well">
        <p>Image uploader</p>
    <form id="formAjax" action="uploadHandling.php" method="POST">
        <input type="file" id="fileAjax" name="fileAjax" /><br /><br />
        <input type="submit" id="submit" name="submit" value="Upload" />
    </form>
    <p id="status"></p>
    <p id="status2"></p>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript" src="js.js"></script>
  </body>
</html>