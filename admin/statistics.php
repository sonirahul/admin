<?php 
session_start();


if($_SESSION["LoginAdmin"]!="Admin")
		{
		header("location:Login.php");
		return;
		}
//-------------------------------------------
    


//---------------------------------------------
if($_POST["Action"]=="Save")
{
	$StatisticsId=$_POST[StatisticsId];
	echo "hello1";
	if ($ClientId) {
		echo "hello1111";
		$TableName="clients";
		$TableField=array();
		$TableField[0][0]="clients_country_flag_visible";
		$TableField[0][1]="true";	
		update_query($link,$TableName,$TableField,"clients_id=$ClientId");
		echo "<script>document.location='index.php?model=flags';</script>";
	}
}
if($_POST["Action"]=="Hide")
{
	$ClientId=$_POST[ClientId];
	if ($ClientId) {
		$TableName="clients";
		$TableField=array();
		$TableField[0][0]="clients_country_flag_visible";
		$TableField[0][1]="false";	
		update_query($link,$TableName,$TableField,"clients_id=$ClientId");
		echo "<script>document.location='index.php?model=flags';</script>";
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
			$file_dir  = "../flags/"; 
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
				/*$TableField[0][0]="clients_id";
				$TableField[0][1]=null;	*/
				$TableField[0][0]="clients_country_flag";
				$TableField[0][1]="'$newfile'";	
				$TableField[1][0]="clients_country_name";
				$TableField[1][1]="'$DataCountryName'";
				insert_query($link,'clients',$TableField);
				//echo "<script>document.location='index.php?model=flags';</script>";


			}else{
				echo "Error while Uploading";
			}
		}
	}
}

$SQL="select * from statistics where 1=1 ";
$showdelet=select_query($link,$SQL,0,0);

?>
<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
					<span class="section">Flag Photo</span>
					<form method="post" name="Prowse" class="form-horizontal form-label-left" novalidate>
						<input type="hidden" name="Action">
						<input type="hidden" name="StatisticsId">
						<div class="item form-group">
							<div class="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
								<table class=" table table-responsive table-striped table-bordered table-condensed table-hover" cellspacing="0" width="100%">
									<thead>
										<tr>
											<th class="col-md-4 col-md-4 col-xs-4">Statistics Name</th>
											<th class="col-md-4 col-md-4 col-xs-4">Statistics Value</th>
											<th class="col-md-4 col-md-4 col-xs-4">Action</th>
										</tr>
									</thead>
									<tbody>
										<?
										for($d=0;$d<count($showdelet);$d++)
										{
											$statistics_id=$showdelet[$d]['statistics_id'];
											$statistics_name=$showdelet[$d]['statistics_name'];
											$statistics_value=$showdelet[$d]['statistics_value'];?>
											<tr>
												<td><input type='text' class='form-control' value='<? echo "$statistics_name";?>' statisticsId='<? echo "$statistics_id";?>' disabled=true></td>
												<td><input type='text' class='form-control' value='<? echo "$statistics_value";?>' statisticsId='<? echo "$statistics_id";?>' disabled=true></td>
												
												<td style="vertical-align: middle">
													<input name='button' type='button' class="btn btn-success statistics-edit" value='Edit' statisticsId='<?=$statistics_id?>'>
													<input name='button' type='button' class="btn btn-danger statistics-delete" value='Delete' statisticsId='<?=$statistics_id?>'>
												</td>
											</tr>
										<?	}?>
										<tr>
											<td><input type='text' class='form-control'></td>
											<td><input type='text' class='form-control'></td>
											
											<td style="vertical-align: middle">
												<input name='button' type='button' class="btn btn-success show-hide" value='Add'>
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
<script type="text/javascript">
	$.noConflict();

	jQuery(function() {
	    jQuery('.statistics-edit').on("click", function(){

			if (jQuery(this).val() == "Edit"){
				jQuery(this).val('Save');
				var statisticsId = jQuery(this).attr("statisticsId");
				jQuery("input[statisticsId='"+statisticsId+"']").attr("disabled", false);
			}
			else {
				document.forms["Prowse"].elements["Action"].value = jQuery(this).val();
				document.forms["Prowse"].elements["StatisticsId"].value = jQuery(this).attr("statisticsId");
				document.forms["Prowse"].submit();
			}
			
	    });
	});
</script>