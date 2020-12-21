<?php
   

    // Store all errors
    $errors = [];

    // Define available file extensions
    $fileExtensions = ['jpeg','jpg','png','gif'];

    if(!empty($_POST['fileAjax']))  {

        if($_FILES['fileAjax']['type']=="text/plain") {
                $fileName = $_FILES['myFile']['name'];
                $fileTmpName  = $_FILES['myFile']['tmp_name'];
                $fileType = $_FILES['myFile']['type'];
                $fileExtension = strtolower(pathinfo($fileName,PATHINFO_EXTENSION));

                $uploadPath = $currentDir . $uploadDirectory . basename($fileName); 
                echo $fileName;
                echo $uploadPath;
                echo "fasz";

                if (isset($fileName)) {
                    
                    if (empty($errors)) {
                        $didUpload = move_uploaded_file($fileTmpName, $uploadPath);
                        if ($didUpload) {
                            echo "The image " . basename($fileName) . " has been uploaded.";
                        } else {
                            echo "An error occurred while uploading. Try again.";
                        }
                    } else {
                        foreach ($errors as $error) {
                            echo $error . "The following error occured: " . "\n";
                        }
                    }
                }
                $fh = fopen($_FILES['fileAjax']['name'],'r');
                while ($line = fgets($fh)) {
        
                echo($line);
                }
                fclose($fh);
}else{
echo "worong file extension";
}

}
else{
echo "no file";}

?>