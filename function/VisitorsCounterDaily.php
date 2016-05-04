<?php
function VisitorsCounterDaily($link,$TestCounter)
{

$coun_value=array();
//---------------------------------
$SQL="select * from counter where counter_date=UNIX_TIMESTAMP(CURRENT_DATE)";
$showchek=select_query($link,$SQL,0,0);
if (count($showchek)==0)
{
$TableName="counter";
	$TableField=array();
	$TableField[0][0]="count";
	$TableField[0][1]=1;
	$TableField[1][0]="counter_date";
	list ($day,$month, $year) = split ('[/.-]',date("d/m/Y"));
	$TableField[1][1]=mktime(0,0,0,$month,$day,$year);
	insert_query($link,$TableName,$TableField);
	echo "<script>document.cookie='TestCounter=exist';</script>";
	$coun_value[0][0]=1;
		
}elseif($TestCounter==""){
		$counter_date =auto_num($link,"counter where counter_date=UNIX_TIMESTAMP(CURRENT_DATE)","count"); 
		$TableField[0][0]="count";
		$TableField[0][1]="$counter_date";
	    $SQLwhere='counter_date=UNIX_TIMESTAMP(CURRENT_DATE)';
		update_query($link,"counter",$TableField,$SQLwhere);
		echo "<script>document.cookie='TestCounter=exist';</script>";
		$coun_value[0][0]=$counter_date;
	}
	else
	{
	    $SQL="select count from counter where counter_date=UNIX_TIMESTAMP(CURRENT_DATE) ";
        $dateMaxCounter=select_query($link,$SQL,0,0);
		$coun_value[0][0]=$dateMaxCounter[0]["count"];
	}

//---------------------------
$SQL="select sum(count) as MaxCounter from counter";
        $RetMaxCounter=select_query($link,$SQL,0,0);
		$coun_value[0][1]=$RetMaxCounter[0]["MaxCounter"];
//----------------------------------
		$SQL="select max(count) as Maxter from counter";
        $Max=select_query($link,$SQL,0,0);
		$coun_value[0][2]=$Max[0]["Maxter"];
		$maxall=$Max[0]["Maxter"];
//----------------------------------
		$SQL="select counter_date as Maxter from counter where count=$maxall";
        $dateMax=select_query($link,$SQL,0,0);
		$coun_value[0][3]=$dateMax[0]["Maxter"];
//----------------------------------

return $coun_value;	
}//end of function
?>