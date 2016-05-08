<?php
session_start();
if($_SESSION["LoginAdmin"]!="Admin")
		{
		header("location:Login.php");
		return;
		}
include "../function.php";
include "header.php";
if($_GET["model"]=="")	$model="main"; else $model=$_GET["model"];
include $model.".php";
include "footer.php";
?>