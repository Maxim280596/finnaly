<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$page = $_POST['page'];
$name = $_POST['client_name'];     //
$email = $_POST['cleint_email'];     //
$message = $_POST['client_message'];     //
$validation = $_POST['validation'];
$profile_viewer_uid = $_COOKIE['profile_viewer_uid'];
$validation_profile_viewer_uid = $name.$email.'@nti_sp@m';


// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.adm.tools';                                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'orders@beemloop.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '4Ho0Dce44UjT'; // Ваш пароль от почты с которой будут отправляться письма
//  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('orders@beemloop.com'); // от кого будет уходить письмо?
// $mail->addAddress('info@beemloop.com');     // Кому будет уходить письмо
 $mail->addAddress('talli@beemloop.com');     // Кому будет уходить письмо
//$mail->addAddress('itworkbohdan@gmail.com');                 // Name is optional
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->addAttachment('/var/tmp/file.tar.gz');        
$mail->addAttachment('/tmp/image.jpg', 'new.jpg');  
  for ($ct = 0; $ct < count($_FILES['file2']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['file2']['name'][$ct]));
        $filename = $_FILES['file2']['name'][$ct];
        if (move_uploaded_file($_FILES['file2']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }


$mail->isHTML(true);                                  // Set email format to HTML

$mail->FromName = "New request - Beemloop.com!!!";
$mail->Subject = 'Medium Business';
$mail->Body    = '<b>60 sec Explainer Video:<br><br>Name:</b> ' .$name . '<br><b>E-mail:</b> ' .$email. '<br><b>Message:</b> ' .$message;
$mail->AltBody = '';

if($validation === '' &&  $profile_viewer_uid === $validation_profile_viewer_uid) {
    if (!$mail->send()) {
        echo 'Error ';
    } else {
        setcookie("profile_viewer_uid", null, -1, '/');
        header('location: ../thank-you.html');
    }

    if ($mail->send()) {
        $autoemail = new PHPMailer();
        $autoemail->From = "info@beemloop.com";
        $autoemail->FromName = "Beemloop Team";
        $autoemail->AddAddress($_POST['cleint_email']);
        $autoemail->isHTML(true);
        $autoemail->Subject = "Automatic reply from Beemloop";
        $autoemail->Body = "Hi,<br>Thank you for choosing Beemloop. We have received your message and we'll get back to you within 24 hours. <br> Best regards, <br> Beemloop Team";
        $autoemail->Send();
    }
}
?>