<?php
$SQL="select * from content where content_id=2";
$showData=select_query($link,$SQL,0,0);	
//-----------
$SQL="select about_id,about_title_ar,about_jobtitle_ar from about ";
$showteam=select_query($link,$SQL,0,0);
?>
<div class="maindata">
<div class="line"><h3>Úä ãæÇÑÏ| <?php echo $showData[0]['content_title_ar'];?> </h3></div>
<br>
        	<?php if(!empty($showData[0]['content_photo']) ){
				 $picD_path=$showData[0]['content_photo'];
			  ?>
			<img src="content/<?php echo $picD_path?>" alt="" height="289" width="291" align="left" />
			<?php } ?>
            
        	<div class="div-left">
            <?php for($i=0;$i<count($showteam);$i++){?>
            <p>- <a class="a-ajax" onClick="getHTML('Management-team.php?ID=<?php echo $showteam[$i]['about_id'];?>','aboutus');"><?php echo $showteam[$i]['about_title_ar'];?></a><br><i>&nbsp;&nbsp;<?php echo $showteam[$i]['about_jobtitle_ar'];?></i></p>
			<?php } ?>
            </div>
            <div class="div-right" id="aboutus">
			 <?php echo $showData[0]['content_desc_ar'];?>
           </div>
           
 </div>