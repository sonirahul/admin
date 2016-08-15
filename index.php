<!--  to enable gzip compression find these files in c:\xampp\apache\conf\httpd.conf
and un-comment them
LoadModule deflate_module modules/mod_deflate.so
LoadModule filter_module modules/mod_filter.so
-->

<!--
Pending Admin side work1
1. Philosophy mission vision commitment should have seperate rows.
	photo for management team ka option in db nahi hai ?
2. Normal Team member data is static . usko dynamic krna hai ya nai ?
3. Australia flag missing 
-->
<html>
<?php include "header.php";?>
<?php  
$SQLforMagtTeam="select * from about where about_team_type = 'management'";
$SQLforEmployeeTeam="select * from about where about_team_type = 'employee'";
$SQLforContent="select * from content ";
$SQLforClients="select * from countries where countries_client_visible = 1 order by countries_title_en asc";
$SQLforNews="select * from news ";
$SQLforStats="select * from statistics limit 5";
$allContentData=select_query($link,$SQLforContent,0,0);
$allMagtTeamData=select_query($link,$SQLforMagtTeam,0,0);
$allEmployeeTeamData=select_query($link,$SQLforEmployeeTeam,0,0);
$allClientsData=select_query($link,$SQLforClients,0,0);
$allNewsData=select_query($link,$SQLforNews,0,0);
$allStatsData=select_query($link,$SQLforStats,0,0);


if($finalLang == "en")
{
	$welcomeName = $allContentData[0]["content_title_en"];
	$welcome = $allContentData[0]["content_desc_en"];

	$managementTeamName = $allContentData[1]["content_title_en"];
	$managementTeam = $allContentData[1]["content_desc_en"];

	$philosophyName = $allContentData[2]["content_title_en"];
	$philosophy = $allContentData[2]["content_desc_en"];

	$vacName = $allContentData[3]["content_title_en"];
	$vac = $allContentData[3]["content_desc_en"];

	$missionName = $allContentData[9]["content_title_en"];
	$mission = $allContentData[9]["content_desc_en"];

	$visionName = $allContentData[10]["content_title_en"];
	$vision = $allContentData[10]["content_desc_en"];

	$commitmentName = $allContentData[11]["content_title_en"];
	$commitment = $allContentData[11]["content_desc_en"];

	$singaporeAirlinesName = $allContentData[12]["content_title_en"];
	$singaporeAirlines = $allContentData[12]["content_desc_en"];
}
if($finalLang == "ar")
{ 
	$welcomeName = $allContentData[0]["content_title_ar"];
	$welcome = $allContentData[0]["content_desc_ar"];

	$managementTeamName = $allContentData[1]["content_title_ar"];
	$managementTeam = $allContentData[1]["content_desc_ar"];

	$philosophyName = $allContentData[2]["content_title_ar"];
	$philosophy = $allContentData[2]["content_desc_ar"];

	$vacName = $allContentData[3]["content_title_ar"];
	$vac = $allContentData[3]["content_desc_ar"];

	$missionName = $allContentData[9]["content_title_ar"];
	$mission = $allContentData[9]["content_desc_ar"];

	$visionName = $allContentData[10]["content_title_ar"];
	$vision = $allContentData[10]["content_desc_ar"];

	$commitmentName = $allContentData[11]["content_title_ar"];
	$commitment = $allContentData[11]["content_desc_ar"];

	$singaporeAirlinesName = $allContentData[12]["content_title_ar"];
	$singaporeAirlines = $allContentData[12]["content_desc_ar"];
}
?>


<!-- navbar -->
<script type="text/javascript">
	$(function(){
		$(window).scroll(function() {
			var navbarCurrentPos = $("section.nav-bar").offset().top;
			var welcomePos = $("#myCarousel").height() - $("section.nav-bar").height();
			var winTop = $(window).scrollTop();
			if (winTop > welcomePos) {
			//slided down below the landing home screen (slider 1)
			$(".nav-bar .identity").addClass("responsive");
			$(".nav-bar").css("position","fixed").fadeIn();
			$("section.nav-bar").addClass("hide-nav");
			$("#lang").addClass("when-slided");
		}
		else
		{
			$(".nav-bar .identity").removeClass("responsive");
			$(".nav-bar").css("position","absolute");
			$("section.nav-bar").removeClass("hide-nav");
			$("#lang").removeClass("when-slided");
		}
	});
	});
