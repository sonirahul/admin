<?php
$Searchname=$_POST["Searchname"];
$Searchdesc=$_POST["Searchdesc"];

$newsid=$_POST["newsid"];
$txtaname=$_POST["txtaname"];
$txtadesc=$_POST["txtadesc"];
$txtename=$_POST["txtename"];
$txtedesc=$_POST["txtedesc"];
$deletefile=$_POST["deletefile"];
//-------------------------------------------Delet Fields
if($_POST["action"]=="deletfields")
	{
	$TableName="news";
	$IDcheckValue=$_POST[IDcheckValue];
for($i=0;$i<count($IDcheckValue);$i++)
	{
	if($_POST[IDcheck][$i])
		{
		$SQLwhere="news_id=";
		$SQLwhere.=$IDcheckValue[$i];
		//----------------------------------------
		$SQL="select * from news where news_id=$IDcheckValue[$i]";
		$showdelet=select_query($link,$SQL,0,0);
        for($d=0;$d<count($showdelet);$d++)
		{
		  if($showdelet[$d]['news_photo']!="") unlink("../news/".$showdelet[$d]['news_photo']);
		}
		//----------------------------------------
		delete_query($link,$TableName,$SQLwhere);
		}
	}
}
//---------Show Data------------------	
$SQL="select * from news where 1=1 ";

if($Searchname && $Searchname!="" && $Searchname!="Arabic Title")
	{
	$SQL.=" and news_title_ar like '%$Searchname%'";  
	}
if($Searchdesc&& $Searchdesc!="" && $Searchdesc!="English Title")   
	{
	$SQL.=" and news_title_en like '%$Searchdesc%'";
	}

$OrderBy=$_POST["OrderBy"];
$OrderType=$_POST["OrderType"];

