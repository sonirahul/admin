<?
$SQL="select * from content where content_id=8";
$showData=select_query($link,$SQL,0,0);	
?>
<div class="maindata">
<div class="line"><h3><?php echo $showData[0]['content_title_en'];?> </h3></div>
<br>
<?php echo $showData[0]['content_desc_en'];?>   
</div>    