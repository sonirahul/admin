<!DOCTYPE html>
<html>
<?php include "header.php";?>
<link href="css/jquery.gridder.min.css" rel="stylesheet">
<link href="css/demo.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Arima+Madurai|Atma:400,700|Courgette|Ewert|Fruktur|Galada|Kavoon|Lemonada|Mogra|Oleo+Script|Pacifico|Sriracha|Yellowtail" rel="stylesheet">
<script src="js/jquery.gridder.min.js"></script>

<!-- navbar -->
<script type="text/javascript">
    $(function(){
        $(".nav-bar .identity").addClass("responsive");
        $(".nav-bar").css("position","fixed").fadeIn();
        $("section.nav-bar").addClass("hide-nav");
        $("#lang").addClass("when-slided");
    });
</script>

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


<style type="text/css">
    body{padding-bottom:0;padding-top:150px;background-image: url('images/background-pattern.jpg');}
</style>

<?php  
$SQLforGallery="select * from gallery where gallery_type = 1";
$allGalleryData=select_query($link,$SQLforGallery,0,0);
?>


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
        <?php
        for($i=0;$i<count($allGalleryData);$i++){?>

            <li class="gridder-list" data-griddercontent="#gridder-content-<?php echo $i+1?>">
                <div class="parent">
                    <div class="one">
                        <img src="gallery/final/<?php echo $allGalleryData[$i]["gallery_photo"]?>" class="img-responsive" />
                    </div>
                    <div class="three">
                        <h4>
                            <?php 
                            if($finalLang == "en") echo $allGalleryData[$i]["gallery_name_en"];
                            if($finalLang == "ar") echo $allGalleryData[$i]["gallery_name_ar"];
                            ?>
                        </h4>
                    </div>
                    <div class="two">
                        <img src="gallery/final/<?php echo $allGalleryData[$i]["gallery_photo"]?>" class="img-responsive" />
                    </div>
                </div>
            </li>

            <?php
        } 
        ?>  
    </ul>

    <?php
    for($i=0;$i<count($allGalleryData);$i++){?>

        <div id="gridder-content-<?php echo $i+1?>" class="gridder-content">
            <img src="gallery/final/<?php echo $allGalleryData[$i]["gallery_photo"]?>" class="img-responsive" />
            <div class="description">
                <h3>
                    <?php 
                    if($finalLang == "en") echo $allGalleryData[$i]["gallery_name_en"];
                    if($finalLang == "ar") echo $allGalleryData[$i]["gallery_name_ar"];
                    ?>
                </h3>
                <br/>
            </div>
        </div>

        <?php
    } 
    ?> 
</div>


<?php include "footer.php";?>
</body>
</html>