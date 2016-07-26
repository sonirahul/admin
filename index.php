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

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
	<meta content='width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no' name='viewport'>
	<title>Mawared House | Local Presence Global Support</title>
	<meta content="We improve your customer's experience with our proven Objective-Based Design process and simple &amp; unique UX design subscription model." name='description'>
	<meta content='UX, Product Design, Customer Experience, Mobile App Design, Website UX Design, Marketing Strategy, Mobile UX' name='keywords'>
	<meta content='#29aecc' name='theme-color'>
	<meta content='summary_large_image' name='twitter:card'>
	<meta content='UX Design Services: Research, Strategy, Product and Mobile Design' name='twitter:title'>
	<meta content="We improve your customer's experience with our proven Objective-Based Design process and simple &amp; unique UX design subscription model." name='twitter:description'>
	<meta content='UX Design Services: Research, Strategy, Product and Mobile Design' property='og:title'>
	<meta content="We improve your customer's experience with our proven Objective-Based Design process and simple &amp; unique UX design subscription model." property='og:description'>

	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/main-ce83667e.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
	<link rel="stylesheet" type="text/css" href="css/content_slider_style.css">
	<link rel="stylesheet" type="text/css" href="css/nanoscroller.css">
	<link rel="stylesheet" type="text/css" href="css/responsive.css">
	<link rel="stylesheet" type="text/css" href="33535gillsansmt/font.css">

	<script src="js/main-6e0cc465.js"></script>
	<script src="js/process-1d1f249e.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
	<script src="js/modernizr-custom.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="js/jquery.content_slider.js"></script>
	<script src="js/jquery.mousewheel.js"></script>
	<script src="js/jquery.nanoscroller.min.js"></script>


