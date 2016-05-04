<html>
<head>
<title>Mawared House</title>
<meta http-equiv="Content-Type" content="text/html; charset=Windows-1256" />
<link href="../styles/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
function clearName()
{
	if (fb_form.name.value == "enter your name")
	{
		fb_form.name.value = "";
	}
	fb_form.name.style.color = "#000000";
}
function clearEmail()
{
	if (fb_form.email.value == "enter your email")
	{
		fb_form.email.value = "";
	}
	fb_form.email.style.color = "#000000";
}
function clearSubject()
{
	if (fb_form.subject.value == "enter subject")
	{
		fb_form.subject.value = "";
	}
	fb_form.subject.style.color = "#000000";
}
function clearMobile()
{
	if (fb_form.mobile.value == "enter your mobile")
	{
		fb_form.mobile.value = "";
	}
	fb_form.mobile.style.color = "#000000";
}
function hideThanks()
{
	document.getElementById("thanks_div").style.visibility = "hidden";
}
function loading_show()
{
	document.getElementById("loading_div").style.visibility = "visible";
	var t = setTimeout("return true",5000);
	//document.fb_form.submit = true;
}
function enableSubmit()
{
	email = document.fb_form.email.value;
	if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1)
	{
		document.getElementById("err").innerHTML = "Please enter a valid e-mail format";
	}else{
		fb_form.fd_submit.disabled = false;
		document.getElementById("err").innerHTML = "";
	}
}
</script>
</head>
<body rightmargin="0" topmargin="0" marginwidth="0" marginheight="0" dir="ltr" leftmargin="0" bottommargin="0">
<table align="left" background="../sub-menus-titles/feedback_39.jpg" cellpadding="0" cellspacing="0" width="1073" height="363" border="0">
  	<tr><td height="47" colspan="3">&nbsp;</td></tr>
  	<tr>
    	<td width="53">&nbsp;</td>
    	<td width="320">
        	<img src="../images/feedback.jpg" alt="" height="289" width="291" />
        </td>
    	<td valign="top">
        <table><tr><td valign="top" width="640px" style="font-family:Arial, Helvetica, sans-serif; color:#FFF; font-size:13px; text-align:justify; vertical-align:top"><br/>
        <?php
		if (isset($_REQUEST['send'])){
			$message = "Name : ".$_REQUEST['name']. "\r\n";
			$message .=	"E-mail : ".$_REQUEST['email']. "\r\n";
			$message .=	"Mobile : ".$_REQUEST['mobile']. "\r\n";
			$message .=	"Subject : ".$_REQUEST['subject']. "\r\n";
			$message .=	"Details : ".$_REQUEST['details']. "\r\n";

			// To send HTML mail, the Content-type header must be set
			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=arabic-1256' . "\r\n";
			$to = "kaushikg_1706@yahoo.com";
			//$to = "feedback@mawaredhouse.com";
			$subject = "Mawared House | FeedBack";
			$message = $message;
			$header.= "From: kaushik@mawaredhouse.com\r\n";
			$header.= "CC: info@mawaredhouse.com\r\n";
			$header.= "Bcc: kaushik@mawaredhouse.com";			
			if (mail($to, $subject, $message, $header))
			{
		?> 
        <div id="thanks_div" style="visibility:visible; text-align:center; vertical-align:middle">
            <div id="thanks_inner">
            Thank you for your feedback. Be sure that it will be considered.<br/>
            &lt;<span style="text-decoration:underline" onClick="hideThanks()">Close</span>&gt;
            </div>
        </div>
		<?php
			}
		}
		?>
        <div id="loading_div">
        	<div id="loading_inner">
        	<img src="../images/loading.gif" alt="" height="50" width="50" style="text-align:center; vertical-align:middle"/>
            <br/>
            Sending your FeedBack...
            </div>
        </div>
        <form action="feedback.php?send=1" style="width:650px" enctype="" method="post" name="fb_form" id="fb_form" target="_self" onSubmit="return loading_show()">
        <table width="100%">
        	<tr>
                <td style="font:Arial, Helvetica, sans-serif; color:#FFF; vertical-align:middle; padding-top:10; font-size:13px; text-align:left; height:40px; width:65px">Name:</td>
                <td><input id="name" name="name" style="color:#999" size="35" type="text" onFocus="clearName()" value="enter your name" /></td>
                <td width="100px"></td>
                <td style="font:Arial, Helvetica, sans-serif; color:#FFF; vertical-align:middle; font-size:13px; text-align:left; width:65px">E-mail:</td>
                <td><input id="email" name="email" style="color:#999" size="35" type="text" onChange="enableSubmit()" value="enter your email" onFocus="clearEmail()" /></td>
            </tr>
            <tr>
                <td style="font:Arial, Helvetica, sans-serif; color:#FFF; vertical-align:middle; padding-top:10; font-size:13px; text-align:left; height:40px; width:65px">Subject:</td>
                <td><input id="subject" name="subject" style="color:#999" size="35" type="text" value="enter subject" onFocus="clearSubject()" /></td>
                <td width="100px"></td>
                <td style="font:Arial, Helvetica, sans-serif; color:#FFF; vertical-align:middle; font-size:13px; text-align:left; width:65px">Mobile:</td>
                <td><input id="mobile" name="mobile" style="color:#999" size="35" type="text" value="enter your mobile" onFocus="clearMobile()" /></td>
            </tr>
            <tr>
                <td style="font:Arial, Helvetica, sans-serif; color:#FFF; vertical-align:top; font-size:13px; text-align:left; height:150px; width:65px; padding-top:10">Details:*</td>
                <td><textarea id="details" name="details" cols="35" rows="8" onChange="enableSubmit()"></textarea></td>
                <td width="100px"></td>
                <td style="font:Arial, Helvetica, sans-serif; color:#FFF; vertical-align:middle; font-size:13px; text-align:left; width:65px"></td>
                <td valign="top"><p id="err"></p></td>
            </tr>
            <tr><td colspan="5" align="right">
            <input type="submit" id="fd_submit" name="fd_sumbit" style="width:80px" value="Send" disabled/>
            </td></tr>
        </table>
        </form></td></tr></table>
   	  	</td>
    </tr>
</table>
</body>
</html>