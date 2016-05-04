<?php
function select_query($link,$SQL,$PageCount,$NofPage)
{
$rs=DBqueryexecut($link,$SQL);
$num_rows=mysql_num_rows($rs); 
$FetchNo=$PageCount*($NofPage-1);

$DatafetchArray=array();
$recordOut=0;
	if($NofPage!=0)
        for($i=0; $i<$FetchNo; $i++)$Row=mysql_fetch_array($rs);
		
$i=0;
while($Row[$i]=mysql_fetch_array($rs))
{
$DatafetchArray[$i]=$Row[$i];
$i++;
$recordOut++;
if(($recordOut==$PageCount) && ($PageCount !=0))break;
}

    if($PageCount<>0)
    {

    	$NofPage=ceil($num_rows/$PageCount);
        $DatafetchArray[PNum]=$NofPage;
	}
$SQL="";
return($DatafetchArray);
}
?>