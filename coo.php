<!DOCTYPE html>
<html>
<?php include "header.php";?>

<body data-logo-color='light' data-nav-color='light' data-overlay-id='false' data-overlay-open='false' data-page='process' data-section='unity'>


	<section class='nav-bar container-fluid scroll-up' id='navbar'>
		<div class='nav-bar-inner'>
			<div class='identity'>
				<a href="/"><img src="images/lgonew.png" id='digital-telepathy-logo'>
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
	<style type="text/css">
		#lang {
			position: absolute;
			top: 12px;
			z-index: 9999;
			right: 160px;
		}
		#lang .dropdown-menu>li>a{font-size:18px;}
		#lang .btn-primary {
			color: #fff;
			background-color: rgba(0, 0, 0, 0.1);
			border: 0;
			border-radius: 0;
			font-size: 18px;
		}
		span.langSelectedText {
			font-size: 22px;
			font-weight: bold;
			text-shadow: 0 0 3px #000;
		}
		span.langSelected {
			display: inline-block;
			padding-left: 10px;
			padding-bottom: 5px;
		}
		#lang img {
			width: 30px;
			vertical-align: bottom;
		}
	</style>




	<style type="text/css">

		.nav-pills>li>a {
			border-radius: 50%;
			width: 110px;
			height: 110px;
			text-align: center;
			background-color: #0F3D69;
			margin: 0px 10px;
			position: relative;
			padding: 0;
		}
		.nav-pills>li>a p {
			position: absolute;
			font-weight: bold;
			width: 100%;
			bottom: -60px;
			text-align: center;
		}
		.tab-content{
			margin-top: 100px;
		}
		ul li{overflow:initial;}

		.tab-content {
			margin-top: 100px;
			background: #0F3D69;
			padding: 20px;
			color: #fff;
			height:540px;
		}
		.tab-content *{color: #fff}
		i.fa{display: none;}
		li.active i.fa{display: none;}
.nav-pills>li>a img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -40px;
    width: 80px;
}	
.nav-pills{text-align:center;}
.nav-pills>li {
    float: initial;
    display: inline-block;
}
ul.nav.nav-pills li:not(:last-child):after {
    content: "";
    width: 50px;
    height: 5px;
    background: #1a4270;
    display: block;
    position: absolute;
    top: 50%;
    right: -40px;
}
</style>



	<!-- navbar -->
	<script type="text/javascript">
		$(function(){
			$(".nav-bar").css("position","fixed");
			$("section.nav-bar").addClass("hide-nav");
		});
	</script>
<style type="text/css">
    body{padding-bottom:0;padding-top:50px;}
    .nav-bar .identity{top:-115px;position: relative;}
    .nav-pills>li+li {
    margin-left: 19px;
}
</style>


	<div class="section container-fluid" style="background-color: #cfdfff;">
		<h2>Countries of Operation</h2>
		<ul class="nav nav-pills">
			<li class="active"><a data-toggle="pill" href="#menu0">
				<img src="flags/australia.png">
				<p class="menu-country-name">Kuwait</p><i class="fa fa-caret-up" aria-hidden="true"></i>
			</a></li>
			<li><a data-toggle="pill" href="#menu1"><img src="http://emojipedia-us.s3.amazonaws.com/cache/70/60/706095dd1ccfcfeb8612009d97ea0647.png"><p class="menu-country-name">Morocco</p><i class="fa fa-caret-up" aria-hidden="true"></i></a></li>
			<li><a data-toggle="pill" href="#menu2"><img src="http://emojipedia-us.s3.amazonaws.com/cache/f4/5d/f45d47984c498968a3923147becf1589.png"><p class="menu-country-name">Syria</p><i class="fa fa-caret-up" aria-hidden="true"></i></a></li>
			<li><a data-toggle="pill" href="#menu3"><img src="http://emojipedia-us.s3.amazonaws.com/cache/c5/81/c581a6cea6114b30618b8a0decf96e43.png"><p class="menu-country-name">Jordan</p><i class="fa fa-caret-up" aria-hidden="true"></i></a></li>
			<li><a data-toggle="pill" href="#menu3"><img src="http://emojipedia-us.s3.amazonaws.com/cache/b2/7b/b27bea826c336e5b2727c83106568b8d.png"><p class="menu-country-name">Lebanon</p><i class="fa fa-caret-up" aria-hidden="true"></i></a></li>
			<li><a data-toggle="pill" href="#menu3"><img src="http://emojipedia-us.s3.amazonaws.com/cache/db/da/dbda01ffefc6293574883448ef4bcebe.png"><p class="menu-country-name">Iran</p><i class="fa fa-caret-up" aria-hidden="true"></i></a></li>
			<li><a data-toggle="pill" href="#menu3"><img src="http://emojipedia-us.s3.amazonaws.com/cache/0e/f6/0ef6e3d2c37b0a6c938e6b0c240ba719.png"><p class="menu-country-name">Algeria</p><i class="fa fa-caret-up" aria-hidden="true"></i></a></li>
		</ul>



		<div class="tab-content container-fluid">
			<div id="menu0" class="tab-pane fade in active">
				<div class="row">
					<div class="col-sm-6" style="background:url(images/kuwait.jpg);background-size:cover;height:500px;">
						
					</div>
					<div class="col-sm-6">
						<h2>KUWAIT</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
					</div>
				</div>
			</div>
			<div id="menu1" class="tab-pane fade">
				<h3>Menu 1</h3>
				<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
			<div id="menu2" class="tab-pane fade">
				<h3>Menu 2</h3>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
			</div>
			<div id="menu3" class="tab-pane fade">
				<h3>Menu 3</h3>
				<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
			</div>
		</div>
	</div>

<?php include "footer.php";?>

</body>
</html>
