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
	<link rel="shortcut icon" href="/images/logo/favicon.png" type="image/png" />
	
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/main-ce83667e.css" media="screen">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
	<link rel="stylesheet" type="text/css" href="css/content_slider_style.css">
	<link rel="stylesheet" type="text/css" href="css/nanoscroller.css">
	<link rel="stylesheet" type="text/css" href="css/responsive.css">

<?php include "lang/".$finalLang."/i18.php"; ?>

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

