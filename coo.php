<!DOCTYPE html>
<html>
<?php include "header.php";?>

<!-- navbar -->
<script type="text/javascript">
	$(function(){
		$(".nav-bar .identity").addClass("responsive");
		$(".nav-bar").css("position","fixed").fadeIn();
		$("section.nav-bar").addClass("hide-nav");
		$("#lang").css("position","fixed");

	});
</script>
<?php  
$SQLforCoo="select * from countries where countries_operation = 1 order by countries_title_en asc";
$allCooData=select_query($link,$SQLforCoo,0,0);
?>

<style type="text/css">
	body{padding-bottom:0;padding-top:50px}
	ul.nav.nav-pills li:not(:last-child):after{content:"";width:50px;height:5px;background:#1a4270;display:block;position:absolute;top:50%;right:-40px}
	ul li{overflow:initial}
	li.active i.fa{display:none}
	i.fa{display:none}

	.nav-pills{text-align:center}
	.nav-pills>li{float:initial;display:inline-block}
	.nav-pills>li+li{margin-left:19px}
	.nav-pills>li>a{border-radius:50%;width:110px;height:110px;text-align:center;background-color:#0f3d69;margin:0 10px;position:relative;padding:0}
	.nav-pills>li>a:hover{background-color: #0a2a49 !important}
	.nav-pills>li>a img{position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px;width:80px}
	.nav-pills>li>a p{position:absolute;font-weight:bold;width:100%;bottom:-60px;text-align:center;text-transform: capitalize;font-size:16px;}

	.tab-content{margin-top:100px}
	.tab-content{margin-top:100px;background:#0f3d69;padding:20px;color:#fff;height:540px}
	.tab-content .row { margin: auto;}
	.tab-content *{color:#fff}

	#coo_title{text-transform:uppercase;text-align:left;font-size:x-large;}

	@media only screen and (min-width:992px) and (max-width: 1199px){
		.nav-pills>li>a{width:100px;height:100px;}
		.nav-pills>li+li {margin-left: 10px;}
		.tab-content{margin: 100px 30px 30px;}
	}
</style>


<div class="section container-fluid" style="background-color: #cfdfff;">
	<h2>Countries of Operation </h2>
	<ul class="nav nav-pills">
		<?php 
		for($i=0;$i<count($allCooData);$i++){?>
			<li class="<?php if($i==0) echo active ?>">
				<a data-toggle="pill" href="#menu<?php echo $i?> ">
					<img src="flags/<?php echo $allCooData[$i]["countries_flag"]?>">
					<p class="menu-country-name">
						<?php 
						if($finalLang == "en") echo $allCooData[$i]["countries_title_en"];
						if($finalLang == "ar") echo $allCooData[$i]["countries_title_ar"];
						?>
					</p>
					<i class="fa fa-caret-up" aria-hidden="true"></i>
				</a>
			</li>
			<?php
		} 
		?>	
	</ul>



	<div class="tab-content container-fluid">
		<?php 
		for($i=0;$i<count($allCooData);$i++){?>
			<div id="menu<?php echo $i?>" class="tab-pane fade in <?php if($i==0) echo active ?>">
				<div class="row">
					<div class="col-sm-6" style="background:url(images/<?php echo $allCooData[$i]["countries_image"]?>);background-size:cover;height:500px;">

					</div>
					<div class="col-sm-6">
						<h2 id="coo_title">
							<?php 
							if($finalLang == "en") echo $allCooData[$i]["countries_title_en"];
							if($finalLang == "ar") echo $allCooData[$i]["countries_title_ar"];
							?>
						</h2>
						<div id="coo_desc">
							<?php 
							if($finalLang == "en") echo $allCooData[$i]["countries_desc_en"];
							if($finalLang == "ar") echo $allCooData[$i]["countries_desc_ar"];
							?>
						</div>
					</div>
				</div>
			</div>
			<?php
		} 
		?>	

	</div>
</div>

<?php include "footer.php";?>

</body>
</html>