</head>
<body data-logo-color='light' data-nav-color='light' data-overlay-id='false' data-overlay-open='false' data-page='process' data-section='unity'>
	<?php include "function.php";?>
	<?php
	$SQLforMagtTeam="select * from about where about_team_type = 'management'";
	$SQLforEmployeeTeam="select * from about where about_team_type = 'employee'";
	$SQLforContent="select * from content ";
	$SQLforClients="select * from clients where clients_country_flag_visible = 1 order by clients_country_name asc";
	$SQLforNews="select * from news ";
	$SQLforStats="select * from statistics limit 5";

	$allContentData=select_query($link,$SQLforContent,0,0);

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

	$allMagtTeamData=select_query($link,$SQLforMagtTeam,0,0);
	$allEmployeeTeamData=select_query($link,$SQLforEmployeeTeam,0,0);
	$allClientsData=select_query($link,$SQLforClients,0,0);
	$allNewsData=select_query($link,$SQLforNews,0,0);
	$allStatsData=select_query($link,$SQLforStats,0,0);
	?>

	<section class='nav-bar container-fluid scroll-up' id='navbar'>
		<div class='nav-bar-inner'>
			<div class='identity'>
				<a href="/"><img src="images/logo reverse.png" id='digital-telepathy-logo'>
				</a>
			</div>
			<a class="menu-text" href="javascript:;">MENU</a>
		</div>
		<div class='menu-wrap'>
			<a class="hamburger menu" href="javascript:;"><div></div>
				<div></div>
				<div></div>
			</a>
		</div>
	</section>

	<div id="lang" class="dropdown">
		<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
			<img class="langSelectedImage" src="lang/en.png"/>
			<span class="langSelectedText"> EN</span>
			<span class="caret"></span>
		</button>
		<ul class="dropdown-menu">
			<li><a id="en" href="#"><img src="lang/en.png"/> English</a></li>
			<li><a id="kw" href="#"><img src="lang/ar.png"/> Arabic</a></li>
		</ul>
	</div>

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
				<div style="background-image:url(slider/1_c.jpg);background-size:cover;background-position:center center;width:100%;height:100vh"></div>
				<div class="container">
					<div class="carousel-caption">
						<h2 class="main-screen-caption">Local Presence Global Support</h2>
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
						<p class="main-screen-subcaption">Kuwait - Morocco - Syria - Jordan - Lebanon - Iran - Algeria</p>
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
							<li class="hidden-xs"><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a></li>
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
				background-size: cover;
				background-attachment: fixed;
				background-color: rgba(0, 0, 0, 0.45);
				background-blend-mode: multiply;
			}
			#singaporeAirlines h2,#singaporeAirlines #saContent p,#singaporeAirlines #saContent a{color:#fff !important;text-shadow:0 0 3px #666}
		</style>

		<section id="singaporeAirlines" class="section container-fluid">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h2 class="mh-text-colored"><?php echo $singaporeAirlinesName ?></h2>
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
						<h2><? echo $welcomeName ?></h2>
						<? echo $welcome?>
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
			<p><?php echo $welcomeName ?></p>
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
					<?php for($i=0;$i<count($allNewsData);$i++){?>
						<li class="<?php if($i==0) echo "active" ?> news-list-content">
							<a data-toggle="pill" href="#menu<?php echo $i+1?>">
								<div class="row">
									<div class="col-xs-5 col-sm-4 news-image-column"> <img class="news-list-image" src="news/<?php echo $allNewsData[$i]["news_photo"]?>"> </div>
									<div class="col-xs-7 col-sm-8">
										<p class="news-list-title"> <?php echo $allNewsData[$i]["news_title_en"]?></p>
									</div>
								</div>
							</a>
						</li>
						<?php } ?>	

					</ul>
				</div>

				<div id="news-item" class="col-lg-8">
					<div class="tab-content">
						<?php for($i=0;$i<count($allNewsData);$i++){?>
							<div id="menu<?echo $i+1?>" class="tab-pane fade in <?php if($i==0) echo "active" ?>">
								<div class="row">
									<div class="col-lg-7 news-image">
										<div class="imageContainer specificImageSettings" style="background-image:url(news/<?php echo $allNewsData[$i]["news_photo"]?>);"></div>
									</div>
									<div class="col-lg-5 news-content">
										<h3 class="news-title"> <?php echo $allNewsData[$i]["news_title_en"]?> </h3>
										<p class="news-desc">
											<?php echo $allNewsData[$i]["news_desc_en"]?>
										</p>
									</div>
								</div>
							</div>
							<?php } ?>	

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
						<?php for($i=0;$i<count($allMagtTeamData) ;$i++){?>
							<div class="col-sm-3 col-xs-12">
								<div class="omgt-team">
									<div class="omgt-image">
										<div class="hexagon hexagon2">
											<div class="hexagon-in1">
												<div class="hexagon-in2" style="background-image: url(team/<?php echo $allMagtTeamData[$i]["about_image"]?>)"></div>
											</div>
										</div>
									</div>
									<div class="omgt-name"><?php echo $allMagtTeamData[$i]["about_title_en"]?></div>
									<div class="omgt-pos"><?php echo $allMagtTeamData[$i]["about_jobtitle_en"]?></div>
									<div class="omgt-Content">
										<?php echo $allMagtTeamData[$i]["about_desc_en"]?>
									</div>
								</div>
							</div>
							<?php } ?>



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
											<h3 class="sl-hover-title"><?php echo $allEmployeeTeamData[$i-1]["about_title_en"]?></h3>
											<h4 class="sl-hover-subtitle"><?php echo $allEmployeeTeamData[$i-1]["about_jobtitle_en"]?></h4>
											<i class="fa fa-angle-double-right" aria-hidden="true"></i>
										</div>
									</div>
									<img src="team/<?php echo $allEmployeeTeamData[$i-1]["about_image"]?>" alt="<?php echo $allEmployeeTeamData[$i-1]["about_title_en"]?>" class="img_element" width="100%" height="100%/">
									<div class="mw_team"><?php echo $allEmployeeTeamData[$i-1]["about_title_en"]?></div>
									<div class="mw-team-quote">
										<?php echo $allEmployeeTeamData[$i-1]["about_desc_en"]?>
									</div>
									<div class="box"></div>
								</div>
						<?php if( $i/2.5 >= $boxCount) {?>
								<div class="hidden-xs col-sm-2 team-mem">
									<div class="box" style=""></div>
								</div>
						<?php $boxCount=$boxCount+1;} ?>
						<?php } ?>	
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
									<p><b>Title : </b><span class="people-title">Bla bla bla</span> </p>

									<p class="texte_people"">bla bla bla</p>
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
												<img src="flags/<?php echo $allClientsData[$i]["clients_country_flag"]?>">	
											</div>
											<div class="clientss-name">
												<p><?php echo $allClientsData[$i]["clients_country_name"]?></p>
											</div>
										</div>
									</div>
									<?php } ?>	

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

						<div class='footer'>
							<div class='footer-inner'>
								<section class='container'>
									<div class='row'>
										<div class='col-md-9 hidden-xs hidden-sm '>
											<ul class='level-1-nav list-unstyled'>
												<li class='home'>
													<a class="home" href="/">Home</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='services'>
													<a class="services active" href="/process/">News</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='our-work'>
													<a class="our-work" href="/work/">Our Team</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='philosophy'>
													<a class="philosophy" href="/philosophy">Operation</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='careers'>
													<a class="careers" href="/careers/">Gallery</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='blog'>
													<a target="_blank" class="blog" href="http://www.com/blog">Clients</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='blog'>
													<a target="_blank" class="blog" href="https://mail.mawaredhouse.com/owa">Employees</a>
													<span class='icon-right-open-big'></span>
												</li>
												<li class='contact'>
													<a class="contact" href="/contact/">Contact</a>
													<span class='icon-right-open-big'></span>
												</li>
											</ul>
										</div>
										<div class='col-md-3 col-xs-12 '>
											<ul class='social'>
												<li>
													<a target="_blank" class="icon-twitter" href="https://twitter.com/mawaredhouse" style="color: #57afe7;"></a>
												</li>
												<li>
													<a target="_blank" class="icon-facebook-squared" href="https://www.facebook.com/Mawared-House-107948055939170/" style="color:#3b5998"></a>
												</li>
												<li>
													<a target="_blank" class="icon-linkedin-squared" style="color:#0077b5" href="https://www.linkedin.com/company/mawared-house"></a>
												</li>
												<li>
													<a target="_blank" class="icon-mail-squared" href="https://mail.mawaredhouse.com/owa" style="color: #4CAF50;;"></a>
												</li>
											</ul>
										</div>
									</div>
									<p class='copyright'>
										&copy; 2016 Mawared House. <span class="hidden-xs">All rights reserved. <a href="/privacy-policy">Privacy&nbsp;Policy</a></span>
									</p>
								</section>
							</div>
						</div>

						<div class='nav-overlay full-screen-overlay dt-height' id='nav-overlay'>
							<ul class='level-1-nav list-unstyled'>
								<li class='home'>
									<a class="home" href="#main">Home</a>
									<span class='icon-right-open-big'></span>
								</li>
								<li class='services'>
									<a class="services" href="#news">News</a>
									<span class='icon-right-open-big'></span>
								</li>
								<li class='our-work'>
									<a class="our-work" href="#mgtTeam">Our Team</a>
									<span class='icon-right-open-big'></span>
								</li>
								<li class='philosophy'>
									<a class="philosophy" href="coo.html">Operation</a>
									<span class='icon-right-open-big'></span>
								</li>
								<li class='careers'>
									<a class="careers" href="gallery.html">Gallery</a>
									<span class='icon-right-open-big'></span>
								</li>
								<li class='blog'>
									<a target="_blank" class="blog" href="#clientss1">Clients</a>
									<span class='icon-right-open-big'></span>
								</li>
								<li class='contact'>
									<a class="contact" href="#contacts">Contact</a>
									<span class='icon-right-open-big'></span>
								</li>
							</ul>
							<div class='nav-footer'>
								<ul class='social'>
									<li>
										<a target="_blank" class="icon-twitter" href="https://twitter.com/mawaredhouse"></a>
									</li>
									<li>
										<a target="_blank" class="icon-facebook-squared" href="https://www.facebook.com/Mawared-House-107948055939170/"></a>
									</li>
									<li>
										<a target="_blank" class="icon-linkedin-squared" href="https://www.linkedin.com/company/mawared-house"></a>
									</li>
									<li>
										<a target="_blank" class="icon-mail-squared" href="https://mail.mawaredhouse.com/owa"></a>
									</li>
								</ul>
								<div class='border'></div>
								<div class='logo-wrapper'>
									<img src="images/lgonew.png" id='digital-telepathy-logo'>

								</div>
								<p>&copy; 2016 Mawaredhouse.com</p><!-- var d = new Date().getFullYear(); -->
							</div>
						</div>

						<!-- navbar -->
						<script type="text/javascript">
							$(function(){
								$(window).scroll(function() {
									var navbarCurrentPos = $("section.nav-bar").offset().top;
									var welcomePos = $("#myCarousel").height() - $("section.nav-bar").height();
									var winTop = $(window).scrollTop();
									if (winTop > welcomePos) {
					//console.log("hit");
					$(".nav-bar .identity").addClass("responsive");
					$(".nav-bar").css("position","fixed");
					$("section.nav-bar").addClass("hide-nav");
				}
				else
				{
					$(".nav-bar .identity").removeClass("responsive");
					$(".nav-bar").css("position","absolute");
					$("section.nav-bar").removeClass("hide-nav");
				}
			});
							});
						</script>

						<!--lang-->
						<script type="text/javascript">
							$(function(){
								var langImage = $(".langSelectedImage");
								var langText = $(".langSelectedText");
								$("#en").click(function(){	
									langImage.attr("src","lang/en.png");
									langText.html("EN");
								});
								$("#kw").click(function(){	
									langImage.attr("src","lang/ar.png");
									langText.html("AR");
								});
							});
						</script>

						<!--Carousel Initialization-->
						<script type="text/javascript">
							$(function(){ 
								$('.carousel').carousel({
									interval: false
								}); 
							});
						</script>

						<!--block count-->
						<script type="text/javascript">
							$(function(){ 
			//Count num
			function countNum(num, content, target, duration) {
				if (duration) {
					var count = 0;
					var speed = parseInt(duration / num);
					var interval = setInterval(function(){
						if (count - 1 < num) {
							target.html(count);
						}
						else {
							target.html(content);
							clearInterval(interval);
						}
						count++;
					}, speed);
				} else {
					target.html(content);
				}
			}

			//Init stats
			function initStats(duration) {
				jQuery('.block-stats .num').each(function() {
					var container = jQuery(this);
					var num = container.attr('data-num');
					var content = container.attr('data-content');

					countNum(num, content, container, duration);
				});
			}
			initStats(2000);
		});
	</script>

	<!--Normal slide animation -->
	<script type="text/javascript">
		$(function(){
			$(window).scroll(function() {
				$(".slideanim").each(function(){
					var pos = $(this).offset().top;

					var winTop = $(window).scrollTop();
					if (pos < winTop + 600) {
						$(this).addClass("slide");
					}
				});
			});
		});
	</script>

	<!-- Management Team Viewer-->
	<script type="text/javascript">
		$(".omgt-team").click(function(){
			var imgsrc = $(this).find(".hexagon-in2").css('background-image').replace('url(','').replace(')','');;
			var peopleName = $(this).find(".omgt-name").text();
			var peopleTitle = $(this).find(".omgt-pos").text();
			var peopleText = $(this).find(".omgt-Content").text();

			//console.log(imgsrc + " " + peopleName + " " + peopleTitle + " " + peopleText);
			//Setting values
			$(".teamviewerimage").css("background-image",'url('+imgsrc+')');
			$(".people_Name").html(peopleName);
			$(".people-title").html(peopleTitle);
			$(".texte_people").html(peopleText);
			$("#mgtTeamViewer").show();
			$("div#mgtTeamViewer>.row").addClass("ourMagtTeam").removeClass("ourNormalTeam");
		});
	</script>

	<!--Local Team Viewer With Close Setting-->
	<script type="text/javascript">
		$(".team-view").click(function(){
			var imgsrc = $(this).find("img").attr("src");
			var peopleName = $(this).find(".sl-hover-title").text();
			var peopleTitle = $(this).find(".sl-hover-subtitle").text();
			var peopleText = $(this).find(".mw-team-quote").text();

			console.log(imgsrc + " " + peopleName + " " + peopleTitle + " " + peopleText);
			//Setting values
			$(".teamviewerimage").css("background-image",'url('+imgsrc+')');
			$(".people_Name").html(peopleName);
			$(".people-title").html(peopleTitle);
			$(".texte_people").html(peopleText);
			$("#mgtTeamViewer").show();
			$("div#mgtTeamViewer>.row").addClass("ourNormalTeam").removeClass("ourMagtTeam");

		});
		$(".mgtTeamViewerclose").click(function(){
			closeTeamViewer();
		});
		$(".justBlackBg").click(function(){
			closeTeamViewer();
		});
		function closeTeamViewer()
		{
			$(".ourMagtTeam").scrollTop(0);
			$(".ourNormalTeam").scrollTop(0);
			setTimeout(function(){
				$("#mgtTeamViewer").hide();
				$("div#mgtTeamViewer>.row").removeClass("ourNormalTeam").removeClass("ourMagtTeam");;
			},10);
		}
	</script>

	<!-- Show all news list -->
	<script type="text/javascript">
		$(function(){	

			newsflag = 0;
			$("#show-list").click(function(){
				if(newsflag==0)
				{
					$("#news-list").addClass("news-list-open");
					newsflag=1;
					setTimeout(function(){
						$("#news-list").scrollTop(0);
					},10);
				}
				else
				{
					hideNewsList();
				}
			});
			$("#news-list li a").click(function(){
				hideNewsList();
			});
			function hideNewsList()
			{
				$("#news-list").removeClass("news-list-open");
				newsflag=0;
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					setTimeout(function(){
						$("#news-list").scrollTop(0);
					},1000);
				}
			}
		});
	</script>

	<!-- news list next & prev-->
	<script type="text/javascript">
		$(function(){
			$("#nlprev").click(function(){
				newsListBtnHandler(1);
			});
			$("#nlnext").click(function(){
				newsListBtnHandler(2);
			});
			totalListItems = $("#news-list li").length;
			function newsListBtnHandler(controllerNum)
			{
				console.log("called" + controllerNum);
				activeList = $("#news-list ul.nav>li.active");
				activeListTargetNumber = activeList.find("a").attr("href").split("#menu")[1];
				if(controllerNum == 1 )
				{
					clickedItemNum = parseInt(activeListTargetNumber)-1;
					if(clickedItemNum<=0) clickedItemNum = totalListItems;
				}
				if(controllerNum == 2 )
				{
					clickedItemNum = parseInt(activeListTargetNumber)+1;
					if(clickedItemNum>totalListItems) clickedItemNum = 1;
				}
				$("#news-list li>a[href='#menu" + clickedItemNum + "']").click();
			}
		});
	</script>

	<!-- Contact View Button -->
	<script type="text/javascript">
		$(function(){
			flag=0;
			$("#contactView button").click(function(){
				if(flag==0){
				//$("#contact").addClass("contactOpacity");
				$("#contact").fadeOut();
				$(this).html('View Contact');
				flag=1;
			}
			else
			{
				//$("#contact").removeClass("contactOpacity");
				$("#contact").fadeIn();
				$(this).html('View Map');
				flag=0;  
			}
		});
		});
	</script>

	<!-- Contact Mobile Open & Close Button -->
	<script type="text/javascript">
		$("#contactFormBtn").click(function(){
			$("#contactFormMobileClose").fadeIn();
			$("#contactForm").fadeIn();			
		});
		$("#contactFormMobileClose").click(function(){
			$("#contactFormMobileClose").fadeOut();
			$("#contactForm").fadeOut();
		});
	</script>

	<!-- smooth scroll -->
	<script type="text/javascript">
		$(function(){
			$("#nav-overlay a").click(function() {
				topValue1 = ($($(this).attr("href")).offset().top);
				topValue2 = ($($(this).attr("href")).offset().top) - $("section.nav-bar").height()/2;
				console.log(topValue1 + " " + topValue2);
				$('html, body').animate({
					scrollTop: topValue2
				}, 1500);
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					$("a.hamburger.menu").click();
				}
			});

		});
	</script>

	<!-- hamburger -->
	<script>
		$(document).ready(function()
		{
			var e = function()
			{

				var e = $(".hamburger"),
				n = $("body").find(".nav-bar");
				$(".nav-overlay").toggleClass("show"), $("body").toggleClass("nav-open"), $(".menu-text").delay(400).queue(function() {
					$(this).fadeToggle(400), $(this).dequeue(), $("#lang").hide(400)
				}), e.hasClass("active") ? (e.addClass("active-end"), e.one("transitionend", function() {
					e.removeClass("active active-end")
				})) : e.addClass("active"), $(".nav-overlay").hasClass("show") ? n.toggleClass("no-bg") : n.delay(400).queue(function() {
					$(this).toggleClass("no-bg", 500), $(this).dequeue(), $("#lang").show(400)
				})

				//$("#lang").toggleClass("show");

			};

			$(".hamburger").click(e);
			$(".menu-text").click(e);

            //jQuery time
            var parent, ink, d, x, y;
            $("ul li a").click(function(e)
            {
            	parent = $(this).parent();
				//create .ink element if it doesn't exist
				if(parent.find(".ink").length == 0)
					parent.prepend("<span class='ink'></span>");

				ink = parent.find(".ink");
				//incase of quick double clicks stop the previous animation
				ink.removeClass("animate");
				
				//set size of .ink
				if(!ink.height() && !ink.width())
				{
					//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
					d = Math.max(parent.outerWidth(), parent.outerHeight());
					ink.css({height: d, width: d});
				}
				
				//get click coordinates
				//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
				x = e.pageX - parent.offset().left - ink.width()/2;
				y = e.pageY - parent.offset().top - ink.height()/2;
				
				//set the position and add class .animate
				ink.css({top: y+'px', left: x+'px'}).addClass("animate");
			});
        });
    </script>

    <script type="text/javascript">
    	$(function(){
    		$(".nano").nanoScroller();

    	});
    </script>

    <!-- Add Google Maps -->
    <script type="text/javascript">
    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    		$("#googleMap").attr("style","height:590px;width:100%")
    	}
    </script>

    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script>
    	$(function(){
    		var myCenter = new google.maps.LatLng(29.376250, 47.970571);
    		function initialize() {
    			var mapProp = {
    				center:myCenter,
    				zoom:12,
    				scrollwheel:false,
    				draggable:false,
    				mapTypeId:google.maps.MapTypeId.ROADMAP
    			};
    			var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    			var marker = new google.maps.Marker({
    				position:myCenter,
    			});
    			marker.setMap(map);
    		}
    		google.maps.event.addDomListener(window, 'load', initialize);
    	});
    </script>
    <script type="text/javascript">
    	$(function(){
			//Init map
			function initMap() {
				if (document.getElementById('map')) {	
					var marker;
					var latlng = new google.maps.LatLng(0, 0);

					var my_options = {
						zoom:16,
						center:latlng,
						scrollwheel:false,
						scaleControl:false,
						disableDefaultUI:false,
						mapTypeId:google.maps.MapTypeId.ROADMAP
					};

					var map = new google.maps.Map(document.getElementById('map'), my_options);

					function renderMarkers() {
						var name = jQuery('#contacts .info > h2').text();
						var address = jQuery('#contacts .info .address').text();	

						var custom_map = new google.maps.Geocoder();

						custom_map.geocode({'address':address}, function(results, status) {
							if (status==google.maps.GeocoderStatus.OK) {
								var location = results[0].geometry.location;

								marker = new google.maps.Marker({
									map:map,
									icon:theme_path+'/layout/images/map-marker.png',
									position:location,
									title:name
								});

								var infowindow = new google.maps.InfoWindow({
									content:name
								});

								google.maps.event.addListener(marker, 'click', function() {
									infowindow.open(map, marker);
								});

								centerMap();		
								initLinks();
							} else {
								alert("Geocode was failed for the following reason: " + status);
							}
						});
					}

					renderMarkers();

					function centerMap() {
						map.setCenter(marker.getPosition());
						marker.setIcon(theme_path+'/layout/images/map-marker.png');
					}

					function initLinks() {
						jQuery('#view_map').bind('click', function(e) {
							var height = jQuery('.block-contacts').height();
							jQuery('.block-contacts').css('height', height + 'px');
							jQuery('#contacts').addClass('map_only');

							e.preventDefault();
						});

						jQuery('#view_contacts').bind('click', function(e) {
							jQuery('#contacts').removeClass('map_only');
							jQuery('.block-contacts').css('height', 'auto');

							e.preventDefault();
						});
					}

					jQuery(window).resize(function() {
						centerMap();
					});
				}	
			}
		});
	</script>


</body>
</html>
