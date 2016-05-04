<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
<link href="http://www.iss-global.com/style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
.content {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 75%;
	color: #4D3A01;
}
.more {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 11px;
	color: #E6330A;
}
</style>
<script language="javascript">
//validate email address.
function emailCheck (emailStr) 
{
				var checkTLD=1;

				/* The following is the list of known TLDs that an e-mail address must end with. */

				var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;

				/* The following pattern is used to check if the entered e-mail address
				fits the user@domain format.  It also is used to separate the username
				from the domain. */

				var emailPat=/^(.+)@(.+)$/;

				/* The following string represents the pattern for matching all special
				characters.  We don't want to allow special characters in the address.
				These characters include ( ) < > @ , ; : \ " . [ ] */

				var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";

				/* The following string represents the range of characters allowed in a
				username or domainname.  It really s which chars aren't allowed.*/

				var validChars="\[^\\s" + specialChars + "\]";

				/* The following pattern applies if the "user" is a quoted string (in
				which case, there are no rules about which characters are allowed
				and which aren't; anything goes).  E.g. "jiminy cricket"@disney.com
				is a legal e-mail address. */

				var quotedUser="(\"[^\"]*\")";

				/* The following pattern applies for domains that are IP addresses,
				rather than symbolic names.  E.g. joe@[123.124.233.4] is a legal
				e-mail address. NOTE: The square brackets are required. */

				var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;

				/* The following string represents an atom (basically a series of non-special characters.) */

				var atom=validChars + '+';

				/* The following string represents one word in the typical username.
				For example, in john.doe@somewhere.com, john and doe are words.
				Basically, a word is either an atom or quoted string. */

				var word="(" + atom + "|" + quotedUser + ")";

				// The following pattern describes the structure of the user

				var userPat=new RegExp("^" + word + "(\\." + word + ")*$");

				/* The following pattern describes the structure of a normal symbolic
				domain, as opposed to ipDomainPat, shown above. */

				var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

				/* Finally, let's start trying to figure out if the supplied address is valid. */

				/* Begin with the coarse pattern to simply break up user@domain into
				different pieces that are easy to analyze. */

				var matchArray=emailStr.match(emailPat);

				if (matchArray==null) {

				/* Too many/few @'s or something; basically, this address doesn't
				even fit the general mould of a valid e-mail address. */

				alert("Email address seems incorrect (check @ and .'s)");
				return false;
				}
				var user=matchArray[1];
				var domain=matchArray[2];

				// Start by checking that only basic ASCII characters are in the strings (0-127).


				for (i=0; i<user.length; i++) {
					if(user.charCodeAt(i)>64 && user.charCodeAt(i)<91) {

					alert("Ths Email Id should contain small case letters only");
					return false;
					}
				}

				for (i=0; i<user.length; i++) {
					if((user.charCodeAt(i)<97 || user.charCodeAt(i)>122) && (user.charCodeAt(i)!= 95) && (user.charCodeAt(i)!=46) && (user.charCodeAt(i)<48 || user.charCodeAt(i)>57)) {
					
					alert("username contains special characters.");
					return false;
					}
				}

				for (i=0; i<domain.length; i++) {
					if (domain.charCodeAt(i)>127) {
					alert("The domain name contains special characters.");
					return false;
					}
				}

				// See if "user" is valid

				if (user.match(userPat)==null) {

				// user is not valid

				alert("The username doesn't seem to be valid.");
				return false;
				}

				/* if the e-mail address is at an IP address (as opposed to a symbolic
				host name) make sure the IP address is valid. */

				var IPArray=domain.match(ipDomainPat);
				if (IPArray!=null) {

				// this is an IP address

				for (var i=1;i<=4;i++) {
				if (IPArray[i]>255) {
				alert("Destination IP address is invalid!");
				return false;
				   }
				}
				return true;
				}

				// Domain is symbolic name.  Check if it's valid.

				var atomPat=new RegExp("^" + atom + "$");
				var domArr=domain.split(".");
				var len=domArr.length;
				for (i=0;i<len;i++) {
				if (domArr[i].search(atomPat)==-1) {
				alert("The domain name does not seem to be valid.");
				return false;
				   }
				}

				/* domain name seems valid, but now make sure that it ends in a
				known top-level domain (like com, edu, gov) or a two-letter word,
				representing country (uk, nl), and that there's a hostname preceding
				the domain or country. */

				if (checkTLD && domArr[domArr.length-1].length!=2 &&
				domArr[domArr.length-1].search(knownDomsPat)==-1) {
				alert("The address must end in a well-known domain or two letter " + "country.");
				return false;
				}

				// Make sure there's a host name preceding the domain.

				if (len<2) {
				alert("This address is missing a hostname!");
				return false;
				}

	return true;
}

