<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $subject = "Новая заявка через квиз";
    $message = $_POST['form_message'];
    $to = "kreativedreamz1@gmail.com";
    mail($to,$subject,$message);
}
?>