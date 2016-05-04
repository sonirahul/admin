<?php
$UserName=$_POST["UserName"];
$Password=$_POST["Password"];
$Action=$_POST["Action"];
//-------------------------
if($Action=="Update")//Applay Updates
{
$Str="select * from adminlog where admin_log='$UserName'";
$login=select_query($link,$Str,0,0);	
if(count($login)==0)
{
$InnerMessage="The UserName provided was not found.";
}else{
$TableName="adminlog";
$TableField=array();
$TableField[0][0]="admin_password";
$TableField[0][1]="'$Password'";
if(isset($_POST["newUserName"]) && $_POST["newUserName"]!="")
{
$TableField[1][0]="admin_log";
$TableField[1][1]="'$_POST[newUserName]'";
}
$SQLwhere="admin_log='$UserName'";
$Result=update_query($link,$TableName,$TableField,$SQLwhere);
if($Result==-1)	$InnerMessage="Username and password was Successfully Changed.";
}				
}
?>
<form method="post" name="Add" >
<input type="hidden"  name="Action" value="<?php echo $Action?>">
<table border="0"width="100%" cellpadding="0" cellspacing="0">
<tr>
	  <TD  class="tit" align="center"><br />Change Administrator Password</TD>
			</tr>
			<tr><td>&nbsp;</td></tr>
			
				<tr>
					<td >
						<table  width="70%" cellpadding="1" cellspacing="1" align="center">
							<tr>
								<td width="30%" height="26" class="title" >Old UserName</td>																							
								<td ><input  class="input1" name="UserName"   type="text"  style="width:150" value=""></td>
							</tr>
							<tr>
								<td width="30%" height="26" class="title" >New UserName</td>																							
								<td ><input  class="input1" name="newUserName"   type="text"  style="width:150" value=""></td>
							</tr>
							<tr>
								<td class="title" >New Password</td>															
								<td width="60%"><input class="input1"  type="password" name="Password"  style="width:150"  ></td>
							</tr>
							<tr>
								<td class="title" >Confirm Password</td>															
								<td width="60%"><input class="input1"  type="password" name="RPassword"  style="width:150"  ></td>
							</tr>							
						</table>
					</td>
				</tr>
	<tr>
		<td colspan="4" height="50" align="center" valign="middle">
		<input class="button" type="button" value="Save" style="width:100" onClick="Add.Action.value='Update';Preparesubmit();">
        <input name="reset" type="reset" class="button" style="width:100"  value="reset" > 
      </td>
	</tr>	
	<tr>
		<td  colspan="6" align="center" >
			<h3><?php echo $InnerMessage	;?></h3>
		</td>
	</tr>

			</table>
			</form>
			
<script>
function Preparesubmit()
	{
	if(document.Add.Password.value!=Add.RPassword.value)
		{
		alert("your password entries did not match");
		return;
		}
	else
		{
		document.Add.submit();
		}
	}
</script>			