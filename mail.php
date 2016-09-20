<?php
#php script to receive input from contact form and send to admin of mawared house.
include "mailSettings.php";
#echo "mawared email :" . $mawaredEmail;
#echo "to email :" . $to;

$commonHeader="MIME-Version: 1.0" . "\r\n" . "Content-type:text/html;charset=UTF-8". "\r\n";

#INPUTS FROM CUSTOMER
$name=$_POST["name"];
$from=$_POST["email"];
$mobile=$_POST["mobile"];
$subject=$_POST["subject"];
$details=$_POST["comments_lg"].$_POST["comments_mob"];

$emailAdminSubject="Mawared House: New Response Received";
$emailAdminHeader=$commonHeader.'From:' . $from . "\r\n" . 'Reply-To:' . $from . "\r\n" . 'X-Mailer: PHP/' . phpversion();

$emailCustomerSubject="Mawared House - Thank you for contacting us.";
$emailCustomerHeader=$commonHeader.'From:' . $mawaredEmail . "\r\n" . 'Reply-To:' . $mawaredEmail . "\r\n" . 'X-Mailer: PHP/' . phpversion();
?>

<?php
$header='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/><title>Mawared House : New Response Received</title><style type="text/css">@media only screen and (min-device-width: 600px){.email_container{width: 600px !important;}}</style></head><body style="padding:0;margin:0;margin:0 auto;background-color: #dadada;"><!--[if (gte mso 9)|(IE)]><table width="600" align="center" cellpadding="0" cellspacing="0" border="0"> <tr> <td><![endif]--> <div class="email_body" style="font-family:Arial,sans-serif;text-align: center;"> <div class="email_container" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;margin: 0 auto;max-width: 600px;border: 1px solid #dadada;"> <table class="content" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;"> <tbody><tr> <td class="header_cell col-bottom-0" align="center" valign="top" style="text-align: center;padding-bottom: 16px;background-color: #1f4670;"> <div class="row" style="margin: 0 auto;display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <div class="col-3" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"> <tbody> <tr> <td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: left;vertical-align: top;color: #fff;font-weight: 700;padding-bottom: 0;padding-top: 16px;"> <a href="http://www.mawaredhouse.com" style="color: #fff;"><img src="http://www.mawaredhouse.com/images/logo/mawaredhouse_menu_logo_footer.png" width="90" height="64" alt="Mawared House" style="max-width: 156px;height: auto;"/></a> </td></tr></tbody> </table> </div></div></td></tr>';

$bp1='<tr><td style="color: #888;background-color:#fff;padding:20px;text-align:left;"><p style="margin:0;">Hello Mawared House Team,<br/><br/><strong>';

$bp2=$name;

$bp3='</strong> tried to contact Mawared House. <br/>Here&#39;s the information below :</p></td></tr><tr> <td class="content_cell product_row" align="center" valign="top" style="text-align: center;padding: 0 0 16px;background-color: #fff;border-top: 1px solid;border-color: #d8dde4;"> <div class="row" style="margin: 0 auto;display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <div class="col-1" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"> <tbody> <tr> <td class="column_cell font_default image_thumb" align="center" valign="top" style="padding: 16px 16px 0;text-align: center;vertical-align: top;color: #888;"> <table class="icon_holder icon_secondary" width="80" border="0" align="center" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 48px;margin-left: auto;margin-right: auto;clear: both;"> <tbody> <tr> <td class="hspace" style="height: 8px;overflow: hidden;">&nbsp; </td></tr><tr> <td class="hspace" style="height: 8px;overflow: hidden;">&nbsp; </td></tr><tr> <td class="icon_cell" style="line-height: 1;-webkit-border-radius: 80px;border-radius: 80px;padding: 8px;height: 48px;background-color: #e1e3e7;border-color: #d8dde4;"><img src="http://www.mawaredhouse.com/images/others/person.png" width="48" height="48" alt="" style="-webkit-border-radius: 4px;border-radius: 4px;"/></td></tr><tr> <td class="hspace" style="height: 8px;overflow: hidden;">&nbsp; </td></tr></tbody> </table> <p class="text-muted" style="line-height: 23px;margin-top: 8px;margin-bottom: 8px;color: #b3b3b5;"><a href="#" style="color: #2f68b4;text-decoration:none;"><strong>';

$bp4=$name;

$bp5='</strong></a> <br/> <small style="font-weight: 400;color: inherit;">';

$bp6=$mobile;

