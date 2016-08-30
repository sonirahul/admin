<?php
$Searchname=$_POST["Searchname"];
$Searchdesc=$_POST["Searchdesc"];

$countriesid=$_POST["countriesid"];
$txtaname=$_POST["txtaname"];
$txtename=$_POST["txtename"];

$deletefile=$_POST["deletefile"];
$deleteflag=$_POST["deleteflag"];
$countryFlagSelect=$_POST["countries_flag_select"];
$countriesContentCount = $_POST['countriesContentCount'];
$countriesContent = $_POST['countriesContent'];



//-------------------------------------------Delet Fields
if($_POST["action"]=="Delete")
{
	$TableName="countries";
	$SQLwhere="countries_id=";
	$SQLwhere.=$countriesid;
	$TableField[0][0]="countries_operation";
	$TableField[0][1]="0";
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=countries';</script>";
}
//---------Show Data------------------	
$SQL="select * from countries where countries_operation=1 ";
$SettingData=select_query($link,$SQL,0,0);	

$SQL="select * from countries";
$AllData=select_query($link,$SQL,0,0);

if($_GET["action"]=="countriesupdate")
{
$SQL="select * from countries where countries_id=$_GET[countriesid]";
$UpdatedData=select_query($link,$SQL,0,0);

$SQL="select * from countries_content cc, countries c where c.countries_id=cc.countries_mission_en and cc.countries_id =$_GET[countriesid]";
$UpdatedDataFor=select_query($link,$SQL,0,0);

}
//--------------------------------
if($_POST["action"]=="beUpdate") // Update Fields
{
	$TableName="countries";
	$TableField=array();
	$TableField[0][0]="countries_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="countries_title_en";
	$TableField[1][1]="'$txtename'";	
	
	$uf=2;
	$performUpdate = true;

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
	      $TableField[$uf][1]=uploadfile("countries_photo",$txtename,"../countries");
		  $uf++;
		}
		
	if($deleteflag==1)
	{
		$TableField[$uf][0]="countries_flag";
		$TableField[$uf][1]="''";
		$uf++;
	}
	else {
		if($countryFlagSelect != "other" && $UpdatedData[0]['countries_flag'] =="")
		{
			$SQL="select countries_flag from countries where countries_flag='$countryFlagSelect'";
			$countryFlagExits=select_query($link,$SQL,0,0);
			if ($countryFlagExits[0]['countries_flag'] == '') {
				$TableField[$uf][0]="countries_flag";
				  $TableField[$uf][1]="'$countryFlagSelect'";
				  $uf++;
			}
			else 
			{
				$performUpdate = false;
			?>
				<script>
					alert("Country or Country Flag name already exist in Database and do not match with inputs provided.");
				</script>
			<?}
		}
		elseif ($_FILES["countries_flag"]["name"]!="" && $countryFlagSelect == "other")
		{
		  $TableField[$uf][0]="countries_flag";
	      $TableField[$uf][1]=uploadfile("countries_flag",$txtename,"../flags");
		  $uf++;
		}
	}
	
	if ($performUpdate) {
		$SQLwhere="countries_id=$countriesid";	
		update_query($link,$TableName,$TableField,$SQLwhere);
		
		$TableName="countries_content";
		$TableField=array();
		$TableField[0][0]="countries_id";
		$TableField[0][1]="'$countriesid'";	
		$TableField[1][0]="countries_mission_en";
		$TableField[2][0]="countries_website_en";

		for ($temp=0;$temp<$countriesContentCount; $temp++) {

			if($countriesContent[$temp][3] != "noChange") {
				if ($countriesContent[$temp][3] == "update") {
					$mission = $countriesContent[$temp][1];
					$TableField[1][1]="'$mission'";
					$website = $countriesContent[$temp][2];
					$TableField[2][1]="'$website'";
					$countryContentId=$countriesContent[$temp][0];
					$SQLwhere="countries_content_id=$countryContentId";	
					update_query($link,$TableName,$TableField,$SQLwhere);
				}
				else if ($countriesContent[$temp][3] == "add") {
					$mission = $countriesContent[$temp][1];
					$TableField[1][1]="'$mission'";
					$website = $countriesContent[$temp][2];
					$TableField[2][1]="'$website'";
					insert_query($link,$TableName,$TableField);
				}
				else if ($countriesContent[$temp][3] == "delete") {
					$countryContentId=$countriesContent[$temp][0];
					$SQLwhere="countries_content_id=$countryContentId";
					delete_query($link,$TableName,$SQLwhere);
					
				}
			}
		}
		echo "<script>document.location='index.php?model=countries';</script>";
	}
}
//----------------------Add	
if($_POST["action"]=="Add")
{
	
	$TableName="countries";
	$TableField=array();;	
	$TableField[0][0]="countries_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="countries_operation";
	$TableField[1][1]="'1'";

	$SQL="select * from countries where countries_title_en='$txtename'";
	$Countries_Add=select_query($link,$SQL,0,0);
	$Countries_Add_Id=$Countries_Add[0]['countries_id'];

	$performUpdate = true;
	
	if ($Countries_Add_Id != '' && $countryFlagSelect == $Countries_Add[0]['countries_flag']) {
		
		if($_FILES["countries_photo"]["name"]!="")
		{ 
			$TableField[2][0]="countries_photo";
			$TableField[2][1]=uploadfile("countries_photo",$txtename,"../countries");
		}
		$SQLwhere="countries_id=$Countries_Add_Id";	
		update_query($link,$TableName,$TableField,$SQLwhere);
		echo "<script>document.location='index.php?model=countries';</script>";
	}
	else if ($Countries_Add_Id == '' && $countryFlagSelect == 'other')
	{
		$TableField[2][0]="countries_client_visible";
		$TableField[2][1]="'0'";
		$TableField[3][0]="countries_title_en";
		$TableField[3][1]="'$txtename'";
		$uf=4;
		if($_FILES["countries_photo"]["name"]!="")
		{ 
			$TableField[$uf][0]="countries_photo";
			$TableField[$uf][1]=uploadfile("countries_photo",$txtename,"../countries");
			$uf++;
		}

		if($_FILES["countries_flag"]["name"]!="")
		{
			$TableField[$uf][0]="countries_flag";
			$TableField[$uf][1]=uploadfile("countries_flag",$txtename,"../flags");
			$uf++;
		}
		insert_query($link,$TableName,$TableField);
		echo "<script>document.location='index.php?model=countries';</script>";
	}
	else { 
		$performUpdate = false;
	?>
	  
		<script>
			alert("Country or Country Flag name already exist in Database and do not match with inputs provided.");
		</script>
		
	<?}
	
	if ($performUpdate) {
		
		$TableName="countries_content";
		$TableField=array();
		$TableField[0][0]="countries_id";
		$TableField[0][1]="'$Countries_Add_Id'";	
		$TableField[1][0]="countries_mission_en";
		$TableField[2][0]="countries_website_en";

		for ($temp=0;$temp<$countriesContentCount; $temp++) {

			if($countriesContent[$temp][3] != "noChange" && $countriesContent[$temp][3] == "add") {
				$mission = $countriesContent[$temp][1];
				$TableField[1][1]="'$mission'";
				$website = $countriesContent[$temp][2];
				$TableField[2][1]="'$website'";
				insert_query($link,$TableName,$TableField);
			}
		}
		echo "<script>document.location='index.php?model=countries';</script>";
	}
}
//---------------------------

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
							<input type="hidden" name="countriesid">
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
							

							$(function() {
							    $('.about-delete-button').on("click", function(){
							    	document.forms["Prowse"].elements["action"].value = $(this).val();
									document.forms["Prowse"].elements["countriesid"].value = $(this).attr("countriesid");
									document.forms["Prowse"].submit();
							    });
							});
						</script>
					<?php }elseif($_GET["action"]=="countriesupdate" || $_GET["action"]=="countriesadd"){?>
						<!-- update start -->
						<span class="section"><?php if ($_GET["action"]=="countriesupdate") echo "Edit Countries of Operation Detail"; else echo "Add Countries of Operation Detail";?></span>
						<form name="Add" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left" novalidate>
							<input type="hidden"  name="action">
							<input type="hidden" name="countriesid" value="<?php echo $_GET["countriesid"]?>" />
							<input type="hidden" name="countriesContentCount" />
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtaname">Arabic Country Name <span class="required">*</span>
								</label>
								<div class="col-md-8 col-sm-6 col-xs-12">
									<input id="txtaname" class="form-control col-md-8 col-xs-12 dir-rtl" name="txtaname" required="required" type="text" value="<?php echo $UpdatedData[0]['countries_title_ar'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtename">English Country Name <span class="required">*</span>
								</label>
								<div class="col-md-8 col-sm-6 col-xs-12">
									<input id="txtename" class="form-control col-md-8 col-xs-12" name="txtename" required="required" type="text" value="<?php echo ucwords($UpdatedData[0]['countries_title_en']);?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtename">Mission &amp; Website Links <span class="required">*</span>
								</label>
								<div class="col-md-8 col-sm-9 col-xs-12">
									<table class=" table table-responsive table-striped table-bordered table-condensed table-hover" id="countryContentTable" cellspacing="0" width="100%">
										<thead>
											<tr>
												<th class="col-md-4 col-sm-3 col-xs-3">Mission Name</th>
												<th class="col-md-5 col-sm-6 col-xs-5">Website</th>
												<th class="col-md-3 col-sm-3 col-xs-4">Action</th>
											</tr>
										</thead>
										<tbody>
											<?php for($j=0;$j<count($UpdatedDataFor);$j++){ ?>
												<tr>
													<td>
														<input type="hidden" name="countriesContent[<?php echo $j ?>][0]" value="<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>" countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>' disabled=true>
														<select name="countriesContent[<?php echo $j ?>][1]" class="form-control countries_flag_select" countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>' disabled=true>
															<option></option>
															<option value="other">Other</option>
															<?php
																for ($k=0; $k < count($AllData);$k++) {
																	if (ucwords($UpdatedDataFor[$j]["countries_title_en"]) == ucwords($AllData[$k]["countries_title_en"])) {
																		echo "<option value='".$AllData[$k]["countries_id"]."' selected>".ucwords($AllData[$k]["countries_title_en"])."</option>";
																	}
																	else {
																		echo "<option value='".$AllData[$k]["countries_id"]."'>".ucwords($AllData[$k]["countries_title_en"])."</option>";
																	}
																}
															?>
														</select>
													</td>
													<td>
														<input type="text" name="countriesContent[<?php echo $j ?>][2]" class="form-control" value="<?php echo $UpdatedDataFor[$j]["countries_website_en"]; ?>" countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>' disabled=true>
														<input type="hidden" name="countriesContent[<?php echo $j ?>][3]" id="countriesContentAction_<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>" value="noChange">
													</td>
													<td>
														<input name='button' type='button' class="btn btn-success hidden-xs hidden-sm countries-update-del-button" value='Edit' countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>'>
														<input name='button' type='button' class="btn btn-danger hidden-xs hidden-sm countries-update-del-button hidden" value='Delete' countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>'>
														<button type='button' class="btn btn-success hidden-md hidden-lg countries-update-del-button" value='Edit' countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>'><span class="glyphicon glyphicon-pencil"></span></button>
														<button type='button' class="btn btn-danger hidden-md hidden-lg countries-update-del-button hidden" value='Delete' countriesContentId='<?php echo $UpdatedDataFor[$j]["countries_content_id"]; ?>'><span class="glyphicon glyphicon-remove"></span></button>
													</td>
												</tr>
											<? } ?>
											
										</tbody>
									</table>
									<input name='button' type='button' class="btn btn-info hidden-xs hidden-sm countries-update-del-button pull-right" value='Add'>
									<button type='button' class="btn btn-info hidden-md hidden-lg countries-update-del-button pull-right" value='Add' ><span class="glyphicon glyphicon-plus"></span></button>
								</div>
							</div>
							<script type="text/javascript">
								
								var countriesContentCount=<?php echo count($UpdatedDataFor); ?>;
								$(function() {
									$('.countries-update-del-button').on("click", function(){
										var countriesContentId = $(this).attr("countriesContentId");
										if ($(this).val() == "Edit"){
											

											$(".countries-update-del-button[countriesContentId='"+countriesContentId+"'][value='Edit']").addClass("hidden");
											$(".countries-update-del-button[countriesContentId='"+countriesContentId+"'][value='Delete']").removeClass("hidden");
											$("#countriesContentAction_" + countriesContentId).val("update");
											$("input[countriesContentId='"+countriesContentId+"']").attr("disabled", false);
											$("select[countriesContentId='"+countriesContentId+"']").attr("disabled", false);
										}
										else if ($(this).val() == "Delete") {
											$("select[countriesContentId='"+countriesContentId+"']").val("");
											$("input[countriesContentId='"+countriesContentId+"'][type='text']").val("");
											$("#countriesContentAction_" + countriesContentId).val("delete");
											/*document.forms["Prowse"].elements["Action"].value = $(this).val();
											document.forms["Prowse"].elements["StatisticsId"].value = $(this).attr("statisticsId");
											document.forms["Prowse"].submit();*/
										}
										else if ($(this).val() == "Add") {
											
											var tableRow= '<tr><td><select name="countriesContent['+ countriesContentCount +'][1]" class="form-control countries_flag_select"><option></option><option value="other">Other</option><?php for ($k=0; $k < count($AllData);$k++) { echo "<option value=".$AllData[$k]["countries_id"].">".ucwords($AllData[$k]["countries_title_en"])."</option>"; } ?></select></td><td><input type="text" name="countriesContent['+ countriesContentCount +'][2]" class="form-control"><input type="hidden" name="countriesContent['+ countriesContentCount +'][3]" value="add"></td></tr>';
											console.log(tableRow);
											$('#countryContentTable tbody').append(tableRow);
											countriesContentCount = countriesContentCount + 1;
										}
										
									});
									
									/* Reset button functionality */
									$("button[type='reset']").on("click", function(){
										$("*[value='Delete']").each(function(val,index) {
											if ($(this).hasClass("hidden")){} 
											else { 
												var countryContentId=$(this).attr("countriesContentId");
												$("input[countriesContentId=" + countryContentId +"][type='text']").attr("disabled", true);
												$("select[countriesContentId=" + countryContentId +"]").attr("disabled", true);
												$("input[countriesContentId=" + countryContentId +"][value='Delete'], button[countriesContentId=" + countryContentId +"][value='Delete']").addClass("hidden");
												$("input[countriesContentId=" + countryContentId +"][value='Edit'], button[countriesContentId=" + countryContentId +"][value='Edit']").removeClass("hidden");
											}
											$(this).val("noChange");
										});
									});
								});
							</script>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="countries_photo">Photo Attach 
								</label>
								<div class="col-md-8 col-sm-6 col-xs-12">
									<input id="countries_photo" type="file" name="countries_photo" data-validate-length-range="5,20" class="optional form-control col-md-8 col-xs-12">
									<?php if(!empty($UpdatedData[0]['countries_photo']) && $_GET["action"]=="countriesupdate"){
										$pic_path=$UpdatedData[0]['countries_photo'];?>
										<img border="0" src="../countries/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
										<input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
									<?php } ?>
								</div>
							</div>
							
							
							<?php if($_GET["action"]=="countriesadd" || empty($UpdatedData[0]['countries_flag'])){ ?>
								<script>
									
									
									$(function() {
										$(".countries_flag_select").select2({
										  placeholder: "Select a Country Flag",
										  allowClear: true
										});
										
										$(".countries_flag_select").change(function(){
											
											if ($(this).val() != "other" && $(this).val() != "") {
												$('.country_flag_show').removeClass("hidden");
												$('img.country_flag_show').attr('src', '../flags/' + $(this).val());
												$('.countries_flag').addClass("hidden");
											} 
											if ($(this).val() == "other") {
												$('.countries_flag').removeClass("hidden");
												$('.country_flag_show').addClass("hidden");
											}
											
												
											
										});
									});
									</script>
								<div class="item form-group">
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="countries_flag_select">Select Country Flag</label>
									<div class="col-md-8 col-sm-6 col-xs-12">
										<select name="countries_flag_select" class="form-control countries_flag_select" id="countries_flag_select" >
											<option></option>
											<option value="other">Other</option>
											<?php
											$handle=opendir('../flags');
											 $i=0;
											while (false!==($file = readdir($handle)))
											{ 
											if ($file != "." && $file != ".." && $file != "index.html")
											 {  
												$flagName = ucwords(str_replace("_"," ",str_replace(".png","",$file)));
												echo "<option value='$file'>$flagName</option>";
												
											  } 
											} closedir($handle); 
											?>
										</select>
									</div>
								</div>
								<div class="item form-group country_flag_show hidden">
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="country_flag_show">Selected Flag</label>
									<div class="col-md-8 col-sm-6 col-xs-12">
										<img class="country_flag_show">
									</div>
								</div>
								<div class="item form-group countries_flag hidden">
									
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="countries_flag">Flag Attach</label>
									<div class="col-md-8 col-sm-6 col-xs-12">									
										<input name="countries_flag" type='file' class="form-control countries_flag">
										
									</div>
								</div>
							<?php } ?>
							<?php if(!empty($UpdatedData[0]['countries_flag']) && $_GET["action"]=="countriesupdate"){
								$pic_path=$UpdatedData[0]['countries_flag'];?>
								<div class="item form-group country_flag_show">
									<label class="control-label col-md-3 col-sm-3 col-xs-12" for="country_flag">Selected Flag</label>
									<div class="col-md-8 col-sm-6 col-xs-12">
										<img border="0" src="../flags/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
										<input type="checkbox" style="border:0px;" name="deleteflag"  value="1">Delete
									</div>
								</div>
								
							<?php } ?>		
									
							
							
							<div class="ln_solid"></div>
							<div class="form-group">
								<div class="col-md-8 col-md-offset-3">
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
								var action = '<?php echo $_GET["action"]=='countriesupdate'? 'beUpdate':'Add';?>';
								
								document.Add.action.value=action;
								document.Add.countriesContentCount.value=countriesContentCount;
								$("*[disabled=true]").attr("disabled", false);
								
								/*if ($(".countries_flag_select").val() != "other" && $(".countries_flag_select").val() != "") {
									document.forms["Add"].elements["countries_flag"].value = $(".countries_flag_select").val();
								}
								else {
									document.forms["Add"].elements["countries_flag"].value = $("input.countries_flag").val();
								}*/
									
								
								alert("1");
								
								//document.Add.submit();
								return false;
					}
					</script>
					<!-- update end -->
					<?php } ?>	
				</div>
			</div>
		</div>
	</div>
</div>
