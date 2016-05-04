<?php session_start();
//----------
include "../function.php";
//----------Login
$UserName=$_POST["UserName"];
$Password=$_POST["Password"];
$LoginAction=$_POST["LoginAction"];
//-------------------------
$UserName=addslashes($UserName);
$Password=addslashes($Password);
if($LoginAction=='LogIn')
{
$Str="select * from adminlog where admin_log='$UserName' and admin_password='$Password' ";
$login=select_query($link,$Str,0,0);	
if(count($login)>0)
	{
	$Adminid=$login[0]["admin_id"];
	$LoginAdmin='Admin';
    $_SESSION['Adminid'] = $Adminid;
	$_SESSION['LoginAdmin'] = $LoginAdmin;
    header("Location:index.php");
	}	
else
	{
	$msgerror=1;
	}	
}

?>
<html>
<head>
<title>.: mawaredhouse.com</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1256">
<link href="style.css" rel="stylesheet" type="text/css">
</head>

<body  leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="777" height="100%" border="0" cellpadding="0" cellspacing="0" align="center">

<tr> 
<td width="96" height=38 ><img src="images/header_text.png" width="233" height="38"></td>
<td background="images/header_bg.png" HEIGHT="38" width="543" style="background-repeat:repeat-x;"></td>
</tr>
<tr><td  colspan="3">
<form name="Login" method="post" onSubmit="return checkdata()">
<input name="LoginAction"  type="hidden">
<table border="0" cellpadding="0" cellspacing="0" class="login" align="center">
<tr>
<td width="210" align="center">
			<p><img src="images/security.png" width="64" height="64" alt="security" /></p>
			<p>Welcome to mawaredhouse Web Site administration!</p>
			<div align="left">Use a valid username and password to gain access to the administration console.</div>

</td>
<td width="217" valign="top" class="form-block">
<table border="0" width="100%"  align="center" cellpadding="0" cellspacing="0" >
	
	<tr><td colspan="2" class="redtitle" align="center">Admin Login</td></tr>
	<tr><td colspan="2" class="redtitle" align="center" height="20"></td></tr>
	<tr>
		<td width="37%" align="center"> UserName </td>
		<td width="63%" align="center"><input type="text" name="UserName" style="width:120" dir="ltr" class="inputstyle"></td>
	</tr>
	<tr>
		<td width="37%" align="center"> Password </td>
		<td align="center"><input type="password" name="Password" style="width:120" dir="ltr" class="inputstyle"></td>
	</tr>
	<tr><td colspan="2" class="redtitle" align="center" height="20"></td></tr>
	<tr>
		<td  colspan="2" align="center"><input type="submit" class="button" value="Login"></td>
	</tr>

</table>
</td>
</tr>
</table>
</form>
<script>
function checkdata()
{
			
			if(document.Login.UserName.value=="")
			{
				alert("User name should not be empty");
				document.Login.UserName.focus()
				return false;
			}
			//---------------------------------------
			if(document.Login.Password.value=="")
			{
				alert("Password should not be empty");
				document.Login.Password.focus()
				return false;
			}
			//---------------------------------------
			document.Login.LoginAction.value='LogIn';
			document.Login.submit();
			return true;
}
</script>
</td></tr>
<tr align="center" class="tit">
<td  colspan="3"> <font size="3" color="#FF0000"><?php if($msgerror==1) echo"Sorry, you have error in Username or Password "; ?></font></td>
</tr>
<tr><td>&nbsp;  </td></tr>
<tr><td>&nbsp;  </td></tr>
<tr><td>&nbsp;  </td></tr>
<tr><td>&nbsp;  </td></tr>
<tr><td>&nbsp;  </td></tr>
<tr><td>&nbsp;  </td></tr>
  <tr>
  <tr>
  <TD WIDTH="777" align="center" colspan="3">
  All Copy Right Reserved for mawaredhouse.com </TD>
  </tr>
</table>
</body>
</html>