</script>


<!-- Complete Loader -->	
<style>
	#loading{width:100%;height:100%;top:0;left:0;position:fixed;display:block;opacity:1.0;background-color:#000;background:linear-gradient(45deg,#00b5e2 0,rgba(2,18,35,0.89) 100%);background:#fff;z-index:999999999;text-align:center}
	#loading-container {position: absolute;top: 50%;left: 50%;margin-top: -75px;margin-left: -75px;}
	#siteLogo{width:150px;}
	#loading-image {z-index: 100;}
	#loading-caption{width:100%;text-align: center;color: #6c6e71;}
</style>


<div id="loading">
	<div id="loading-container">
		<img id="siteLogo" src="images/lgonewblack.png"><br/><br/>
		<img id="loading-image" src="images/loader6.gif" alt="Loading..." /><br/>
		<p id="loading-caption" class="hidden">Loading... </p>
	</div>
</div>
<script type="text/javascript">
	$(window).load(function() {
		$('#loading').fadeOut();
		$('.carousel-inner>.item').addClass("activated");
		$("li.scroll-animated-item").addClass("blocks-anim");
		$(".home-main-content").addClass("active");
		initStats(2000);
		// defined in footer.php in block count js at line 168
	});
</script>

<!-- ravi // add class slide ...to make it slide from right to left -->
<div id="myCarousel" class="carousel" data-ride="carousel">
	<!-- Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1" class=""></li>
		<li data-target="#myCarousel" data-slide-to="2" class=""></li>
		<li data-target="#myCarousel" data-slide-to="3" class=""></li>
	</ol>
	<div class="carousel-inner" role="listbox">
		<div id="carouselItem1" class="item active">
			<div style="background-image:url(http://i.istockimg.com/image-zoom/68076165/3/380/246/stock-photo-68076165-kuwait-city.jpg);//background-image:url(slider/main.jpg);background-size:cover;background-position:center bottom;width:100%;height:100vh"></div>
			<div class="container">
				<div class="carousel-caption">
					<h2 class="main-screen-caption">
						<?php 
						if($finalLang == "en") echo "Local Presence Global Support";
						if($finalLang == "ar") echo "حضور محلي | دعم عالمي";
						?>
					</h2>
					<div class="block-stats hidden-xs">
						<ul>
							<?php for($i=0;$i<count($allStatsData);$i++){?>
								<?php $statValue = $allStatsData[$i]["statistics_value"]?>
								<li class="scroll-animated-item animate<?php echo $i+1?> fadeInRight">
									<div class="num" 
									data-num="<?php if($statValue>999) {$statValue=($statValue/1000); echo $statValue; ?>" 
									data-content="<?php echo $statValue;echo "K";}else echo $statValue;?>"
									>

									<?php echo $statValue;?>

								</div>
								<div class="type"><?php echo $allStatsData[$i]["statistics_name"]?></div>
							</li>
							<?php } ?>	
						</ul>
					</div>
					<p class="hidden main-screen-subcaption">Kuwait - Morocco - Syria - Jordan - Lebanon - Iran - Algeria</p>
				</div>
			</div>
		</div>

		<div id="carouselItem2"  class="item">
			<div style="background-image:url(slider/1.jpg);background-size:cover;background-position:center bottom;width:100%;height:100vh"></div>
			<div class="container">
				<div id="ci2cc" class="carousel-caption">
					<blockquote class="blockquote-reverse">
						<p>State of the art offices</p>
					</blockquote>
				</div>
			</div>
		</div>
		<div id="carouselItem3"  class="item">
			<div style="background-image:url(slider/2.jpg);background-size:cover;background-position:center bottom;width:100%;height:100vh"></div>
			<div class="container">
				<div id="ci3cc" class="carousel-caption">
					<blockquote class="blockquote-reverse">
						<p>"None of us is as smart as all of us"</p>
						<footer>Ken Blanchard</footer>
					</blockquote>
				</div>
			</div>
		</div>
		<div id="carouselItem4"  class="item">
			<div style="background-image:url(slider/4th.jpg);background-size:cover;background-position:center bottom;width:100%;height:100vh"></div>
			<div class="container">
				<div id="ci4cc" class="carousel-caption">

				</div>
			</div>
		</div>
	</div>
	<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		<i class="glyphicon-chevron-left fa fa-chevron-left" aria-hidden="true"></i>
		<span class="sr-only">Previous</span>
	</a>
	<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		<i class="glyphicon-chevron-right fa fa-chevron-right" aria-hidden="true"></i>
		<span class="sr-only">Next</span>
	</a>
	<div class="slider-bottom">
		<div class="container text-center">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<ul class="list-unstyled list-inline">
						<li><a href="tel:+96522971100" target="_blank"><i class="fa fa-phone"></i> +965-2297-1100 </a> </li>
						<li class="hidden-xs"><i class="fa fa-clock-o"></i> 8:30 AM to 05:00 PM </li>
						<li><a href="mailto:info@mawaredhouse.com" target="_blank"><i class="fa fa-envelope"></i> info@mawaredhouse.com </a></li>
						<li class="hidden"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="home-main-content"></div>

	<script type="text/javascript">
		var timeoutID;

		function delayedAlert() {
			timeoutID = window.setTimeout(slowAlert, 2000);
		}

		function slowAlert() {
			alert("That was really slow!");
		}
	</script>
