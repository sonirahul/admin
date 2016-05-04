<?php 
header('Content-Type: text/html; charset=windows-1256');
include "function.php";
if (is_numeric($_GET["ID"])) {

$SQL="select about_desc_en from about where about_id=".$_GET["ID"];
$showteamdata=select_query($link,$SQL,0,0);	
}else{
echo "<script>document.location='index.php';</script>";
}

?>
 <p  style="font-family:Arial, Helvetica, sans-serif; padding-left:15px; padding-right:15px;font-size:13px; text-align:justify; vertical-align:top">
<?php echo $showteamdata[0]['about_desc_en'];?>
</p>

