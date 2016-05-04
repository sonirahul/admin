<div class="maindata">
<div class="line"><h3> Ê«’· „⁄‰«  </h3></div>
<script type="text/javascript">
function clearName()
{
	if (fb_form.name.value == "„‰ ›÷·ﬂ √œŒ· «·«”„")
	{
		fb_form.name.value = "";
	}
	fb_form.name.style.color = "#000000";
}
function clearEmail()
{
	if (fb_form.email.value == "„‰ ›÷·ﬂ √œŒ· «·»—Ìœ «·≈·ﬂ —Ê‰Ì")
	{
		fb_form.email.value = "";
	}
	fb_form.email.style.color = "#000000";
}
function clearSubject()
{
	if (fb_form.subject.value == "„‰ ›÷·ﬂ √œŒ· «·„Ê÷Ê⁄")
	{
		fb_form.subject.value = "";
	}
	fb_form.subject.style.color = "#000000";
}
function clearMobile()
{
	if (fb_form.mobile.value == "„‰ ›÷·ﬂ √œŒ· —ﬁ„ «·ÃÊ«·")
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
		document.getElementById("err").innerHTML = "ÌÊÃœ Œÿ√ ›Ì «·»—Ìœ «·≈·ﬂ —Ê‰Ì";
	}else{
		fb_form.fd_submit.disabled = false;
		document.getElementById("err").innerHTML = "";
	}
}
</script>
<table cellpadding="0" cellspacing="0" width="500" border="0">
        <tr><td valign="top" style="font-family:Arial, Helvetica, sans-serif;  font-size:13px; text-align:justify; vertical-align:top"><br/>
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
            ‘ﬂ—« ·ﬂ  „ ≈—”«· —”«· ﬂ »‰Ã«Õ.<br/>
            &lt;<span style="text-decoration:underline" onClick="hideThanks()">≈€·«ﬁ</span>&gt;
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
            ≈—”«· „·«ÕŸ« ﬂ...
            </div>
        </div>
        <form action="index.php?model=feedback&send=1" style="width:650px" enctype="" method="post" name="fb_form" id="fb_form" target="_self" onSubmit="return loading_show()">
        <table width="100%">
        	<tr>
                <td style="font:Arial, Helvetica, sans-serif;  vertical-align:middle; padding-top:10; font-size:13px; text-align:left; height:40px; width:65px">«·«”„:</td>
                <td><input id="name" name="name" style="color:#999" size="35" type="text" onFocus="clearName()" value="enter your name" /></td>
                <td width="100px"></td>
                <td style="font:Arial, Helvetica, sans-serif;  vertical-align:middle; font-size:13px; text-align:left; width:65px">«·»—Ìœ «·≈·ﬂ —Ê‰Ì:</td>
                <td><input id="email" name="email" style="color:#999" size="35" type="text" onChange="enableSubmit()" value="enter your email" onFocus="clearEmail()" /></td>
            </tr>
            <tr>
                <td style="font:Arial, Helvetica, sans-serif;  vertical-align:middle; padding-top:10; font-size:13px; text-align:left; height:40px; width:65px">«·„Ê÷Ê⁄:</td>
                <td><input id="subject" name="subject" style="color:#999" size="35" type="text" value="enter subject" onFocus="clearSubject()" /></td>
                <td width="100px"></td>
                <td style="font:Arial, Helvetica, sans-serif;  vertical-align:middle; font-size:13px; text-align:left; width:65px">«·‰ﬁ«·:</td>
                <td><input id="mobile" name="mobile" style="color:#999" size="35" type="text" value="enter your mobile" onFocus="clearMobile()" /></td>
            </tr>
            <tr>
                <td style="font:Arial, Helvetica, sans-serif;  vertical-align:top; font-size:13px; text-align:left; height:150px; width:65px; padding-top:10">«· ›«’Ì·:*</td>
                <td><textarea id="details" name="details" cols="35" rows="8" onChange="enableSubmit()"></textarea></td>
                <td width="100px"></td>
                <td style="font:Arial, Helvetica, sans-serif;  vertical-align:middle; font-size:13px; text-align:left; width:65px"></td>
                <td valign="top"><p id="err"></p></td>
            </tr>
            <tr><td colspan="5" align="right">
            <input type="submit" id="fd_submit" name="fd_sumbit" style="width:80px" value="≈—”«·" disabled/>
            </td></tr>
        </table>
        </form>
        </td></tr>
        </table>
   
</div>    