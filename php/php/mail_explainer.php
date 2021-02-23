<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$page = $_POST['page'];
$seconds = $_POST['seconds'];     //
$script = $_POST['script'];     //
$script_later = $_POST['script_later'];     //
$voiceover = $_POST['voiceover'];     //
$voiceover_later = $_POST['voiceover_later'];     //
$link_1 = $_POST['link_1'];     //
$link_2 = $_POST['link_2'];     //
$link_3 = $_POST['link_3'];     //
$date = $_POST['date'];     //
$total = $_POST['total'];     //
$name = $_POST['name'];     //
$email = $_POST['email'];     //
$company = $_POST['company'];     //
$company_website = $_POST['company_website'];     //
$massage = $_POST['massage'];     //
$if_faster = $_POST['if_faster'];     //
$choose_voice = $_POST['choose_voice'];
$radio = $_POST['radio-grp'];



//Script
// $script_correct = '';
// $script_price = 0;
// if (isset($_POST['script'])) {
//     $script_price = (($seconds / 30)*25);
//     if (isset($_POST['script_later'])) {
//         $script_correct = 'I will provide script later';
//     }
//     else {
//         $script_correct = 'I attach script';
//     }
// }
// else {
//     $script_correct = 'Write a script for me';
// }

//Voiceover
// $voiceover_correct = '';
// $voiceover_price = 0;
if (isset($_POST['voiceover'])) {
    // $voiceover_price = (($seconds / 30)*25);
    if (isset($_POST['voiceover_later'])) {
        $voiceover_correct = 'I will provide voiceover later';
    }
    else {
        $voiceover_correct = 'I attach voiceover';
    }
}
else {
    $voiceover_correct = 'Record a voiceover for me, voiceover artist:  ' .$choose_voice;
}


$seconds  == 30 ? $seconds_price = 399 : ($seconds  == 60 ? $seconds_price = 699 : ($seconds  == 90 ? $seconds_price = 999 : ($seconds == 120 ? $seconds_price = 1299 : ($seconds  == 150 ? $seconds_price = 1599 : ($seconds  == 180 ? $seconds_price = 1899 : ($seconds  == 210 ? $seconds_price = 2099 : ($seconds  == 240 ? $seconds_price = 2299 : $seconds_price = 2499)))))));

//deadline
$deadline_correct = '';
$pday = 0;
$coeff;
if (isset($_POST['if_faster'])) {
    $deadline_correct = 'I need it faster - ' .$date;
    $coeff = 1.28;
}
else {
    if ($seconds == 30) {
        $pday = 5;
    }
    else {
    $pday = round($seconds / 9);
    }
    $deadline_correct = 'estimated delivery:  ' .date('d-m-Y', strtotime($Date. ' +'.$pday.' day'));
    $coeff = !null;    
}



//total
$total_correct = ($seconds_price - $script_price - $voiceover_price) * $coeff;



//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.adm.tools';                                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'orders@ambermove.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'YDT05Puc20bt'; // Ваш пароль от почты с которой будут отправляться письма
//  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('orders@ambermove.com'); // от кого будет уходить письмо?
$mail->addAddress('talli@beemloop.com');     // Кому будет уходить письмо!
//$mail->addAddress('info@ambermove.com');               // Name is optional
// $mail->addReplyTo('mikhail@abmermove.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
// $mail->addAttachment($_FILES['upload_script']['tmp_name'], $_FILES['upload_script']['name']);    // Optional name
$mail->addAttachment($_FILES['upload_voiceover']['tmp_name'], $_FILES['upload_voiceover']['name']);    // Optional name
$mail->addAttachment($_FILES['upload_logo']['tmp_name'], $_FILES['upload_logo']['name']);    // Optional name
$mail->addAttachment($_FILES['upload_file_1']['tmp_name'], $_FILES['upload_file_1']['name']);    // Optional name
$mail->addAttachment($_FILES['upload_file_2']['tmp_name'], $_FILES['upload_file_2']['name']);    // Optional name
$mail->addAttachment($_FILES['upload_file_3']['tmp_name'], $_FILES['upload_file_3']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->FromName = "New request - Beemloop.com";
$mail->Subject = 'Calculator - Explainer video';
$mail->Body    = '<b>Name:</b> ' .$name . '<br><b>E-mail:</b> ' .$email. '<br><b>Company:</b> ' .$company. '<br><b>Company website:</b> ' .$company_website. '<br><br><b>Video:</b> Explainer video <br><b>Running time:</b> ' .$seconds. ' seconds <br><b>Video style price:</b>' .$radio. '$ <br><b>Voiceover option:</b> ' .$voiceover_correct. '<br><b>Reference video:</b> <br> Link: ' .$link_1. '<br>Link: ' .$link_2. '<br>Link: ' .$link_3. '<br><br><b>Total: </b> $' .$total_correct. '<br><b>Deadline:</b> ' .$deadline_correct. '<br><b>Message:</b> ' .$massage;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error ';
} else {
    header('location: ../thank-you.html');
}
$autoemail = new PHPMailer(); 
$autoemail->From = "info@beemloop.com";
$autoemail->FromName = "Beemloop Team";
$autoemail->AddAddress($_POST['email']); 
$autoemail->isHTML(true); 
$autoemail->Subject = "Automatic reply from Beemloop";
$autoemail->Body = "Hi, <br> Thank you for filling our quote form! We will get back to you with an exact quote in 24 hours. <br>Best regards, <br> Beemloop team";
$autoemail->Send(); 
?>