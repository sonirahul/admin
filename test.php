<?php 
include "php-html-css-js-minifier.php"; 
$str = file_get_contents('css/bootstrap.css');
echo minify_css($str);
?>