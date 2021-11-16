<?php
		$toEmail = "Flashfly15@gmail.com";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
    mail($toEmail, $_POST["subject"], $_POST["content"], $mailHeaders)
?>