$bp7='</small></p></td></tr></tbody> </table> </div><div class="col-13" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"> <tbody> <tr> <td class="column_cell font_default" align="center" valign="top" style="padding: 16px 16px 0;text-align: left;vertical-align: top;color: #888;"> <h3 style="margin-left: 0;margin-right: 0;margin-top: 16px;margin-bottom: 8px;padding: 0;color: #2f68b4;font-weight:normal;text-align:center;">';

$bp8=$subject;

$bp9='</h3> <p style="line-height: 23px;margin-top: 8px;margin-bottom: 8px;text-align:center;"> ';

$bp10=$details;

$bp11=' </p></td></tr></tbody> </table> </div></div></td></tr><tr> <td class="content_cell" align="center" valign="top" style="text-align: center;background-color: #fff;"> <div class="row" style="margin: 0 auto;display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <div class="col-3 col-bottom-0" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"> <tbody> <tr> <td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: center;vertical-align: top;color: #888;padding-bottom: 0;"> <table class="primary_btn" align="center" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;clear: both;margin: 0 auto;"> <tbody> <tr> <td class="font_default" style="mso-line-height-rule: exactly;text-align: center;vertical-align: middle;padding: 12px 24px;-webkit-border-radius: 4px;border-radius: 4px;background-color: #22aaa0;"><a href="mailto:';

$bp12=$from;

$bp13='" style="color: #fff;font-weight: 700;text-align: center;display: block;text-decoration:none"><span style="color: #fff;text-align: center;display: block;">Reply Back</span></a></td></tr></tbody> </table> <table class="icon_holder icon_secondary" width="80" border="0" align="center" cellpadding="0" cellspacing="0" style="border-collapse: separate;width: 48px;margin-left: auto;margin-right: auto;clear: both;"> <tbody> <tr> <td class="hspace" style="height: 8px;overflow: hidden;">&nbsp; </td></tr></tbody> </table> </td></tr></tbody> </table> </div></div></td></tr></tbody> </table>';

$footer='<table class="footer" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;"> <tbody> <tr> <td class="footer_cell" align="center" valign="top" style="text-align: center;padding-bottom: 16px;background-color: #f2f2f5;border-top: 1px solid;border-color: #d8dde4;"> <div class="row" style="margin: 0 auto;display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <div class="col-13 col-bottom-0" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"> <tbody> <tr> <td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: left;vertical-align: top;color: #b3b3b5;padding-bottom: 0;padding-top: 16px;"> <strong><a href="http://www.mawaredhouse.com" style="color: #7a7a7a;">Mawared House</a></strong> <br/><small style="font-weight: 400;color: inherit;">Local Presence Global Support</small></td></tr></tbody> </table> </div><div class="col-1 col-bottom-0" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"> <table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"> <tbody> <tr> <td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: left;vertical-align: top;color: #b3b3b5;padding-bottom: 0;padding-top: 16px;"></td></tr></tbody> </table> </div></div></td></tr></tbody> </table> </div></div><!--[if (gte mso 9)|(IE)]> </td></tr></table><![endif]--></body></html>';


$customerCopy1="<div style='background-color:#fff;text-align:left;padding:20px;color:#888;'>Hello " . $name . ",<br/>This is an automated email sent to " . $from . ".<br/>";
$customerCopy2="Thank you for contacting us. We will reach you at the earliest.<br>";
$customerCopy3="<h3>Information filled by you : </h3> <span class='color:#888;font-weight:bold;'>Name :</span> " . $name . "<br/><span class='color:#888;font-weight:bold;'>Email :</span> " . $from . "<br/><span class='color:#888;font-weight:bold;'>Mobile : </span>" . $mobile . "<br><span class='color:#888;font-weight:bold;'>Subject : </span>" . $subject . "<br/><span class='color:#888;font-weight:bold;'>Details : </span>" . $details . "</div>"; 

#admin complete email 
$messageToAdmin = $header.$bp1.$bp2.$bp3.$bp4.$bp5.$bp6.$bp7.$bp8.$bp9.$bp10.$bp11.$bp12.$bp13.$footer;
#echo $messageToAdmin;

#customer complete email
$messageToCustomer=$header;
$messageToCustomer.=$customerCopy1.$customerCopy2.$customerCopy3;
$messageToCustomer.=$footer;
#echo $messageToCustomer;
?>

<?php
#FINAL PROCESSING

