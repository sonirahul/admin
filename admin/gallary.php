<?
$Searchname=$_POST["Searchname"];
$searchpostcat=$_POST['searchpostcat'];

$gid=$_POST["gid"];
$txtaname=$_POST["txtaname"];
$txtename=$_POST["txtename"];
	$txtename=str_replace("'","\'",$txtename);
    $txtename=str_replace("\"","\"",$txtename);

$deletefile=$_POST["deletefile"];
$deletethumbfile=$_POST["deletethumbfile"];
//-------------------------------------------Delet Fields
if($_POST["action"]=="deletfields")
	{
	$TableName	="gallery";
	$IDcheckValue=$_POST[IDcheckValue];
for($i=0;$i<count($IDcheckValue);$i++)
	{
	if($_POST["IDcheck"][$i])
		{
		$SQLwhere="gallery_id=";
		$SQLwhere.=$IDcheckValue[$i];
		//----------------------------------------
		$SQL="select * from gallery where gallery_id=$IDcheckValue[$i]";
		$showdelet=select_query($link,$SQL,0,0);
        for($d=0;$d<count($showdelet);$d++)
		{
		  if($showdelet[$d]['gallery_photo']!="") unlink("../gallary/".$showdelet[$d]['gallery_photo']);
		  if($showdelet[$d]['gallery_thumb']!="") unlink("../gallary/".$showdelet[$d]['gallery_thumb']);
		}
		//----------------------------------------
		delete_query($link,$TableName,$SQLwhere);
		}
	}
}
//---------Show Data------------------	
$SQL="select * from gallery where gallery_type=1";

if($SearchAname && $SearchAname!="Name")   
	{
	$SQL.=" and gallery_name_en like '%$SearchAname%'";
	}

$OrderBy=$_POST["OrderBy"];
$OrderType=$_POST["OrderType"];

if(!$OrderBy)	$SQL.=" order by gallery_id";
else
	$SQL.=" order by $OrderBy";
if(!$OrderType)
{
 $OrderType="asc";
 }else{
 if($OrderType=='asc') $OrderType='desc'; else $OrderType='asc';
 }	
$SQL.=" $OrderType";

$NofPage=$_POST["NofPage"];
$PageCount=$_POST["PageCount"];

