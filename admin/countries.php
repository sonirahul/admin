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
if($_POST["action"]=="Delete")
{
	$TableName="countries";
	$SQLwhere="countries_id=";
	$SQLwhere.=$countriesid;
	delete_query($link,$TableName,$SQLwhere);
	echo "<script>document.location='index.php?model=countries';</script>";
}
//---------Show Data------------------	
$SQL="select * from countries where countries_operation=1 ";
$SettingData=select_query($link,$SQL,0,0);	
//--------------------------------
if($_POST["action"]=="beUpdate") // Update Fields
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

	$TableName="countries";
	$TableField=array();;	
	$TableField[0][0]="countries_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="countries_desc_ar";
	$TableField[1][1]="'$txtadesc'";
	$TableField[2][0]="countries_title_en";
	$TableField[2][1]="'$txtename'";	
	$TableField[3][0]="countries_desc_en";
	$TableField[3][1]="'$txtedesc'";
	$TableField[4][0]="countries_client_visible";
	$TableField[4][1]="'0'";
	$TableField[5][0]="countries_operation";
	$TableField[5][1]="'1'";

	$uf=6;

	if($_FILES["countries_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="countries_photo";
	      $TableField[$uf][1]=uploadfile("countries_photo","countries_".$countriesid,"../countries");
		  $uf++;
		}
	
	$DataCountryFlag=$_POST[countries_flag];
	if($_FILES["countries_flag"]["name"]!="")
		{ 
			$file_dir  = "../flags/"; 
			$newfile =$_FILES["countries_flag"]['name'];
			$filetmpname =$_FILES["countries_flag"]['tmp_name'];
			$filesize=$_FILES["countries_flag"]["size"];		  
			$filext=substr($newfile,strpos($newfile,'.'));
			if(strtolower($filext)==".jpg" || strtolower($filext)==".jpeg" || strtolower($filext)==".gif" || strtolower($filext)==".png" || strtolower($filext)==".tif"  || strtolower($filext)==".pdf" || strtolower($filext)==".doc" || strtolower($filext)==".docx")
			{ 
				if (trim($_FILES["countries_flag"]['name'])!="")
				{ 
				$filetoupload=$file_dir.$newfile;
				copy($filetmpname, $filetoupload); 
				}
				
				$TableField[$uf][0]="countries_flag";
				$TableField[$uf][1]="'$newfile'";
			}
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
						<span class="section">Countries of Operation</span>
						<form method="post" name="Prowse" class="form-horizontal form-label-left" novalidate>
							<input type="hidden" name="action">
							<div class="item form-group">
								<div class="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
									<a href="index.php?model=countries&action=countriesadd" class="btn btn-primary">Add New Country</a><br/><br/>
									<table id="example" class="display table table-responsive table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
										<thead>
											<tr>
												<th class="col-md-4 col-md-5 col-xs-5">Arabic Title</th>
												<th class="col-md-4 col-md-4 col-xs-5">English Title</th>
												<th class="col-md-4 col-md-3 col-xs-2">Action</th>
											</tr>
										</thead>
										<tbody>
											<?php for($i=0;$i<count($SettingData);$i++){?>
											<tr>
												<td><?php echo $SettingData[$i]["countries_title_ar"]?></td>
												<td><?php echo ucwords($SettingData[$i]["countries_title_en"])?></td>
												<td>
													<a href="index.php?model=countries&countriesid=<?php echo $SettingData[$i]["countries_id"]?>&action=countriesupdate" class="btn btn-warning">Edit</a>
													<input name="button" type="button" class="btn btn-danger about-delete-button" value="Delete" countriesid="<?php echo $SettingData[$i]['countries_id']?>">
												</td>
											</tr>
											<?php }?>
										</tbody>
									</table>
								</div>
							</div>
						</form>
						<script type="text/javascript">
							$.noConflict();

							jQuery(function() {
							    jQuery('.about-delete-button').on("click", function(){
							    	document.forms["Prowse"].elements["action"].value = jQuery(this).val();
									document.forms["Prowse"].elements["aboutId"].value = jQuery(this).attr("aboutId");
									document.forms["Prowse"].submit();
							    });
							});
						</script>
					<?php }elseif($_GET["action"]=="countriesupdate" || $_GET["action"]=="countriesadd"){?>
						<span class="section"><?php if ($_GET["action"]=="countriesupdate") echo "Edit Countries of Operation Detail"; else echo "Add Countries of Operation Detail";?></span>
						<form name="Add" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left" novalidate>
							<input type="hidden"  name="action">
							<input type="hidden" name="countriesid" value="<?php echo $_GET["countriesid"]?>" />
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtaname">Arabic Country Name <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtaname" class="form-control col-md-7 col-xs-12" name="txtaname" required="required" type="text" value="<?php echo $UpdatedData[0]['countries_title_ar'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtename">English Country Name <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtename" class="form-control col-md-7 col-xs-12" name="txtename" required="required" type="text" value="<?php echo ucwords($UpdatedData[0]['countries_title_en']);?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtadesc">Arabic Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtadesc" class="form-control col-md-7 col-xs-12 ckeditor" name="txtadesc" cols="60" rows="15">
										<?php echo $UpdatedData[0]['countries_desc_ar'];?>
									</textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtedesc">English Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtedesc" class="form-control col-md-7 col-xs-12 ckeditor" name="txtedesc" cols="60" rows="15">
										<?php echo $UpdatedData[0]['countries_desc_en'];?>
									</textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="countries_photo">Photo Attach 
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="countries_photo" type="file" name="countries_photo" data-validate-length-range="5,20" class="optional form-control col-md-7 col-xs-12">
									<?php if(!empty($UpdatedData[0]['countries_photo']) && $_GET["action"]=="countriesupdate"){
										$pic_path=$UpdatedData[0]['countries_photo'];?>
										<img border="0" src="../countries/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
										<input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
									<?php } ?>
								</div>
							</div>
							
							
							<?php if($_GET["action"]=="countriesadd"){ ?>
								<script>
									$.noConflict();
									
									jQuery(function() {
										jQuery(".js-example-placeholder-single").select2({
										  placeholder: "Select a Country Flag",
										  allowClear: true
										});
										
										$(".js-example-placeholder-single").change(function(){
											
											if ($(this).val() != "other" && $(this).val() != "") {
												$('.country_flag_img_show').removeClass("hidden");
												$('.country_flag').attr('src', $(this).val());
												$('.country_flag_img_add').addClass("hidden");
											} 
											if ($(this).val() == "other") {
												$('.country_flag_img_add').removeClass("hidden");
												$('.country_flag_img_show').addClass("hidden");
											}
											
												
											
										});
									});
									</script>
								<div class="item form-group">
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="countries_flag_select">Select Country Flag</label>
									<div class="col-md-6 col-sm-6 col-xs-12">
										<select class="form-control js-example-placeholder-single" id="countries_flag_select" >
											<option></option>
											<option value="other">Other</option>
											<?php
											$handle=opendir('../flags');
											 $i=0;
											while (false!==($file = readdir($handle)))
											{ 
											if ($file != "." && $file != ".." && $file != "index.html")
											 {  
												//echo "<img src='flags/$file' border='0'>";
												$flagName = ucwords(str_replace("_"," ",str_replace(".png","",$file)));
												echo "<option value='../flags/$file'>$flagName</option>";
												
											  } 
											} closedir($handle); 
											?>
										</select>
									</div>
								</div>
								<div class="item form-group country_flag_img_show hidden">
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="country_flag">Selected Flag</label>
									<div class="col-md-6 col-sm-6 col-xs-12">
										<img class="country_flag">
									</div>
								</div>
								<div class="item form-group country_flag_img_add hidden">
									
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="countries_flag">Flag Attach</label>
									<div class="col-md-6 col-sm-6 col-xs-12">									
										<input type='file' name='countries_flag' class="form-control">
										
									</div>
								</div>
							<?php } ?>
							<?php if(!empty($UpdatedData[0]['countries_flag']) && $_GET["action"]=="countriesupdate"){
								$pic_path=$UpdatedData[0]['countries_flag'];?>
								<div class="item form-group country_flag_img_show">
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="country_flag">Selected Flag</label>
									<div class="col-md-6 col-sm-6 col-xs-12">
										<img border="0" src="../flags/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
										<input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
									</div>
								</div>
								
							<?php } ?>		
									
							
							
							<div class="ln_solid"></div>
							<div class="form-group">
								<div class="col-md-6 col-md-offset-3">
									<button type="submit" class="btn btn-primary" onclick="checkdata();">Save</button>
									<button type="reset" class="btn btn-success">Reset</button>
								</div>
							</div>
							
							  <!--<table width="100%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
										
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
							  </table>-->
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