if(!$OrderBy)	$SQL.=" order by news_id";
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
	$TableName="news";
	$TableField=array();
	$TableField[0][0]="news_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="news_desc_ar";
	$TableField[1][1]="'$txtadesc'";
	$TableField[2][0]="news_title_en";
	$TableField[2][1]="'$txtename'";	
	$TableField[3][0]="news_desc_en";
	$TableField[3][1]="'$txtedesc'";
	
	$uf=4;
		
	if($deletefile==1)
	{ 
  	    $SQL="select news_photo from news where news_id=$newsid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../news/".$showdelet[0]['news_photo']);
		$TableField[$uf][0]="news_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["news_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="news_photo";
	      $TableField[$uf][1]=uploadfile("news_photo","news_".$newsid,"../news");
		  $uf++;
		}
	
    $SQLwhere="news_id=$newsid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=news';</script>";
}
//----------------------Add	
if($_POST["action"]=="Add")
{
$newsid=auto_num($link,"news","news_id");
	$TableName="news";
	$TableField=array();
	$TableField[0][0]="news_id";
	$TableField[0][1]="'$newsid'";	
	$TableField[1][0]="news_title_ar";
	$TableField[1][1]="'$txtaname'";	
	$TableField[2][0]="news_desc_ar";
	$TableField[2][1]="'$txtadesc'";
	$TableField[3][0]="news_title_en";
	$TableField[3][1]="'$txtename'";	
	$TableField[4][0]="news_desc_en";
	$TableField[4][1]="'$txtedesc'";

	$uf=5;

	if($deletefile==1)
	{ 
  	    $SQL="select news_photo from news where news_id=$newsid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../news/".$showdelet[0]['news_photo']);
		$TableField[$uf][0]="news_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["news_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="news_photo";
	      $TableField[$uf][1]=uploadfile("news_photo","news_".$newsid,"../news");
		  $uf++;
		}

    insert_query($link,$TableName,$TableField);
	echo "<script>document.location='index.php?model=news';</script>";
}
//---------------------------
if($_GET["action"]=="newsupdate")
{
$SQL="select * from news where news_id=$_GET[newsid]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>

<?php if ($_GET["action"]==""){?>
<form method="post" name="Prowse" >
<input type="hidden" name="action">
<input type="hidden" name="NofPage" value="<?php echo $NofPage;?>">			
<input type="hidden" name="OrderType" value="<?php echo $OrderType?>">
<input type="hidden" name="OrderBy" value="<?php echo $OrderBy?>">

<table border="0"width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center" colspan="2"><br />News</TD>
</tr>
<tr>
	  <td width="77%"></td>
	  <TD width="23%" align="center"><a href="index.php?model=news&action=newsadd" class="link">Add New News</a></TD>
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
						<td>Arabic&nbsp;Title&nbsp;<img src="images/down.gif" style="cursor:pointer" onclick="Prowse.OrderBy.value='news_title_ar';Prowse.NofPage.value=<?php echo $NofPage?>; Prowse.submit();" /></td>
						<td>English&nbsp;Title&nbsp;<img src="images/down.gif" style="cursor:pointer" onclick="Prowse.OrderBy.value='news_title_en';Prowse.NofPage.value=<?php echo $NofPage?>; Prowse.submit();" /></td>
						<td>Check&nbsp;All<input type="checkbox" style="border:0px;" onClick="var T=null; T=document.getElementsByName('datachk');  for(var y=0; y<T.length; y++)	T[y].checked=checked;"></td>
						</tr>
						<?php if(count($SettingData)-1==0){?>
						<tr align="center">
						<td colspan="5" align="center"><br /><h3>There is no data</h3></td>
						</tr>
						<?php }else {?>
						<?php for($i=0;$i<count($SettingData)-1;$i++){?>
						<tr align="center">
						<td><a href="index.php?model=news&newsid=<?php echo $SettingData[$i]["news_id"]?>&action=newsupdate" class="link">Edit</a></td>
						<td><?php echo $SettingData[$i]["news_title_ar"]?></td>
						<td><?php echo $SettingData[$i]["news_title_en"]?></td>
						<td><input type="checkbox" name="IDcheck[<?php echo $i?>]" id="datachk" style="border:0;background : transparent;"> 
              <input type="hidden" name="IDcheckValue[<?php echo $i?>]" value="<?php echo $SettingData[$i]['news_id']?>"></td>
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

<?php }elseif($_GET["action"]=="newsupdate" || $_GET["action"]=="newsadd"){?>
<form name="Add" method="post" enctype="multipart/form-data">
<input type="hidden"  name="action">
<input type="hidden" name="newsid" value="<?php echo $_GET["newsid"]?>" />
  <table width="100%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
            <tr><td colspan="2" height="15" bgcolor="#FFFFFF"></td></tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2" align="center">
			  <strong><?php if ($_GET["action"]=="newsupdate") echo "Edit News Detail"; else echo "Add News Detail";?></strong>
			  </td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"><font color="#FF0000">*&nbsp;</font><strong>indicates Mandatory Fields.</strong></td>
            </tr>
			
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Title</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtaname" class="textfield" value="<?php echo $UpdatedData[0]['news_title_ar'];?>"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Title</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtename" class="textfield" value="<?php echo $UpdatedData[0]['news_title_en'];?>"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor" name="txtadesc" cols="60" rows="15"><?php echo $UpdatedData[0]['news_desc_ar'];?></textarea></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor" name="txtedesc" cols="60" rows="15"><?php echo $UpdatedData[0]['news_desc_en'];?></textarea></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%" valign="top"><strong>News Photo </strong></td>
              <td width="70%"><input type="file" name="news_photo">&nbsp;
			  <?php if(!empty($UpdatedData[0]['news_photo']) && $_GET["action"]=="newsupdate"){
			     $pic_path=$UpdatedData[0]['news_photo'];
			  ?>
			  <img border="0" src="../news/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
			  <input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
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
			document.Add.action.value='<?php echo $_GET["action"]=='newsupdate'? 'beUpdate':'Add';?>';
			document.Add.submit();
			return true;
}
</script>

<?php } ?>			