<?php
$SQL="select * from content where content_id=2";
$showData=select_query($link,$SQL,0,0);	
//-----------
$SQL="select about_id,about_title_en,about_jobtitle_en from about ";
$showteam=select_query($link,$SQL,0,0);
?>
<div class="maindata">
<div class="line"><h3>About Us| <?php echo $showData[0]['content_title_en'];?> </h3></div>
<br>
        	<?php if(!empty($showData[0]['content_photo']) ){
				 $picD_path=$showData[0]['content_photo'];
			  ?>
			<img src="content/<?php echo $picD_path?>" alt="" height="289" width="291" align="left" />
			<?php } ?>
            
        	<div class="div-left">
            <?php for($i=0;$i<count($showteam);$i++){?>
            <p>- <a class="a-ajax" onClick="getHTML('Management-team.php?ID=<?php echo $showteam[$i]['about_id'];?>','aboutus');"><?php echo $showteam[$i]['about_title_en'];?></a><br><i>&nbsp;&nbsp;<?php echo $showteam[$i]['about_jobtitle_en'];?></i></p>
			<?php } ?>
            </div>
            <div class="div-right" id="aboutus">
          <?php echo $showData[0]['content_desc_en'];?>
           </div>
           
 </div>