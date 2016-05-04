<?php
if (is_numeric($_GET["ID"])) {

$SQL="select * from countries where countries_id=".$_GET["ID"];
$showData=select_query($link,$SQL,0,0);	

}else{
echo "<script>document.location='index.php';</script>";
}
?>
<div class="maindata">
<div class="line"><h3>Countries of Operation | <?php echo $showData[0]['countries_title_en'];?>   </h3></div>
<br>
        	<?php if(!empty($showData[0]['countries_photo']) ){
				 $picD_path=$showData[0]['countries_photo'];
			  ?>
			<img src="countries/<?php echo $picD_path?>" alt="" height="289" width="291" align="left" />
			<?php } ?>
        
			<?php if(!empty($showData[0]['countries_flag']) ){
				 $flag_path=$showData[0]['countries_flag'];
			  ?>
             <img src="countries/<?php echo $flag_path?>" alt=""/><br /><br /><br />
             <?php } ?>
		     <hr width="550px"/><br/>
        
            <?php echo $showData[0]['countries_desc_en'];?>                       
            
</div>