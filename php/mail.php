<?php
		$toEmail = "Flashfly15@gmail.com";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userTel"] .">\r\n";
    mail($toEmail, $mailHeaders)
?>