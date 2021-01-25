<?php

$path = "./";
$files = preg_grep('~\.(JSON)$~', scandir($path));

//$files = array_diff(scandir($path), array('.', '..'));

print_r(implode(',',$files))


?>