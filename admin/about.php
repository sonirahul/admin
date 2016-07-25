<?php
$aboutId=$_POST["aboutId"];
$txtaname=$_POST["txtaname"];
$txtadesc=$_POST["txtadesc"];
$txtename=$_POST["txtename"];
$txtedesc=$_POST["txtedesc"];
$txtajobtitle=$_POST["txtajobtitle"];
$txtejobtitle=$_POST["txtejobtitle"];
$optradio=$_POST["optradio"];
$deletefile=$_POST["deletefile"];

//-------------------------------------------Delet Fields
if($_POST["action"]=="Delete")
{
	$TableName="about";
	$SQLwhere="about_id=";
	$SQLwhere.=$aboutId;
	delete_query($link,$TableName,$SQLwhere);
	echo "<script>document.location='index.php?model=about';</script>";
}
//---------Show Data------------------	
$SQL="select * from about where 1=1 ";
$SettingData=select_query($link,$SQL,0,0);	
//--------------------------------
if($_POST["action"]=="beUpdate")//Applay Updates
{
	$TableName="about";
	$TableField=array();
	$TableField[0][0]="about_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="about_desc_ar";
	$TableField[1][1]="'$txtadesc'";
	$TableField[2][0]="about_title_en";
	$TableField[2][1]="'$txtename'";	
	$TableField[3][0]="about_desc_en";
	$TableField[3][1]="'$txtedesc'";
	$TableField[4][0]="about_jobtitle_ar";
	$TableField[4][1]="'$txtajobtitle'";
	$TableField[5][0]="about_jobtitle_en";
	$TableField[5][1]="'$txtejobtitle'";
	$TableField[6][0]="about_team_type";
	$TableField[6][1]="'$optradio'";
	$uf=7;
		
	if($deletefile==1)
	{ 
  	    $SQL="select about_image from about where about_id=$aboutId";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../team/".$showdelet[0]['about_image']);
		$TableField[$uf][0]="about_image";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["about_image"]["name"]!="")
		{ 
			$myfile=str_replace(' ', '_', $txtename);
		  $TableField[$uf][0]="about_image";
	      $TableField[$uf][1]=uploadfile("about_image","$myfile","../team");
		  $uf++;
		}

    $SQLwhere="about_id=$aboutId";	
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=about';</script>";
}
//----------------------Add	
if($_POST["action"]=="Add")
{
$aboutId=auto_num($link,"about","about_id");
	$TableName="about";
	$TableField=array();
	$TableField[0][0]="about_id";
	$TableField[0][1]="'$aboutId'";	
	$TableField[1][0]="about_title_ar";
	$TableField[1][1]="'$txtaname'";	
	$TableField[2][0]="about_desc_ar";
	$TableField[2][1]="'$txtadesc'";
	$TableField[3][0]="about_title_en";
	$TableField[3][1]="'$txtename'";	
	$TableField[4][0]="about_desc_en";
	$TableField[4][1]="'$txtedesc'";
	$TableField[5][0]="about_jobtitle_ar";
	$TableField[5][1]="'$txtajobtitle'";
	$TableField[6][0]="about_jobtitle_en";
	$TableField[6][1]="'$txtejobtitle'";
	$TableField[7][0]="about_team_type";
	$TableField[7][1]="'$optradio'";
	$TableField[8][0]="about_image";
	$myfile=str_replace(' ', '_', $txtename);
	$TableField[8][1]=uploadfile("about_image","$myfile","../team");
	
    insert_query($link,$TableName,$TableField);
	echo "<script>document.location='index.php?model=about';</script>";
}
//---------------------------
if($_GET["action"]=="aboutupdate")
{
$SQL="select * from about where about_id=$_GET[aboutId]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>

<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
					<?php if ($_GET["action"]==""){?>
						<span class="section">Management Team</span>
						<form method="post" name="Prowse" class="form-horizontal form-label-left" novalidate>
							<input type="hidden" name="action">
							<input type="hidden" name="aboutId">
							<div class="item form-group">
								<div class="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
									<a href="index.php?model=about&action=aboutadd" class="btn btn-primary">Add New Management Team</a><br/><br/>
									<table id="example" class="display table table-responsive table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
										<thead>
											<tr>
												<th class="col-md-4 col-md-5 col-xs-5">Arabic Name</th>
												<th class="col-md-4 col-md-4 col-xs-5">English Name</th>
												<th class="col-md-4 col-md-3 col-xs-2">Action</th>
											</tr>
										</thead>
										<tbody>
											<?php for($i=0;$i<count($SettingData);$i++){?>
											<tr>
												<td><?php echo $SettingData[$i]["about_title_ar"]?></td>
												<td><?php echo $SettingData[$i]["about_title_en"]?></td>
												<td>
													<a href="index.php?model=about&aboutid=<?php echo $SettingData[$i]["about_id"]?>&action=aboutupdate" class="btn btn-warning">Edit</a>
													<input name="button" type="button" class="btn btn-danger about-delete-button" value="Delete" aboutId="<?php echo $SettingData[$i]['about_id']?>">
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
					<?php }elseif($_GET["action"]=="aboutupdate" || $_GET["action"]=="aboutadd"){?>
						<span class="section"><?php if ($_GET["action"]=="aboutupdate") echo "Edit Management Team Detail"; else echo "Add Management Team Detail";?></span>
						<form name="Add" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left" novalidate>
							<input type="hidden"  name="action">
							<input type="hidden" name="aboutId" value="<?php echo $_GET["aboutId"]?>" />
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtaname">Arabic Name <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtaname" class="form-control col-md-7 col-xs-12" name="txtaname" required="required" type="text" value="<?php echo $UpdatedData[0]['about_title_ar'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtename">English Name <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtename" class="form-control col-md-7 col-xs-12" name="txtename" required="required" type="text" value="<?php echo $UpdatedData[0]['about_title_en'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtajobtitle">Arabic Job Title <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtajobtitle" class="form-control col-md-7 col-xs-12" name="txtajobtitle" required="required" type="text" value="<?php echo $UpdatedData[0]['about_jobtitle_ar'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtejobtitle">English Job Title <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtejobtitle" class="form-control col-md-7 col-xs-12" name="txtejobtitle" required="required" type="text" value="<?php echo $UpdatedData[0]['about_jobtitle_en'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtadesc">Arabic Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtadesc" class="form-control col-md-7 col-xs-12 ckeditor" name="txtadesc" cols="60" rows="15">
										<?php echo $UpdatedData[0]['about_desc_ar'];?>
									</textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtedesc">English Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtedesc" class="form-control col-md-7 col-xs-12 ckeditor" name="txtedesc" cols="60" rows="15">
										<?php echo $UpdatedData[0]['about_desc_en'];?>
									</textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtjobtype">Job Type <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<!--<input id="txtjobtype" class="form-control col-md-7 col-xs-12" name="txtjobtype" required="required" type="text" value="<?php echo $UpdatedData[0]['about_jobtitle_ar'];?>">-->
									<label class="radio-inline"><input type="radio" name="optradio" value="management" <?php if($UpdatedData[0]['about_team_type']!= "" && $UpdatedData[0]['about_team_type'] == "management") {echo 'checked';}?>>Management</label>
									<label class="radio-inline"><input type="radio" name="optradio" value="employee" <?php if($UpdatedData[0]['about_team_type']!= "" && $UpdatedData[0]['about_team_type'] == "employee") {echo 'checked';}?>>Employee</label>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="about_image">Photo Attach 
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="about_image" type="file" name="about_image" data-validate-length-range="5,20" class="optional form-control col-md-7 col-xs-12">
									<?php if(!empty($UpdatedData[0]['about_image']) && $_GET["action"]=="aboutupdate"){
										$pic_path=$UpdatedData[0]['about_image'];?>
										<img border="0" src="../team/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
										<input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
									<?php } ?>
								</div>
							</div>
							
							
							<div class="form-group">
								<div class="col-md-6 col-md-offset-3">
									<button type="submit" class="btn btn-primary" onclick="checkdata();">Save</button>
									<button type="reset" class="btn btn-success">Reset</button>
								</div>
							</div>
						</form>

						<script>
						function checkdata()
						{
									if(document.Add.txtaname.value=="")
									{
										alert("The Arabic Name should not be empty");
										document.Add.txtaname.focus()
										return false;
									} 
									//---------------------------------------
									if(document.Add.txtename.value=="")
									{
										alert("The English Name should not be empty");
										document.Add.txtename.focus()
										return false;
									} 
									//---------------------------------------
									if(document.Add.txtajobtitle.value=="")
									{
										alert("The Arabic Job Title should not be empty");
										document.Add.txtajobtitle.focus()
										return false;
									} 
									//---------------------------------------
									if(document.Add.txtejobtitle.value=="")
									{
										alert("The English Job Title should not be empty");
										document.Add.txtejobtitle.focus()
										return false;
									} 
									//---------------------------------------
									document.Add.action.value='<?php echo $_GET["action"]=='aboutupdate'? 'beUpdate':'Add';?>';
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
