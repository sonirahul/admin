<?php 
session_start();

if($_SESSION["LoginAdmin"]!="Admin")
		{
		header("location:Login.php");
		return;
		}
//-------------------------------------------

//---------------------------------------------
if($_POST["Action"]=="Show")
{
	$ClientId=$_POST[ClientId];
	if ($ClientId) {
		$TableName="countries";
		$TableField=array();
		$TableField[0][0]="countries_client_visible";
		$TableField[0][1]="true";	
		update_query($link,$TableName,$TableField,"countries_id=$ClientId");
		//echo "<script>document.location='index.php?model=flags';</script>";
	}
}
if($_POST["Action"]=="Hide")
{
	$ClientId=$_POST[ClientId];
	if ($ClientId) {
		$TableName="countries";
		$TableField=array();
		$TableField[0][0]="countries_client_visible";
		$TableField[0][1]="false";	
		update_query($link,$TableName,$TableField,"countries_id=$ClientId");
		//echo "<script>document.location='index.php?model=flags';</script>";
	}
}

if($_POST["Action"]=="Add")//Del/Un Del
{
	$DataCountryName=$_POST[countryName];
	$DataCountryFlag=$_POST[countryFlag];
	if ($DataCountryName != "")
	{
		if($_FILES["countryFlag"]["name"]!="")
		{ 
			$file_dir  = "../images/flags/"; 
			$newfile =$_FILES["countryFlag"]['name'];
			$filetmpname =$_FILES["countryFlag"]['tmp_name'];
			$filesize=$_FILES["countryFlag"]["size"];		  
			$filext=substr($newfile,strpos($newfile,'.'));
			if(strtolower($filext)==".jpg" || strtolower($filext)==".jpeg" || strtolower($filext)==".gif" || strtolower($filext)==".png" || strtolower($filext)==".tif"  || strtolower($filext)==".pdf" || strtolower($filext)==".doc" || strtolower($filext)==".docx")
			{ 
				if (trim($_FILES["countryFlag"]['name'])!="")
				{ 
				$filetoupload=$file_dir.$newfile;
				copy($filetmpname, $filetoupload); 
				}

				$TableName="countries";
				$TableField=array();
				$TableField[0][0]="countries_flag";
				$TableField[0][1]="'$newfile'";	
				$TableField[1][0]="countries_title_en";
				$TableField[1][1]="'$DataCountryName'";				
				$TableField[2][0]="countries_client_visible";
				$TableField[2][1]="'0'";
				insert_query($link,'countries',$TableField);
				echo "<script>document.location='index.php?model=flags';</script>";
			}else{
				echo "Error while Uploading";
			}
		}
	}
}

$SQL="select * from countries where 1=1 ";
$showdelet=select_query($link,$SQL,0,0);

?>
<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
					<span class="section">Flag Photo</span>
					<div class="panel-group" id="accordion">
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Edit Clients</a>
								</h4>
							</div>
							<div id="collapse1" class="panel-collapse collapse in">
								<div class="panel-body">
									<form method="post" name="Prowse" id="Prowse" class="form-horizontal form-label-left" novalidate>
										<input type="hidden" name="Action">
										<input type="hidden" name="ClientId">
										<div class="item form-group">
											<div class="col-md-12 col-sm-12 col-xs-12">
												<table id="example" class="display table table-responsive table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
													<thead>
														<tr>
															<th class="col-md-4 col-md-5 col-xs-5">Country</th>
															<th class="col-md-4 col-md-4 col-xs-5">Flags</th>
															<th class="col-md-4 col-md-3 col-xs-2">Show/Hide</th>
														</tr>
													</thead>
													<tbody>
														<?
														for($d=0;$d<count($showdelet);$d++)
														{
															$countries_id=$showdelet[$d]['countries_id'];
															$countries_flag=$showdelet[$d]['countries_flag'];
															$countries_title_en=$showdelet[$d]['countries_title_en'];
															$countries_client_visible=$showdelet[$d]['countries_client_visible'];?>
															<tr>
																<td style="vertical-align: middle"><? echo ucwords($countries_title_en);?></td>
																<td><? echo "<img class='img-responsive clients-flag' src='../images/flags/$countries_flag'>";?></td>
																<td style="vertical-align: middle">
																	
																		<input name='button' type='submit' class="btn btn-danger show-hide" value='Hide' clientId='<?=$countries_id?>' <? if ($countries_client_visible == "0") {?>style="display: none;"<?}?>>
																	
																	
																		<input name='button' type='submit' class="btn btn-success show-hide" value='Show' clientId='<?=$countries_id?>' <? if ($countries_client_visible == "1") {?>style="display: none;"<?}?>>
																	
																</td>
															</tr>
														<?	}?>
													</tbody>
												</table>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="panel panel-default">
							<div class="panel-heading">
								<h4 class="panel-title">
									<a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Add Clients</a>
								</h4>
							</div>
							<div id="collapse2" class="panel-collapse collapse">
								<div class="panel-body">
									<form method='post' name="addCountry" enctype='multipart/form-data' class="form-horizontal form-label-left" novalidate>
										<input type="hidden" name="Action">
										<div class="item form-group">
											<div class="col-md-offset-2 col-md-8 col-sm-3 col-xs-6">
												<table class="table table-responsive table-striped table-bordered table-condensed table-hover">
													<thead>
														<tr>
															<th class="col-md-2">Country</th>
															<th class="col-md-4">Flags</th>
															<th class="col-md-2">Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<input type="text" name="countryName" class="form-control">
															</td>
															<td>
																<input type='file' name='countryFlag' class="form-control">
																
															</td>
															<td>
																<input type='button' name='button' value='Upload' class='btn btn-success' onClick="addCountry.Action.value='Add';addCountry.submit();">
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(function() {
	    $('.show-hide').on("click", function(){
			document.forms["Prowse"].elements["Action"].value = $(this).val();
			document.forms["Prowse"].elements["ClientId"].value = $(this).attr("clientId");
			//document.forms["Prowse"].submit();
	    });

		// Variable to hold request
		var request;

		// Bind to the submit event of our form
		$("#Prowse").submit(function(event){

			// Abort any pending request
			if (request) {
				request.abort();
			}
			// setup some local variables
			var $form = $(this);

			// Let's select and cache all the fields
			var $inputs = $form.find("input, select, button, textarea");

			// Serialize the data in the form
			var serializedData = $form.serialize();

			// Let's disable the inputs for the duration of the Ajax request.
			// Note: we disable elements AFTER the form data has been serialized.
			// Disabled form elements will not be serialized.
			$inputs.prop("disabled", true);

			// Fire off the request to /form.php
			request = $.ajax({
				url: "/admin/index.php?model=flags",
				type: "post",
				data: serializedData
			});

			// Callback handler that will be called on success
			request.done(function (response, textStatus, jqXHR){
				// Log a message to the console
				//$(".show-hide").toggle();
				var inputs = $("input[name=ClientId]").val(); 
				$("input[clientId=" + inputs + "]").toggle();
			});

			// Callback handler that will be called on failure
			request.fail(function (jqXHR, textStatus, errorThrown){
				// Log the error to the console
				console.error(
					"The following error occurred: "+
					textStatus, errorThrown
				);
				alert(
					"The following error occurred: "+
					textStatus, errorThrown
				);
			});

			// Callback handler that will be called regardless
			// if the request failed or succeeded
			request.always(function () {
				// Reenable the inputs
				$inputs.prop("disabled", false);
			});

			// Prevent default posting of form
			event.preventDefault();
		});
	});
</script>