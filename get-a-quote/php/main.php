<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']); 
$urlsite = trim($_POST['url-site']); 
$scriptw = trim($_POST['scriptw']); 
$money = htmlspecialchars($_POST['money']);
$time = htmlspecialchars($_POST['time']);
$liked = '';
if (!empty($_POST["hobbies"]) && is_array($_POST["hobbies"]))
{
    $liked = implode(" , ", $_POST["hobbies"]);
}
$voice = htmlspecialchars($_POST["voice"]);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$comment = htmlspecialchars($_POST["comment"]);
$subscribe = $_POST['agreement'];
if ($subscribe != 'Subscribe to our email newsletter')
{
    $subscribe = '';
}




$error = '';

if(!$name)
{
$error .= 'Please enter your name <br />';
}


if(!$error)
{

$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="New request from Video Configurator - Beemloop.com " .date("d.m.Y h:i:s");
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
$message1 ="
<b>Name:</b> ".$name."
<br><br>
<b>E-mail:</b> ".$email."
<br><br>
<b>Website:</b> ".$urlsite."
<br><br>
<b>Budget:</b> ".$money."
<br><br>
<b>Duration:</b> ".$time."
<br><br>
<b>Do you need scriptwriting services?</b> ".$scriptw."
<br><br>
<b>Videos that you like the best: -</b> ".$liked."
<br><br>
<b>Voice:</b> ".$voice."
<br><br>
<b>Message:</b> ".$comment."
<br><br><br>
<b>".$subscribe."</b>
";




$header = "Content-Type: text/html; charset=utf-8\n";
$header .= "From: New request Video Configurator <beemloop@gmail.com>\n\n";
$mail = mail("talli@beemloop.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));
// beemloopstudio $mail = mail("itworkbohdan@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));
if($mail)
{
        if ($mail) { // якщо отправило то виводимо  success
        $arr = array("response"=>"ok");
        echo json_encode($arr);
        }

        if ($mail) {

        $subject2 ="Automatic reply from Video Configurator - Beemloop.com";
        $message2 ="
        Hi, ".$name.".
        <br><br> You liked this style of video:
        <br> ".$liked.".
        <br><br> Your budget:
        <br> ".$money.".
        <br><br> Video duration:
        <br> ".$time.".
        <br><br> Voice that you like:
        <br> ".$voice.". <a href='https://beemloop.com/voiceoverartists.html'>All Voice artists </a> .
        <br><br>Thank you for choosing Beemloop. We have received your message and we'll get back to you within 24 hours.
        <br> Best regards,
        <br> Dima Buriachenko
        ";
        $header2 = "Content-Type: text/html; charset=utf-8\n";
        $header2 .= "From: Dima Buriachenko <info@beemloop.com>\n\n";
        $mail2 = mail($email, $subject2, iconv ('utf-8', 'windows-1251', $message2), iconv ('utf-8', 'windows-1251', $header2));
        }
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>

