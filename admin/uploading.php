<?php 
session_start();


if($_SESSION["LoginAdmin"]!="Admin")
		{
		header("location:Login.php");
		return;
		}
//-------------------------------------------
    
if($_FILES["myfiles"]["name"]!="")
{ 
$file_dir  = "../uploading/"; 
           $newfile =$_FILES["myfiles"]['name'];
   $filetmpname =$_FILES["myfiles"]['tmp_name'];
   $filesize=$_FILES["myfiles"]["size"];		  
       $filext=substr($newfile,strpos($newfile,'.'));
  if(strtolower($filext)==".jpg" || strtolower($filext)==".jpeg" || strtolower($filext)==".gif" || strtolower($filext)==".png" || strtolower($filext)==".tif"  || strtolower($filext)==".pdf" || strtolower($filext)==".doc" || strtolower($filext)==".docx")
  { 
    if (trim($_FILES["myfiles"]['name'])!="")
  { 
       $filetoupload=$file_dir.$newfile;
           copy($filetmpname, $filetoupload); 
      }
  }else{
  echo "Error while Uploading";
  }
}

//---------------------------------------------
if($_POST["Action"]=="Del")//Del/Un Del
	{
$DataCheckValue=$_POST[DataCheckValue];
for($i=0;$i<count($DataCheckValue);$i++)
	{
	if($_POST["DataCheck"][$i])

		{
		unlink("../uploading/".$DataCheckValue[$i]);
	
		}
	}
}

?>
<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
<table border="0" dir="rtl" width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center" colspan="3" height="50">Uploading Photo</TD>
</tr>
	<tr>
		<td  colspan="3" >
		<!--------Search & Prowsing----------->
			<form method="post" name="Prowse">
          <input type="hidden" name="Action">
        
<table  width="100%" border="1" cellpadding="0" cellspacing="1" align="center" bordercolor="#DFDFDF" dir="ltr">
  <tr align="center"> 
    <td width="46%"> Photo</td>
	<td> Photo Url </td>
    <td>Check&nbsp;All<input type="checkbox" style="border:0px;" onClick="var T=null; T=document.getElementsByName('datachk');  for(var y=0; y<T.length; y++)	T[y].checked=checked;"></td>
  </tr>
  <?
	$handle=opendir('../uploading');
     $i=0;
    while (false!==($file = readdir($handle)))
	{ 
    if ($file != "." && $file != ".." && $file != "index.html")
	 { ?>
  <tr> 
    <td width="46%" align="center"> 
	<? echo "<img src='../uploading/$file' width='100' height='100'>";?>
    </td>
	<td align="center"> 
      http://www.mawaredhouse.com/uploading/<? echo "$file<br>"; ?>
    </td>
	<td align="center"><input type="checkbox" name="DataCheck[<? echo $i?>]" style="border:0;background : transparent;" id="datachk">
	<input type="hidden" name="DataCheckValue[<? echo $i?>]" value="<?=$file?>">
	<? $i++; ?> 
	</td>
  </tr>
  <? } } closedir($handle); ?> 
  <tr>
  <td colspan="3" align="right">
  <input name='button' type='button' class="button" style='width:70' onClick="Prowse.Action.value='Del';Prowse.submit();" value='Delet'>
  </td>
  </tr>
</table>

        
		
      </form>
		<!------------------->
		</td>
	</tr>
	<tr>
		<td align="center" colspan="3">
<form method='post' enctype='multipart/form-data'>
   <input type='file' name='myfiles' size='30' ><br>
 <input type='submit' name='action' value='Upload' class='button'>
   
</form>
		</td>
	</tr>	


	</table>

				</div>
			</div>
		</div>
	</div>
</div>