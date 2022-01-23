<?php
$toEmail = "Flashfly15@gmail.com";
$mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
$subject = "Данные клиента";
$content = "Какой-то контент";
mail($toEmail, $subject, $content, $mailHeaders)
?>