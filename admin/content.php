<?

$contentid=$_POST["contentid"];
$txtatitle=$_POST["txtatitle"];
$txtedesc=$_POST["txtedesc"];
$txtetitle=$_POST["txtetitle"];
$txtadesc=$_POST["txtadesc"];  
$deletefile=$_POST["deletefile"];
//--------------------------------Applay Updates
if($_POST["action"]=="beUpdate")
{
	$TableName="content";
	$TableField=array();
	$TableField[0][0]="content_title_ar";
	$TableField[0][1]="'$txtatitle'";	
 	$TableField[1][0]="content_desc_en";
	$TableField[1][1]="'$txtedesc'";
	$TableField[2][0]="content_title_en";
	$TableField[2][1]="'$txtetitle'";	
 	$TableField[3][0]="content_desc_ar";
	$TableField[3][1]="'$txtadesc'";
	$uf=4;
		
	if($deletefile==1)
	{ 
  	    $SQL="select content_photo from about where about_id=$contentid";
		$showdelet=select_query($link,$SQL,0,0);
	    unlink("../content/".$showdelet[0]['content_photo']);
		$TableField[$uf][0]="content_photo";
		$TableField[$uf][1]="''";
		$uf++;
	}elseif($_FILES["content_photo"]["name"]!="")
		{ 
		  $TableField[$uf][0]="content_photo";
	      $TableField[$uf][1]=uploadfile("content_photo","about_".$contentid,"../content");
		  $uf++;
		}
	
    $SQLwhere="content_id=$contentid";	
	update_query($link,$TableName,$TableField,$SQLwhere);
}
//---------------------------
if($_GET["action"]=="contentupdate")
{
$SQL="select * from content where content_id=$_GET[contentid]";
$UpdatedData=select_query($link,$SQL,0,0);	
}
?>
<br />
<? if($_GET["action"]=="contentupdate" || $_GET["action"]=="contentadd"){?>





        <!-- page content -->
        <div class="right_col" role="main">

          <div class="">
            <div class="clearfix"></div>

            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <!-- <div class="x_title">
                    <h2>Form validation <small>sub title</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                      <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                      </li>
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a class="close-link"><i class="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div> -->
                  <div class="x_content">

                    <form name="Add" method="post" enctype="multipart/form-data" class="form-horizontal form-label-left" action="beUpdate" novalidate>
						<input type="hidden"  name="action">
						<input type="hidden" name="contentid" value="<?=$_GET["contentid"]?>" />
                      </p>
                      <span class="section">
                      
                      	<?php
						   switch($_GET["contentid"])
						   {
						   case 1: echo "Welcome Page"; break;
						   case 2: echo "About US Welcome"; break;
						   case 3: echo "Philosophy"; break;
						   case 4: echo "Visa Application Centres"; break;
						   case 5: echo "Travel Club"; break;
						   case 6: echo "Al Rayes Travel Services"; break;
						   case 7: echo "Sanan Residential Project"; break;
						   case 8: echo "Site Map"; break;
						   case 9: echo "Contact Us"; break;
						   }
						 ?>
                      </span>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtatitle">Arabic Title <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="txtatitle" class="form-control col-md-7 col-xs-12" name="txtatitle" required="required" type="text" value="<?php  echo $UpdatedData[0]['content_title_ar'];?>">
						  
                        </div>
                      </div>
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtetitle">English Title <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="txtetitle" name="txtetitle" required="required" class="form-control col-md-7 col-xs-12" value="<?php  echo $UpdatedData[0]['content_title_en'];?>">
                        </div>
                      </div>
					  
					  
					  
					  
					  <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtadesc">Arabic Description <span class="required">*</span>
                        </label>
						<div class="col-md-6 col-sm-6 col-xs-12">
                          <textarea id="txtadesc" class="form-control col-md-7 col-xs-12 ckeditor"  name="txtadesc" cols="60" rows="15"><?php  echo $UpdatedData[0]['content_desc_ar'];?></textarea>
                        </div>
                      </div>
					  
					  
					  <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="txtedesc">English Description <span class="required">*</span>
                        </label>
						<div class="col-md-6 col-sm-6 col-xs-12">
                          <textarea id="txtedesc" class="form-control col-md-7 col-xs-12 ckeditor"  name="txtedesc" cols="60" rows="15"><?php  echo $UpdatedData[0]['content_desc_en'];?></textarea>
                        </div>
                      </div>
					  
										
						
						
						
						
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="content_photo">Photo Attach 
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="content_photo" type="file" name="content_photo" data-validate-length-range="5,20" class="optional form-control col-md-7 col-xs-12">
						  <?php if(!empty($UpdatedData[0]['content_photo']) && $_GET["action"]=="contentupdate"){
							 $pic_path=$UpdatedData[0]['content_photo'];
						  ?>
						  <img border="0" src="../content/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
						  <input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
						  <?php } ?>
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
                          <button type="submit" class="btn btn-primary">Cancel</button>
                          <button id="send" type="submit" class="btn btn-success">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->




<!-- 
 <form name="Add" method="post" enctype="multipart/form-data">
<input type="hidden"  name="action">
<input type="hidden" name="contentid" value="<?=$_GET["contentid"]?>" />
  <table width="100%" cellpadding="3" cellspacing="1" border="0" bgcolor="#526BB5" align="center">
           <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2" align="center">
			  <strong>
               <?php
			   switch($_GET["contentid"])
			   {
			   case 1: echo "Welcome Page"; break;
			   case 2: echo "About US Welcome"; break;
			   case 3: echo "Philosophy"; break;
			   case 4: echo "Visa Application Centres"; break;
			   case 5: echo "Travel Club"; break;
			   case 6: echo "Al Rayes Travel Services"; break;
			   case 7: echo "Sanan Residential Project"; break;
			   case 8: echo "Site Map"; break;
			   case 9: echo "Contact Us"; break;
			   }
			   ?>
               </strong>
			  </td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"><font color="#FF0000">*&nbsp;</font><strong>indicates Mandatory Fields.</strong></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Title</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtatitle" class="textfield" value="<?php  echo $UpdatedData[0]['content_title_ar'];?>" style="width:350"></td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Title</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><input type="text" name="txtetitle" class="textfield" value="<?php  echo $UpdatedData[0]['content_title_en'];?>" style="width:350"></td>
            </tr>
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>Arabic Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor"  name="txtadesc" cols="60" rows="15"><?php  echo $UpdatedData[0]['content_desc_ar'];?></textarea></td>
            </tr>
			
			<tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%"><strong>English Description</strong> <font color="#FF0000">*</font></td>
              <td width="70%"><textarea class="ckeditor" name="txtedesc" cols="60" rows="15"><?php  echo $UpdatedData[0]['content_desc_en'];?></textarea></td>
            </tr>
            <tr height="25" bgcolor="#FFFFFF"> 
              <td width="30%" valign="top"><strong>Photo Attach</strong></td>
              <td width="70%"><input type="file" name="content_photo">&nbsp;
			  <?php if(!empty($UpdatedData[0]['content_photo']) && $_GET["action"]=="contentupdate"){
			     $pic_path=$UpdatedData[0]['content_photo'];
			  ?>
			  <img border="0" src="../content/<?php echo $pic_path?>" width="80" height="80" align="absmiddle">
			  <input type="checkbox" style="border:0px;" name="deletefile"  value="1">Delete
              <?php } ?></td>
			</tr>
				
			<tr height="25" bgcolor="#FFFFFF"> 
              <td colspan="2"> <p align="center"> 
                  <input value="Save" type="button" title="Save" name="Submit" class="button" onclick="checkdata();">
                  <input value="Reset" type="reset" title="Reset" class="button">
			  </td>
            </tr>
  </table>
</form> -->

    <script src="../js/validator.min.js"></script>


<!-- validator -->
    <script>
      // initialize the validator function
      validator.message.date = 'not a real date';

      // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
      $('form')
        .on('blur', 'input[required], input.optional, select.required', validator.checkField)
        .on('change', 'select.required', validator.checkField)
        .on('keypress', 'input[required][pattern]', validator.keypress);

      $('.multi.required').on('keyup blur', 'input', function() {
        validator.checkField.apply($(this).siblings().last()[0]);
      });

      $('form').submit(function(e) {
        e.preventDefault();
        var submit = true;

        // evaluate the form using generic validaing
        if (!validator.checkAll($(this))) {
          submit = false;
        }

        if (submit) {
			
			
			this.submit();
			return true;
		}
          //this.submit();

        return false;
      });
    </script>
    <!-- /validator -->
<script>
function checkdata()
{
			
			if(document.Add.txtatitle.value=="")
			{
				alert("The Arabic Title should not be empty");
				document.Add.txtatitle.focus()
				return false;
			}
			//---------------------------------------
			if(document.Add.txtetitle.value=="")
			{
				alert("The English Title should not be empty");
				document.Add.txtetitle.focus()
				return false;
			}
			//---------------------------------------
			document.Add.action.value='<? echo $_GET["action"]=='contentupdate'? 'beUpdate':'Add';?>';
			document.Add.submit();
			return true;
}
</script>

<? } ?>			