<?php
$newsid=$_POST["newsid"];
$txtaname=$_POST["txtaname"];
$txtadesc=$_POST["txtadesc"];
$txtename=$_POST["txtename"];
$txtedesc=$_POST["txtedesc"];
$deletefile=$_POST["deletefile"];
//-------------------------------------------Delet Fields
if($_POST["action"]=="Delete"){
	$TableName="news";
	if($newsid){
		$SQLwhere="news_id=".$newsid;
		//----------------------------------------
		$SQL="select * from news where news_id=$newsid";
		$showdelet=select_query($link,$SQL,0,0);
		for($d=0;$d<count($showdelet);$d++)
		{
		  if($showdelet[$d]['news_photo']!="") unlink("../images/news/".$showdelet[$d]['news_photo']);
		}
		//----------------------------------------
		delete_query($link,$TableName,$SQLwhere);
	}
}
//---------Show Data------------------	
$SQL="select * from news where 1=1 ";
$SettingData=select_query($link,$SQL,0,0);	
//--------------------------------
if($_POST["action"]=="beUpdate")//Applay Updates
{
	$TableName="news";
	$TableField=array();
	$TableField[0][0]="news_title_ar";
	$TableField[0][1]="'$txtaname'";	
	$TableField[1][0]="news_desc_ar";
	$TableField[1][1]="'$txtadesc'";
	$TableField[2][0]="news_title_en";
	$TableField[2][1]="'$txtename'";	
	$TableField[3][0]="news_desc_en";
	$TableField[3][1]="'$txtedesc'";
	
	$uf=4;
		
	if($deletefile==1)
	{ 
  	    $SQL="select news_photo from news where news_id=$newsid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../images/news/".$showdelet[0]['news_photo']);
		$TableField[$uf][0]="news_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["news_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="news_photo";
	      $TableField[$uf][1]=uploadfile("news_photo","news_".$newsid,"../images/news");
		  $uf++;
		}
	
    $SQLwhere="news_id=$newsid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=news';</script>";
}
//----------------------Add	
if($_POST["action"]=="Add")
{
$newsid=auto_num($link,"news","news_id");
	$TableName="news";
	$TableField=array();
	$TableField[0][0]="news_id";
	$TableField[0][1]="'$newsid'";	
	$TableField[1][0]="news_title_ar";
	$TableField[1][1]="'$txtaname'";	
	$TableField[2][0]="news_desc_ar";
	$TableField[2][1]="'$txtadesc'";
	$TableField[3][0]="news_title_en";
	$TableField[3][1]="'$txtename'";	
	$TableField[4][0]="news_desc_en";
	$TableField[4][1]="'$txtedesc'";

	$uf=5;

	if($deletefile==1)
	{ 
  	    $SQL="select news_photo from news where news_id=$newsid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../images/news/".$showdelet[0]['news_photo']);
		$TableField[$uf][0]="news_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["news_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="news_photo";
	      $TableField[$uf][1]=uploadfile("news_photo","news_".$newsid,"../images/news");
		  $uf++;
		}

    insert_query($link,$TableName,$TableField);
	echo "<script>document.location='index.php?model=news';</script>";
}
//---------------------------
if($_GET["action"]=="newsupdate")
{
$SQL="select * from news where news_id=$_GET[newsid]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>
<div class="right_col" role="main">
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<div class="x_panel">
				<div class="x_content">
					<?php if ($_GET["action"]==""){?>
						<span class="section">News</span>
						<form method="post" name="Prowse" class="form-horizontal form-label-left" novalidate>
							<input type="hidden" name="action">
							<input type="hidden" name="newsid">
							<div class="item form-group">
								<div class="col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
									<a href="index.php?model=news&action=newsadd" class="btn btn-primary">Add New News</a><br/><br/>
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
												<tr align="center">
													<td><?php echo $SettingData[$i]["news_title_ar"]?></td>
													<td><?php echo $SettingData[$i]["news_title_en"]?></td>
													<td>
														<a href="index.php?model=news&newsid=<?php echo $SettingData[$i]["news_id"]?>&action=newsupdate" class="btn btn-warning">Edit</a>
														<input name="button" type="button" class="btn btn-danger news-delete-button" value="Delete" newsid="<?php echo $SettingData[$i]['news_id']?>">
													</td>
												</tr>
											<?php } ?>
									</table>
								</div>
							</div>
						</form>
						<script type="text/javascript">
							$(function() {
								$('.news-delete-button').on("click", function(){
									document.forms["Prowse"].elements["action"].value = $(this).val();
									document.forms["Prowse"].elements["newsid"].value = $(this).attr("newsId");
									document.forms["Prowse"].submit();
								});
							});
						</script>
					<?php }elseif($_GET["action"]=="newsupdate" || $_GET["action"]=="newsadd"){?>
						<span class="section"><?php if ($_GET["action"]=="newsupdate") echo "Edit News Detail"; else echo "Add News Detail";?></span>
						<form name="Add" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left" novalidate>
							<input type="hidden"  name="action">
							<input type="hidden" name="newsid" value="<?php echo $_GET["newsid"]?>" />
							<script>
								var actionUrl = '<?php echo $_GET["action"]=='newsupdate'? 'beUpdate':'Add';?>';
							</script>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtaname">Arabic Title <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtaname" class="form-control col-md-7 col-xs-12" name="txtaname" required="required" type="text" value="<?php echo $UpdatedData[0]['news_title_ar'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtename">English Title <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtename" class="form-control col-md-7 col-xs-12" name="txtename" required="required" type="text" value="<?php echo $UpdatedData[0]['news_title_en'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtadesc">Arabic Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtadesc" class="form-control col-md-7 col-xs-12 ckeditor required" name="txtadesc" cols="60" rows="15">
										<?php echo $UpdatedData[0]['news_desc_ar'];?>
									</textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtedesc">English Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtedesc" class="form-control col-md-7 col-xs-12 ckeditor required" name="txtedesc" cols="60" rows="15">
										<?php echo $UpdatedData[0]['news_desc_en'];?>
									</textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="news_photo">News Photo 
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="news_photo" type="file" name="news_photo" data-validate-length-range="5,20" class="optional form-control col-md-7 col-xs-12">
									<?php if(!empty($UpdatedData[0]['news_photo']) && $_GET["action"]=="newsupdate"){
										$pic_path=$UpdatedData[0]['news_photo'];?>
										<img border="0" src="../images/news/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
										<input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
									<?php } ?>
								</div>
							</div>
							<div class="ln_solid"></div>
							<div class="form-group">
								<div class="col-md-6 col-md-offset-3">
									<button type="submit" class="btn btn-primary">Save</button>
									<button type="reset" class="btn btn-success">Reset</button>
								</div>
							</div>
						</form>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</div>					