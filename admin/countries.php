<?php
$Searchname=$_POST["Searchname"];
$Searchdesc=$_POST["Searchdesc"];

$countriesid=$_POST["countriesid"];
$txtaname=$_POST["txtaname"];
$txtadesc=$_POST["txtadesc"];
$txtename=$_POST["txtename"];
$txtedesc=$_POST["txtedesc"];
$deletefile=$_POST["deletefile"];
$deleteflag=$_POST["deleteflag"];
//-------------------------------------------Delet Fields
if($_POST["action"]=="deletfields")
	{
	$TableName="countries";
	$IDcheckValue=$_POST[IDcheckValue];
for($i=0;$i<count($IDcheckValue);$i++)
	{
	if($IDcheck[$i])
		{
		$SQLwhere="countries_id=";
		$SQLwhere.=$IDcheckValue[$i];
		//----------------------------------------
		$SQL="select * from countries where countries_id=$IDcheckValue[$i]";
		$showdelet=select_query($link,$SQL,0,0);
        for($d=0;$d<count($showdelet);$d++)
		{
		  if($showdelet[$d]['countries_photo']!="") unlink("../countries/".$showdelet[$d]['countries_photo']);
		  if($showdelet[$d]['countries_flag']!="") unlink("../countries/".$showdelet[$d]['countries_flag']);
		}
		//----------------------------------------
		delete_query($link,$TableName,$SQLwhere);
		}
	}
}
//---------Show Data------------------	
$SQL="select * from countries where 1=1 ";

if($Searchname && $Searchname!="" && $Searchname!="Arabic Title")
	{
	$SQL.=" and countries_title_ar like '%$Searchname%'";  
	}
if($Searchdesc&& $Searchdesc!="" && $Searchdesc!="English Title")   
	{
	$SQL.=" and countries_title_en like '%$Searchdesc%'";
	}

$OrderBy=$_POST["OrderBy"];
$OrderType=$_POST["OrderType"];

