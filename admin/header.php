<html>
<head>
<title>.: mawaredhouse.com</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1256">
<link href="style.css" rel="stylesheet" type="text/css">
</head>
<body  leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
	<script type="text/javascript" src="../editor/ckeditor.js"></script>
	<script src="../editor/sample.js" type="text/javascript"></script>
	<link href="../editor/sample.css" rel="stylesheet" type="text/css" />
    
<script type="text/javascript" src="dropdown.js"></script>
<script>
function count(maxlimit,place)
		{
			if(place.value.length > maxlimit) place.value = place.value.substring(0,maxlimit);
		}
//-------------------------------
function checknum(strng,place) 
{
	var stripped = strng.match(/^\d+$/);
		if (stripped==null) 
		{
   	  	place.value='';
		}
}
//-------------------
function checkMail(chmail)
{
  var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(chmail)) 
	{
	  return false;
	}else{
	  return true;
	}
}

//-------------------
</script>

<table width="777" height="100%" border="0" cellpadding="0" cellspacing="0" align="center">

<tr> 
<td height=38 width="233"><img src="images/header_text.png" width="233"></td>
<td background="images/header_bg.png" HEIGHT="38" style="background-repeat:repeat-x;" align="center" width="700">
<a href="index.php?model=changepwd" title="Change Password" class="sidenewshdr">Change Password</a>&nbsp;&nbsp;<font color="#FFFFFF">|</font>&nbsp;&nbsp;
<a href="logout.php" title="Logout" class="sidenewshdr">Log Out</a>
</td>
</tr>

	<tr>
		<td class="menudottedline" align="center" colspan="2" height="20">
			<table border="0" width="100%">
				<tr>
					<td align="center">
<font color="#990000"><strong>Manage:</strong> </font>

<a href="index.php?model=content&contentid=1&action=contentupdate" class="adminheader" title="Manage Home">Home</a>&nbsp;|&nbsp;
				
<span class="adminheader" id="menu_parent" >About US</span>&nbsp;|&nbsp;
<div id="menu_child" style="position: absolute; visibility: hidden;" align="left">
<a class="sample_attach" href="index.php?model=content&contentid=2&action=contentupdate" title="Manage Welcome ">Welcome </a>
<a class="sample_attach" href="index.php?model=content&contentid=3&action=contentupdate" title="Manage Philosophy ">Philosophy </a>
<a class="sample_attach" href="index.php?model=about" title="Manage Management Team" style="border-bottom: 1px solid black;">Management Team</a>
</div>

<span class="adminheader" id="Strategic_parent" >Strategic Business Units</span>&nbsp;|&nbsp;
<div id="Strategic_child" style="position: absolute; visibility: hidden;" align="left">
<a class="sample_attach" href="index.php?model=content&contentid=4&action=contentupdate" title="Manage Visa Application Centres ">Visa Application Centres </a>
<a class="sample_attach" href="index.php?model=content&contentid=5&action=contentupdate" title="Manage Travel Club ">Travel Club </a>
<a class="sample_attach" href="index.php?model=content&contentid=6&action=contentupdate" title="Manage Al Rayes Travel Services ">Al Rayes Travel Services </a>
<a class="sample_attach" href="index.php?model=content&contentid=7&action=contentupdate" title="Manage Sanan Residential Project" style="border-bottom: 1px solid black;">Sanan Residential Project</a>
</div>

<a href="index.php?model=countries" class="adminheader" title="Manage Countries of Operation">Countries of Operation</a>&nbsp;|&nbsp;

<span class="adminheader" id="Gallery_parent" >Gallery</span>&nbsp;|&nbsp;
<div id="Gallery_child" style="position: absolute; visibility: hidden;" align="left">
<a class="sample_attach" href="index.php?model=gallary" title="Manage Our People ">Our People </a>
<a class="sample_attach" href="index.php?model=gallary2" title="Manage 5th Anniversary" style="border-bottom: 1px solid black;">5th Anniversary</a>
</div>

<a href="index.php?model=news" class="adminheader" title="Manage News">News</a>&nbsp;|&nbsp;
<br/>
<a href="index.php?model=content&contentid=8&action=contentupdate" class="adminheader" title="Manage Site Map">Site Map</a>&nbsp;|&nbsp;
<a href="index.php?model=content&contentid=9&action=contentupdate" class="adminheader" title="Manage Contact Us">Contact Us</a>&nbsp;|&nbsp;
<a href="index.php?model=flags" class="adminheader" title="Manage Flags">Flags</a>&nbsp;|&nbsp;
<a href="index.php?model=uploading" class="adminheader" title="Manage Uploading">Uploading</a>&nbsp;|&nbsp;
<a href="index.php?model=mhf" class="adminheader" title="Manage Shared Files">Shared Files</a>&nbsp;

<script type="text/javascript">
at_attach("menu_parent", "menu_child", "hover", "y", "pointer");
at_attach("Strategic_parent", "Strategic_child", "hover", "y", "pointer");
at_attach("Gallery_parent", "Gallery_child", "hover", "y", "pointer");
</script>

					</td>
				</tr>
			</table>
		</td>
	</tr>

<tr> 
<td valign="top" width="777" colspan="2">