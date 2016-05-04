<?php
function delete_query($link,$TableName,$SQLwhere)
{
$str="delete from ";
$str.=$TableName." where ";
$str.=$SQLwhere;

$rs=DBqueryexecut($link,$str);
$TableName="";
return -1;
}
?>