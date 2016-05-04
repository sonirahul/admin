<?php
$txtadesc=$_POST["txtadesc"];
$txtedesc=$_POST["txtedesc"];
$Action=$_POST["Action"];
$conid=$_POST["conid"];
$deletefile_ar=$_POST["deletefile_ar"];
$deletefile_en=$_POST["deletefile_en"];
//-------------------------
if($Action=="Update")//Applay Updates
{
	$TableName="content";
	$TableField=array();
	$TableField[0][0]="content_desc_ar";
	$TableField[0][1]="'$txtadesc'";	
	$TableField[1][0]="content_desc_en";
	$TableField[1][1]="'$txtedesc'";
	$uf=2;
	if($deletefile_ar==1)
	{ 
  	    $SQL="select content_photo_ar from content where content_id=$conid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../content/".$showdelet[0]['content_photo_ar']);
		$TableField[$uf][0]="content_photo_ar";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["content_photo_ar"]["name"]!="")
		{ 
		  $TableField[$uf][0]="content_photo_ar";
	      $TableField[$uf][1]=uploadfile("content_photo_ar","content_ar_".$conid,"../content");
		  $uf++;
		}
		
	if($deletefile_en==1)
	{ 
  	    $SQL="select content_photo_en from content where content_id=$conid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../content/".$showdelet[0]['content_photo_en']);
		$TableField[$uf][0]="content_photo_en";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["content_photo_en"]["name"]!="")
		{ 
		  $TableField[$uf][0]="content_photo_en";
	      $TableField[$uf][1]=uploadfile("content_photo_en","content_en_".$conid,"../content");
		  $uf++;
		}


$SQLwhere="content_id=$conid";
update_query($link,$TableName,$TableField,$SQLwhere);
}
//-----
$Str="select * from content where content_id='$_GET[page]'";
$UpdatedData=select_query($link,$Str,0,0);	
?>
<form method="post" name="Add"  enctype="multipart/form-data">
<input type="hidden"  name="Action" value="<?php echo $Action?>">
<input type="hidden"  name="conid" value="<?php echo $_GET["page"]?>">
<table border="0"width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center"><br />
	<?php
	   switch($_GET["page"])
		{
			case 1: echo"Home Page Content";break;
			case 2: echo"Our Companies Content & description";break;
			case 3: echo"Contact";break;
			case 4: echo"Leadership Team Content & description";break;
		 }     
	?>
	  </TD>
			</tr>
			<tr><td>&nbsp;</td></tr>
			
				<tr>
					<td >
						<table  width="70%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
						<tr height="25" bgcolor="#FFFFFF"> 
             			<td width="30%"><strong>Arabic Text</strong> <font color="#FF0000">*</font></td>
              			<td width="70%"><textarea class="textfield" name="txtadesc" cols="60" rows="15"><?php echo $UpdatedData[0]['content_desc_ar'];?></textarea></td>
            			</tr>
						<tr height="25" bgcolor="#FFFFFF"> 
             			<td width="30%"><strong>English Text</strong> <font color="#FF0000">*</font></td>
             			<td width="70%"><textarea class="textfield" name="txtedesc" cols="60" rows="15"><?php echo $UpdatedData[0]['content_desc_en'];?></textarea></td>
            			</tr>
						<tr height="25" bgcolor="#FFFFFF"> 
              			<td width="30%"><strong>Header Arabic Photo </strong></td>
              			<td width="70%"><input type="file" name="content_photo_ar">&nbsp;
			 			<?php if(!empty($UpdatedData[0]['content_photo_ar'])){
			   			  $pic_path=$UpdatedData[0]['content_photo_ar'];
			 			?>
			 			 <img border="0" src="../content/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
			 			 <input type="checkbox" style="border:0px;" name="deletefile_ar"  value="1">Delete
             			 <?php } ?></td>
						 </tr>
			
						<tr height="25" bgcolor="#FFFFFF"> 
           			   <td width="30%"><strong>Header English Photo </strong></td>
           			   <td width="70%"><input type="file" name="content_photo_en">&nbsp;
			 			<?php if(!empty($UpdatedData[0]['content_photo_en'])){
			   			  $pic_path=$UpdatedData[0]['content_photo_en'];
			 			?>
			  			<img border="0" src="../content/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
			 			 <input type="checkbox" style="border:0px;" name="deletefile_en"  value="1">Delete
             			 <?php } ?></td>
						</tr>
						</table>
					</td>
				</tr>
	<tr>
		<td colspan="4" height="50" align="center" valign="middle">
		<input class="button" type="button" value="Save" style="width:100" onClick="document.Add.Action.value='Update';document.Add.submit();">
        <input name="reset" type="reset" class="button" style="width:100"  value="reset" > 
      </td>
	</tr>	
	<tr>
		<td  colspan="6" align="center" >
			<h3><?php echo $InnerMessage	;?></h3>
		</td>
	</tr>

			</table>
			</form>
			