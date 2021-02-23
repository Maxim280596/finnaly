<?php 

require_once('php/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.adm.tools';                                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'orders@beemloop.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '4Ho0Dce44UjT'; // Ваш пароль от почты с которой будут отправляться письма
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('orders@beemloop.com'); // от кого будет уходить письмо?
$mail->addAddress('glivatsky@gmail.com');     // Кому будет уходить письмо

$filename = 'php/brief.txt';
$text = file_get_contents($filename);
 
$mail->isHTML(true);                              
$form_text = '<div>,<div style="display:inline-block;border:1px solid black"';
for ($i = 0, $j = strlen($text); $i < $j; $i++) {
if (strstr(',',$text[$i])) {
	$form_text = $form_text . '</div><div style="display:inline-block;border:1px solid black">';
} else {
	$form_text = $form_text . $text[$i];
}
}

$mail->FromName = "Brief-Beemloop";
$mail->Subject = 'Brief';
$mail->Body    = $form_text . "</div>";
$mail->AltBody = '';


    if (!$mail->send()) {
       echo 'Error 1 ';
    } else {
        //setcookie("profile_viewer_uid", null, -1, '/');
        //header('location: ../thank-you.html');
		echo 'test4';
    }



?> 