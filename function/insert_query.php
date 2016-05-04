<?php
function insert_query($link,$TableName,$TableField)
{
//-------------------------------Data Check 
$SQL="select * from $TableName where ";
for($i=0; $i<count($TableField); $i++)
{
if($i==count($TableField)-1)
  {
 $SQL.=$TableField[$i][0]."=".$TableField[$i][1];
  }else{
  $SQL.=$TableField[$i][0]."=".$TableField[$i][1]." and ";
  }
}
$result=select_query($link,$SQL,0,0);
if($result==-2) echo $SQL; 
//----------------------------------------Insert
$str="insert into ";
$str.=$TableName;
$str.=" ( ";

for($i=0; $i<count($TableField); $i++)
{
if($i==count($TableField)-1)
  {
  $str.=$TableField[$i][0];
  }else{
  $str.=$TableField[$i][0].",";
  }
}
$str.=" ) values ( ";
for($i=0; $i<count($TableField); $i++)
{
if($i==count($TableField)-1)
  {
  $str.=$TableField[$i][1];
  }else{
  $str.=$TableField[$i][1].",";
  }
}
$str.=" )";
$rs=DBqueryexecut($link,$str);
$TableName="";
$TableField=array();
return -1;
}
?>