</div>

<div class='main clearfix div-bg5' id='main'>
	<section id='do-dont-process'>
		<div class='container'>
			<div class='row  column-center text-justify'>
				<div class='col-md-12 '>
					<h2 class="mh-text-colored"> <?php echo $vacName ?></h2>
					<?php echo $vac ?>
				</div>
			</div>

			<br><br class="hidden-xs">
			<div class="row col-sm-12 column-center slideanim text-center" style="font-weight:bold;">
				<div class="col-sm-2 col-xs-4 col-sm-offset-1">
					<i class="fa fa-globe logo-small" style="//color:orangered;color:darkgreen" aria-hidden="true"></i>
					<p><?php echo $allStatsData[0]["statistics_value"];echo " " .$allStatsData[0]["statistics_name"];?></p>
				</div>
				<div class="col-sm-2 col-xs-4">
					<i class="fa fa-road  logo-small" style="color:orangered"></i>
					<p><?php echo $allStatsData[1]["statistics_value"];echo  " " .$allStatsData[1]["statistics_name"];?></p>
				</div>
				<div class="col-sm-2 col-xs-4">
					<i class="fa fa-university logo-small" style="color:red;//color:darkgoldenrod"></i>
					<p><?php echo $allStatsData[2]["statistics_value"];echo  " " .$allStatsData[2]["statistics_name"];?></p>
				</div>
				<div class="col-sm-2 col-xs-6" id="mobile-stat-four">
					<i class="fa fa-line-chart logo-small" style="color:darkblue" aria-hidden="true"></i>
					<p><?php echo $allStatsData[3]["statistics_value"];echo  " " .$allStatsData[3]["statistics_name"];?></p>
				</div>
				<div class="col-sm-2 col-xs-6">
					<i class="fa fa-user-plus  logo-small" style="color:#919103"></i>
					<p><?php echo $allStatsData[4]["statistics_value"];echo  " " .$allStatsData[4]["statistics_name"];?></p>
				</div>

			</div>
		</div>
	</section>
	<style type="text/css">
		#singaporeAirlines {
			background-image: url(images/singaporeAirlinesShown.jpg);
			background-image: url(http://i.istockimg.com/image-zoom/16896950/3/380/253/stock-photo-16896950-merilon-statue-singapore.jpg);
			//background-image: url(http://i.istockimg.com/image-zoom/86166105/3/380/268/stock-illustration-86166105-city-of-singapore-with-skycraper.jpg);
			background-size: cover;
			background-position:center;
			background-attachment: fixed;
			background-color: rgba(0, 0, 0, 0.30);
			background-blend-mode: multiply;
		}
		#singaporeAirlines h2,#singaporeAirlines #saContent p,#singaporeAirlines #saContent a{color:#fff !important;text-shadow:0 0 3px #666}
	</style>

	<section id="singaporeAirlines" class="section container-fluid">
		<div class="row">
			<div class="col-sm-12 text-center">
				<h2 class="mh-text-colored hidden"><?php echo $singaporeAirlinesName ?></h2>
			</div>
		</div>
		<div class="row col-sm-10 column-center text-center">
			<div id="saContent">
				<?php echo $singaporeAirlines ?>		
			</div>
		</div>
	</section>

	<section class='hidden-ipad blocks-wrapper' data-scroll-position='above' id='blocks-wrapper'>
		<div class='container'>
			<div class='row row-centered' id='let-us-help-you'>
				<div class='col-sm-12'>
					<h2><?php echo $welcomeName ?></h2>
					<?php echo $welcome?>
				</div>
			</div>
		</div>
		<div class='container'>
			<div class='row row-centered blocks'>
				<div class='block red' id='block-one'>
					<div class='v-center'>
						<i class='icon-research'></i>
						<h3>1. <?php echo $philosophyName?></h3>
						<p><?php echo $philosophy ?></p>
					</div>
				</div>
				<div class='block yellow-solid' id='block-two'>
					<div class='v-center'>
						<i class='icon-strategy'></i>
						<h3>2. <?php echo $missionName ?></h3>
					</div>
				</div>
				<div class='block blue' id='block-four'>
					<div class='v-center'>
						<i class='icon-graph'></i>
						<h3>4. <?php echo $visionName ?></h3>
					</div>
				</div>
				<div class='block green' id='block-three'>
					<div class='v-center'>
						<i class='icon-wrench'></i>
						<h3>3. <?php echo $commitmentName ?></h3>
					</div>
				</div>
				<div class='circle'>
					<div class='v-center'>
						<i class='icon-objective'></i>
						<h4>About Us</h4>
						<div id='objectives-holder'>
							<div id='div1'>Awareness</div>
							<div id='div2'>Consideration</div>
							<div id='div3'>Acquisition</div>
							<div id='div4'>Activation</div>
							<div id='div5'>Purchase</div>
							<div id='div6'>Retention</div>
							<div id='div7'>Advocacy</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class='dt-difference' data-active='zero' id='process'>
		<span class='lava-lamp'></span>
		<div class='steps'>
			<div class='dt-height visible-ipad' data-section='0'>
				<div class='process-content col-md-5'>
					<div class='container'>
						<div class='row row-centered' id='let-us-help-you'>
							<h3>Objective-based Design, our repeatable and scalable process</h3>
							<p class="hidden-xs">Identifying friction in your user journey is important, but it’s only one step in the process. After working with you to validate your user’s pain points, our team of strategists, designers, and developers operate alongside your team developing strategies to achieve your business objectives.</p>
						</div>
					</div>
				</div>
			</div>
			<div class='section-1 dt-height'>
				<div id='section-1-wrapper'>
					<div id='section-1'></div>
				</div>
				<div class='process-content red col-md-5' data-section='1' id='research-content'>
					<i class='icon-research'></i>
					<h3>1. <?php echo $philosophyName?></h3>
					<p class='visible-ipad'><?php echo $philosophy ?></p>
				</div>
			</div>
			<div class='section-2 dt-height'>
				<div id='section-2-wrapper'>
					<div id='section-2'></div>
				</div>
				<div class='process-content yellow col-md-5 col-md-offset-7' data-section='2'>
					<i class='icon-strategy'></i>
					<h3>2. <?php echo $missionName ?></h3>
					<p><?php echo $mission ?></p>
				</div>
			</div>
			<div class='section-3 dt-height'>
				<div id='section-3-wrapper'>
					<div id='section-3'></div>
				</div>
				<div class='process-content green col-md-5 col-md-offset-7' data-section='3'>
					<i class='icon-wrench'></i>
					<h3>3. <?php echo $commitmentName ?></h3>
					<p><?php echo $commitment ?></p>
				</div>
			</div>
			<div class='section-4 dt-height'>
				<div id='section-4-wrapper'>
					<div id='section-4'></div>
				</div>
				<div class='process-content blue col-md-5' data-section='4'>
					<i class='icon-graph'></i>
					<h3>4. <?php echo $visionName ?></h3>
					<p><?php echo $vision ?></p>
				</div>
			</div>
		</div>
	</section>