if(!$NofPage || $NofPage==0)$NofPage=1;
$PageCount=10;
$SettingData=select_query($link,$SQL,$PageCount,$NofPage);	
//--------------------------------
if($_POST["action"]=="beUpdate")//Applay Updates
{
	$TableName="gallery";
	$TableField=array();
	$TableField[0][0]="gallery_name_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="gallery_name_en";
	$TableField[1][1]="'$txtename'";	
	
	$uf=2;
	if($deletefile==1)
	{ 
  	    $SQL="select * from gallery where gallery_id=$gid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../gallary/".$showdelet[0]['gallery_photo']);
		$TableField[$uf][0]="gallery_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["gallery_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="gallery_photo";
		  $photoid=mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y"));
	      $TableField[$uf][1]=uploadfile("gallery_photo",$photoid,"../gallary");
		  $uf++;
		}
		
	if($deletethumbfile==1)
	{ 
  	    $SQL="select * from gallery where gallery_id=$gid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../gallary/".$showdelet[0]['gallery_thumb']);
		$TableField[$uf][0]="gallery_thumb";
		$TableField[$uf][1]="''";
	}elseif($_FILES["gallery_thumb"]["name"]!="")
		{ 
		  $TableField[$uf][0]="gallery_thumb";
		  $photoid=mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y"));
	     $TableField[$uf][1]=uploadfile("gallery_thumb","thumb_".$photoid,"../gallary");
		}
		
    $SQLwhere="gallery_id=$gid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=gallary';</script>";
}
//----------------------Add	
if($_POST["action"]=="Add")
{
$gid=auto_num($link,"gallery","gallery_id"); 
	$TableName="gallery";
	$TableField=array();
	$TableField[0][0]="gallery_id";
	$TableField[0][1]="'$gid'";	
	$TableField[1][0]="gallery_name_ar";
	$TableField[1][1]="'$txtaname'";	
	$TableField[2][0]="gallery_type";
	$TableField[2][1]="'1'";	
	$TableField[3][0]="gallery_name_en";
	$TableField[3][1]="'$txtename'";	
	
	$af=4;
	if($deletefile==1)
	{ 
  	    $SQL="select * from gallery where gallery_id=$gid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../gallary/".$showdelet[0]['gallery_photo']);
		$TableField[$af][0]="gallery_photo";
		$TableField[$af][1]="''";
		$af++;
  	}elseif($_FILES["gallery_photo"]["name"]!="")
		{
		  $TableField[$af][0]="gallery_photo";
		  $photoid=mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y"));
	      $TableField[$af][1]=uploadfile("gallery_photo",$photoid,"../gallary");
		  $af++;
		}
		
	if($deletethumbfile==1)
	{ 
  	    $SQL="select * from gallery where gallery_id=$gid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../gallary/".$showdelet[0]['gallery_thumb']);
		$TableField[$af][0]="gallery_thumb";
		$TableField[$af][1]="''";
	}elseif($_FILES["gallery_thumb"]["name"]!="")
		{ 
		  $TableField[$af][0]="gallery_thumb";
		  $photoid=mktime(date("H"),date("i"),date("s"),date("m"),date("d"),date("Y"));
	      $TableField[$af][1]=uploadfile("gallery_thumb","thumb_".$photoid,"../gallary");
		}

    insert_query($link,$TableName,$TableField);
	echo "<script>document.location='index.php?model=gallary';</script>";
}
//---------------------------
if($_GET["action"]=="galleryupdate")
{
$SQL="select * from gallery where gallery_id=$_GET[gid]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>

<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
<? if ($_GET["action"]==""){?>
<form method="post" name="Prowse" >
<input type="hidden" name="action">
<input type="hidden" name="NofPage" value="<? echo $NofPage;?>">			
<input type="hidden" name="OrderType" value="<? echo $OrderType?>">
<input type="hidden" name="OrderBy" value="<? echo $OrderBy?>">

<table border="0"width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center" colspan="2"><br />Our People</TD>
</tr>
<tr>
	  <td width="77%" align="left">&nbsp;</td>
	  <TD width="23%" align="center"><a href="index.php?model=gallary&action=galleryadd" class="link">Add New Our People</a></TD>
</tr>
			<tr><td colspan="2">&nbsp;</td></tr>
			
				<tr>
					<td colspan="2">
						<table  width="100%" border="1" cellpadding="0" cellspacing="1" align="center" bordercolor="#DFDFDF">
						<tr align="center">
						<td>&nbsp;</td>
						<td>
						<input  value="<?php echo $SearchAname==""? "Name" : $SearchAname ;?>" type="text" name="SearchAname" style="width:180" onclick="script:this.value ='' " >
						</td>
						<td>&nbsp;</td>
						<td><input type="button" name="search" value="Search" onclick="Prowse.OrderType.value='';Prowse.submit();" class="button" ></td>
						</tr>
						<tr align="center">
						<td>Edit</td>
						<td>Photo Name<img src="images/down.gif" style="cursor:pointer" onclick="Prowse.OrderBy.value='gallery_name_en';Prowse.NofPage.value=<?=$NofPage?>; Prowse.submit();" /></td>
						<td>Photo Gallery<img src="images/down.gif" style="cursor:pointer" onclick="Prowse.OrderBy.value='gallery_link';Prowse.NofPage.value=<?=$NofPage?>; Prowse.submit();" /></td>
						<td>Check&nbsp;All<input type="checkbox" style="border:0px;" onClick="var T=null; T=document.getElementsByName('datachk');  for(var y=0; y<T.length; y++)	T[y].checked=checked;"></td>
						</tr>
						<? if(count($SettingData)-1==0){?>
						<tr align="center">
						<td colspan="5" align="center"><br /><h3>There is no data</h3></td>
						</tr>
						<? }else {?>
						<? for($i=0;$i<count($SettingData)-1;$i++){?>
						<tr align="center">
						<td><a href="index.php?model=gallary&gid=<?=$SettingData[$i]["gallery_id"]?>&action=galleryupdate" class="link">Edit</a></td>
                        <td><?=$SettingData[$i]["gallery_name_en"]?></td>
						<td><img border="0" src="../gallary/<?=$SettingData[$i]["gallery_photo"]?>" width="80" height="80" align="absmiddle"></td>
						<td><input type="checkbox" name="IDcheck[<? echo $i?>]" id="datachk" style="border:0;background : transparent;"> 
              <input type="hidden" name="IDcheckValue[<? echo $i?>]" value="<? echo $SettingData[$i]['gallery_id']?>"></td>
						</tr>
						<? } } ?>
						<tr align="center">
						<td colspan="3"></td>
						<td><input type="button" class="button"  value="Delete" onClick="Prowse.action.value='deletfields';Prowse.OrderType.value='';Prowse.submit();"></td>
						</tr>
						</table>
					</td>
				</tr>

	<tr> 
            <td colspan="2" align="center">
			<h3>Current Page
                <? echo $NofPage;?>
              </h3></td>
    </tr>
          <tr > 
            <td colspan="2" align="center"> 
            <? for($i=1;$i<=$SettingData[PNum];$i++){
			echo "<label style='cursor:hand;' onClick=\"Prowse.OrderType.value='';Prowse.NofPage.value=$i; Prowse.submit();\"> : ".$i." : </label>&nbsp;";
			}?>
            </td>
          </tr>

  </table>
</form>

<? }elseif($_GET["action"]=="galleryupdate" || $_GET["action"]=="galleryadd"){?>
<form name="Add" method="post" enctype="multipart/form-data">
<input type="hidden"  name="action">
<input type="hidden"  name="gid" value="<?=$_GET["gid"]?>">
  <table width="100%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
            <tr><td colspan="2" height="15" bgcolor="#FFFFFF"></td></tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2" align="center">
			  <strong><? if ($_GET["action"]=="galleryupdate") echo "Edit Our People Detail"; else echo "Add Our People Detail ";?></strong>
			  </td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"><font color="#FF0000">*&nbsp;</font><strong>indicates Mandatory Fields.</strong></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="41%"><strong>Photo Arabic Name</strong> <font color="#FF0000">*</font></td>
              <td width="59%"><input type="text" name="txtaname" class="textfield" value="<?php  echo $UpdatedData[0]['gallery_name_ar'];?>" style="width:350"></td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="41%"><strong>Photo English Name</strong> <font color="#FF0000">*</font></td>
              <td width="59%"><input type="text" name="txtename" class="textfield" value="<?php  echo $UpdatedData[0]['gallery_name_en'];?>" style="width:350"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="28%" valign="top"><strong>Photo Attach </strong></td>
              <td width="72%"><input type="file" name="gallery_photo">&nbsp;
			  <? if(!empty($UpdatedData[0]['gallery_photo']) && $_GET["action"]=="galleryupdate"){	
			  $pic_path=$UpdatedData[0]['gallery_photo'];
			  ?>
			  <img border="0" src="../gallary/<?=$pic_path?>" width="80" height="80" align="absmiddle">
			  <input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
              <? } ?></td>
			</tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="28%" valign="top"><strong>Photo Thumbnail </strong></td>
              <td width="72%"><input type="file" name="gallery_thumb">&nbsp;
			  <? if(!empty($UpdatedData[0]['gallery_thumb']) && $_GET["action"]=="galleryupdate"){	
			  $pic_path=$UpdatedData[0]['gallery_thumb'];
			  ?>
			  <img border="0" src="../gallary/<?=$pic_path?>" width="80" height="80" align="absmiddle">
			  <input type="checkbox" style="border:0px;" name="deletethumbfile"  value="1">Delete
              <? } ?></td>
			</tr>
			
			<tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"> <p align="center"> 
                  <input value="Save" type="button" title="Save" name="Submit" class="button" onclick="checkdata();">
                  <input value="Reset" type="reset" title="Reset" class="button">
			  </td>
            </tr>
  </table>
</form>

<script>
function checkdata()
{

			//---------------------------------------
			Add.action.value='<? echo $_GET["action"]=='galleryupdate'? 'beUpdate':'Add';?>';
			Add.submit();
			return true;
}
</script>

<? } ?>	
				</div>
			</div>
		</div>
	</div>
</div>		