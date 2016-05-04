<?php
function update_query($link,$TableName,$TableField,$SQLwhere)
{
$str="update $TableName set ";

for($i=0; $i<count($TableField); $i++)
{
if($i==count($TableField)-1)
  {
  $str.=$TableField[$i][0]."=".$TableField[$i][1];
  }else{
  $str.=$TableField[$i][0]."=".$TableField[$i][1].",";
  }
}
if($SQLwhere!="")
$str.=" where ".$SQLwhere;
$rs=DBqueryexecut($link,$str);
$TableName="";
$TableField=array();
$SQLwhere="";
return -1;
}
?>