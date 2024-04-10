<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $type = $_POST['form_type'];
    $name = $_POST['form_name'];
    $sale = $_POST['form_sale'];
    $tel = $_POST['form_tel'];
    $to = "kreativedreamz1@gmail.com";

    if(isset($_POST['form_type'])) {
        if($type == "conf") {
            $subject = "Конференция";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        } elseif ($type == "pres") {
            $subject = "Презентация";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        } elseif ($type == "rent") {
            $subject = "Аренда площадки";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        } elseif ($type == "wedd") {
            $subject = "Свадьба";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        } elseif ($type == "dr") {
            $subject = "День рождения";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        } elseif ($type == "corp") {
            $subject = "Корпоратив";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        } else {
            $subject = "Новая заявка";
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nCкидка: " . $sale;
        
        }
        mail($to,$subject,$message);
    } 
}
?>