					<div class="news">
                    <?php $SQL="select * from content where content_id=1";
						   $showwelcomData=select_query($link,$SQL,0,0);
                    ?>
						<div class="line"><h3><?php echo $showwelcomData[0]['content_title_ar'];?> </h3></div>
						<div class="clear1" style="height:30px"></div>
						<div class="newsn" align="justify">
                        <?php if(!empty($showwelcomData[0]['content_photo']) ){
							 $pic_path=$showwelcomData[0]['content_photo'];
						  ?>
                        <img src="../content/<?php echo $pic_path?>" alt="" />
                        <?php } ?>
                       <?php echo $showwelcomData[0]['content_desc_ar'];?>
						</div>
					
                    </div>

                    <div class="fnews">
                        <div class="line">
                            <h3>¬Œ— «·√Œ»«—</h3>
                        </div>
                        <div class="clear1" style="height:30px"></div>
                        <div class="fnewst">
							<div class="slideshow_ing">
								<div id="slider2" class="sliderwrapper">
<?php $SQL="select * from news ";
$shownewsData=select_query($link,$SQL,0,0);
for($i=0;$i<count($shownewsData);$i++){
?>
<div class="contentdiv">
<?php  if(!empty($shownewsData[$i]['news_photo']) ){ $news_path=$shownewsData[$i]['news_photo'];?>                    
<p class="newscontent"><img src="../news/<?php echo $news_path?>" height="289" alt=""></p>
<?php } ?>
<br>
<h5><?php echo $shownewsData[$i]['news_title_ar'];?> </h5>
											<p>
                                            <?php echo $shownewsData[$i]['news_desc_ar'];?></p>
</div>
<?php }?> 
 
</div>
<a href="index.php?model=gallery2"  style="margin-left: 10px">
<img src="../images/5th-Anniversary.png" width="100" /></a>
<div id="paginate-slider2" class="pagination">

<a href="#" class="toc">1</a> <a href="#" class="toc anotherclass">2</a> <a href="#" class="toc anotherclass">3</a> <a href="#" class="toc anotherclass">4</a> <a href="#" class="toc">5</a> <a href="#" class="prev" style="margin-left: 10px"><img src="../images/l_ar.png" border="0" width="15" /></a> <a href="#" class="next"><img src="../images/r_ar.png" border="0" width="15" /></a>

</div>

<script type="text/javascript">

featuredcontentslider.init({
	id: "slider2",  //id of main slider DIV
	contentsource: ["inline", ""],  //Valid values: ["inline", ""] or ["ajax", "path_to_file"]
	toc: "markup",  //Valid values: "#increment", "markup", ["label1", "label2", etc]
	nextprev: ["Previous", "Next"],  //labels for "prev" and "next" links. Set to "" to hide.
	revealtype: "click", //Behavior of pagination links to reveal the slides: "click" or "mouseover"
	enablefade: [true, 1],  //[true/false, fadedegree]
	autorotate: [true, 3000],  //[true/false, pausetime]
	onChange: function(previndex, curindex){  //event handler fired whenever script changes slide
		//previndex holds index of last slide viewed b4 current (1=1st slide, 2nd=2nd etc)
		//curindex holds index of currently shown slide (1=1st slide, 2nd=2nd etc)
	}
})

</script>

							</div>
                        </div>
                    </div>

