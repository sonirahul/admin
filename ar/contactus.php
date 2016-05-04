<?
$SQL="select * from content where content_id=9";
$showData=select_query($link,$SQL,0,0);	
?>
<div class="maindata">
<div class="line"><h3><?php echo $showData[0]['content_title_ar'];?> </h3></div>
<br>
        	<?php if(!empty($showData[0]['content_photo']) ){
				 $picD_path=$showData[0]['content_photo'];
			  ?>
			<img src="../content/<?php echo $picD_path?>" alt="" height="289" width="291" align="left" />
			<?php } ?>
        
 <?php echo $showData[0]['content_desc_ar'];?>
</div>