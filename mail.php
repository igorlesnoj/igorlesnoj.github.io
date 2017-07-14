<?php

$to = 'mail@site.local';
$subject = 'Заявка на коммерческое предложение с сайта ЭнергоСпецСтрой';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$message = "<p><b>Имя отправителя:</b> " . $name . "</p>";
$message .= "<p><b>Телефон:</b> " . $phone . "</p>";
$message .= "<p><b>E-mail:</b> " . $email . "</p>";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: ' . $name . "\r\n";

mail($to, $subject, $message, $headers);

?>