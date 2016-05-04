<?php
function uploadfile($filetoupload,$filename,$filepass)
{
 
 $file_dir  = $filepass."/"; 
// $maxfilesize="33554432";
           $newfile = $_FILES[$filetoupload]['name'];
		   $filena =$_FILES[$filetoupload]['tmp_name'];
		   $filesize=$_FILES[$filetoupload]["size"];		  
	       $filext=substr($newfile,strpos($newfile,'.'));
		  // if( $filesize > $maxfilesize) return -1;           else{
		  if(strtolower($filext)==".jpg" || strtolower($filext)==".jpeg" || strtolower($filext)==".gif" || strtolower($filext)==".png" || strtolower($filext)==".tif"  || strtolower($filext)==".pdf" || strtolower($filext)==".doc" || strtolower($filext)==".docx")
		  {
	    if (trim($_FILES[$filetoupload]['name'])!="")
		  { 
	       $fileupload=$file_dir.$filename.$filext;
           copy($filena, $fileupload); 
		   return "'".$filename.$filext."'";
	      }
		  }else{
		   return "''";
		  }
		//  }//end of maxfilesize 
}

function uploadresizeimage($filetoupload,$filename,$filepass,$thumbsize)
{
		$newfile = $_FILES[$filetoupload]['name'];
		$uploadedfile = $_FILES[$filetoupload]['tmp_name'];
		$filext=substr($newfile,strpos($newfile,'.'));
		
		$size=getimagesize($uploadedfile);
         if($size[2]==1 ) $src = imagecreatefromgif($uploadedfile);
		 if($size[2]==2 ) $src = imagecreatefromjpeg($uploadedfile);
		 if($size[2]==3 ) $src = imagecreatefrompng($uploadedfile);
			
		list($width,$height)=getimagesize($uploadedfile);

		
		$imgratio=$width/$height;
		if ($imgratio>1){
      		$newwidth = $thumbsize;
      		$newheight = $thumbsize/$imgratio;
	  	}else{
     		 $newheight = $thumbsize;
      		 $newwidth = $thumbsize*$imgratio;
		}

		$tmp=imagecreatetruecolor($newwidth,$newheight);
		imagecopyresampled($tmp,$src,0,0,0,0,$newwidth,$newheight,$width,$height);
		
		$fileupload=$filepass."/".$filename.$filext;
		imagejpeg($tmp,$fileupload,100);
		return "'".$filename.$filext."'";
}

function watermarkImage ($filetoupload,$filename,$filepass,$thumbsize, $WaterMarkText, $DestinationFile) { 
   		
		$newfile = $_FILES[$filetoupload]['name'];
		$uploadedfile = $_FILES[$filetoupload]['tmp_name'];
		$filext=substr($newfile,strpos($newfile,'.'));
   
   list($width, $height) = getimagesize($filetoupload);
     
   		$size=getimagesize($uploadedfile);
         if($size[2]==1 ) $image = imagecreatefromgif($uploadedfile);
		 if($size[2]==2 ) $image = imagecreatefromjpeg($uploadedfile);
		 if($size[2]==3 ) $image = imagecreatefrompng($uploadedfile);

		$imgratio=$width/$height;
		if ($imgratio>1){
      		$newwidth = $thumbsize;
      		$newheight = $thumbsize/$imgratio;
	  	}else{
     		 $newheight = $thumbsize;
      		 $newwidth = $thumbsize*$imgratio;
		}

		$image_p=imagecreatetruecolor($newwidth,$newheight);
  
   imagecopyresampled($image_p, $image, 0, 0, 0, 0, $newwidth, $newheight, $width, $height); 
   $black = imagecolorallocatealpha($image_p, 2, 255, 200, 50);
   $font = 'arial.ttf';
   $font_size = 28; 
   imagettftext($image_p, $font_size, 30, 1, 85, $black, $font, $WaterMarkText);
   if ($DestinationFile<>'') {
      imagejpeg ($image_p, $DestinationFile, 100); 
   } else {
      header('Content-Type: image/jpeg');
      imagejpeg($image_p, null, 100);
   };
   imagedestroy($image); 
   imagedestroy($image_p); 
};		
?>
