<?php
    
    function getDirContents($dir) {
        $files = scandir($dir);
        foreach($files as $key => $value){
    
            $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
            if(!is_dir($path)) {
                yield $path;
    
            } else if($value != "." && $value != "..") {
               yield from getDirContents($path);
               yield $path;
            }
        }
    }
   
    if (isset($_POST) && !empty($_POST) ) {

        if(isset($_POST['savefile'])){
            
            $myfile = fopen(date("ymdhi").".txt", "w") or die("Unable to open file!");
            
            
            fwrite($myfile, $_POST['savefile']);
            fclose($myfile);
            echo date("Y.m.d").date("h:i:sa"); 
            }
        
        if(isset($_POST['listnull'])){
            foreach(getDirContents('./') as $value) {
            
                if(strpos($value, 'txt')!==false){
                    echo $value." ";
                    
                }
            }
        }

        if(isset($_POST['appendToDiv'])){

            $shipments = file_get_contents($_POST['appendToDiv']);
            echo $shipments;
        }
        if(isset($_POST['deletefile'])){

            echo "File delete was: ".unlink($_POST['deletefile']);
        
        }
           exit;
    }
    
?> 