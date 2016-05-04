<?php
function auto_num($link,$TableName,$TablePrimaryKey)
{
$SQL="select max($TablePrimaryKey)+1 as nextId from $TableName";
$rs=DBqueryexecut($link,$SQL);
if($Row=mysql_fetch_array($rs))
$next_id=$Row["nextId"];
if($next_id=="") $next_id=1;
return $next_id;
}
?>