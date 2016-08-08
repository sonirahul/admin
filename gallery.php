<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
	<meta content='width=device-width, initial-scale=1' name='viewport'>
	<title>UX Design Services: Research, Strategy, Product and Mobile Design</title>
	<meta content="We improve your customer's experience with our proven Objective-Based Design process and simple &amp; unique UX design subscription model." name='description'>
	<meta content='UX, Product Design, Customer Experience, Mobile App Design, Website UX Design, Marketing Strategy, Mobile UX' name='keywords'>
	<meta content='#29aecc' name='theme-color'>
	<meta content='summary_large_image' name='twitter:card'>
	<meta content='UX Design Services: Research, Strategy, Product and Mobile Design' name='twitter:title'>
	<meta content="We improve your customer's experience with our proven Objective-Based Design process and simple &amp; unique UX design subscription model." name='twitter:description'>
	<meta content='UX Design Services: Research, Strategy, Product and Mobile Design' property='og:title'>
	<meta content="We improve your customer's experience with our proven Objective-Based Design process and simple &amp; unique UX design subscription model." property='og:description'>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link href="css/main-ce83667e.css" media="screen" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<link href="css/jquery.gridder.min.css" rel="stylesheet">
	<link href="css/demo.css" rel="stylesheet">
	<link href="css/stylesheet.css" rel="stylesheet" type="text/css">

    <link href="https://fonts.googleapis.com/css?family=Arima+Madurai|Atma:400,700|Courgette|Ewert|Fruktur|Galada|Kavoon|Lemonada|Mogra|Oleo+Script|Pacifico|Sriracha|Yellowtail" rel="stylesheet">

<!-- 	<link href="css/content_slider_style.css" rel="stylesheet" type="text/css">
-->
<script src="js/main-6e0cc465.js" type="text/javascript"></script>
<!-- 	<script src="js/process-1d1f249e.js" type="text/javascript"></script> -->

<!-- jQuery library -->
<script   src="js/jquery-1.12.4.min.js"></script>

<script   src="js/jquery-ui.min.js"></script>
<script   src="js/modernizr-custom.js"></script>

<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.gridder.min.js"></script>

