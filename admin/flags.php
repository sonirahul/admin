<?php 
session_start();


if($_SESSION["LoginAdmin"]!="Admin")
		{
		header("location:Login.php");
		return;
		}
//-------------------------------------------
    


//---------------------------------------------
if($_POST["Action"]=="Del")//Del/Un Del
{
	$DataCheckId=$_POST[DataCheckId];
	$DataCheckFlag=$_POST[DataCheckFlag];
	for($i=0;$i<count($DataCheckId);$i++)
	{
		if($_POST["DataCheck"][$i]=="on")
		{
			delete_query($link,"clients","clients_id=$DataCheckId[$i]");
			unlink("../flags/".$DataCheckFlag[$i]);
		}
	}
}

if($_POST["Action"]=="Add")//Del/Un Del
{
	$DataCountryName=$_POST[countryName];
	$DataCountryFlag=$_POST[countryFlag];
	echo "hello";
	if ($DataCountryName != "")
	{
		echo "hello1";
		
		

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
				echo "<script>document.location='index.php?model=flags';</script>";


			}else{
				echo "Error while Uploading";
			}
		}
	}

	


	

}

$SQL="select * from clients where 1=1 ";
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
									<form method="post" name="Prowse" class="form-horizontal form-label-left" novalidate>
										<input type="hidden" name="Action">
										<div class="item form-group">
											<div class="col-md-offset-2 col-md-8 col-sm-3 col-xs-6">
												<table class="table table-responsive table-striped table-bordered table-condensed table-hover">
													<thead>
														<tr>
															<th class="col-md-2">Country</th>
															<th class="col-md-4">Flags</th>
															<th class="col-md-2">Check&nbsp;All<input type="checkbox" style="border:0px;"></th>
														</tr>
													</thead>
													<tbody>
														<?
														for($d=0;$d<count($showdelet);$d++)
														{
															$clients_id=$showdelet[$d]['clients_id'];
															$clients_country_flag=$showdelet[$d]['clients_country_flag'];
															$clients_country_name=$showdelet[$d]['clients_country_name'];?>
															<tr>
																<td><? echo "$clients_country_name";?></td>
																<td><? echo "<img src='../flags/$clients_country_flag' width='100' height='100'>";?></td>
																<td class="vertical-center">
																	<input type="checkbox" name="DataCheck[<? echo $d?>]" style="border:0;background : transparent;" class="vertical-center">
																	<input type="hidden" name="DataCheckId[<? echo $d?>]" value="<?=$clients_id?>">
																	<input type="hidden" name="DataCheckFlag[<? echo $d?>]" value="<?=$clients_country_flag?>">

																</td>
															</tr>
														<?	}?>
														<tr>
															<td colspan="3" align="right">
																<input name='button' type='button' class="btn btn-danger" style='width:70' onClick="Prowse.Action.value='Del';Prowse.submit();" value='Delete'>
																<!-- <button type="submit" class="btn btn-default">Submit</button> -->
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
	$.noConflict();
	jQuery(function() {
	    jQuery('thead tr th input[type="checkbox"]').on("click", function(){ 
			if (jQuery(this).is(':checked')) {
	            jQuery('tbody tr td input[type="checkbox"]').prop("checked",true);
	        }else {
	        	jQuery('tbody tr td input[type="checkbox"]').prop("checked",false);
	        }
	    });
	});
</script>