<?php
//----------------Function DataBase Connection
function connection()
{
$host="localhost";
$user="mawar_Urmaed";
$password="u&3Mg50W";
$DB='mawar_mawared';
$link = mysql_connect ($host, $user, $password) or die ("Could not connect");
mysql_select_db($DB,$link) or die ("Could not Select DataBase");
return($link);
}
//------------------Function DataBase Query Execut
function DBqueryexecut($link,$sql)
{
$db='mawar_mawared';
$rs=mysql_db_query($db,$sql,$link ) or die ("Syntax Error In ---> ".$sql);
return ($rs);
}
?>