</div>

<div id="mobile-about-us" class="visible-xs">
	<div id="mau1" class="mau">
		<h3><i class="icon-signs" ></i> <?php echo $welcomeName ?></h3>
		<p><?php echo $welcome ?></p>
	</div>
	<div id="mau2" class="mau">
		<h3><i class='icon-research'></i> 1. <?php echo $philosophyName ?></h3>
		<p class='visible-ipad'> <?php echo $philosophy  ?></p>
	</div>
	<div id="mau3" class="mau">
		<h3><i class='icon-strategy'></i> 2. <?php echo $missionName ?></h3>
		<p><?php echo $mission ?></p>
	</div>
	<div id="mau4" class="mau">
		<h3><i class='icon-wrench'></i> 3. <?php echo $commitmentName ?></h3>
		<p><?php echo $commitment ?></p>
	</div>
	<div id="mau5" class="mau">
		<h3><i class='icon-graph'></i> 4. <?php echo $visionName ?></h3>
		<p><?php echo $vision ?></p>
	</div>
</div>

<div id="news" class="section container-fluid">
	<div class="row">
		<div class="col-sm-12 text-center">
			<h2  class="mh-text-colored">News And Events</h2>
		</div>
	</div>
	<div id="list-row" class="row">
		<div class="news-mobile-browser hidden-lg ">
			<div id="show-list" class="nmb-arrow pull-right"> Show News List <i class="fa fa-th-list" aria-hidden="true"></i> </div>
		</div>
		<div id="news-list" class="col-lg-4 ">
			<ul class="nav nav-pills nav-stacked">
				<?php 
				for($i=0;$i<count($allNewsData);$i++){?>
					<li class="<?php if($i==0) echo "active" ?> news-list-content">
						<a data-toggle="pill" href="#menu<?php echo $i+1?>">
							<div class="row">
								<div class="col-xs-5 col-sm-4 news-image-column"> <img class="news-list-image" src="news/<?php echo $allNewsData[$i]["news_photo"]?>"> </div>
								<div class="col-xs-7 col-sm-8">
									<p class="news-list-title"> 
										<?php 
										if ($finalLang == "en") echo $allNewsData[$i]["news_title_en"];
										else echo $allNewsData[$i]["news_title_ar"];?>

									</p>
								</div>
							</div>
						</a>
					</li>
					<?php 
				} 
				?>	

			</ul>
		</div>

		<div id="news-item" class="col-lg-8">
			<div class="tab-content">
				<?php 
				for($i=0;$i<count($allNewsData);$i++){?>
					<div id="menu<?echo $i+1?>" class="tab-pane fade in <?php if($i==0) echo "active" ?>">
						<div class="row">
							<div class="col-lg-7 news-image">
								<div class="imageContainer specificImageSettings" style="background-image:url(news/<?php echo $allNewsData[$i]["news_photo"]?>);"></div>
							</div>
							<div class="col-lg-5 news-content">
								<h3 class="news-title">
									<?php 
									if ($finalLang == "en") echo $allNewsData[$i]["news_title_en"];
									else echo $allNewsData[$i]["news_title_ar"];
									?>
								</h3>
								<div class="news-desc">
									<?php 
									if ($finalLang == "en") echo $allNewsData[$i]["news_desc_en"];
									else echo $allNewsData[$i]["news_desc_ar"];
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
		<div class="news-mobile-browser hidden-lg">
			<div id="nlprev" class="nmb-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i> Prev</div>
			<div id="nlnext" class="nmb-arrow pull-right">Next <i class="fa fa-angle-right" aria-hidden="true"></i> </div>
		</div>
	</div>
</div>

<div id="mgtTeamMain2" class="section" style="overflow:hidden">
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 text-center">
				<h2  class="mh-text-colored">Management Team</h2>
			</div>
		</div>
		<div class="row mgtTeamMain2Row" style="">
			<?php 
			for($i=0;$i<count($allMagtTeamData) ;$i++){?>
				<div class="col-sm-3 col-xs-12">
					<div class="omgt-team">
						<div class="omgt-image">
							<div class="hexagon hexagon2">
								<div class="hexagon-in1">
									<div class="hexagon-in2" style="background-image: url(team/<?php echo $allMagtTeamData[$i]["about_image"]?>)"></div>
								</div>
							</div>
						</div>
						<div class="omgt-name">
							<?php 
							if ($finalLang == "en") echo $allMagtTeamData[$i]["about_title_en"];
							else echo $allMagtTeamData[$i]["about_title_ar"];
							?>

						</div>
						<div class="omgt-pos">
							<?php 
							if ($finalLang == "en") echo $allMagtTeamData[$i]["about_jobtitle_en"];
							else  echo $allMagtTeamData[$i]["about_jobtitle_ar"];
							?>

						</div>
						<div class="omgt-Content">
							<?php 
							if ($finalLang == "en") echo $allMagtTeamData[$i]["about_desc_en"];
							else  echo $allMagtTeamData[$i]["about_desc_ar"];
							?>
						</div>
					</div>
				</div>
				<?php
			} 
			?>



		</div>
	</div>

</div>

<div id="mgtTeam" class="section">
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 text-center">
				<h2  class="mh-text-colored">Our People</h2>
			</div>
		</div>
	</div>


	<div class="row" style="margin:0">
		<?php 
		$boxCount=1;
		for($i=1;$i<=count($allEmployeeTeamData);$i++){?>
			<div class="col-xs-6 col-sm-2 team-mem team-view">
				<div class="element_hover">
					<div class="hover-content">
						<h3 class="sl-hover-title">
							<?php 
							if ($finalLang == "en")echo $allEmployeeTeamData[$i-1]["about_title_en"];
							else echo $allEmployeeTeamData[$i-1]["about_title_ar"];
							?>

						</h3>
						<h4 class="sl-hover-subtitle">
							<?php 
							if ($finalLang == "en")echo $allEmployeeTeamData[$i-1]["about_jobtitle_en"];
							else echo $allEmployeeTeamData[$i-1]["about_jobtitle_ar"];
							?>

						</h4>
						<i class="fa fa-angle-double-right" aria-hidden="true"></i>
					</div>
				</div>
				<img src="team/<?php echo $allEmployeeTeamData[$i-1]["about_image"]?>" alt="
				<?php
				if ($finalLang == "en") echo $allEmployeeTeamData[$i-1]["about_title_en"];
				else echo $allEmployeeTeamData[$i-1]["about_title_ar"];
				?>
				" class="img_element" width="100%" height="100%/">
				<div class="mw_team">
					<?php 
					if ($finalLang == "en")echo $allEmployeeTeamData[$i-1]["about_title_en"];
					else echo $allEmployeeTeamData[$i-1]["about_title_ar"];
					?>

				</div>
				<div class="mw-team-quote">
					<?php 
					if ($finalLang == "en")echo $allEmployeeTeamData[$i-1]["about_desc_en"];
					else echo $allEmployeeTeamData[$i-1]["about_desc_ar"];
					?>
				</div>
				<div class="box"></div>
			</div>
			<?php 
			if( $i/2.5 >= $boxCount) 
			{
				?>
				<div class="col-sm-2 team-mem">
					<div class="box" style=""></div>
				</div>
				<?php $boxCount=$boxCount+1;
			} 
			?>
			<?php
		} 
		?>	
	</div>		
</div>

<div id="mgtTeamViewer">
	<div class="row">
		<div class="col-md-5 teamviewerimagecontent">
			<div class="teamviewerimage"></div>
		</div>
		<div class="col-md-7 ">
			<div class="resume_people">
				<h3 class="people_Name">Abiola Ojo-Osagie</h3>
				<p><b>Designation : </b><span class="people-title">MACHINE</span> </p>

				<p class="texte_people"">MACHINE</p>
			</div>
		</div>
		<div class="mgtTeamViewerclose fa fa-times fa-2x" aria-hidden="true"></div>
	</div>
	<div class="justBlackBg"></div>
</div>

<div id="clientss1" class="section container-fluid">
	<div class="row">
		<div class="col-sm-12 text-center">
			<h2 class="mh-text-colored">Our Clients</h2>
		</div>
	</div>
	<div class="row col-sm-10 column-center">

		<div class="row">
			<?php for($i=0;$i<count($allClientsData);$i++){?>
				<div class="col-xs-4 col-sm-3 col-md-2 country-con">
					<div class="contry-con1">
						<div class="flagwave"></div>
						<div class="clientss-image">
							<img src="flags/<?php echo $allClientsData[$i]["countries_flag"]?>">	
						</div>
						<div class="clientss-name">
							<p><?php echo $allClientsData[$i]["countries_title_en"]?></p>
						</div>
					</div>
				</div>
				<?php
			} 
			?>	

		</div>
	</div>
</div>

<div id="contacts" class="section container-fluid">
	<div>
		<div id="googleMap" style="height:650px;width:100%"></div>
		<div id="contact" class="container-fluid">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h2 class="mh-text-white">Contact</h2>
				</div>
			</div>

			<div id="contact-content" class="row">
				<div class="col-md-8 nopadding">
					<div class="col-sm-6 nopadding">

						<div class="contact-col nopadding">
							<div class="contact-col-icon">
								<i class="fa fa-map-marker" aria-hidden="true"></i>
							</div>
							<div class="contact-col-content">
								<div class="cc-title"><h3>Kuwait</h3></div>
								<p class="cc-desc">
									4B, 2nd Floor, Al Banwan building<br/>
									Al Qibla Area<br/>
									Opposite Central Bank of Kuwait<br/>
									Kuwait City


								</p>
							</div>
						</div>

						<div class="contact-col nopadding">
							<div class="contact-col-icon">
								<i class="fa fa-paper-plane" aria-hidden="true"></i>
							</div>
							<div class="contact-col-content">
								<div class="cc-title"><h3>Mailing address</h3></div>
								<p class="cc-desc">
									P.O.Box 1112 Salmiya 22012<br/>
									Kuwait
								</p>
							</div>
						</div>

					</div>


					<div class="col-sm-6 nopadding">
						<div class="contact-col nopadding">
							<div class="contact-col-icon quick-contact">
								<i class="fa fa-phone" aria-hidden="true"></i>
							</div>
							<div class="contact-col-content">
								<div class="cc-title"><p> +965 2297 1100</p></div>
							</div>
						</div>

						<div class="contact-col nopadding">
							<div class="contact-col-icon quick-contact">
								<i class="fa fa-fax" aria-hidden="true"></i>
							</div>
							<div class="contact-col-content">
								<div class="cc-title"><p>+965 2249 5787</p></div>
							</div>
						</div>

						<div class="contact-col nopadding">
							<div class="contact-col-icon quick-contact">
								<i class="fa fa-envelope" aria-hidden="true"></i>
							</div>
							<div class="contact-col-content">
								<div class="cc-title"><p>info@mawaredhouse.com</p></div>
							</div>
						</div>
					</div>
				</div>
				<div id="contactForm" class="col-sm-6 col-md-4" style="">
					<div id="contactFormMobileClose" class="visible-xs visible-sm"><i class="icon-rounded-x"></i></div>
					<div id="mainPopupForm" class="col-sm-6 col-md-12 col-lg-12 column-center">
						<div id="contact-header-info" class="contact-col">
							<div class="contact-col-icon">
								<i class="fa fa-wpforms" aria-hidden="true"></i>
							</div>
							<div class="contact-col-content">
								<div class="cc-title"><h3>Contact/Feedback Form</h3></div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6 form-group">
								<input class="form-control" id="name" name="name" placeholder="Name" type="text" required>
							</div>
							<div class="col-lg-6 form-group">
								<input class="form-control" id="email" name="email" placeholder="Email" type="email" required>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6 form-group">
								<input class="form-control" id="name" name="name" placeholder="Subject" type="text" required>
							</div>
							<div class="col-lg-6 form-group">
								<input class="form-control" id="email" name="email" placeholder="Mobile" type="email" required>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 form-group">
								<textarea class="form-control hidden-xs" id="comments" name="comments" placeholder="Details" rows="5" style="resize: none;"></textarea>
								<textarea class="form-control visible-xs" id="comments" name="comments" placeholder="Details" rows="3" style="resize: none;"></textarea>
							</div>
						</div>
						<br>
						<div class="row">
							<div class="col-md-12 form-group">
								<button class="btn btn-default pull-right" type="submit">Send</button>
							</div>
						</div>	
					</div>
				</div>
				<div id="contactFormBtn" class="col-xs-12 visible-xs visible-sm">
					<button type="button" class="btn btn-primary">
						<span class="icon-scroll"> FEEDBACK FORM</span>
					</button>
				</div>
			</div>


		</div>
		<div id="contactView">
			<button type="button" class="btn btn-success">View Map</button>
		</div>

	</div>
</div>
<?php include "footer.php";?>
</body>

</html>