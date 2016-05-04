<?php 
session_start();


if($_SESSION["LoginAdmin"]!="Aempfiles")
		{
		header("location:index.php");
		return;
		}
//-------------------------------------------
    
if($_FILES["myfiles"]["name"]!="")
{ 
$file_dir  = "../mhf/"; 
           $newfile =$_FILES["myfiles"]['name'];
   $filetmpname =$_FILES["myfiles"]['tmp_name'];
   $filesize=$_FILES["myfiles"]["size"];		  
       $filext=substr($newfile,strpos($newfile,'.'));
  if(strtolower($filext)!=".exe")
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
		unlink("../mhf/".$DataCheckValue[$i]);
	
		}
	}
}

?>
<table border="0" dir="rtl" width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center" colspan="3" height="50">Mawared House File Store</TD>
</tr>
	<tr>
		<td  colspan="3" >
		<!--------Search & Prowsing----------->
			<form method="post" name="Prowse">
          <input type="hidden" name="Action">
        
<table  width="100%" border="1" cellpadding="0" cellspacing="1" align="center" bordercolor="#DFDFDF" dir="ltr">
  <tr align="center"> 
    <td width="46%"> Download file</td>
	<td> file name </td>
  </tr>
  <?
	$handle=opendir('../mhf');
     $i=0;
    while (false!==($file = readdir($handle)))
	{ 
    if ($file != "." && $file != ".." && $file != "index.html")
	 { ?>
  <tr> 
    <td width="46%" align="center"> 
	<a href="../mhf/<? echo $file?>"><img src="download.png" width="80" border="0" /> </a>
    </td>
	<td align="center"> 
      <? echo $file; ?>
    </td>
  </tr>
  <? } } closedir($handle); ?> 
  <tr>
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