<!-- 	<script src="js/jquery.content_slider.js" type="text/javascript"></script>
	<script src="js/jquery.mousewheel.js" type="text/javascript"></script> -->


    <script>
            /*jQuery(document).ready(function ($) {
                // Call Gridder
                $(".gridder").gridderExpander({
                    scrollOffset: 60,
                    scrollTo: "panel", // "panel" or "listitem"
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    onStart: function () {
                        console.log("Gridder Inititialized");
                    },
                    onExpanded: function (object) {
                        console.log("Gridder Expanded");
                        $(".carousel").carousel();
                    },
                    onChanged: function (object) {
                        console.log("Gridder Changed");
                    },
                    onClosed: function () {
                        console.log("Gridder Closed");
                    }
                });
                $(".gridder-close").html("<span class='glyphicon glyphicon-remove'></span>");
                $(".gridder-nav.prev").html("<span class='glyphicon glyphicon-remove'></span>");
                $(".gridder-nav.next").html("<span class='glyphicon glyphicon-remove'></span>");
            });*/
            jQuery(document).ready(function ($) {
                // Call Gridder
                $(".gridder").gridderExpander({
                    scroll: true,
                    scrollOffset: 60,
                    scrollTo: "panel", // panel or listitem
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    showNav: true,
                    nextText: "<i class=\"fa fa-arrow-right\"></i>",
                    prevText: "<i class=\"fa fa-arrow-left\"></i>",
                    closeText: "<i class=\"fa fa-times\"></i>",
                    onStart: function () {
                        console.log("Gridder Inititialized");
                    },
                    onContent: function () {
                        console.log("Gridder Content Loaded");
                        $(".carousel").carousel();
                    },
                    onClosed: function () {
                        console.log("Gridder Closed");
                    }
                });
            });
        </script>




        <!-- navbar -->
        <script type="text/javascript">
          $(function(){
             $(".nav-bar").css("position","fixed");
             $("section.nav-bar").addClass("hide-nav");
         });
     </script>

         <script>$(document).ready(function(){
window.onload = function(){
    //canvas init
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    //canvas.width = W;
    //canvas.style.width = "100vw";
    canvas.height = H;
    
    //snowflake particles
    var mp = 25; //max particles
    var particles = [];
    for(var i = 0; i < mp; i++)
    {
        particles.push({
            x: Math.random()*W, //x-coordinate
            y: Math.random()*H, //y-coordinate
            r: Math.random()*4+1, //radius
            d: Math.random()*mp //density
        })
    }
    
    //Lets draw the flakes
    function draw()
    {
        ctx.clearRect(0, 0, W, H);
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
        }
        ctx.fill();
        update();
    }
    
    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;
    function update()
    {
        angle += 0.01;
        for(var i = 0; i < mp; i++)
        {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle+p.d) + 1 + p.r/2;
            p.x += Math.sin(angle) * 2;
            
            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if(p.x > W+5 || p.x < -5 || p.y > H)
            {
                if(i%3 > 0) //66.67% of the flakes
                {
                    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
                }
                else
                {
                    //If the flake is exitting from the right
                    if(Math.sin(angle) > 0)
                    {
                        //Enter from the left
                        particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                    else
                    {
                        //Enter from the right
                        particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
                    }
                }
            }
        }
    }
    
    //animation loop
    setInterval(draw, 33);
}
});</script>
    
     </script>




     <link rel="stylesheet" href="33535gillsansmt/font.css">

 </head>
 <body data-logo-color='light' data-nav-color='light' data-overlay-id='false' data-overlay-open='false' data-page='process' data-section='unity'>
    <style type="text/css">
        body{padding-bottom:0;padding-top:150px;background-image: url('images/background-pattern.jpg');}
        .nav-bar .identity{top:-115px;position: relative;}
    </style>

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

<style type="text/css">
    #galleryID{
        font-size:90px;
        text-transform: none;
        color: #1e456f;
        font-family: 'Lemonada', cursive;
        font-family: 'Mogra', cursive;
        font-family: 'Sriracha', cursive;
        font-family: 'Arima Madurai', cursive;
        font-family: 'Atma', cursive;
        font-family: 'Fruktur', cursive;
        font-family: 'Kavoon', cursive;
        font-family: 'Ewert', cursive;
        font-family: 'Pacifico', cursive;
        font-family: 'Yellowtail', cursive;
        font-family: 'Galada', cursive;
        font-family: 'Courgette', cursive;
        font-family: 'Oleo Script', cursive;
        font-family: 'myFirstFont', cursive;
    }
    body {
    /*You can use any kind of background here.*/
    //background: #6b92b9;
    background-image: -webkit-linear-gradient(bottom,#ffffff 45%,rgba(222, 222, 222, 0.85) 100%);
}
canvas {
    display: block;
    position: absolute;
}
</style>

<!-- 
DATA BY RAVI
1. More fonts you can search on : https://fonts.google.com and add the fonts link at line 23 and the css at line 141
2. Sites for background
    a. http://www.designlayout.ca/files/theme/bg1.jpg
    b. http://novisf.com/wcf/images/header01.png
3. For more bg . look at this site or you may search with different keywords
    https://www.google.co.in/search?q=bg+designs&rlz=1C1CHZL_enIN696IN696&espv=2&biw=1366&bih=643&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjfg_S2-7vNAhWJs48KHTKDBLYQ_AUIBigB#tbm=isch&tbs=rimg%3ACU4I1Js1y030IjiLXaY7nmJTyCab4Ti-ClMqxHk8jTvIPNtxINeSdvDzRnaNjW2oY7EOAe9bcgZvCYcFy9uFg4LFJyoSCYtdpjueYlPIEbqfE4n47vnyKhIJJpvhOL4KUyoRbq3ZqGD5dPIqEgnEeTyNO8g82xFEuUd3ptFN3yoSCXEg15J28PNGETrZiocYI785KhIJdo2NbahjsQ4RgMyIXURV6VYqEgkB71tyBm8JhxHplGzOe2pvXyoSCQXL24WDgsUnEbk6mShVOTzX&q=background%20designs%20for%20websites&imgrc=_
-->


<style type="text/css">
    .nav-bar.hide-nav{box-shadow:none;}
    #pageName{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 150px;
    padding-bottom: 200px;
    background-color: #0e3065;
    color: #fff;
    z-index: -2;
}
</style>
<div id="pageName">
    <h1 class="icon-camera">&nbsp;&nbsp;Photo Gallery</h1>
