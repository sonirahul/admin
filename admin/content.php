<?

$contentid=$_POST["contentid"];
$txtatitle=$_POST["txtatitle"];
$txtedesc=$_POST["txtedesc"];
$txtetitle=$_POST["txtetitle"];
$txtadesc=$_POST["txtadesc"];  
$deletefile=$_POST["deletefile"];
//--------------------------------Applay Updates
if($_POST["action"]=="beUpdate")
{
	$TableName="content";
	$TableField=array();
	$TableField[0][0]="content_title_ar";
	$TableField[0][1]="'$txtatitle'";	
 	$TableField[1][0]="content_desc_en";
	$TableField[1][1]="'$txtedesc'";
	$TableField[2][0]="content_title_en";
	$TableField[2][1]="'$txtetitle'";	
 	$TableField[3][0]="content_desc_ar";
	$TableField[3][1]="'$txtadesc'";
	$uf=4;
		
	if($deletefile==1)
	{ 
  	    $SQL="select content_photo from about where about_id=$contentid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../content/".$showdelet[0]['content_photo']);
		$TableField[$uf][0]="content_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["content_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="content_photo";
	      $TableField[$uf][1]=uploadfile("content_photo","about_".$contentid,"../content");
		  $uf++;
		}
	
    $SQLwhere="content_id=$contentid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
}
//---------------------------
if($_GET["action"]=="contentupdate")
{
$SQL="select * from content where content_id=$_GET[contentid]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>
<br />
<? if($_GET["action"]=="contentupdate" || $_GET["action"]=="contentadd"){?>
<form name="Add" method="post" enctype="multipart/form-data">
<input type="hidden"  name="action">
<input type="hidden" name="contentid" value="<?=$_GET["contentid"]?>" />
  <table width="100%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
           <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2" align="center">
			  <strong>
               <?php
			   switch($_GET["contentid"])
			   {
			   case 1: echo "Welcome Page"; break;
			   case 2: echo "About US Welcome"; break;
			   case 3: echo "Philosophy"; break;
			   case 4: echo "Visa Application Centres"; break;
			   case 5: echo "Travel Club"; break;
			   case 6: echo "Al Rayes Travel Services"; break;
			   case 7: echo "Sanan Residential Project"; break;
			   case 8: echo "Site Map"; break;
			   case 9: echo "Contact Us"; break;
			   }
			   ?>
               </strong>
			  </td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"><font color="#FF0000">*&nbsp;</font><strong>indicates Mandatory Fields.</strong></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Title</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtatitle" class="textfield" value="<?php  echo $UpdatedData[0]['content_title_ar'];?>" style="width:350"></td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Title</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtetitle" class="textfield" value="<?php  echo $UpdatedData[0]['content_title_en'];?>" style="width:350"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor"  name="txtadesc" cols="60" rows="15"><?php  echo $UpdatedData[0]['content_desc_ar'];?></textarea></td>
            </tr>
			
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor" name="txtedesc" cols="60" rows="15"><?php  echo $UpdatedData[0]['content_desc_en'];?></textarea></td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%" valign="top"><strong>Photo Attach</strong></td>
              <td width="70%"><input type="file" name="content_photo">&nbsp;
			  <?php if(!empty($UpdatedData[0]['content_photo']) && $_GET["action"]=="contentupdate"){
			     $pic_path=$UpdatedData[0]['content_photo'];
			  ?>
			  <img border="0" src="../content/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
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
			
			if(document.Add.txtatitle.value=="")
			{
				alert("The Arabic Title should not be empty");
				document.Add.txtatitle.focus()
				return false;
			}
			//---------------------------------------
			if(document.Add.txtetitle.value=="")
			{
				alert("The English Title should not be empty");
				document.Add.txtetitle.focus()
				return false;
			}
			//---------------------------------------
			document.Add.action.value='<? echo $_GET["action"]=='contentupdate'? 'beUpdate':'Add';?>';
			document.Add.submit();
			return true;
}
</script>

<? } ?>			