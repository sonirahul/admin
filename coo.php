<!DOCTYPE html>
<html>
<?php include "header.php";?>

<?php  
$SQLforCoo="select * from countries where countries_operation = 1 order by countries_title_en asc";
$allCooData=select_query($link,$SQLforCoo,0,0);
?>

<style type="text/css">
body{padding-bottom:0;padding-top:50px}
#coo-main{font-family:'Source Sans Pro',sans-serif!important;background-color:#fff;//background-image:linear-gradient(bottom,#f6f6f6 45%,#86b0ff 100%);//background-image:-moz-linear-gradient(bottom,#f6f6f6 45%,#86b0ff 100%);//background-image:-webkit-linear-gradient(bottom,#f6f6f6 45%,#86b0ff 100%)}
ul.nav.nav-pills li:not(:last-child):after{content:"";width:50px;height:5px;background:#1a4270;display:block;position:absolute;top:50%;right:-40px}
ul li{overflow:initial}
li.active i.fa{display:none}
i.fa{display:none}
.nav-pills{text-align:center}
.nav-pills>li{float:initial;display:inline-block}
.nav-pills>li+li{margin-left:19px}
.nav-pills>li>a{border-radius:50%;width:110px;height:110px;text-align:center;background-color:#0f3d69;margin:0 10px;position:relative;padding:0}
.nav-pills>li>a:hover{background-color:#0a2a49!important}
.nav-pills>li>a img{position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px;width:80px}
.nav-pills>li>a p{position:absolute;font-weight:bold;width:100%;bottom:-60px;text-align:center;text-transform:capitalize;font-size:18px}
.tab-content{margin-top:100px;background:#0f3d69;padding:20px;padding:0;color:#fff;height:540px}
.tab-content .row{margin:auto;box-shadow:0 0 20px #a9a9a9}
.tab-content *{color:#fff}
.entry-content{margin:20px 100px}
.tab-pane{background-color:#FFF}
#coo_title{text-transform:uppercase;text-align:left;font-size:x-large}
#coo-country-name{color:#333;color:#FFF;//color:#f99f1c;text-transform:uppercase;text-align:center;padding:30px;font-size:32px}
li.active p.menu-country-name{color:orange}
.content-inner-wrap h4{font-size:18px;text-transform:capitalize;font-weight:normal}
#coo-main h2,.menu-country-name{color:#133963}
label.show-title{font-weight:normal!important}
#coo-pic{padding-top:54%;background-position:center!important}
@media only screen and (min-width :320px) and (max-width:991px){.entry-content{margin:0!important}
.tab-content{margin:0;width:100vw;float:left}
#coo-con-pic img{width:100%}
.tab-content .row{box-shadow:none}
#coo-main{width:100vw;padding:0;margin-top:30px}
.nav-pills>li{width:100%}
.nav-pills>li:not(:last-child){border-bottom:2px solid #b8c6e2}
.nav-pills>li::after{display:none!important}
.nav-pills>li>a{width:100vw!important;background-color:initial!important;border-radius:0!important;height:70px}
.nav-pills>li>a img{top:45%;left:15%}
.nav-pills>li>a p{top:30%;left:30%;height:0;text-align:left;width:initial}
.nav-pills>li>a,.nav-pills>li+li{margin:0!important}
#coo-content-container{width:200vw}
.nav-pills{text-align:center;width:100vw;overflow:hidden!important;float:left;z-index:9;background:#fff;position:relative}
.tab-content{height:initial}
.tab-content.container-fluid{width:100vw;overflow:hidden;float:left;margin:0}
.nav-pills>li>a:hover{background-color:#0f3d69!important}
.nav-pills>li>a:hover p{color:#fff}
#con-content-parent{width:100vw;overflow-x:hidden}
.tab-pane{overflow-wrap:break-word}
i#coo-content-back-btn{color:#fff;margin-left:20px}
#coo-con-pic{width:100%}
#coo-content-forward-btn{position:absolute;top:30%;right:10%}
}@media only screen and (min-width :421px) and (max-width:600px){.nav-pills>li>a{height:80px}
.nav-pills>li>a img{width:90px;margin-top:-45px;margin-left:-45px}
.nav-pills>li>a p{font-size:17px!important}
}@media only screen and (min-width :600px) and (max-width:768px){.nav-pills>li>a{height:90px}
.nav-pills>li>a img{width:100px;margin-top:-50px;margin-left:-50px}
.nav-pills>li>a p{font-size:18px!important}
}@media only screen and (min-width :769px) and (max-width:991px){.nav-pills>li>a{height:110px}
.nav-pills>li>a img{width:120px;margin-top:-60px;margin-left:-60px}
.nav-pills>li>a p{font-size:20px!important}
}@media only screen and (min-width:992px) and (max-width:1199px){.nav-pills>li>a{width:100px;height:100px}
.nav-pills>li+li{margin-left:10px}
//.tab-content{margin:100px 30px 30px}
}@media only screen and (min-width:1400px) and (max-width:1823px){.nav-pills>li>a{width:130px;height:130px}
.nav-pills>li+li{margin-left:15px}
//.tab-content{margin:100px 30px 30px}
.nav-pills>li>a img{margin-left:-50px;margin-top:-50px;width:100px}
}.content-title{color:#f99f1c}
.tab-pane{background-color:#133963}
</style>


<div id="coo-main" class="section container-fluid">
	<h2>Countries of Operation </h2>
	<div id="con-content-parent">
		<div id="coo-content-container">
			<ul class="nav nav-pills">
				<?php 
				for($i=0;$i<count($allCooData);$i++){?>
					<li class="<?php if($i==0) echo active ?>">
						<a data-toggle="pill" href="#menu<?php echo $i?> ">
							<img src="images/flags/<?php echo $allCooData[$i]["countries_flag"]?>">
							<p class="menu-country-name">
								<?php 
								if($finalLang == "en") echo $allCooData[$i]["countries_title_en"];
								if($finalLang == "ar") echo $allCooData[$i]["countries_title_ar"];
								?>
							</p>
							<i id="coo-content-forward-btn" class="fa fa-2x fa-angle-right visible-xs visible-sm" aria-hidden="true"></i>
							<i class="fa fa-caret-up" aria-hidden="true"></i>
							<i classs="fa fa-caret-right"></i>
						</a>
					</li>
					<?php
				} 
				?>	
			</ul>



			<div class="tab-content col-sm-8 column-center">
				<i id="coo-content-back-btn" class="fa fa-3x fa-angle-left visible-xs visible-sm " aria-hidden="true"></i>
				<?php 
				for($i=0;$i<count($allCooData);$i++){
					$SQLforCooFor="select * from countries_content cc, countries c where c.countries_id=cc.countries_mission_en and cc.countries_id = ".$allCooData[$i]["countries_id"];
					$allCooForData=select_query($link,$SQLforCooFor,0,0);
					
				?>
					<div id="menu<?php echo $i?>" class="tab-pane fade in <?php if($i==0) echo active ?>">
						<div class="row">
							<div id="coo-country-name" class="col-sm-12 "> 
									<?php 
									if($finalLang == "en") echo $allCooData[$i]["countries_title_en"];
									if($finalLang == "ar") echo $allCooData[$i]["countries_title_ar"];
									?>
							</div>
							<div id="coo-pic" class="col-sm-12 hidden-xs" style="background:url(images/countries/<?php echo $allCooData[$i]["countries_photo"]?>);background-size:cover;"></div>
							<div id="coo-con-pic" class="col-sm-12 visible-xs"><img src="images/countries/<?php echo $allCooData[$i]["countries_photo"]?>" /></div>
							<div class="col-sm-12">
								
								<div id="coo_desc">
									

															<div class="entry-content">
																
																<div class="content-inner-wrap">
																	<h4>To know more about the visa process click the country below:</h4>
																	<ul class="flik-timeline flik-timeline-10" data-scroll-effect="default-effect">
																		<?php for($j=0;$j<count($allCooForData);$j++){ ?>
																			<li class="default-effect">
																				<div class="relative">
																					<label class="show-title">
																						<?php echo ucwords($allCooForData[$j]["countries_title_en"]); ?>
																					</label>
																					<span class="date"><img src="images/flags/<?php echo $allCooForData[$j]["countries_flag"]; ?>" style="width: 5em;"></span>
																					<span class="circle"/>
																				</div>
																				<div class="flik-timeline-content">
																					<div class="content-title"><?php echo ucwords($allCooForData[$j]["countries_title_en"]); ?></div>
																					<div class="content-main"><a href="<?php echo $allCooForData[$j]["countries_website_en"]; ?>"><?php echo $allCooForData[$j]["countries_website_en"]; ?></a></div>
																				</div>
																			</li>
																		<? } ?>
																		
																	</ul>

																</div>
															</div><!-- .entry-content -->
									
									
									

									
								</div>
							</div>
						</div>
					</div>
					<?php
				} 
				?>	

			</div>
		</div>
	</div>
</div>

<?php include "footer.php";?>


<!-- navbar -->
<script type="text/javascript">
	$(function(){
		$(".nav-bar .identity").addClass("responsive");
		$(".nav-bar").css("position","fixed").fadeIn();
		$("section.nav-bar").addClass("hide-nav");
		$("#langForm").addClass("when-slided");
	});
</script>

<script type="text/javascript">

	$(function(){
		if(isDeviceMobile()) {$(".tab-content").hide();}
		earlierTopValue=0;
		$(".nav-pills>li>a").click(function(){
			windowWidth = $(window).width();
			$('#con-content-parent').delay(500).animate({scrollLeft: windowWidth},300);
			$(window).delay(800).scrollTop(0);
			if(isDeviceMobile()) {
				$(".tab-content").show();
			}
		});
		$("#coo-content-back-btn").click(function(){
			windowWidth = $(window).width();
			$('#con-content-parent').animate({scrollLeft:0},300);
			if(isDeviceMobile()) {
				$(".tab-content").hide();
			}
		});
	});
</script>



</body>
</html>