</div>


<div class="container-fluid" style="margin-top:50px;">
    <canvas id="canvas"></canvas>
    <!-- <div class="row"> 
        <div class="col-sm-4">
            <img src="images/imageedit_8_3577260971.png" class="img-responsive photo-gallery">
        </div>
        <div class="col-sm-4">
            <h1 id="galleryID">Photo Gallery</h1>
        </div>
        <div class="col-sm-4">
            <img src="images/imageedit_10_3584837146.png" class="img-responsive photo-gallery">
        </div>
    </div> -->
    
    <br/><br/>

    <ul class="gridder">
        <li class="gridder-list" data-griddercontent="#gridder-content-1">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355584747.jpg" class="img-responsive" />
                </div>
                <div class="three"><h4>Visa Application Center-Lebanon</h4></div>
                <div class="two">
                    <img src="gallery/1355584747.jpg" class="img-responsive" />
                </div>


            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-2">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355585134.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355585134.jpg" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-3">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355585325.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355585325.jpg" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-4">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355585333.JPG" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355585333.JPG" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-5">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355585341.JPG" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355585341.JPG" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-6">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355585348.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355585348.jpg" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-7">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355585359.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355585359.jpg" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-8">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355586633.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355586633.jpg" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-9">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355586657.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355586657.jpg" class="img-responsive" />
                </div>
            </div>
        </li>
        <li class="gridder-list" data-griddercontent="#gridder-content-10">
            <div class="parent">
                <div class="one">
                    <img src="gallery/1355586674.jpg" class="img-responsive" />
                </div>
                <div class="two">
                    <img src="gallery/1355586674.jpg" class="img-responsive" />
                </div>
            </div>
        </li>


    </ul>


    <div id="gridder-content-1" class="gridder-content">
        <img src="gallery/1355584747.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-2" class="gridder-content">
        <img src="gallery/1355585134.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-3" class="gridder-content">
        <img src="gallery/1355585325.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-4" class="gridder-content">
        <img src="gallery/1355585333.JPG" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-5" class="gridder-content">
        <img src="gallery/1355585341.JPG" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-6" class="gridder-content">
        <img src="gallery/1355585348.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-7" class="gridder-content">
        <img src="gallery/1355585359.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-8" class="gridder-content">
        <img src="gallery/1355586633.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-9" class="gridder-content">
        <img src="gallery/1355586657.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>
    <div id="gridder-content-10" class="gridder-content">
        <img src="gallery/1355586674.jpg" class="img-responsive" />
        <div class="description">
            <h3>Visa Center at Morroco</h3>
            <br/>
        </div>
    </div>

</div>


