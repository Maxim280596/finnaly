<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
 
//$page = $_POST['page'];
$name_company = $_POST['name_company'];     
$website = $_POST['website'];     
$provide = $_POST['provide'];     
$unique = $_POST['unique'];     
$benefits = $_POST['benefits'];    
$target =$_POST['target'];    
$goal = $_POST['goal'];
$tone = $_POST['tone'];
$palette = $_POST['palette'];
$font = $_POST['font'];
$kind = $_POST['kind'];
$style = $_POST['style'];
$sex = $_POST['sex'];
$associate = $_POST['associate'];
$profile_viewer_uid = $_COOKIE['profile_viewer_uid'];
$validation_profile_viewer_uid = $name.$email.'@nti_sp@m';
$c_f = count($_FILES['file']);
//for($i=0; $i < count($_FILES['file']); $i++)
//foreach($_FILES['file'] as $position => $file)
//{
//$c_f = $c_f . $position;
//if($_FILES['file'][$position]['error'] != "0")
//{ continue; }
//$name=$_FILES['file'][$position]['name'];
//$path=$_FILES['file'][$position]['tmp_name'];
 
//And attach it using attachment method of PHPmailer.
 
//$mail->addattachment($path,$name);
//}

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.adm.tools';                                     // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'orders@beemloop.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '4Ho0Dce44UjT'; // Ваш пароль от почты с которой будут отправляться письма
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров
$mail->setFrom('orders@beemloop.com'); // от кого будет уходить письмо? 
$mail->addAddress('talli@beemloop.com');     // Кому будет уходить письмо talli@beemloop.com

$mail->addAttachment($_FILES['file']['tmp_name'][0], $_FILES['file']['name'][0]); 
$mail->addAttachment($_FILES['file2']['tmp_name'][0], $_FILES['file2']['name'][0]); 
$mail->addAttachment($_FILES['file3']['tmp_name'][0], $_FILES['file3']['name'][0]); 
$mail->addAttachment($_FILES['file4']['tmp_name'][0], $_FILES['file4']['name'][0]);    
$mail->isHTML(true);                              

$mail->FromName = "New brief-Beemloop";
$mail->Subject = 'Brief';
$mail->Body    = '<b>Your company name:</b> ' .$name_company. '<br><b>Your company website:</b> ' .$website. '<br><b>What service or product does your company provide?</b> ' .$provide. '<br><b>What is unique about your company/product?</b> ' .$unique. '<br><b>What are 3 key benefits you would like to highlight in video?</b> ' .$benefits. '<br><b>Who is the target audience?</b> ' .$target. '<br><b>What goal do you want to achieve with this video?</b> ' .$goal. '<br><b>What tone would you like the video to use?</b>' .$tone. '<br><b>Do you have a corporate palette or color preference?</b> ' .$palette. '<br><b>Do you have a corporate font or suggestions regarding the font?</b> ' .$font. '<br><b>What kind of explainer video do you like and why?</b> ' .$kind. '<br><b>What style of characters do you like?</b> ' .$style. '<br><b>Do you prefer male or female voiceover?</b> ' .$sex. '<br><b>What music style does your company associate with?</b> ' .$associate.'<br>---------------------------------<br> <a href="https://beemloop.com/brief/request.php">Request full information</a>';
$mail->AltBody = '';

$filename = 'brief.txt';
//$handler = fopen($filename, 'w+');
$text = $name_company. ',' .$website. ',' .$provide. ',' .$unique. ',' .$benefits. ',' .$target. ',' .$goal. ',' .$tone. ',' .$palette. ',' .$font. ',' .$kind. ',' .$style. ',' .$sex. ',' .$associate. PHP_EOL;
//fwrite($handler, $text);
file_put_contents($filename, $text, FILE_APPEND);
//fclose($handler);

    if (!$mail->send()) {
        echo 'Error ';
    } else {
        setcookie("profile_viewer_uid", null, -1, '/');
        header('location: ../thank-you.html');
    }



?>