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
$file_dir  = "../flags/"; 
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
		unlink("../flags/".$DataCheckValue[$i]);
	
		}
	}
}

$SQL="select * from clients where 1=1 ";
$showdelet=select_query($link,$SQL,0,0);



for($d=0;$d<count($showdelet);$d++)
{
  echo $showdelet[$d]['clients_country_name'];
}
?>
<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
					<form method="post" name="Prowse" class="form-horizontal form-label-left" novalidate>
          				<input type="hidden" name="Action">
						<span class="section">Flag Photo</span>
						
						<div class="item form-group">
	                        <div class="col-md-offset-2 col-md-8 col-sm-3 col-xs-6">
								<table class="table table-responsive table-striped table-bordered table-condensed table-hover">
									<thead>
										<tr>
											<th class="col-md-2">Country</th>
											<th class="col-md-4">Flags</th>
											<th class="col-md-2">Check All</th>
										</tr>
									</thead>
									<tbody>
									
										<?
											for($d=0;$d<count($showdelet);$d++)
											{
												$flag_name=$showdelet[$d]['clients_country_flag'];
												$country_name=$showdelet[$d]['clients_country_name'];?>
												<tr>
													<td><? echo "$country_name";?></td>
													<td><? echo "<img src='../flags/$flag_name' width='100' height='100'>";?></td>
													<td class="vertical-center">
														<input type="checkbox" name="DataCheck[<? echo $i?>]" style="border:0;background : transparent;" id="datachk" class="vertical-center">
														<input type="hidden" name="DataCheckValue[<? echo $i?>]" value="<?=$file?>">
														<? $i++; ?>
													</td>
												</tr>
										<?	}?>
									</tbody>
								</table>
							</div>
						</div>
						
						
						
	                    <!--<?
							$handle=opendir('../flags');
						     $i=0;
						    while (false!==($file = readdir($handle)))
							{ 
						    if ($file != "." && $file != ".." && $file != "index.html")
							 { ?>
						  <div class="item form-group flag-border">
	                        <div class="col-md-offset-2 col-md-4 col-sm-3 col-xs-6"> 
							<? echo "<img src='../flags/$file' width='100' height='100'>";?>
						    </div>
							<div class="col-md-4 col-sm-6 col-xs-6"><input type="checkbox" name="DataCheck[<? echo $i?>]" style="border:0;background : transparent;" id="datachk">
							<input type="hidden" name="DataCheckValue[<? echo $i?>]" value="<?=$file?>">
							<? $i++; ?> 
							</div>
						  </div>
						  <? } } closedir($handle); ?> -->
	                    
	                </form>
				</div>
			</div>
		</div>
	</div>
</div>

<!--<table border="0" dir="rtl" width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center" colspan="3" height="50">Flags Photo</TD>
</tr>
	<tr>
		<td  colspan="3" >
		Search & Prowsing
			<form method="post" name="Prowse">
          <input type="hidden" name="Action">
        
<table  width="100%" border="1" cellpadding="0" cellspacing="1" align="center" bordercolor="#DFDFDF" dir="ltr">
  <tr align="center"> 
    <td width="46%"> Photo</td>
    <td>Check&nbsp;All<input type="checkbox" style="border:0px;" onClick="var T=null; T=document.getElementsByName('datachk');  for(var y=0; y<T.length; y++)	T[y].checked=checked;"></td>
  </tr>
  <?
	$handle=opendir('../flags');
     $i=0;
    while (false!==($file = readdir($handle)))
	{ 
    if ($file != "." && $file != ".." && $file != "index.html")
	 { ?>
  <tr> 
    <td width="46%" align="center"> 
	<? echo "<img src='../flags/$file' width='100' height='100'>";?>
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


	</table>-->
