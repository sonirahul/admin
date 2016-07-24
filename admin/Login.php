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
	$LoginAdminName = $login[0]["admin_log"];
	$_SESSION['Adminid'] = $Adminid;
	$_SESSION['LoginAdmin'] = $LoginAdmin;
	$_SESSION['LoginAdminName'] = $LoginAdminName;
    header("Location:index.php");
	}	
else
	{
	$msgerror=1;
	}	
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Mawaredhouse Admin</title>

    <!-- Bootstrap -->
    <link href="../css/bootstrap.min.admin.css" rel="stylesheet">

	<link href="../css/font-awesome.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="css/custom.css" rel="stylesheet">
    <style type="text/css">
      .login_content h1:before, .login_content h1:after {
  content: "";
  height: 1px;
  position: absolute;
  top: 38px;

}
#admin-logo{
  width: 73px;
}
.text-danger{
	color: #FF1C17;
}


    </style>
</head>
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
<body style="background:#F7F7F7;">
    <div class="container-fluid">

      <div id="wrapper">
        <div id="login" class=" form">
          <section class="login_content">
            <form name="Login" method="post" onSubmit="return checkdata()">
              <input name="LoginAction"  type="hidden">
              <h1><img id="admin-logo" src="images/logo.png"></img> Admin Login</h1>
                <?php if($msgerror == 1) 
                	echo '<div><p class="text-danger text-left"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></i> Sorry, Username or Password is incorrect.
					  </p></div>'





                ?>
                <!-- </font> -->
              
              <div>
                <input type="text" class="form-control" placeholder="Username" name="UserName"required />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Password" name="Password" required />
              </div>
              <div>
                <input type="submit" class="btn btn-primary btn-md btn-block submit" value="Login"/>
              </div>
              <div class="clearfix"></div>
              <div class="separator">


                <div class="clearfix"></div>
                <br />
                <div>
                  

                  <p><i class="fa fa-copyright" aria-hidden="true"></i><?php echo date("Y"); ?> All Copy Right Reserved for mawaredhouse.com</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>
</html>
