<div class="maindata">
<div class="line"><h3>„Ê«—œ Â«Ê” «·–ﬂ—Ï «·”‰ÊÌ… «·Œ«„”… </h3></div>
<br />
<script type="text/javascript" src="gallary/highslide/highslide-with-gallery.js"></script>
<link rel="stylesheet" type="text/css" href="../gallary/highslide/highslide.css" />
<script type="text/javascript">
	hs.graphicsDir = 'gallary/highslide/graphics/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.outlineType = 'glossy-dark';
	hs.wrapperClassName = 'dark';
	hs.fadeInOut = true;
	//hs.dimmingOpacity = 0.75;

	// Add the controlbar
	if (hs.addSlideshow) hs.addSlideshow({
		//slideshowGroup: 'group1',
		interval: 5000,
		repeat: true,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			opacity: .6,
			position: 'bottom center',
			hideOnMouseOut: true
		}
	});
</script>  
  <div class="highslide-gallery">
<?php 
		$SQL="select * from gallery where gallery_type=2";
		$showgalleryData=select_query($link,$SQL,0,0);	
		for($i=0;$i<count($showgalleryData);$i++){
		?>
			<? if(!empty($showgalleryData[$i]['gallery_thumb']) ){  ?>
        <a href="../gallary/<? echo $showgalleryData[$i]["gallery_photo"]?>" class="highslide" onClick="return hs.expand(this)">
            <img src="../gallary/<? echo $showgalleryData[$i]["gallery_thumb"]?>" border="0" alt="Mawared House | Gallery"
                title="Click to enlarge" />
        </a>
        <div class="highslide-caption">
           <? echo $showgalleryData[$i]["gallery_name_ar"]?>
        </div>
		<?php } }?>

        </div>
  </div>