if(!$OrderBy)	$SQL.=" order by countries_id";
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
$PageCount=25;
$SettingData=select_query($link,$SQL,$PageCount,$NofPage);	
//--------------------------------
if($_POST["action"]=="beUpdate")//Applay Updates
{
	$TableName="countries";
	$TableField=array();
	$TableField[0][0]="countries_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="countries_desc_ar";
	$TableField[1][1]="'$txtadesc'";
	$TableField[2][0]="countries_title_en";
	$TableField[2][1]="'$txtename'";	
	$TableField[3][0]="countries_desc_en";
	$TableField[3][1]="'$txtedesc'";
	
	$uf=4;
		
	if($deletefile==1)
	{ 
  	    $SQL="select countries_photo from countries where countries_id=$countriesid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../countries/".$showdelet[0]['countries_photo']);
		$TableField[$uf][0]="countries_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["countries_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="countries_photo";
	      $TableField[$uf][1]=uploadfile("countries_photo","countries_".$countriesid,"../countries");
		  $uf++;
		}
		
	if($deleteflag==1)
	{ 
  	    $SQL="select countries_flag from countries where countries_id=$countriesid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../countries/".$showdelet[0]['countries_flag']);
		$TableField[$uf][0]="countries_flag";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["countries_flag"]["name"]!="")
		{ 
		  $TableField[$uf][0]="countries_flag";
	      $TableField[$uf][1]=uploadfile("countries_flag","countries_flag_".$countriesid,"../countries");
		  $uf++;
		}
	
	
	
    $SQLwhere="countries_id=$countriesid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=countries';</script>";
}
//----------------------Add	
if($_POST["action"]=="Add")
{
$countriesid=auto_num($link,"countries","countries_id");
	$TableName="countries";
	$TableField=array();
	$TableField[0][0]="countries_id";
	$TableField[0][1]="'$countriesid'";	
	$TableField[1][0]="countries_title_ar";
	$TableField[1][1]="'$txtaname'";	
	$TableField[2][0]="countries_desc_ar";
	$TableField[2][1]="'$txtadesc'";
	$TableField[3][0]="countries_title_en";
	$TableField[3][1]="'$txtename'";	
	$TableField[4][0]="countries_desc_en";
	$TableField[4][1]="'$txtedesc'";

	$uf=5;

	if($deletefile==1)
	{ 
  	    $SQL="select countries_photo from countries where countries_id=$countriesid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../countries/".$showdelet[0]['countries_photo']);
		$TableField[$uf][0]="countries_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["countries_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="countries_photo";
	      $TableField[$uf][1]=uploadfile("countries_photo","countries_".$countriesid,"../countries");
		  $uf++;
		}
		
	if($deleteflag==1)
	{ 
  	    $SQL="select countries_flag from countries where countries_id=$countriesid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../countries/".$showdelet[0]['countries_flag']);
		$TableField[$uf][0]="countries_flag";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["countries_flag"]["name"]!="")
		{ 
		  $TableField[$uf][0]="countries_flag";
	      $TableField[$uf][1]=uploadfile("countries_flag","countries_flag_".$countriesid,"../countries");
		  $uf++;
		}


    insert_query($link,$TableName,$TableField);
	echo "<script>document.location='index.php?model=countries';</script>";
}
//---------------------------
if($_GET["action"]=="countriesupdate")
{
$SQL="select * from countries where countries_id=$_GET[countriesid]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>
<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
<?php if ($_GET["action"]==""){?>
<form method="post" name="Prowse" >
<input type="hidden" name="action">
<input type="hidden" name="NofPage" value="<?php echo $NofPage;?>">			
<input type="hidden" name="OrderType" value="<?php echo $OrderType?>">
<input type="hidden" name="OrderBy" value="<?php echo $OrderBy?>">

<table border="0"width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center" colspan="2"><br />Countries of Operation</TD>
</tr>
<tr>
	  <td width="77%"></td>
	  <TD width="23%" align="center"><a href="index.php?model=countries&action=countriesadd" class="link">Add New Country</a></TD>
</tr>
			<tr><td colspan="2">&nbsp;</td></tr>
			
				<tr>
					<td colspan="2">
						<table  width="100%" border="1" cellpadding="0" cellspacing="1" align="center" bordercolor="#DFDFDF">
						<tr align="center">
						<td>&nbsp;</td>
						<td><input  value="<?php echo $Searchname==""? "Arabic Title" : $Searchname ;?>" type="text" name="Searchname" style="width:180" onclick="script:this.value ='' " ></td>
						<td><input  value="<?php echo $Searchdesc==""? "English Title" : $Searchdesc ;?>" type="text" name="Searchdesc" style="width:180" onclick="script:this.value ='' " ></td>
						<td><input type="button" name="search" value="Search" onclick="Prowse.OrderType.value='';Prowse.NofPage.value='';Prowse.submit();" class="button" ></td>
						</tr>
						<tr align="center">
						<td>Edit</td>
						<td>Arabic&nbsp;Title&nbsp;<img src="images/down.gif" style="cursor:pointer" onclick="Prowse.OrderBy.value='countries_title_ar';Prowse.NofPage.value=<?php echo $NofPage?>; Prowse.submit();" /></td>
						<td>English&nbsp;Title&nbsp;<img src="images/down.gif" style="cursor:pointer" onclick="Prowse.OrderBy.value='countries_title_en';Prowse.NofPage.value=<?php echo $NofPage?>; Prowse.submit();" /></td>
						<td>Check&nbsp;All<input type="checkbox" style="border:0px;" onClick="var T=null; T=document.getElementsByName('datachk');  for(var y=0; y<T.length; y++)	T[y].checked=checked;"></td>
						</tr>
						<?php if(count($SettingData)-1==0){?>
						<tr align="center">
						<td colspan="5" align="center"><br /><h3>There is no data</h3></td>
						</tr>
						<?php }else {?>
						<?php for($i=0;$i<count($SettingData)-1;$i++){?>
						<tr align="center">
						<td><a href="index.php?model=countries&countriesid=<?php echo $SettingData[$i]["countries_id"]?>&action=countriesupdate" class="link">Edit</a></td>
						<td><?php echo $SettingData[$i]["countries_title_ar"]?></td>
						<td><?php echo $SettingData[$i]["countries_title_en"]?></td>
						<td><input type="checkbox" name="IDcheck[<?php echo $i?>]" id="datachk" style="border:0;background : transparent;"> 
              <input type="hidden" name="IDcheckValue[<?php echo $i?>]" value="<?php echo $SettingData[$i]['countries_id']?>"></td>
						</tr>
						<?php } } ?>
						<tr align="center">
						<td colspan="3"></td>
						<td><input type="button" class="button"  value="Delete" onClick="Prowse.action.value='deletfields';Prowse.OrderType.value='';Prowse.submit();"></td
						></tr>
						</table>
					</td>
				</tr>

	<tr align="center"> 
            <td colspan="2" align="center">
			<h3>Current Page
                <?php echo $NofPage;?>
              </h3></td>
    </tr>
          <tr > 
            <td colspan="2" align="center"> 
            <?php for($i=1;$i<=$SettingData[PNum];$i++){
			echo "<label style='cursor:hand;' onClick=\"Prowse.OrderType.value='';Prowse.NofPage.value=$i; Prowse.submit();\"> : ".$i." : </label>&nbsp;";
			}?>
            </td>
          </tr>

  </table>
</form>

<?php }elseif($_GET["action"]=="countriesupdate" || $_GET["action"]=="countriesadd"){?>
<form name="Add" method="post" enctype="multipart/form-data">
<input type="hidden"  name="action">
<input type="hidden" name="countriesid" value="<?php echo $_GET["countriesid"]?>" />
  <table width="100%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
            <tr><td colspan="2" height="15" bgcolor="#FFFFFF"></td></tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2" align="center">
			  <strong><?php if ($_GET["action"]=="countriesupdate") echo "Edit Countries of Operation Detail"; else echo "Add Countries of Operation Detail";?></strong>
			  </td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"><font color="#FF0000">*&nbsp;</font><strong>indicates Mandatory Fields.</strong></td>
            </tr>
			
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Country Name</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtaname" class="textfield" value="<?php echo $UpdatedData[0]['countries_title_ar'];?>"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Country Name</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtename" class="textfield" value="<?php echo $UpdatedData[0]['countries_title_en'];?>"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor" name="txtadesc" cols="60" rows="15"><?php echo $UpdatedData[0]['countries_desc_ar'];?></textarea></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor" name="txtedesc" cols="60" rows="15"><?php echo $UpdatedData[0]['countries_desc_en'];?></textarea></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%" valign="top"><strong>Photo Attach</strong></td>
              <td width="70%"><input type="file" name="countries_photo">&nbsp;
			  <?php if(!empty($UpdatedData[0]['countries_photo']) && $_GET["action"]=="countriesupdate"){
			     $pic_path=$UpdatedData[0]['countries_photo'];
			  ?>
			  <img border="0" src="../countries/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
			  <input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
              <?php } ?></td>
			</tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%" valign="top"><strong>Flag Attach</strong></td>
              <td width="70%"><input type="file" name="countries_flag">&nbsp;
			  <?php if(!empty($UpdatedData[0]['countries_flag']) && $_GET["action"]=="countriesupdate"){
			     $flag_path=$UpdatedData[0]['countries_flag'];
			  ?>
			  <img border="0" src="../countries/<?php echo $flag_path?>" width="80" height="80" align="absmiddle">
			  <input type="checkbox" style="border:0px;" name="deleteflag"  value="1">Delete
              <?php } ?></td>
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
				if(document.Add.txtaname.value=="")
			{
				alert("The Arabic Title should not be empty");
				document.Add.txtaname.focus()
				return false;
			}
			//---------------------------------------
				if(document.Add.txtename.value=="")
			{
				alert("The English Title should not be empty");
				document.Add.txtename.focus()
				return false;
			}
			//---------------------------------------
			document.Add.action.value='<?php echo $_GET["action"]=='countriesupdate'? 'beUpdate':'Add';?>';
			document.Add.submit();
			return true;
}
</script>

<?php } ?>	
				</div>
			</div>
		</div>
	</div>
</div>		