<div class='footer'>
  <div class='footer-inner'>
     <section class='container'>
        <div class='row'>
           <div class='col-md-9 hidden-xs'>
              <ul class='level-1-nav list-unstyled'>
                 <li class='home'>
                    <a class="home" href="/">Home</a>
                    <span class='icon-right-open-big'></span>
                </li>
                <li class='services'>
                    <a class="services active" href="/process/">Services</a>
                    <span class='icon-right-open-big'></span>
                </li>
                <li class='our-work'>
                    <a class="our-work" href="/work/">Our Work</a>
                    <span class='icon-right-open-big'></span>
                </li>
                <li class='philosophy'>
                    <a class="philosophy" href="/philosophy">Philosophy</a>
                    <span class='icon-right-open-big'></span>
                </li>
                <li class='careers'>
                    <a class="careers" href="/careers/">Careers</a>
                    <span class='icon-right-open-big'></span>
                </li>
                <li class='blog'>
                    <a target="_blank" class="blog" href="http://www.com/blog">Blog</a>
                    <span class='icon-right-open-big'></span>
                </li>
                <li class='contact'>
                    <a class="contact" href="/contact/">Contact</a>
                    <span class='icon-right-open-big'></span>
                </li>
            </ul>
        </div>
        <div class='col-md-3 col-xs-12 hidden-sm'>
          <ul class='social'>
             <li>
                <a target="_blank" class="icon-twitter" href="https://twitter.com/"></a>
            </li>
            <li>
                <a target="_blank" class="icon-facebook-squared" href="https://www.facebook.com/"></a>
            </li>
            <li>
                <a target="_blank" class="icon-instagramm" href="http://instagram.com/"></a>
            </li>
            <li>
                <a target="_blank" class="icon-dribbble" href="https://dribbble.com/"></a>
            </li>
            <li>
                <a target="_blank" class="icon-linkedin-squared" href="https://www.linkedin.com/company/mawared-house"></a>
            </li>
            <li>
                <a target="_blank" class="icon-youtube-play" href="https://www.youtube.com/user/"></a>
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
        <a class="home" href="#">Home</a>
        <span class='icon-right-open-big'></span>
    </li>
    <li class='services'>
        <a class="services active" href="#">Services</a>
        <span class='icon-right-open-big'></span>
    </li>
    <li class='our-work'>
        <a class="our-work" href="#">Our Work</a>
        <span class='icon-right-open-big'></span>
    </li>
    <li class='philosophy'>
        <a class="philosophy" href="#">Philosophy</a>
        <span class='icon-right-open-big'></span>
    </li>
    <li class='careers'>
        <a class="careers" href="#">Careers</a>
        <span class='icon-right-open-big'></span>
    </li>
    <li class='blog'>
        <a target="_blank" class="blog" href="#">Blog</a>
        <span class='icon-right-open-big'></span>
    </li>
    <li class='contact'>
        <a class="contact" href="#">Contact</a>
        <span class='icon-right-open-big'></span>
    </li>
</ul>
<div class='nav-footer'>
 <ul class='social'>
    <li>
       <a target="_blank" class="icon-twitter" href="https://twitter.com"></a>
   </li>
   <li>
       <a target="_blank" class="icon-facebook-squared" href="https://www.facebook.com"></a>
   </li>
   <li>
       <a target="_blank" class="icon-instagramm" href="http://instagram.com/"></a>
   </li>
   <li>
       <a target="_blank" class="icon-dribbble" href="https://dribbble.com"></a>
   </li>
   <li>
       <a target="_blank" class="icon-linkedin-squared" href="https://www.linkedin.com/company/mawared-house"></a>
   </li>
   <li>
       <a target="_blank" class="icon-youtube-play" href="https://www.youtube.com/user/"></a>
   </li>
</ul>
<div class='border'></div>
<div class='logo-wrapper'>
    <img src="images/logo reverse.png" id='digital-telepathy-logo'>

</div>
<p>&copy; 2016 Mawaredhouse.com</p><!-- var d = new Date().getFullYear(); -->
</div>
</div>


<script>
  $(document).ready(function()
  {
     var e = function()
     {
        var e = $(".hamburger"),
        n = $("body").find(".nav-bar");
        $(".nav-overlay").toggleClass("show"), $("body").toggleClass("nav-open"), $(".menu-text").delay(400).queue(function() {
           $(this).fadeToggle(400), $(this).dequeue()
       }), e.hasClass("active") ? (e.addClass("active-end"), e.one("transitionend", function() {
           e.removeClass("active active-end")
       })) : e.addClass("active"), $(".nav-overlay").hasClass("show") ? n.toggleClass("no-bg") : n.delay(400).queue(function() {
           $(this).toggleClass("no-bg", 500), $(this).dequeue()
       })
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


</body>
</html>