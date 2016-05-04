<?php

$to      = 'veerendra.reddy@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: umadhar@iss-global.com' . "\r\n" .
    'Reply-To: umadhar@iss-global.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $message, $headers)) echo "GOOD";
else echo "bad";
exit;

if(isset($_POST['submit'])) {

$to = "veerendra@iss-global.com";
$subject = "Form Tutorial";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$message = $_POST['message'];
 
$body = "From: $name_field\n E-Mail: $email_field\n Message:\n $message";
 

if(mail($to, $subject, $body)) {
	echo "Data has been submitted to $to!";
} else 

echo "blarg!";

}
?>
