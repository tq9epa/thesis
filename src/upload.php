<?php
//https://uploadcare.com/blog/file-upload-ajax/
   
    
   
  
if(empty($_POST['fileAjax']) )  {

        if($_FILES['fileAjax']['type']=="text/plain") {
                
                

                
                $fh = fopen($_FILES['fileAjax']['name'],'r');
                while ($line = fgets($fh)) {
                     echo($line);
                }
                fclose($fh);
            }
        else{
            echo "worong file extension";
            }
}
else{
echo "no file";

}
if(empty($_POST['fileAjaxTable']) )  {

    if($_FILES['fileAjax']['type']=="text/plain") {
            
            

            
            $fh = fopen($_FILES['fileAjax']['name'],'r');
            while ($line = fgets($fh)) {
                 echo($line);
            }
            fclose($fh);
        }
    else{
        echo "worong file extension";
        }
}
else{
echo "no file";

}

?>