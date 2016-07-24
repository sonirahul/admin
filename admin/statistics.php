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
	$Statistics_name=$_POST[statistics_name];
	$statistics_value=$_POST[statistics_value];
	if ($StatisticsId) {
		$TableName="statistics";
		$TableField=array();
		$TableField[0][0]="statistics_name";
		$TableField[0][1]="\"$Statistics_name[$StatisticsId]\"";			
		$TableField[1][0]="statistics_value";
		$TableField[1][1]="\"$statistics_value[$StatisticsId]\"";	
		update_query($link,$TableName,$TableField,"statistics_id=$StatisticsId");
		echo "<script>document.location='index.php?model=statistics';</script>";
	}
}
if($_POST["Action"]=="Delete")
{
	$StatisticsId=$_POST[StatisticsId];
	if ($StatisticsId) {
		$TableName="statistics";	
		delete_query($link,$TableName,"statistics_id=$StatisticsId");
		echo "<script>document.location='index.php?model=statistics';</script>";
	}
}

if($_POST["Action"]=="Add")//Del/Un Del
{
	$StatisticsId=$_POST[StatisticsId];
	$Statistics_name=$_POST[statistics_name];
	$statistics_value=$_POST[statistics_value];
	echo "test";
	if ($StatisticsId == "0") {
		echo "testttt";
		$TableName="statistics";
		$TableField=array();
		$TableField[0][0]="statistics_name";
		$TableField[0][1]="'$Statistics_name[$StatisticsId]'";			
		$TableField[1][0]="statistics_value";
		$TableField[1][1]="'$statistics_value[$StatisticsId]'";	
		insert_query($link,$TableName,$TableField);
		echo "<script>document.location='index.php?model=statistics';</script>";
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
					<span class="section">Statistics</span>
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
												<td><input type='text' name='statistics_name[<? echo "$statistics_id";?>]' class='form-control' value='<? echo "$statistics_name";?>' statisticsId='<? echo "$statistics_id";?>' disabled=true></td>
												<td><input type='text' name='statistics_value[<? echo "$statistics_id";?>]' class='form-control' value='<? echo "$statistics_value";?>' statisticsId='<? echo "$statistics_id";?>' disabled=true></td>
												
												<td style="vertical-align: middle">
													<input name='button' type='button' class="btn btn-success statistics-button" value='Edit' statisticsId='<?=$statistics_id?>'>
													<input name='button' type='button' class="btn btn-danger statistics-button" value='Delete' statisticsId='<?=$statistics_id?>'>
												</td>
											</tr>
										<?	}?>
										<tr>
											<td><input type='text' name='statistics_name[0]' class='form-control'></td>
											<td><input type='text' name='statistics_value[0]' class='form-control'></td>
											
											<td style="vertical-align: middle">
												<input name='button' type='button' class="btn btn-info statistics-button" value='Add' statisticsId='0'>
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
	    jQuery('.statistics-button').on("click", function(){

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