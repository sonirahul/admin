<?
$contentid=$_POST["contentid"];
$txtatitle=$_POST["txtatitle"];
$txtedesc=$_POST["txtedesc"];
$txtetitle=$_POST["txtetitle"];
$txtadesc=$_POST["txtadesc"];
$contentIDVar=$_GET[contentid];
//--------------------------------Applay Updates
if($_POST["action"]=="beUpdate")
{
	$TableName="content";
	$TableField=array();
	if ($contentIDVar == 3 || $contentIDVar == 10 || $contentIDVar == 11 || $contentIDVar == 12 ) {
		echo "hurray";
		$txtadesc = str_replace("</p>","",str_replace("<p>","",$txtadesc));
		$txtedesc = str_replace("</p>","",str_replace("<p>","",$txtedesc));
	}

	$TableField[0][0]="content_title_ar";
	$TableField[0][1]="'$txtatitle'";	
	$TableField[1][0]="content_desc_en";
	$TableField[1][1]="'$txtedesc'";
	$TableField[2][0]="content_title_en";
	$TableField[2][1]="'$txtetitle'";	
	$TableField[3][0]="content_desc_ar";
	$TableField[3][1]="'$txtadesc'";
	$SQLwhere="content_id=$contentid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
	echo "<script>document.location='index.php?model=content&contentid=$_GET[contentid]&action=$_GET[action]';</script>";
}

//---------------------------
if($_GET["action"]=="contentupdate")
{
	$SQL="select * from content where content_id=$_GET[contentid]";
	$UpdatedData=select_query($link,$SQL,0,0);	
}
?>
<br />
<? if($_GET["action"]=="contentupdate" || $_GET["action"]=="contentadd"){?>

<!-- page content -->
<div class="right_col" role="main">

	<div class="">
		<div class="clearfix"></div>

		<div class="row">
			<div class="col-md-12 col-sm-12 col-xs-12">
				<div class="x_panel">
					<div class="x_content">

						<form name="Add" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left" novalidate>
							<input type="hidden" name="action"/>
							<input type="hidden" name="contentid" value="<?=$_GET["contentid"]?>" />
							<script>
								var actionUrl = '<? echo $_GET["action"]=='contentupdate'? 'beUpdate':'Add';?>';
							</script>
							<span class="section">
								<?php	echo $UpdatedData[0]['content_title_en'];?>
							</span>

							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtatitle">Arabic Title <span class="required">*</span></label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input id="txtatitle" class="form-control col-md-7 col-xs-12" name="txtatitle" required="required" type="text" value="<?php	echo $UpdatedData[0]['content_title_ar'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtetitle">English Title <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<input type="text" id="txtetitle" name="txtetitle" required="required" class="form-control col-md-7 col-xs-12" value="<?php	echo $UpdatedData[0]['content_title_en'];?>">
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtadesc">Arabic Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtadesc" class="form-control col-md-7 col-xs-12 ckeditor required" name="txtadesc" cols="60" rows="15" required="required"><?php	echo $UpdatedData[0]['content_desc_ar'];?></textarea>
								</div>
							</div>
							<div class="item form-group">
								<label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtedesc">English Description <span class="required">*</span>
								</label>
								<div class="col-md-6 col-sm-6 col-xs-12">
									<textarea id="txtedesc" class="form-control col-md-7 col-xs-12 ckeditor required" name="txtedesc" cols="60" rows="15" required="required"><?php	echo $UpdatedData[0]['content_desc_en'];?></textarea>
								</div>
							</div>
							<div class="ln_solid"></div>
							<div class="form-group">
								<div class="col-md-6 col-md-offset-3">
									<button type="submit" class="btn btn-primary">Cancel</button>
									<button id="send" type="submit" class="btn btn-success">Submit</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<? } ?>			