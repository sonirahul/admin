<?php
//----------------Function DataBase Connection
function connection()
{
$host="localhost";
//$user="mawar_Urmaed";
//$password="u&3Mg50W";
$user="root";
$password="bigboss7";
$DB='mawar_mawared';
$link = mysql_connect ($host, $user, $password) or die ("Could not connect");
mysql_select_db($DB,$link) or die ("Could not Select DataBase");
mysql_query("SET NAMES 'utf8'");
mysql_query('SET CHARACTER SET utf8');
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