function onSubmit()
  {
		var emailStr=new String()
		emailStr=document.frmContact.Email.value;
		if(document.frmContact.Name.value=="")
		{
			alert("Please Enter Your Name");
			document.frmContact.Name.focus();
			return false;
		}
		if(document.frmContact.Phone.value=="")
		{
			alert("Please Enter Phone Number");
			document.frmContact.Phone.focus();
			return false;
		}
		if(isNaN(document.frmContact.Phone.value))
		{
			alert("Phone Number should be Numeric.");
			document.frmContact.Phone.focus();
			return false;
		}
		if(emailStr.length>0)
		{
			if (!emailCheck(emailStr))
			{
				document.frmContact.Email.focus();
				return false;
			}
     	}
     	if(emailStr.length==0)
     	{
     		alert("Please Enter Email Address");
     		document.frmContact.Email.focus();
     		return false;
     	}
		
  }

</script>
</head>

<body bgcolor="#FFFFFF">
<?php

  // if submitted form process and send mail
  if ($_SERVER['REQUEST_METHOD'] == "POST") {

    // just to be safe I strip out HTML tags
    
	$name = strip_tags($Name);
	$company = strip_tags($Company);
	$phone = strip_tags($Phone);
	$email = strip_tags($Email);
	/*$address = strip_tags($Address);
	$city = strip_tags($City);
	$state = strip_tags($State);
	$month = strip_tags($Month);
	$date = strip_tags($Date);
	$year = strip_tags($Year);*/
	$comments = strip_tags($Comments);
	$respondby = strip_tags($RespondBy);
	$besttime = strip_tags($BestTime);

    // set the variables
    // replace $me@mysite.com with your email address
    $sendto = "veerendra@iss-global.com";
	//$sendto = "veerendra@iss-global.com";
	$subject = "User Registration Details - travelclub.com";
    $message = "Name: $name \n\nCompany: $company \n\nPhone:  $phone\n\nEmail:  $email\n\nComments: $comments \n\nRespond By: $respondby \n\nBest Time: $besttime";
	/*$replyto = $email;
	$from = $email;*/
   /* $message = "Name: $name $lastname\n\nRequest demo for:  $product\n\nCompany: $company\n\nEmail: $email\n\nCountry: $country"; */

    // send the email
	$mail_headers .= "Reply-to:" . $_POST['Email'] . "\n";
	$mail_headers .= "From: ". $_POST['Email'] . "\n";
    mail($sendto, $subject, $message, $mail_headers);

  }
  ?> <?php 
					if ($_SERVER['REQUEST_METHOD'] == "POST") {
						
						$name = $_POST['Name'];
						$company = $_POST['Company'];
						$phone = $_POST['Phone'];
						$email = $_POST['Email'];
						//$address = $_POST['Address'];
//						$city = $_POST['City'];
//						$state = $_POST['State'];
//						$month = $_POST['Month'];
//						$date = $_POST['Date'];
//						$year = $_POST['Year'];
						$comments = $_POST['Comments'];
						$respondby = $_POST['RespondBy'];
						$besttime = $_POST['BestTime'];
						
						echo("<p class=\"more\"><b>Thank you for your enquiry, we will get back to you soon.</b></p>\n");
						}
						else {
					?>
					<form name="frmContact" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>?action=true">
                      <table width="100%" border="0" cellspacing="0" cellpadding="4">
                       <tr>
                              <td align="right">&nbsp;</td>
                              <td class="more"><span class="mandatory">*</span> Indicate fields are required.</td>
                            </tr>
					    <tr>
                          <td width="25%" align="right" class="content"><span class="mandatory">*</span>Name : </td>
                          <td><input name="Name" type="text" id="Name" /></td>
                        </tr>
                        <tr>
                          <td align="right" class="content">Company : </td>
                          <td><input name="Company" type="text" id="Company" /></td>
                        </tr>
                        <tr>
                          <td align="right" class="content"><span class="mandatory">*</span>Phone : </td>
                          <td><input name="Phone" type="text" id="Phone" /></td>
                        </tr>
                        <tr>
                          <td align="right" class="content"><span class="mandatory">*</span>Email: </td>
                          <td><input name="Email" type="text" id="Email" /></td>
                        </tr>
                       <!-- <tr>
                          <td align="right">Address : </td>
                          <td><input name="Address" type="text" id="Address" /></td>
                        </tr>
                        <tr>
                          <td align="right">City : </td>
                          <td><input name="City" type="text" id="City" /></td>
                        </tr>
                        <tr>
                          <td align="right">State : </td>
                          <td><select name="State" length="15">
<option value="" selected="selected" label="Choose a state">Choose a state</option>
<option label="Alabama" value="AL">Alabama</option>
<option label="Alaska" value="AK">Alaska</option>
<option label="Arizona" value="AZ">Arizona</option>
<option label="Arkansas" value="AR">Arkansas</option>
<option label="California" value="CA">California</option>
<option label="Colorado" value="CO">Colorado</option>
<option label="Connecticut" value="CT">Connecticut</option>
<option label="Delaware" value="DE">Delaware</option>
<option label="Florida" value="FL">Florida</option>
<option label="Georgia" value="GA">Georgia</option>
<option label="Hawaii" value="HI">Hawaii</option>
<option label="Idaho" value="ID">Idaho</option>
<option label="Illinois" value="IL">Illinois</option>
<option label="Indiana" value="IN">Indiana</option>
<option label="Iowa" value="IA">Iowa</option>
<option label="Kansas" value="KS">Kansas</option>
<option label="Kentucky" value="KY">Kentucky</option>
<option label="Louisiana" value="LA">Louisiana</option>
<option label="Maine" value="ME">Maine</option>
<option label="Maryland" value="MD">Maryland</option>
<option label="Massachusetts" value="MA">Massachusetts</option>
<option label="Michigan" value="MI">Michigan</option>
<option label="Minnesota" value="MN">Minnesota</option>
<option label="Mississippi" value="MS">Mississippi</option>
<option label="Missouri" value="MO">Missouri</option>
<option label="Montana" value="MT">Montana</option>
<option label="Nebraska" value="NE">Nebraska</option>
<option label="Nevada" value="NV">Nevada</option>
<option label="New Hampshire" value="NH">New Hampshire</option>
<option label="New Jersey" value="NJ">New Jersey</option>
<option label="New Mexico" value="NM">New Mexico</option>
<option label="New York" value="NY">New York</option>
<option label="North Carolina" value="NC">North Carolina</option>
<option label="North Dakota" value="ND">North Dakota</option>
<option label="Ohio" value="OH">Ohio</option>
<option label="Oklahoma" value="OK">Oklahoma</option>
<option label="Oregon" value="OR">Oregon</option>
<option label="Pennsylvania" value="PA">Pennsylvania</option>
<option label="Rhode Island" value="RI">Rhode Island</option>
<option label="South Carolina" value="SC">South Carolina</option>
<option label="South Dakota" value="SD">South Dakota</option>
<option label="Tennessee" value="TN">Tennessee</option>
<option label="Texas" value="TX">Texas</option>
<option label="Utah" value="UT">Utah</option>
<option label="Vermont" value="VT">Vermont</option>
<option label="Virginia" value="VA">Virginia</option>
<option label="Washington" value="WA">Washington</option>
<option label="West Virginia" value="WV">West Virginia</option>
<option label="Wisconsin" value="WI">Wisconsin</option>
<option label="Wyoming" value="WY">Wyoming</option>
                          </select></td>
                        </tr>-->
                        <tr>
                          <td align="right" valign="top" class="content">Comments : </td>
                          <td><textarea name="Comments" cols="32" rows="4" id="Comments"></textarea></td>
                        </tr>
						<tr>
                          <td align="right" valign="top" class="content">Respond By : </td>
                          <td><select name="RespondBy" length="15">
						  <option value="phone" class="content">Phone</option>
						  <option value="email" class="content">E-mail</option>
						  </select></td>
                        </tr>
						 <tr>
                          <td align="right" valign="top" class="content">Best time to respond : </td>
                          <td><input name="BestTime" type="text" id="BestTime" /></td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td><input type="submit"  value="Submit" onclick="return onSubmit()" />
                            <input type="reset" value="Reset" /></td>
                        </tr>
                        
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                        </tr>
                      </table>
                        </form>
										<?php } ?>
</body>
</html>