#send mail to admin
$adminMailResult=mail($to, $emailAdminSubject, $messageToAdmin, $emailAdminHeader);

#send a copy to customer
$customerMailResult=mail($from, $emailCustomerSubject, $messageToCustomer, $emailCustomerHeader);

$mailToAdminMsg="";
$mailToCustomerMsg="";
if(!$adminMailResult){
	$mailToAdminMsg="Sorry, the response could not be sent to our admin team. Please try again.";
} else {
	$mailToAdminMsg="Your response has been sent to our admin team. ";
}
if(!$customerMailResult){
	$mailToCustomerMsg="A copy of the response could not be sent to you. ";
} else {
	$mailToCustomerMsg="A copy of the response has been sent to you. ";
}

?>

<?php
#content to echo on the page to tell customer about the status of his form
$pageContent1='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Mawared House : New Response Received</title><style type="text/css">@media only screen and (min-device-width: 600px){.email_container{width: 600px !important;}}</style></head><body style="padding:0;margin:0;margin:0 auto;background-color: #dadada;"><div class="email_body" style="font-family:Arial,sans-serif;text-align: center;"><div class="email_container" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;margin: 0 auto;max-width: 600px;border: 1px solid #dadada;"><table class="content" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;"><tbody><tr id="mailPageheader"><td class="header_cell col-bottom-0" align="center" valign="top" style="text-align: center;padding-bottom: 16px;background-color: #1f4670;"><div class="row" style="margin: 0 auto;display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"><div class="col-3" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"><table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"><tbody><tr><td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: left;vertical-align: top;color: #fff;font-weight: 700;padding-bottom: 0;padding-top: 16px;"><a href="http://www.mawaredhouse.com" style="color: #fff;"><img src="http://www.mawaredhouse.com/images/logo/mawaredhouse_menu_logo_footer.png" width="90" height="64" alt="Mawared House" style="max-width: 156px;height: auto;"/></a></td></tr></tbody></table></div></div></td></tr><tr id="mailPageContent"><td style="background:#fff;padding:20px;text-align:left">';
$pageMsg='Thank you ' . $name . ' for contacting us.';
$pageMsg.=$mailToAdminMsg;
$pageMsg.=$mailToCustomerMsg;
$pageMsg.='<br/>We will get back to you at the earliest.<br/><br/><p style="text-align:center">You will be automatically redirected to <a href="http://www.mawaredhouse.com" style="text-decoration:none"><strong>Mawared House</strong></a> in <span id="reloadEta">few</span> seconds.<br/><br/>OR<br/><br/>Press <a href="http://www.mawaredhouse.com" style="text-decoration:none"><strong>here</strong></a> to go to the main website.</p>';
$pageContent2='</td></tr><tr id="mailPageFooter"><td class="footer_cell" align="center" valign="top" style="text-align: center;padding-bottom: 16px;background-color: #f2f2f5;border-top: 1px solid;border-color: #d8dde4;"><div class="row" style="margin: 0 auto;display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"><div class="col-13 col-bottom-0" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"><table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"><tbody><tr><td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: left;vertical-align: top;color: #b3b3b5;padding-bottom: 0;padding-top: 16px;"> <strong><a href="http://www.mawaredhouse.com" style="color: #7a7a7a;">Mawared House</a></strong><br/><small style="font-weight: 400;color: inherit;">Local Presence Global Support</small></td></tr></tbody></table></div><div class="col-1 col-bottom-0" style="display: inline-block;width: 100%;vertical-align: top;text-align: center;max-width: 100%!important;"><table class="column" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: separate;width: 100%;vertical-align: top;"><tbody><tr><td class="column_cell font_default" align="center" valign="top" style="padding: 16px;text-align: left;vertical-align: top;color: #b3b3b5;padding-bottom: 0;padding-top: 16px;"></td></tr></tbody></table></div></div></td></tr></tbody></table></div></div></body><script type="text/javascript">PAGE_RELOAD_TIME=10;count=PAGE_RELOAD_TIME;reloadEta=document.getElementById("reloadEta");changeReloadEta=setInterval(function(){reloadEta.innerHTML=count;count--;if(count<0){clearInterval(changeReloadEta);window.location.href="http://www.mawaredhouse.com";}}, 1000);setTimeout(function(){window.location.href="http://www.mawaredhouse.com";}, PAGE_RELOAD_TIME*1000);</script></html>';
$completePage = $pageContent1.$pageMsg.$pageContent2;
echo $completePage;

?>