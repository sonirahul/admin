<!DOCTYPE html>

<head>
	<!-- <meta charset='utf-8'> -->
	<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
 	<meta http-equiv="Content-Type" content="text/html; charset=windows-1256">
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
		$cookie_name="language";
		if(!isset($_COOKIE[$cookie_name])) {
			$finalLang = "en";
		} else {
			$finalLang = $_COOKIE[$cookie_name];
		}

		if($_POST["Action"]=="changeLang")
		{
			$finalLang = $_POST["lang"];
		}
		
		setcookie($cookie_name, $finalLang, time() + (86400 * 30), "/");
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


	<form id="langForm" name="langForm" method="post" >
		<input type="hidden" name="Action">
		<input type="hidden" name="lang">
		<div id="lang" class="dropdown">
			<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
				<img class="langSelectedImage" src="lang/<?php echo $finalLang ?>.png"/>
				<span class="langSelectedText"> <?php echo $finalLang ?></span>
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a id="en" href="#" lang="en" class="langSelect"><img src="lang/en.png"/> English</a></li>
				<li><a id="kw" href="#" lang="ar" class="langSelect"><img src="lang/ar.png"/> Arabic</a></li>
			</ul>
		</div>
	</form>

	<script type="text/javascript">
		$(function(){
			$(".langSelect").on("click",function(){
				console.log(  $(this).attr("lang")    );
				document.forms["langForm"].elements["Action"].value = "changeLang";
				document.forms["langForm"].elements["lang"].value = $(this).attr("lang");
				document.forms["langForm"].submit();
			});
		});
	</script>
