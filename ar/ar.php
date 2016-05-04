<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
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
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-kuwait.html")
                    } else if (code.toUpperCase() == "DZ") {
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-algeria.html")
                    } else if (code.toUpperCase() == "LB") {
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-lebanon.html")
                    } else if (code.toUpperCase() == "MA") {
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-morocco.html")
                    } else if (code.toUpperCase() == "SY") {
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-syria.html")
                    } else if (code.toUpperCase() == "JO") {
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-jordan.html")
                    } else if (code.toUpperCase() == "IR") {
                        window.open("http://mawaredhouse.com/iframes/countriesofoperation-iran.html")
                    }
                }
            });
        });
		
		
    </script>
</head>
<body>

	<div class="wrapper">
        <div class="lang"><a href="../index.php"><img src="../images/lang_ar.png" alt=""></a></div>
		<div class="main">

			<header>
				<div  class="logo">
					<a href="#"><img src="../images/logo.jpg" alt=""></a>
				</div>


				<div class="slogan"><p>حضور محلي  |  دعم عالمي</p></div>
				<div class="social"><a href="index.php">الرئيسية</a>&nbsp;&nbsp;|&nbsp;<a href="index.php?model=sitemap">خريطة الموقع</a>&nbsp;&nbsp;|&nbsp;<a href="index.php?model=contactus">اتصل بنا</a>&nbsp;&nbsp;|&nbsp;<a href="http://www.facebook.com/#!/pages/Mawared-House/107948055939170" target="_blank">تابعنا <img src="../images/fb.png" alt=""></a></div>


				<div class="headerdown">
					<div class="topmenu">
						<ul id="coolMenu">
                        <li><a href="#">وحدة العمليات الإستراتيجية</a>
                                <ul class="noJS">
                                  <li><a href="index.php?model=sbu_visa_app_center">مراكز تقديم الطلبات</a></li>
                                  <li><a href="index.php?model=sbu_travel_club">نادي السفر</a></li>
                                  <li><a href="index.php?model=sbu_alrayes_travel_services">سفريات الريس</a></li>
                                  <li><a href="index.php?model=sbu_sinan">مشروع سنان السكني - صبنجه - تركيا</a></li>
                                </ul>
                            </li>
                        <li class="topmenu_line"></li>
							<li><a href="#">دائرة عملياتنا</a>
                            <ul class="noJS">
                              <li><a href="index.php?model=countriesofoperation&ID=1">الكويت</a></li>
                              <li><a href="index.php?model=countriesofoperation&ID=2">المغرب </a></li>
                              <li><a href="index.php?model=countriesofoperation&ID=3">سوريا</a></li>
                              <li><a href="index.php?model=countriesofoperation&ID=4">الأردن</a></li>
                              <li><a href="index.php?model=countriesofoperation&ID=5">لبنان</a></li>
                              <li><a href="index.php?model=countriesofoperation&ID=6">إيران</a></li>
                              <li><a href="index.php?model=countriesofoperation&ID=7">الجزائر</a></li> 
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
                       	<li><a href="index.php?model=gallery">معرض الصور</a></li>
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

					<div class="news">
						<div class="line"><h3>الاستراتيجية التجارية</h3></div>
						<div class="clear1" style="height:30px"></div>
						<div class="newsn">
							<img src="../images/imgn.jpg" alt="">
							<h4>مركز طلب التأشيرة</h4>
							<p>أبجد هوز هو مجرد دمية النص من الطباعة </p>
						</div>
						<div class="clear"></div>
						<div class="newsn">
							<img src="../images/imgn.jpg" alt="">
                            <h4>مركز طلب التأشيرة</h4>
                            <p>أبجد هوز هو مجرد دمية النص من الطباعة </p>
							<div class="clear"></div>
						</div>
						<div class="clear"></div>
						<div class="newsn">
							<img src="../images/imgn.jpg" alt="">
                            <h4>مركز طلب التأشيرة</h4>
                            <p>أبجد هوز هو مجرد دمية النص من الطباعة </p>
						</div>
						<div class="clear"></div>
						<div class="newsn">
							<img src="../images/imgn.jpg" alt="">
                            <h4>مركز طلب التأشيرة</h4>
                            <p>أبجد هوز هو مجرد دمية النص من الطباعة </p>
						</div>
						
						<div class="clear1"></div>
						
						<div class="line"><h3>من معرض</h3></div>

						<div class="gellery_arab">
							<div id="gallery-nav">
								<ul style="position: relative;">
									<li><a  class="gnav_1"></a></li>
									<li><a  class="gnav_2"></a></li>
								</ul>
							</div>

							<div id="gallery">
								<ul>
									<li id="gallery1">
										<div class="gellery_block">
											<img src="../images/imgn.jpg" alt="">
											<p class="gellery_name">أبجد هوز هو مجرد د/p>
										</div>
										<div class="gellery_block">
											<img src="../images/imgn.jpg" alt="">
											<p class="gellery_name">أبجد هوز هو مجرد د</p>
										</div>
										<div class="gellery_block">
											<img src="../images/imgn.jpg" alt="">
											<p class="gellery_name">أبجد هوز هو مجرد د</p>
										</div>
										<div class="gellery_block" style="margin-right:0;">
											<img src="../images/imgn.jpg" alt="">
											<p class="gellery_name">أبجد هوز هو مجرد د</p>
										</div>
									</li>
									<li id="gallery2">
										<p>News 2</p>
									</li>
								</ul>
							</div>
						</div>

					</div>



				   <div class="fnews">
					   <div class="line">
						   <h3>آخر الأخبار</h3>
					   </div>
					   <div class="clear1" style="height:30px"></div>
					   <div class="fnewst">
						    <div class="slideshow_arab">
							   <div id="slideshow">
								   <ul>
										<li id="news1">
											<img src="../images/bigimg.png" alt="">
											<div class="clear1"></div>
											<h5>أبجد هوز هو مجرد د ...</h5>
											<p>  أبجد هوز هو مجرد دمية النص من التنضيد والطباعة والصناعة. وكان أبجد هوز نص في هذه الصناعة القياسية دمية من أي وقت مضى منذ 1500s، عندما مجهول مقعدا الطابعة الطباعة من نوع وسارعت الى تقديم نوع العينة الكتاب.  </p>

											<p>وقد نجا خمسة قرون فحسب، بل أيضا قفزة في التنضيد الالكتروني، وصحائف مجموعة تحتوي على مقاطع هوز أبجد، ومؤخرا مع برنامج النشر المكتبي مثل صانع الصفحة اولديس بما في ذلك إصدارات هوز أبجد.</p>

											<p>وقد نجا خمسة قرون فحسب، بل أيضا قفزة في التنضيد الالكتروني لل، </p>
											<div class="clear1"></div>
											<a href="#">اقرأ المزيد &raquo;</a>
										</li>
									   <li id="news2">
										   <p>News 2</p>
									   </li>
									   <li id="news3">
										   <p>News 3</p>
									   </li>
									   <li id="news4">
										   <p>News 4</p>
									   </li>
									   <li id="news5">
										   <p>News 5</p>
									   </li>
								   </ul>
							   </div>
							   <div id="slideshow-nav">
								   <ul>
									   <li><a class="snav_1 active">See the news</a></li>
									   <li><a  class="snav_2">See the news</a></li>
									   <li><a  class="snav_3">See the news</a></li>
									   <li><a  class="snav_4">See the news</a></li>
									   <li><a  class="snav_5">See the news</a></li>
								   </ul>
							   </div>
						    </div>
                       </div>
				   </div>



				</div>

			</section>


		</div>
	</div>


	<footer>
		<div class="line" style="text-align:center;margin-bottom:0;"><p class="footer_line">&copy; Copyright 2012 - Mawared House</p></div>
	</footer>
</body>
</html>