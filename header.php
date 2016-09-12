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
		setcookie($cookie_name, $finalLang, time() + (86400 * 30), "/", "mawaredhouse.com");
		?>
		<script>
		document.cookie = "language=<? echo $finalLang; ?>";
		</script>
		<?php
		echo "<script>document.location='index.php';</script>";
	}
	
	setcookie($cookie_name, $finalLang, time() + (86400 * 30), "/", "mawaredhouse.com");
?>
<!DOCTYPE html>
<html>
<head>
	<!-- <meta charset='utf-8'> -->
	<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
 	<!--<meta http-equiv="Content-Type" content="text/html; charset=windows-1256">-->
 	<meta charset="utf-8">
 	<meta content='width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no' name='viewport'>
	<title>Mawared House | Local Presence Global Support</title>
	<meta content="Mawared House | Local Presence Global Support" name='description'>
	<meta content='Mawared House | Local Presence Global Support' name='keywords'>
	<meta content='#29aecc' name='theme-color'>
	<meta content='Mawared House | Local Presence Global Support' name='twitter:card'>
	<meta content='Mawared House | Local Presence Global Support' name='twitter:title'>
	<meta content="Local Presence Global Support" name='twitter:description'>
	<meta content='Mawared House | Local Presence Global Support' property='og:title'>
	<meta content="Local Presence Global Support" property='og:description'>

	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'  media="none" onload="if(media!='all')media='all'">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" media="none" onload="if(media!='all')media='all'">
	<link rel="stylesheet" type="text/css" href="css/main-ce83667e.css" media="screen"  media="none" onload="if(media!='all')media='all'">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css"  media="none" onload="if(media!='all')media='all'">
	<link rel="stylesheet" type="text/css" href="css/stylesheet.css" media="none" onload="if(media!='all')media='all'">
	<link rel="stylesheet" type="text/css" href="css/content_slider_style.css" media="none" onload="if(media!='all')media='all'">
	<link rel="stylesheet" type="text/css" href="css/nanoscroller.css"  media="none" onload="if(media!='all')media='all'">
	<link rel="stylesheet" type="text/css" href="css/responsive.css"  media="none" onload="if(media!='all')media='all'">

	<script src="js/main-6e0cc465.js"></script>
	<script src="js/process-1d1f249e.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
	<script src="js/modernizr-custom.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="js/jquery.content_slider.min.js"></script>
	<script src="js/jquery.mousewheel.js"></script>
	<script src="js/jquery.nanoscroller.min.js"></script>
	
	
	
	<?php 
		$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
		if (strpos($url,'coo.php') !== false) { 
			echo "<script type='text/javascript' src='js/jquery.magnific-popup.min.js'></script>";
			echo "<script type='text/javascript' src='js/jquery.overscroll.min.js'></script>";
			echo "<script type='text/javascript' src='js/flik-timeline.js'></script>";
			echo "<script type='text/javascript' src='js/jquery.bxslider.min.js'></script>";
			echo "<link rel='stylesheet' id='flik_timeline-flik-css-css' href='css/flik-timeline.min.css' type='text/css' media='all'>";
		}
	?>
<?php include "lang\\".$finalLang."\i18.php"; ?>

</head>
<body data-logo-color='light' data-nav-color='light' data-overlay-id='false' data-overlay-open='false' data-page='process' data-section='unity'>
	<?php include "function.php";?>

	

	<section class='nav-bar container-fluid scroll-up' id='navbar'>
		<div class='nav-bar-inner'>
			<div class='identity'>
				<a href="/"><img src="images/logo/mavaredhouse_reverse_logo.png" id='mawaredhouse-logo'>
				</a>
			</div>
			<a class="menu-text" href="javascript:;"><?php echo $menu_static; ?></a>
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
