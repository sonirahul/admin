<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1256">
    <title></title>
    <link href='../css/style_rtl.css' rel='stylesheet' type='text/css' />
    <link href='../css/bootstrap.css' rel='stylesheet' type='text/css'>
    <script src="../js/jquery.min.js" type="text/javascript"></script>
    <script src="../js/jquery.scrollTo.js"></script>
    <script src="../js/jquery.localscroll.js"></script>
    <script src="../js/scripts.js"></script>
    <script type="text/javascript" src="../js/html5.js"></script>
    <link href="../jqvmap/jqvmap.css" media="screen" rel="stylesheet" type="text/css" />
    <script src="../jqvmap/jquery.vmap.js" type="text/javascript"></script>
    <script src="../jqvmap/maps/jquery.vmap.world.js" type="text/javascript"></script>
    <script src="../jqvmap/data/jquery.vmap.sampledata.js" type="text/javascript"></script>
    <script src="../js/jqueryRotate.js" type="text/javascript"></script>
    <script type="text/javascript" src="../js/contentslider.js"></script>
    <link href="../css/coolMenu_ar.css" rel="stylesheet" type="text/css" media="screen"/>
    <script type="text/javascript">
		function getHTML(url,place) 
			{
			  $('#'+place).html('<p><img src="../images/loading.gif"/><br>Loading...</p>');
			  $('#'+place).load(url);
			}
			//--------------

        $(document).ready(function () {
            $('#vmap').vectorMap({
                map: 'world_en',
                backgroundColor: '#FF0000',
                color: '#FEA203',
                hoverOpacity: 0.7,
                selectedColor: '#666666',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#C8EEFF', '#006491'],
                normalizeFunction: 'polynomial',

                onRegionClick: function (element, code, region) {

                    if (code.toUpperCase() == "KW") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=1")
                    } else if (code.toUpperCase() == "DZ") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=7")
                    } else if (code.toUpperCase() == "LB") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=5")
                    } else if (code.toUpperCase() == "MA") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=2")
                    } else if (code.toUpperCase() == "SY") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=3")
                    } else if (code.toUpperCase() == "JO") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=4")
                    } else if (code.toUpperCase() == "IR") {
                        window.open("http://www.mawaredhouse.com/index.php?model=countriesofoperation&ID=6")
                    }
                }
            });
        });
		
		
    </script>
 <script type="text/javascript">
<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
</script>
</head>
<body>
<?php include "../function.php";?>
	<div class="wrapper">
        <div class="lang"><a href="../index.php"><img src="../images/lang_ar.png" alt=""></a></div>
		<div class="main">

			<header>
				<div  class="logo">
					<a href="index.php"><img src="../images/logo.jpg" width="170" alt=""></a>
				</div>


				<div class="slogan"><p>حضور محلي  |  دعم عالمي</p></div>
				<div class="social"><a href="index.php">الرئيسية</a>&nbsp;|&nbsp;&nbsp;<a href="index.php?model=sitemap">خريطة الموقع</a>&nbsp;|&nbsp;&nbsp;<a href="index.php?model=contactus">اتصل بنا</a>&nbsp;|&nbsp;&nbsp;<a href="http://www.facebook.com/#!/pages/Mawared-House/107948055939170" target="_blank">تابعنا <img src="../images/fb.png" alt=""></a></div>


				<div class="headerdown">
					<div class="topmenu">
						<ul id="coolMenu">
                        <li><a href="#">وحدة العمليات الإستراتيجية</a>
                                <ul class="noJS">
                                  <li><a href="index.php?model=Strategic_Business_Units&contentid=4">مراكز تقديم الطلبات</a></li>
                                  <!--<li><a href="index.php?model=Strategic_Business_Units&contentid=5">نادي السفر</a></li>
    //-->                              <li><a href="index.php?model=Strategic_Business_Units&contentid=6">سفريات الريس</a></li>
                                  <li><a href="index.php?model=Strategic_Business_Units&contentid=7">مشروع سنان السكني - صبنجه - تركيا</a></li>
                                </ul>
                            </li>
                        <li class="topmenu_line"></li>
							<li><a href="#">دائرة عملياتنا</a>
                            <ul class="noJS">
                              <?php
                            $SQL="select * from countries ";
							$showcountriesData=select_query($link,$SQL,0,0);
							?>
                            <?php for($i=0;$i<count($showcountriesData);$i++){?>
                              <li><a href="index.php?model=countriesofoperation&ID=<?php echo $showcountriesData[$i]["countries_id"]?>"><?php echo $showcountriesData[$i]["countries_title_ar"]?></a></li>
							<?php } ?>
                            </ul>
                            </li> 
                        <li class="topmenu_line"></li>
                        <li><a href="#">عن موارد</a>
                            <ul class="noJS">
                              <li><a href="index.php?model=aboutus-philosophy">فلسفة الشركة</a></li>
                              <li><a href="index.php?model=aboutus_management">الفريق الإداري</a></li>
                            </ul>
                            </li>   
                        <li class="topmenu_line"></li>
                       	<li><a href="index.php?model=gallery">معرض الصور</a>
						<ul class="noJS">
                              <li><a href="index.php?model=gallery">مواردنا البشرية</a></li>
                              <li><a href="index.php?model=gallery2">خمس سنوات من النجاح</a></li>
                        </ul>
						</li>
						<li class="topmenu_line"></li>    
                        <li><a href="index.php?model=feedback">تواصل معنا</a></li>
                        								
						</ul>
					</div>
				</div>
			</header>
			<div class="clear"></div>

			<div class="map">
				<div class="karta"><div id="vmap" style="width: 950px; height: 600px;backgorund:#ffffff;"></div></div>
			</div>

			<section>

				<div class="content">

				<div class="content" id="submain">
                <?php 
				$model=$_GET["model"];
				if(stristr($model, ".") === FALSE) $model=$model; else $model="main";
				if($model=="")	$model="main";
				include $model.".php"; ?>  
                </div>
				</div>

			</section>
		<br />
        <marquee behavior="scroll" direction="left">
         <?
	$handle=opendir('../flags');
     $i=0;
    while (false!==($file = readdir($handle)))
	{ 
    if ($file != "." && $file != ".." && $file != "index.html")
	 { ?>
     
     <? echo "<img src='../flags/$file' border='0'>";?>
     <? } } closedir($handle); ?> 
        </marquee>

		</div>
	</div>


	<footer>
		<div class="line" style="text-align:center;margin-bottom:0;">
        <p class="footer_logo"></p>
        <p class="footer_line">&copy; جميع الحقوق محفوظة 2012 - موارد هاوس</p></div>
	</footer>
</body>
</html>